const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

export type Application = {
  id: string;
  company: string;
  role: string;
  status: string;
  createdAt: string;
  dateApplied?: string;
  nextFollowUp?: string;
  notes?: string;
  jobUrl?: string;
  interviewDate?: string;
  interviewTime?: string;
  updatedAt?: string;
};

// Fetch the latest list without caching to keep the UI current.
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

export const createApplication = async (data: {
  company: string;
  role: string;
  status?: string;
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

// Update an existing application by id.
export const updateApplication = async (
  id: string,
  data: Partial<
    Pick<
      Application,
      | "company"
      | "role"
      | "status"
      | "dateApplied"
      | "nextFollowUp"
      | "notes"
      | "jobUrl"
      | "interviewDate"
      | "interviewTime"
    >
  >
) => {
  const response = await fetch(`${API_BASE}/api/applications/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || "Failed to update application");
  }
  const payload = await response.json();
  return payload.data as Application;
};

// Remove an application by id.
export const deleteApplication = async (id: string) => {
  const response = await fetch(`${API_BASE}/api/applications/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || "Failed to delete application");
  }
  const payload = await response.json();
  return payload.data as Application;
};
