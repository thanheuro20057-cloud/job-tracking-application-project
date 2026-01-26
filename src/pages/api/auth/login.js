// API route that redirects to the login UI.
export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Server-side redirect to the login page UI.
  res.writeHead(302, { Location: "/login" });
  res.end();
}
