const weeklyActivity = [
  { label: "Week 1", count: 3 },
  { label: "Week 2", count: 5 },
  { label: "Week 3", count: 2 },
  { label: "Week 4", count: 4 },
];

const totals = {
  applied: 18,
  interviews: 7,
  offers: 2,
};

const conversionToInterview = Math.round((totals.interviews / totals.applied) * 100);
const conversionToOffer = Math.round((totals.offers / totals.interviews) * 100);

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Performance overview
          </p>
          <h1 className="text-3xl font-semibold font-[var(--font-space-grotesk)]">
            Analytics
          </h1>
          <p className="text-sm text-muted-foreground">
            Track conversion, momentum, and weekly activity.
          </p>
        </div>
        <select className="rounded-2xl border border-border bg-white px-4 py-2 text-sm">
          <option>Last 4 weeks</option>
          <option>Last 3 months</option>
          <option>Custom range</option>
        </select>
      </section>

      {/* Conversion funnel */}
      <section className="rounded-[26px] border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Conversion funnel</h2>
        <div className="mt-6 space-y-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Applied</span>
              <span className="font-semibold text-foreground">{totals.applied} (100%)</span>
            </div>
            <div className="h-10 rounded-2xl border border-border bg-secondary" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Interview</span>
              <span className="font-semibold text-foreground">
                {totals.interviews} ({conversionToInterview}%)
              </span>
            </div>
            <div className="h-10 rounded-2xl border border-border bg-[#efe2ff]">
              <div
                className="h-full rounded-2xl bg-[#d4b6ff]"
                style={{ width: `${conversionToInterview}%` }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Offer</span>
              <span className="font-semibold text-foreground">
                {totals.offers} ({conversionToOffer}%)
              </span>
            </div>
            <div className="h-10 rounded-2xl border border-border bg-[#e1f4ea]">
              <div
                className="h-full rounded-2xl bg-[#bfe6d1]"
                style={{ width: `${conversionToOffer}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications per week */}
      <section className="rounded-[26px] border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Applications per week</h2>
        <div className="mt-6 space-y-4">
          {weeklyActivity.map((week) => (
            <div key={week.label} className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{week.label}</span>
                <span>{week.count}</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={`${week.label}-${index}`}
                    className={`h-6 flex-1 rounded-md border ${
                      index < week.count ? "bg-primary border-primary" : "bg-secondary border-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key metrics */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[22px] border border-border bg-card p-5">
          <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">
            Response rate
          </p>
          <p className="mt-3 text-2xl font-semibold">{conversionToInterview}%</p>
          <p className="mt-1 text-xs text-muted-foreground">Applications &rarr; Interview</p>
        </div>
        <div className="rounded-[22px] border border-border bg-card p-5">
          <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">
            Offer rate
          </p>
          <p className="mt-3 text-2xl font-semibold">{conversionToOffer}%</p>
          <p className="mt-1 text-xs text-muted-foreground">Interview &rarr; Offer</p>
        </div>
        <div className="rounded-[22px] border border-border bg-card p-5">
          <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">
            Avg. response time
          </p>
          <p className="mt-3 text-2xl font-semibold">7d</p>
          <p className="mt-1 text-xs text-muted-foreground">Time to hear back</p>
        </div>
      </section>

      {/* Insights */}
      <section className="rounded-[26px] border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Insights</h2>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
          <div className="rounded-2xl border border-border/70 bg-secondary px-4 py-3">
            You submitted {totals.applied} applications this period with steady weekly activity.
          </div>
          <div className="rounded-2xl border border-border/70 bg-secondary px-4 py-3">
            Your response rate is {conversionToInterview}% &rarr; stay consistent with follow-ups.
          </div>
          <div className="rounded-2xl border border-border/70 bg-secondary px-4 py-3">
            Two offers are in play. Consider preparing negotiation notes this week.
          </div>
        </div>
      </section>
    </div>
  );
}





