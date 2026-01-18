export default function AddApplicationPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold font-[var(--font-space-grotesk)]">
          Add application
        </h1>
        <p className="text-sm text-muted-foreground">
          Capture the details while they are fresh.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6 rounded-[26px] border border-border bg-card p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Company
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                placeholder="Nova Tech"
              />
            </label>
            <label className="text-sm font-medium">
              Role
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                placeholder="Frontend Engineer"
              />
            </label>
            <label className="text-sm font-medium">
              Status
              <select className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm">
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
              />
            </label>
          </div>

          <label className="text-sm font-medium">
            Notes
            <textarea
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              rows={4}
              placeholder="What did you discuss? What is next?"
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
              />
            </label>
            <label className="text-sm font-medium">
              Interview date
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="date"
              />
            </label>
            <label className="text-sm font-medium">
              Interview time
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="time"
              />
            </label>
          </div>
          <button className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)]">
            Save application
          </button>
        </div>
      </section>
    </div>
  );
}
