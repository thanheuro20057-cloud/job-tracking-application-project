"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getApplicationById } from "@/lib/api";

type ApplicationDetail = {
  id: string;
  company: string;
  role: string;
  status: string;
  createdAt: string;
};

type TimelineEvent = {
  title: string;
  detail: string;
  date: string;
};

const fallbackTimeline: TimelineEvent[] = [
  { title: "Application submitted", detail: "Status changed to Applied", date: "Mar 10" },
  { title: "Recruiter screen", detail: "Met with talent team", date: "Mar 14" },
  { title: "Interview scheduled", detail: "Panel on-site confirmed", date: "Mar 19" },
];

export default function ApplicationDetailsPage() {
  const params = useParams() as Record<string, string | string[]> | null;
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id ?? "";
  const [application, setApplication] = useState<ApplicationDetail | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;
    const load = async () => {
      try {
        const data = await getApplicationById(id);
        if (!isActive) return;
        setApplication(data);
      } catch (err) {
        if (isActive) {
          setError(err instanceof Error ? err.message : "Failed to load application");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    if (id) {
      load();
    } else {
      setIsLoading(false);
      setError("Invalid application id");
    }

    return () => {
      isActive = false;
    };
  }, [id]);

  if (isLoading) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
        Loading application...
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
        {error || "Application not found"}
      </div>
    );
  }

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
              <span className="text-xs text-muted-foreground">Link not provided</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Add a job posting URL in edit mode.</p>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Interview</h2>
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              <p>Date: Not scheduled</p>
              <p>Time: Not scheduled</p>
              <p>Status: Pending</p>
            </div>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Activity timeline</h2>
            <div className="mt-4 space-y-4">
              {fallbackTimeline.map((item) => (
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
                <dd className="font-semibold text-foreground">
                  {new Date(application.createdAt).toLocaleDateString()}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Next follow-up</dt>
                <dd className="font-semibold text-foreground">Not scheduled</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Last updated</dt>
                <dd className="font-semibold text-foreground">
                  {new Date(application.createdAt).toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Notes</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Notes will appear here once added.
            </p>
            <button className="mt-4 rounded-full border border-border px-3 py-1 text-xs font-semibold">
              Add note
            </button>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Follow-ups</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/70 bg-secondary px-4 py-3">
                No follow-ups scheduled.
              </div>
              <button className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                Add follow-up
              </button>
            </div>
          </div>

          <div className="rounded-[26px] border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Documents</h2>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/70 bg-secondary px-4 py-3">
                No documents uploaded yet.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
