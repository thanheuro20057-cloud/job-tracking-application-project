import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Applications", href: "/applications" },
  { label: "Analytics", href: "/analytics" },
  { label: "Settings", href: "/settings" },
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-card/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-semibold">
              JT
            </div>
            <span className="text-lg font-semibold font-[var(--font-space-grotesk)]">
              Job Tracker
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <button className="relative rounded-xl border border-border bg-white/70 px-3 py-2 text-xs font-medium">
              Alerts
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-black" />
            </button>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-white/70 px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                JD
              </div>
              <div className="hidden sm:block text-left text-xs">
                <div className="font-semibold">John Doe</div>
                <div className="text-muted-foreground">john@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl gap-6 px-6 py-6">
        <aside className="hidden w-56 shrink-0 flex-col gap-4 rounded-[26px] border border-border bg-card p-4 md:flex">
          <div className="space-y-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <span>Workspace</span>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition hover:bg-secondary"
              >
                <span>{item.label}</span>
                <span className="text-xs text-muted-foreground">02</span>
              </Link>
            ))}
          </nav>
          <div className="rounded-2xl border border-border/70 bg-secondary p-4 text-xs text-muted-foreground">
            Track follow-ups, convert interviews, and plan the next move.
          </div>
        </aside>

        <main className="flex-1 pb-16">{children}</main>
      </div>

      <div className="fixed bottom-4 left-1/2 z-30 flex w-[92%] -translate-x-1/2 justify-between rounded-2xl border border-border bg-card/95 px-5 py-3 text-xs font-semibold shadow-[0_14px_40px_rgba(16,20,24,0.18)] md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-muted-foreground">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
