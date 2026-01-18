import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#f2ddc1] blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#d7e5f7] blur-3xl opacity-70" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent" />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-lg items-center px-6 py-12">
        <div className="w-full space-y-8">
          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(16,20,24,0.18)]">
              <span className="text-xl font-semibold tracking-tight font-[var(--font-space-grotesk)]">
                JT
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Job Application Tracker
              </p>
              <h1 className="text-3xl font-semibold font-[var(--font-space-grotesk)]">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Sign in to manage applications, follow-ups, and insights.
              </p>
            </div>
          </div>

          <section className="rounded-[28px] border border-border/80 bg-card p-6 shadow-[0_18px_50px_rgba(16,20,24,0.12)] sm:p-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium">
                  Email address
                  <input
                    className="mt-2 w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>

                <label className="block text-sm font-medium">
                  Password
                  <input
                    className="mt-2 w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
                    type="password"
                    name="password"
                    placeholder="********"
                    autoComplete="current-password"
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-primary accent-primary"
                  />
                  Remember me
                </label>
                <Link
                  className="text-sm font-medium text-foreground hover:underline"
                  href="/password-reset"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                className="flex w-full items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_32px_rgba(16,20,24,0.22)]"
                type="submit"
              >
                Sign in
              </button>

              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                Or continue with
                <span className="h-px flex-1 bg-border" />
              </div>

              <div className="grid gap-3">
                {["Google", "Facebook", "Apple"].map((provider) => (
                  <button
                    key={provider}
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
                  >
                    <span className="h-5 w-5 rounded-full bg-muted" />
                    Continue with {provider}
                  </button>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground">
                New here?{" "}
                <Link className="font-medium text-foreground hover:underline" href="/signup">
                  Create an account
                </Link>
              </p>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
