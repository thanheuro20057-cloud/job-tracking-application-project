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
                {[
                  {
                    name: "Google",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        <path
                          fill="#4285F4"
                          d="M23.5 12.27c0-.81-.07-1.38-.22-1.98H12v3.75h6.63c-.13 1.04-.83 2.6-2.39 3.66l-.02.12 3.57 2.77.25.02c2.26-2.1 3.56-5.19 3.56-8.34z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.79-2.93c-1.01.7-2.37 1.19-4.16 1.19-3.18 0-5.88-2.1-6.85-5l-.11.01-3.69 2.85-.04.11C3.29 21.02 7.36 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.15 14.35c-.26-.78-.41-1.61-.41-2.47s.15-1.69.4-2.47l-.01-.12-3.73-2.9-.12.06A11.97 11.97 0 000 11.88c0 1.95.47 3.78 1.29 5.4l3.86-2.93z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.65c2.26 0 3.78.98 4.65 1.8l3.39-3.3C17.95 1.19 15.24 0 12 0 7.36 0 3.29 2.98 1.29 6.6l3.86 2.93c.97-2.9 3.67-4.88 6.85-4.88z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Facebook",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        <path
                          fill="#1877F2"
                          d="M24 12a12 12 0 10-13.88 11.85v-8.39H7.08V12h3.04V9.36c0-3 1.79-4.66 4.53-4.66 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88V12h3.32l-.53 3.46h-2.79v8.39A12 12 0 0024 12z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Apple",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        <path
                          fill="#111111"
                          d="M16.37 1.46c-.73.05-1.62.49-2.1 1.09-.44.54-.82 1.4-.68 2.2.79.06 1.6-.4 2.07-.99.46-.56.8-1.39.71-2.3z"
                        />
                        <path
                          fill="#111111"
                          d="M20.87 17.12c-.35.8-.77 1.56-1.29 2.26-.72.98-1.3 1.67-2.38 1.67-1.06 0-1.4-.69-2.67-.69-1.25 0-1.64.67-2.66.7-1.05.04-1.85-.74-2.58-1.72-1.43-1.93-2.54-5.44-1.06-7.82.74-1.18 2.06-1.93 3.49-1.95 1.08-.02 2.11.74 2.67.74.55 0 1.79-.91 3.02-.78.51.02 1.96.2 2.9 1.53-.08.05-1.73 1-1.71 2.98.02 2.36 2.08 3.14 2.12 3.15-.01.03-.1.35-.33.73z"
                        />
                      </svg>
                    ),
                  },
                ].map((provider) => (
                  <button
                    key={provider.name}
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                      {provider.icon}
                    </span>
                    Continue with {provider.name}
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
