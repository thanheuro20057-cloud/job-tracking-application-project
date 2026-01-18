const filters = ["All", "Applied", "Interview", "Offer", "Rejected"];

const applications = [
  { company: "Nova Tech", role: "Product Designer", status: "Interview", date: "Mar 18", location: "Remote" },
  { company: "Atlas Labs", role: "Frontend Engineer", status: "Applied", date: "Mar 15", location: "Austin, TX" },
  { company: "Brightline", role: "UX Researcher", status: "Offer", date: "Mar 12", location: "New York, NY" },
  { company: "Serene AI", role: "Design Lead", status: "Rejected", date: "Mar 10", location: "Remote" },
  { company: "Kite Systems", role: "Product Manager", status: "Interview", date: "Mar 08", location: "Seattle, WA" },
];

const statusStyles: Record<string, string> = {
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
        <button className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)]">
          New application
        </button>
      </section>

      <section className="rounded-[26px] border border-border bg-card p-6">
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

        <div className="mt-6 rounded-2xl border border-border/70 bg-white/80 p-4">
          <div className="flex flex-wrap items-center gap-3">
            <input
              className="flex-1 rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              placeholder="Search by company or role"
            />
            <button className="rounded-2xl border border-border px-4 py-3 text-xs font-semibold">
              Sort by date
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {applications.map((app) => (
            <div
              key={`${app.company}-${app.role}`}
              className="grid gap-3 rounded-2xl border border-border/70 bg-white/80 px-4 py-4 text-sm md:grid-cols-[2fr_2fr_1fr_1fr_1fr] md:items-center"
            >
              <div>
                <p className="font-semibold">{app.company}</p>
                <p className="text-xs text-muted-foreground">{app.location}</p>
              </div>
              <p className="text-sm">{app.role}</p>
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${statusStyles[app.status]}`}
              >
                {app.status}
              </span>
              <p className="text-xs text-muted-foreground">{app.date}</p>
              <div className="flex gap-2">
                <button className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                  View
                </button>
                <button className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
