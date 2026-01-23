import Link from "next/link";

type ApplicationStatus = "Applied" | "Interview" | "Offer" | "Rejected";

const filters = ["All", "Applied", "Interview", "Offer", "Rejected"];

const applications = [
  {
    id: "1",
    company: "Nova Tech",
    role: "Product Designer",
    status: "Interview" as ApplicationStatus,
    dateApplied: "Mar 18",
    location: "Remote",
    jobUrl: "https://jobs.novatech.com/design",
    interviewDate: "Mar 25",
    nextFollowUp: "Mar 22",
    lastUpdated: "Mar 19",
  },
  {
    id: "2",
    company: "Atlas Labs",
    role: "Frontend Engineer",
    status: "Applied" as ApplicationStatus,
    dateApplied: "Mar 15",
    location: "Austin, TX",
    jobUrl: "",
    interviewDate: "",
    nextFollowUp: "Mar 20",
    lastUpdated: "Mar 16",
  },
  {
    id: "3",
    company: "Brightline",
    role: "UX Researcher",
    status: "Offer" as ApplicationStatus,
    dateApplied: "Mar 12",
    location: "New York, NY",
    jobUrl: "https://brightline.com/careers/ux",
    interviewDate: "Mar 14",
    nextFollowUp: "",
    lastUpdated: "Mar 15",
  },
  {
    id: "4",
    company: "Serene AI",
    role: "Design Lead",
    status: "Rejected" as ApplicationStatus,
    dateApplied: "Mar 10",
    location: "Remote",
    jobUrl: "",
    interviewDate: "",
    nextFollowUp: "",
    lastUpdated: "Mar 11",
  },
  {
    id: "5",
    company: "Kite Systems",
    role: "Product Manager",
    status: "Interview" as ApplicationStatus,
    dateApplied: "Mar 08",
    location: "Seattle, WA",
    jobUrl: "https://kite.com/jobs/pm",
    interviewDate: "Mar 21",
    nextFollowUp: "Mar 18",
    lastUpdated: "Mar 12",
  },
];

const statusStyles: Record<ApplicationStatus, string> = {
  Applied: "bg-secondary text-foreground",
  Interview: "bg-[#efe2ff] text-[#5f31a4]",
  Offer: "bg-[#e1f4ea] text-[#1f6b4a]",
  Rejected: "bg-[#fde7e5] text-[#9b2c2c]",
};

export default function ApplicationsPage() {
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
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-2 text-xs font-semibold ${
                  index === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
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
            />
            <select className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm">
              <option>Status: All</option>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
            <select className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm">
              <option>Sort by date</option>
              <option>Sort by status</option>
              <option>Sort by follow-up</option>
            </select>
          </div>
        </div>

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
          {applications.map((app) => (
            <div
              key={app.id}
              className="grid grid-cols-[1.4fr_1.4fr_0.8fr_0.7fr_0.8fr_0.8fr_0.7fr_0.7fr] items-center gap-3 border-t border-border/70 bg-white/80 px-4 py-3 text-sm"
            >
              <div>
                <p className="font-semibold">{app.company}</p>
                <p className="text-xs text-muted-foreground">{app.location}</p>
              </div>
              <p>{app.role}</p>
              <span className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${statusStyles[app.status]}`}>
                {app.status}
              </span>
              <div className="text-xs text-muted-foreground">
                {app.jobUrl ? (
                  <a className="underline" href={app.jobUrl} target="_blank" rel="noreferrer">
                    Link
                  </a>
                ) : (
                  "N/A"
                )}
              </div>
              <div className="text-xs text-muted-foreground">{app.interviewDate || "N/A"}</div>
              <div className="text-xs text-muted-foreground">{app.nextFollowUp || "N/A"}</div>
              <div className="text-xs text-muted-foreground">{app.lastUpdated}</div>
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
          ))}
        </div>

        <div className="mt-6 space-y-4 md:hidden">
          {applications.map((app) => (
            <div key={app.id} className="rounded-2xl border border-border/70 bg-white/80 p-4 text-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{app.company}</p>
                  <p className="text-xs text-muted-foreground">{app.role}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[app.status]}`}>
                  {app.status}
                </span>
              </div>
              <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                <p>Location: {app.location}</p>
                <p>Interview: {app.interviewDate || "N/A"}</p>
                <p>Follow-up: {app.nextFollowUp || "N/A"}</p>
                <p>Updated: {app.lastUpdated}</p>
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
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <button className="rounded-full border border-border px-3 py-2 font-semibold">Previous</button>
          <span className="rounded-full border border-border bg-secondary px-4 py-2 font-semibold">
            1 of 3
          </span>
          <button className="rounded-full border border-border px-3 py-2 font-semibold">Next</button>
        </div>
      </section>
    </div>
  );
}
