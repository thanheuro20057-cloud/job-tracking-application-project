"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getApplications, type Application } from "@/lib/api";

type ApplicationRow = Application & {
  dateAppliedLabel: string;
  location: string;
  interviewDateLabel: string;
  nextFollowUpLabel: string;
  lastUpdatedLabel: string;
};

const filters = ["All", "Applied", "Interview", "Offer", "Rejected"];

const statusStyles: Record<string, string> = {
  Applied: "bg-secondary text-foreground",
  Interview: "bg-[#efe2ff] text-[#5f31a4]",
  Offer: "bg-[#e1f4ea] text-[#1f6b4a]",
  Rejected: "bg-[#fde7e5] text-[#9b2c2c]",
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<ApplicationRow[]>([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Load applications once when the page mounts.
  useEffect(() => {
    let isActive = true;
    const load = async () => {
      try {
        const data = await getApplications();
        if (!isActive) return;
        const hydrated = data.map((item) => {
          const created = new Date(item.createdAt);
          const updated = item.updatedAt ? new Date(item.updatedAt) : created;
          return {
            ...item,
            dateAppliedLabel: item.dateApplied || created.toLocaleDateString(),
            location: "Remote",
            interviewDateLabel: item.interviewDate || "N/A",
            nextFollowUpLabel: item.nextFollowUp || "N/A",
            lastUpdatedLabel: updated.toLocaleDateString(),
          };
        });
        setApplications(hydrated);
      } catch (err) {
        if (isActive) {
          setError(err instanceof Error ? err.message : "Failed to load data");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };
    load();
    return () => {
      isActive = false;
    };
  }, []);

  // Client-side filter and sort for the table view.
  const filteredApplications = useMemo(() => {
    const filtered = applications.filter((app) => {
      const matchesSearch = [app.company, app.role]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "All" || app.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    if (sortBy === "status") {
      return [...filtered].sort((a, b) => a.status.localeCompare(b.status));
    }

    return [...filtered].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [applications, searchTerm, sortBy, statusFilter]);

  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold font-[var(--font-space-grotesk)]">
            Applications
          </h1>
          <p className="text-sm text-muted-foreground">
            Track every application, follow-up, and outcome.
          </p>
        </div>
        <Link
          className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)]"
          href="/applications/new"
        >
          New application
        </Link>
      </section>

      <section className="rounded-[26px] border border-border bg-card p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setStatusFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold ${
                  statusFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[2fr_1fr_1fr]">
            <input
              className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              placeholder="Search by company or role"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <select
              className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              {filters.map((filter) => (
                <option key={filter}>{filter}</option>
              ))}
            </select>
            <select
              className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="date">Sort by date</option>
              <option value="status">Sort by status</option>
            </select>
          </div>
        </div>

        {error ? (
          <div className="mt-6 rounded-2xl border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
            {error}
          </div>
        ) : null}

        <div className="mt-6 hidden md:block overflow-hidden rounded-2xl border border-border/70">
          <div className="grid grid-cols-[1.4fr_1.4fr_0.8fr_0.7fr_0.8fr_0.8fr_0.7fr_0.7fr] gap-3 bg-secondary px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <div>Company</div>
            <div>Role</div>
            <div>Status</div>
            <div>URL</div>
            <div>Interview</div>
            <div>Follow-up</div>
            <div>Updated</div>
            <div className="text-right">Actions</div>
          </div>
          {isLoading ? (
            <div className="px-4 py-6 text-sm text-muted-foreground">Loading applications...</div>
          ) : (
            filteredApplications.map((app) => (
              <div
                key={app.id}
                className="grid grid-cols-[1.4fr_1.4fr_0.8fr_0.7fr_0.8fr_0.8fr_0.7fr_0.7fr] items-center gap-3 border-t border-border/70 bg-white/80 px-4 py-3 text-sm"
              >
                <div>
                  <p className="font-semibold">{app.company}</p>
                  <p className="text-xs text-muted-foreground">{app.location}</p>
                </div>
                <p>{app.role}</p>
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyles[app.status] || "bg-secondary text-foreground"
                  }`}
                >
                  {app.status}
                </span>
                <div className="text-xs text-muted-foreground">
                  {app.jobUrl ? "Link" : "N/A"}
                </div>
                <div className="text-xs text-muted-foreground">{app.interviewDateLabel}</div>
                <div className="text-xs text-muted-foreground">{app.nextFollowUpLabel}</div>
                <div className="text-xs text-muted-foreground">{app.lastUpdatedLabel}</div>
                <div className="flex justify-end gap-2 text-xs">
                  <Link className="rounded-full border border-border px-3 py-1 font-semibold" href={`/applications/${app.id}`}>
                    View
                  </Link>
                  <Link
                    className="rounded-full border border-border px-3 py-1 font-semibold"
                    href={`/applications/${app.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 space-y-4 md:hidden">
          {isLoading ? (
            <div className="rounded-2xl border border-border/70 bg-white/80 p-4 text-sm text-muted-foreground">
              Loading applications...
            </div>
          ) : (
            filteredApplications.map((app) => (
              <div key={app.id} className="rounded-2xl border border-border/70 bg-white/80 p-4 text-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{app.company}</p>
                    <p className="text-xs text-muted-foreground">{app.role}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      statusStyles[app.status] || "bg-secondary text-foreground"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
                <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <p>Location: {app.location}</p>
                  <p>Interview: {app.interviewDateLabel}</p>
                  <p>Follow-up: {app.nextFollowUpLabel}</p>
                  <p>Updated: {app.lastUpdatedLabel}</p>
                </div>
                <div className="mt-4 flex gap-2">
                  <Link
                    className="flex-1 rounded-full border border-border px-3 py-2 text-center text-xs font-semibold"
                    href={`/applications/${app.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="flex-1 rounded-full border border-border px-3 py-2 text-center text-xs font-semibold"
                    href={`/applications/${app.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
