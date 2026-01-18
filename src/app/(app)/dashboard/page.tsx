const stats = [
  { label: "Total applications", value: "42" },
  { label: "Interviews", value: "9" },
  { label: "Offers", value: "2" },
  { label: "Rejected", value: "14" },
  { label: "This week", value: "5" },
];

const recent = [
  { company: "Nova Tech", role: "Product Designer", status: "Interview", date: "Mar 18" },
  { company: "Atlas Labs", role: "Frontend Engineer", status: "Applied", date: "Mar 15" },
  { company: "Brightline", role: "UX Researcher", status: "Offer", date: "Mar 12" },
  { company: "Serene AI", role: "Design Lead", status: "Rejected", date: "Mar 10" },
];

const followUps = [
  { company: "Silver & Co", note: "Send portfolio update", date: "Mar 21" },
  { company: "Kite Systems", note: "Ask about next steps", date: "Mar 22" },
];

const interviews = [
  { company: "Atlas Labs", role: "Frontend Engineer", date: "Mar 23", time: "10:30 AM" },
  { company: "Nova Tech", role: "Product Designer", date: "Mar 25", time: "2:00 PM" },
];

const statusStyles: Record<string, string> = {
  Applied: "bg-secondary text-foreground",
  Interview: "bg-[#efe2ff] text-[#5f31a4]",
  Offer: "bg-[#e1f4ea] text-[#1f6b4a]",
  Rejected: "bg-[#fde7e5] text-[#9b2c2c]",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold font-[var(--font-space-grotesk)]">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Overview of your job search progress.
          </p>
        </div>
        <button className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)]">
          Add application
        </button>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[22px] border border-border bg-card p-4 shadow-[0_12px_32px_rgba(16,20,24,0.08)]"
          >
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">
              {stat.label}
            </p>
            <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[26px] border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent applications</h2>
            <button className="text-sm font-medium text-muted-foreground">View all</button>
          </div>
          <div className="mt-4 space-y-3">
            {recent.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="flex items-center justify-between rounded-2xl border border-border/70 bg-white/80 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold">{item.company}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Upcoming follow-ups</h2>
            <div className="mt-4 space-y-3 text-sm">
              {followUps.map((item) => (
                <div key={item.company} className="rounded-2xl bg-secondary px-4 py-3">
                  <p className="font-semibold">{item.company}</p>
                  <p className="text-xs text-muted-foreground">{item.note}</p>
                  <p className="mt-2 text-xs font-medium">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Upcoming interviews</h2>
            <div className="mt-4 space-y-3 text-sm">
              {interviews.map((item) => (
                <div key={item.company} className="rounded-2xl border border-border/70 bg-white/80 px-4 py-3">
                  <p className="font-semibold">{item.company}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                  <p className="mt-2 text-xs font-medium">
                    {item.date} · {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
