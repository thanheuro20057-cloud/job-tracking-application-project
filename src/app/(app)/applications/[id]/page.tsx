const timeline = [
  { title: "Applied on website", date: "Mar 10", note: "Submitted resume and portfolio." },
  { title: "Recruiter screen", date: "Mar 14", note: "Discussed role scope and team." },
  { title: "Panel interview", date: "Mar 20", note: "Design challenge review." },
];

export default function ApplicationDetailsPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Application details
          </p>
          <h1 className="text-3xl font-semibold font-[var(--font-space-grotesk)]">
            Nova Tech · Product Designer
          </h1>
          <p className="text-sm text-muted-foreground">Status: Interview</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-2xl border border-border px-4 py-2 text-sm font-semibold">
            Edit
          </button>
          <button className="rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Add note
          </button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-[26px] border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">Timeline</h2>
          <div className="mt-4 space-y-4">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-white/80 px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{item.title}</p>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-xs text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Next follow-up</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Scheduled for Mar 22 · Send updated portfolio.
            </p>
          </div>
          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Interview details</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Mar 25 · 2:00 PM · Zoom link in calendar invite.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
