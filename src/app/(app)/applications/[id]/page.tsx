import Link from "next/link";

const application = {
  id: "1",
  company: "Nova Tech",
  role: "Product Designer",
  status: "Interview",
  dateApplied: "Mar 10, 2026",
  nextFollowUp: "Mar 22, 2026",
  lastUpdated: "Mar 19, 2026",
  jobUrl: "https://jobs.novatech.com/design",
  interviewDate: "Mar 25, 2026",
  interviewTime: "2:00 PM",
  notes: "Panel interview scheduled. Prepare case study and product critique.",
};

const timeline = [
  { title: "Application submitted", detail: "Status changed to Applied", date: "Mar 10" },
  { title: "Recruiter screen", detail: "Met with talent team", date: "Mar 14" },
  { title: "Interview scheduled", detail: "Panel on-site confirmed", date: "Mar 19" },
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
            {application.company}
          </h1>
          <p className="text-sm text-muted-foreground">{application.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
            {application.status}
          </span>
          <Link
            href={`/applications/${application.id}/edit`}
            className="rounded-2xl border border-border px-4 py-2 text-xs font-semibold"
          >
            Edit
          </Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-[26px] border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Job posting</h2>
              <a
                className="text-xs font-semibold underline"
                href={application.jobUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open link
              </a>
            </div>
            <p className="mt-2 text-xs text-muted-foreground break-all">{application.jobUrl}</p>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Interview</h2>
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              <p>Date: {application.interviewDate}</p>
              <p>Time: {application.interviewTime}</p>
              <p>Status: Scheduled</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                Reschedule
              </button>
              <button className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                Add reminder
              </button>
            </div>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Activity timeline</h2>
            <div className="mt-4 space-y-4">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/70 bg-white/80 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-border bg-secondary px-4 py-3 text-xs text-muted-foreground">
                Additional events will appear here.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Application details</h2>
            <dl className="mt-3 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <dt>Date applied</dt>
                <dd className="font-semibold text-foreground">{application.dateApplied}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Next follow-up</dt>
                <dd className="font-semibold text-foreground">{application.nextFollowUp}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Last updated</dt>
                <dd className="font-semibold text-foreground">{application.lastUpdated}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Notes</h2>
            <p className="mt-3 text-sm text-muted-foreground">{application.notes}</p>
            <button className="mt-4 rounded-full border border-border px-3 py-1 text-xs font-semibold">
              Add note
            </button>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Follow-ups</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/70 bg-secondary px-4 py-3">
                Follow-up scheduled for {application.nextFollowUp}.
              </div>
              <button className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                Mark done
              </button>
            </div>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Documents</h2>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-secondary px-4 py-3">
                <span>Resume.pdf</span>
                <button className="text-xs font-semibold underline">View</button>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-secondary px-4 py-3">
                <span>CoverLetter.pdf</span>
                <button className="text-xs font-semibold underline">View</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
