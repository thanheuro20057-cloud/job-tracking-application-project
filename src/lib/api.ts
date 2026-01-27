// Points to the Node API server; override via NEXT_PUBLIC_API_BASE.
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

export type Application = {
  id: string;
  company: string;
  role: string;
  status: string;
  createdAt: string;
};

export const getApplications = async () => {
  const response = await fetch(`${API_BASE}/api/applications`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to load applications");
  }
  const payload = await response.json();
  return payload.data as Application[];
};

// Fetch a single application by id.
export const getApplicationById = async (id: string) => {
  const response = await fetch(`${API_BASE}/api/applications/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || "Failed to load application");
  }
  const payload = await response.json();
  return payload.data as Application;
};

// Create a new application via the API.
export const createApplication = async (data: {
  company: string;
  role: string;
  status?: string;
  dateApplied?: string;
  nextFollowUp?: string;
  notes?: string;
  jobUrl?: string;
  interviewDate?: string;
  interviewTime?: string;
}) => {
  const response = await fetch(`${API_BASE}/api/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || "Failed to create application");
  }
  const payload = await response.json();
  return payload.data as Application;
};
