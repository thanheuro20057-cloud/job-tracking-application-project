// API route that redirects to the dashboard UI.
export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Server-side redirect to the dashboard page UI.
  res.writeHead(302, { Location: "/dashboard" });
  res.end();
}
