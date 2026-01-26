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
    dateApplied: new Date().toISOString().slice(0, 10),
    nextFollowUp: "",
    notes: "",
    jobUrl: "",
    interviewDate: "",
    interviewTime: "",
    updatedAt: new Date().toISOString(),
  },
];

const setCors = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
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

<<<<<<< Updated upstream
=======
// Collect and parse JSON request bodies (POST/PATCH).
>>>>>>> Stashed changes
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
          id: String(Date.now()),
          company: body.company,
          role: body.role,
          status: body.status || "Applied",
          createdAt: new Date().toISOString(),
          dateApplied: body.dateApplied || "",
          nextFollowUp: body.nextFollowUp || "",
          notes: body.notes || "",
          jobUrl: body.jobUrl || "",
          interviewDate: body.interviewDate || "",
          interviewTime: body.interviewTime || "",
          updatedAt: new Date().toISOString(),
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

  if (pathname.startsWith("/api/applications/")) {
    const id = pathname.split("/").pop();
    const application = applications.find((item) => item.id === id);

    if (req.method === "GET") {
      if (!application) {
        sendJson(res, 404, { error: "Application not found" });
        return;
      }
      sendJson(res, 200, { data: application });
      return;
    }

    if (req.method === "PATCH") {
      if (!application) {
        sendJson(res, 404, { error: "Application not found" });
        return;
      }
      try {
        const body = await parseBody(req);
        if (!body) {
          sendJson(res, 400, { error: "Request body required" });
          return;
        }

        Object.assign(application, {
          company: body.company ?? application.company,
          role: body.role ?? application.role,
          status: body.status ?? application.status,
          dateApplied: body.dateApplied ?? application.dateApplied,
          nextFollowUp: body.nextFollowUp ?? application.nextFollowUp,
          notes: body.notes ?? application.notes,
          jobUrl: body.jobUrl ?? application.jobUrl,
          interviewDate: body.interviewDate ?? application.interviewDate,
          interviewTime: body.interviewTime ?? application.interviewTime,
          updatedAt: new Date().toISOString(),
        });

        sendJson(res, 200, { data: application });
      } catch (error) {
        sendJson(res, 400, { error: "Invalid JSON payload" });
      }
      return;
    }

    if (req.method === "DELETE") {
      const index = applications.findIndex((item) => item.id === id);
      if (index == -1) {
        sendJson(res, 404, { error: "Application not found" });
        return;
      }
      const [removed] = applications.splice(index, 1);
      sendJson(res, 200, { data: removed });
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
