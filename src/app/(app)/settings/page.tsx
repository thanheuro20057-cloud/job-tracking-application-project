export default function SettingsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Account
        </p>
        <h1 className="text-3xl font-semibold font-[var(--font-space-grotesk)]">
          Settings
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your profile, security, and app preferences.
        </p>
      </section>

      {/* Profile */}
      <section className="rounded-[26px] border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Profile</h2>
        <form className="mt-4 space-y-4">
          <label className="block text-sm font-medium">
            Full name
            <input
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              defaultValue="John Doe"
              placeholder="Your full name"
            />
          </label>
          <label className="block text-sm font-medium">
            Email
            <input
              className="mt-2 w-full rounded-2xl border border-border bg-muted px-4 py-3 text-sm text-muted-foreground"
              defaultValue="john@example.com"
              disabled
            />
            <span className="mt-2 block text-xs text-muted-foreground">
              Email cannot be changed.
            </span>
          </label>
          <button className="rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Save profile
          </button>
        </form>
      </section>

      {/* Security */}
      <section className="rounded-[26px] border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Security</h2>
        <form className="mt-4 space-y-4">
          <label className="block text-sm font-medium">
            Current password
            <input
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              type="password"
              placeholder="Enter current password"
            />
          </label>
          <label className="block text-sm font-medium">
            New password
            <input
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              type="password"
              placeholder="At least 8 characters"
            />
          </label>
          <label className="block text-sm font-medium">
            Confirm password
            <input
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              type="password"
              placeholder="Re-enter new password"
            />
          </label>
          <button className="rounded-2xl border border-border px-4 py-2 text-sm font-semibold">
            Update password
          </button>
        </form>
      </section>

      {/* Preferences */}
      <section className="rounded-[26px] border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Preferences</h2>
        <div className="mt-4 space-y-4">
          <label className="block text-sm font-medium">
            Default sort order
            <select className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm">
              <option>Date added (newest first)</option>
              <option>Date added (oldest first)</option>
              <option>Follow-up date</option>
              <option>Company name</option>
            </select>
          </label>

          <label className="flex items-start gap-3 rounded-2xl border border-border bg-secondary px-4 py-3 text-sm">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" defaultChecked />
            <span>
              <span className="block font-semibold">Email notifications</span>
              <span className="block text-xs text-muted-foreground">
                Receive reminders for follow-ups and updates.
              </span>
            </span>
          </label>

          <label className="flex items-start gap-3 rounded-2xl border border-border bg-secondary px-4 py-3 text-sm">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
            <span>
              <span className="block font-semibold">Weekly summary</span>
              <span className="block text-xs text-muted-foreground">
                Get a weekly email recap of your progress.
              </span>
            </span>
          </label>
        </div>
      </section>
    </div>
  );
}
