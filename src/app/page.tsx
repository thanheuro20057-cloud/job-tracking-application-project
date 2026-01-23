import Link from "next/link";

const stats = [
  { label: "Applications tracked", value: "124+" },
  { label: "Avg. response time", value: "9 days" },
  { label: "Interview conversion", value: "21%" },
];

const features = [
  {
    title: "Track every application",
    description:
      "Capture company, role, status, and notes so you always know where you stand.",
  },
  {
    title: "Stay on top of follow-ups",
    description:
      "Set reminders, log outreach, and keep momentum without missing a beat.",
  },
  {
    title: "See progress instantly",
    description:
      "Weekly insights and conversion snapshots reveal what is working.",
  },
];

const steps = [
  {
    title: "Add a role",
    description: "Drop in the company, title, and the date you applied.",
  },
  {
    title: "Update the status",
    description: "Move between Applied, Interview, Offer, or Rejected.",
  },
  {
    title: "Review insights",
    description: "See how many applications turn into interviews each week.",
  },
];

const previewApps = [
  { company: "Atlas Labs", role: "Frontend Engineer", status: "Interview" },
  { company: "Nova Tech", role: "Product Designer", status: "Applied" },
  { company: "Brightline", role: "UX Researcher", status: "Offer" },
];

const statusStyles: Record<string, string> = {
  Applied: "bg-secondary text-foreground",
  Interview: "bg-[#efe2ff] text-[#5f31a4]",
  Offer: "bg-[#e1f4ea] text-[#1f6b4a]",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 right-[-10%] h-72 w-72 rounded-full bg-[#f2ddc1] blur-3xl opacity-70 motion-safe:animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-96 w-96 rounded-full bg-[#d7e5f7] blur-3xl opacity-70 motion-safe:animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute inset-x-0 top-28 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-semibold">
            JT
          </div>
          <span className="text-lg font-semibold font-[var(--font-space-grotesk)]">
            Job Tracker
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#features" className="text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#preview" className="text-muted-foreground hover:text-foreground">
            Preview
          </Link>
          <Link href="#workflow" className="text-muted-foreground hover:text-foreground">
            How it works
          </Link>
        </nav>
        <Link
          href="/login"
          className="rounded-2xl border border-border bg-card px-4 py-2 text-sm font-semibold shadow-[0_10px_25px_rgba(16,20,24,0.12)]"
        >
          Sign in
        </Link>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-16">
        {/* Hero */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Job Application Tracker
            </p>
            <h1 className="text-4xl font-semibold leading-tight font-[var(--font-space-grotesk)] sm:text-5xl">
              Keep every application, follow-up, and offer in one calm workspace.
            </h1>
            <p className="max-w-xl text-base text-muted-foreground">
              Stay organized through every stage of the job hunt with a simple tracker
              that highlights what needs your attention today.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/login"
                className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)]"
              >
                Start tracking
              </Link>
              <Link
                href="#preview"
                className="rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold"
              >
                View preview
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_18px_50px_rgba(16,20,24,0.12)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Today
                </p>
                <h2 className="text-lg font-semibold">Next actions</h2>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
                3 items
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {previewApps.map((item) => (
                <div
                  key={item.company}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-white/80 px-4 py-3 text-sm"
                >
                  <div>
                    <p className="font-semibold">{item.company}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-secondary px-4 py-3 text-xs text-muted-foreground">
              Log follow-ups, update statuses, and keep interviews visible at a glance.
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-[22px] border border-border bg-card p-5 opacity-0 shadow-[0_12px_32px_rgba(16,20,24,0.08)] motion-safe:animate-[fade-up_0.7s_ease-out_forwards]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Features */}
        <section id="features" className="mt-16 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Built for clarity
              </p>
              <h2 className="text-2xl font-semibold font-[var(--font-space-grotesk)]">
                Focus on the roles that matter most.
              </h2>
            </div>
            <Link
              href="/login"
              className="rounded-2xl border border-border bg-card px-4 py-2 text-sm font-semibold"
            >
              Sign in to continue
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-[24px] border border-border bg-card p-6 opacity-0 shadow-[0_16px_36px_rgba(16,20,24,0.1)] motion-safe:animate-[fade-up_0.7s_ease-out_forwards]"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Preview */}
        <section id="preview" className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_18px_50px_rgba(16,20,24,0.12)]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Weekly snapshot</h2>
              <span className="text-xs text-muted-foreground">Mar 11 - Mar 17</span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Applications", value: "8" },
                { label: "Interviews", value: "3" },
                { label: "Offers", value: "1" },
                { label: "Rejections", value: "2" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/70 bg-white/80 px-4 py-3 text-sm"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-secondary px-4 py-3 text-xs text-muted-foreground">
              Track momentum week by week with clear conversion rates.
            </div>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_18px_50px_rgba(16,20,24,0.12)]">
            <h2 className="text-lg font-semibold">Status pipeline</h2>
            <div className="mt-6 space-y-3 text-sm">
              {[
                { label: "Applied", count: "12 roles" },
                { label: "Interview", count: "4 roles" },
                { label: "Offer", count: "1 role" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-border/70 bg-white/80 px-4 py-3"
                >
                  <span className="font-semibold">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="mt-16">
          <div className="rounded-[28px] border border-border bg-card p-8 shadow-[0_20px_48px_rgba(16,20,24,0.1)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  How it works
                </p>
                <h2 className="text-2xl font-semibold font-[var(--font-space-grotesk)]">
                  A simple flow you can keep up with.
                </h2>
              </div>
              <Link
                href="/login"
                className="rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Start now
              </Link>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[22px] border border-border bg-white/80 p-5 opacity-0 motion-safe:animate-[fade-up_0.7s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-semibold">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 rounded-[28px] border border-border bg-card px-8 py-10 text-center shadow-[0_18px_50px_rgba(16,20,24,0.1)]">
          <h2 className="text-2xl font-semibold font-[var(--font-space-grotesk)]">
            Ready to stay ahead of your job search?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Keep your applications organized, your follow-ups timely, and your wins visible.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/login"
              className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Sign in
            </Link>
            <Link
              href="#features"
              className="rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold"
            >
              Explore features
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
