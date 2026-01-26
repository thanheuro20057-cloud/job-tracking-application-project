// Simple index to document the available auth endpoints.
export default function handler(req, res) {
  res.status(200).json({
    endpoints: ["/api/auth/login", "/api/auth/dashboard"],
  });
}
