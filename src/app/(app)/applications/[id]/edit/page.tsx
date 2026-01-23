import Link from "next/link";

export default function EditApplicationPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Edit application
          </p>
          <h1 className="text-3xl font-semibold font-[var(--font-space-grotesk)]">
            Update details
          </h1>
          <p className="text-sm text-muted-foreground">
            Keep the status and follow-ups up to date.
          </p>
        </div>
        <Link
          href="/applications"
          className="rounded-2xl border border-border px-4 py-2 text-xs font-semibold"
        >
          Back to list
        </Link>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6 rounded-[26px] border border-border bg-card p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Company
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                defaultValue="Nova Tech"
              />
            </label>
            <label className="text-sm font-medium">
              Role
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                defaultValue="Product Designer"
              />
            </label>
            <label className="text-sm font-medium">
              Status
              <select className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm" defaultValue="Interview">
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </label>
            <label className="text-sm font-medium">
              Date applied
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="date"
                defaultValue="2026-03-10"
              />
            </label>
          </div>

          <label className="text-sm font-medium">
            Notes
            <textarea
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              rows={4}
              defaultValue="Panel interview scheduled. Prepare case study."
            />
          </label>

          <label className="text-sm font-medium">
            Job posting URL
            <input
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              defaultValue="https://jobs.novatech.com/design"
            />
          </label>
        </div>

        <div className="space-y-6 rounded-[26px] border border-border bg-card p-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Next steps</h2>
            <label className="text-sm font-medium">
              Follow-up date
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="date"
                defaultValue="2026-03-22"
              />
            </label>
            <label className="text-sm font-medium">
              Interview date
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="date"
                defaultValue="2026-03-25"
              />
            </label>
            <label className="text-sm font-medium">
              Interview time
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="time"
                defaultValue="14:00"
              />
            </label>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Documents</h2>
            <div className="rounded-2xl border border-border bg-secondary px-4 py-3 text-xs text-muted-foreground">
              Resume.pdf uploaded
            </div>
            <div className="rounded-2xl border border-border bg-secondary px-4 py-3 text-xs text-muted-foreground">
              CoverLetter.pdf uploaded
            </div>
            <button className="rounded-full border border-border px-3 py-2 text-xs font-semibold">
              Manage documents
            </button>
          </div>

          <button className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)]">
            Save changes
          </button>
          <button className="w-full rounded-2xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground">
            Delete application
          </button>
        </div>
      </section>
    </div>
  );
}
