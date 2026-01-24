const http = require("http");
const { URL } = require("url");

const PORT = process.env.PORT || 4000;

// In-memory data store for demo purposes.
const applications = [
  {
    id: "1",
    company: "Nova Tech",
    role: "Product Designer",
    status: "Interview",
    createdAt: new Date().toISOString(),
  },
];

const setCors = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

const sendJson = (res, statusCode, payload) => {
  setCors(res);
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
};

const parseBody = (req) =>
  new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1e6) {
        req.destroy();
        reject(new Error("Body too large"));
      }
    });
    req.on("end", () => {
      if (!raw) {
        resolve(null);
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });
  });

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    setCors(res);
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const { pathname } = url;

  if (pathname === "/") {
    setCors(res);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Job Tracker API is running.");
    return;
  }

  if (pathname === "/health") {
    sendJson(res, 200, { status: "ok", uptime: process.uptime() });
    return;
  }

  if (pathname === "/api/applications") {
    if (req.method === "GET") {
      sendJson(res, 200, { data: applications });
      return;
    }

    if (req.method === "POST") {
      try {
        const body = await parseBody(req);
        if (!body || !body.company || !body.role) {
          sendJson(res, 400, { error: "company and role are required" });
          return;
        }

        const newApplication = {
          id: String(applications.length + 1),
          company: body.company,
          role: body.role,
          status: body.status || "Applied",
          createdAt: new Date().toISOString(),
        };
        applications.push(newApplication);
        sendJson(res, 201, { data: newApplication });
      } catch (error) {
        sendJson(res, 400, { error: "Invalid JSON payload" });
      }
      return;
    }

    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  sendJson(res, 404, { error: "Not found" });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on http://localhost:${PORT}`);
});
