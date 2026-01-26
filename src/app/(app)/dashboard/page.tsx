import Link from "next/link";

type ApplicationStatus = "Applied" | "Interview" | "Offer" | "Rejected";

type Application = {
  id: string;
  company: string;
  role: string;
  status: ApplicationStatus;
  date: string;
};

type FollowUp = {
  id: string;
  company: string;
  note: string;
  date: string;
};

type Interview = {
  id: string;
  company: string;
  role: string;
  date: string;
  time: string;
  countdown: string;
};

// Inline icons used by the stat cards.
const statIcons = {
  total: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  interviews: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 9h16" />
    </svg>
  ),
  offers: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  ),
  rejected: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </svg>
  ),
  week: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 12a8 8 0 1 0 8-8" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
};

// Demo data for the dashboard summary cards.
const stats = [
  { label: "Total", value: "42", helper: "Applications", icon: statIcons.total, accent: "bg-secondary text-foreground" },
  { label: "Interviews", value: "9", helper: "In progress", icon: statIcons.interviews, accent: "bg-[#efe2ff] text-[#5f31a4]" },
  { label: "Offers", value: "2", helper: "Received", icon: statIcons.offers, accent: "bg-[#e1f4ea] text-[#1f6b4a]" },
  { label: "Rejected", value: "14", helper: "Declined", icon: statIcons.rejected, accent: "bg-[#fde7e5] text-[#9b2c2c]" },
  { label: "This week", value: "5", helper: "Submitted", icon: statIcons.week, accent: "bg-[#d7e5f7] text-[#1e3a8a]" },
];

const recent: Application[] = [
  { id: "1", company: "Nova Tech", role: "Product Designer", status: "Interview", date: "Mar 18" },
  { id: "2", company: "Atlas Labs", role: "Frontend Engineer", status: "Applied", date: "Mar 15" },
  { id: "3", company: "Brightline", role: "UX Researcher", status: "Offer", date: "Mar 12" },
  { id: "4", company: "Serene AI", role: "Design Lead", status: "Rejected", date: "Mar 10" },
];

const followUps: FollowUp[] = [
  { id: "1", company: "Silver & Co", note: "Send portfolio update", date: "Mar 21" },
  { id: "2", company: "Kite Systems", note: "Ask about next steps", date: "Mar 22" },
];

const interviews: Interview[] = [
  {
    id: "1",
    company: "Atlas Labs",
    role: "Frontend Engineer",
    date: "Mar 23",
    time: "10:30 AM",
    countdown: "In 2 days",
  },
  {
    id: "2",
    company: "Nova Tech",
    role: "Product Designer",
    date: "Mar 25",
    time: "2:00 PM",
    countdown: "In 4 days",
  },
];

const statusStyles: Record<ApplicationStatus, string> = {
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
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Job application tracker
          </p>
          <h1 className="text-3xl font-semibold font-[var(--font-space-grotesk)]">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Overview of your job search progress.
          </p>
        </div>
        <Link
          href="/applications/new"
          className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)]"
        >
          Add application
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[22px] border border-border bg-card p-4 shadow-[0_12px_32px_rgba(16,20,24,0.08)]"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-muted-foreground">
              <span>{stat.label}</span>
              <span className={`flex h-8 w-8 items-center justify-center rounded-full ${stat.accent}`}>
                {stat.icon}
              </span>
            </div>
            <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.helper}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[26px] border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent applications</h2>
            <Link className="text-sm font-medium text-muted-foreground" href="/applications">
              View all
            </Link>
          </div>
          <div className="mt-4 divide-y divide-border/70">
            {recent.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center justify-between gap-4 py-3"
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
                  <Link
                    className="rounded-full border border-border px-3 py-1 text-xs font-semibold"
                    href={`/applications/${item.id}`}
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[26px] border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Upcoming follow-ups</h2>
              <Link className="text-xs font-semibold text-muted-foreground" href="/applications">
                See all
              </Link>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              {followUps.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-secondary px-4 py-3"
                >
                  <div>
                    <p className="font-semibold">{item.company}</p>
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                    <p className="mt-2 text-xs font-medium">{item.date}</p>
                  </div>
                  <button className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                    Mark done
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Upcoming interviews</h2>
            <div className="mt-4 space-y-3 text-sm">
              {interviews.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-border/70 bg-white/80 px-4 py-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-semibold">{item.company}</p>
                    <span className="rounded-full bg-[#efe2ff] px-3 py-1 text-xs font-medium text-[#5f31a4]">
                      {item.countdown}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                  <p className="mt-2 text-xs font-medium">
                    {item.date} - {item.time}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Link
                      className="rounded-full border border-border px-3 py-1 text-xs font-semibold"
                      href={`/applications/${item.id}`}
                    >
                      View
                    </Link>
                    <button className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
