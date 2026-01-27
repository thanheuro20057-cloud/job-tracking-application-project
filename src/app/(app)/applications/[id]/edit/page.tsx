"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getApplicationById } from "@/lib/api";

type FormState = {
  company: string;
  role: string;
  status: string;
  dateApplied: string;
  nextFollowUp: string;
  notes: string;
  jobUrl: string;
  interviewDate: string;
  interviewTime: string;
};

const emptyForm: FormState = {
  company: "",
  role: "",
  status: "Applied",
  dateApplied: "",
  nextFollowUp: "",
  notes: "",
  jobUrl: "",
  interviewDate: "",
  interviewTime: "",
};

export default function EditApplicationPage() {
  const params = useParams() as Record<string, string | string[]> | null;
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id ?? "";
  const [form, setForm] = useState<FormState>(emptyForm);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;
    const load = async () => {
      try {
        const data = await getApplicationById(id);
        if (!isActive) return;
        setForm({
          company: data.company,
          role: data.role,
          status: data.status || "Applied",
          dateApplied: data.dateApplied || data.createdAt.slice(0, 10),
          nextFollowUp: data.nextFollowUp || "",
          notes: data.notes || "",
          jobUrl: data.jobUrl || "",
          interviewDate: data.interviewDate || "",
          interviewTime: data.interviewTime || "",
        });
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

      {error ? (
        <div className="rounded-2xl border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
          {error}
        </div>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6 rounded-[26px] border border-border bg-card p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Company
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                disabled={isLoading}
              />
            </label>
            <label className="text-sm font-medium">
              Role
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                value={form.role}
                onChange={(event) => setForm({ ...form, role: event.target.value })}
                disabled={isLoading}
              />
            </label>
            <label className="text-sm font-medium">
              Status
              <select
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                value={form.status}
                onChange={(event) => setForm({ ...form, status: event.target.value })}
                disabled={isLoading}
              >
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
                value={form.dateApplied}
                onChange={(event) => setForm({ ...form, dateApplied: event.target.value })}
                disabled={isLoading}
              />
            </label>
            <label className="text-sm font-medium">
              Next follow-up
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="date"
                value={form.nextFollowUp}
                onChange={(event) => setForm({ ...form, nextFollowUp: event.target.value })}
                disabled={isLoading}
              />
            </label>
          </div>

          <label className="text-sm font-medium">
            Notes
            <textarea
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              rows={4}
              value={form.notes}
              onChange={(event) => setForm({ ...form, notes: event.target.value })}
              disabled={isLoading}
            />
          </label>

          <label className="text-sm font-medium">
            Job posting URL
            <input
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              value={form.jobUrl}
              onChange={(event) => setForm({ ...form, jobUrl: event.target.value })}
              disabled={isLoading}
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Interview date
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="date"
                value={form.interviewDate}
                onChange={(event) => setForm({ ...form, interviewDate: event.target.value })}
                disabled={isLoading}
              />
            </label>
            <label className="text-sm font-medium">
              Interview time
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="time"
                value={form.interviewTime}
                onChange={(event) => setForm({ ...form, interviewTime: event.target.value })}
                disabled={isLoading}
              />
            </label>
          </div>
        </div>

        <div className="space-y-6 rounded-[26px] border border-border bg-card p-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Next steps</h2>
            <label className="text-sm font-medium">
              Follow-up date
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="date"
                value={form.nextFollowUp}
                onChange={(event) => setForm({ ...form, nextFollowUp: event.target.value })}
                disabled={isLoading}
              />
            </label>
            <label className="text-sm font-medium">
              Interview date
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="date"
                value={form.interviewDate}
                onChange={(event) => setForm({ ...form, interviewDate: event.target.value })}
                disabled={isLoading}
              />
            </label>
            <label className="text-sm font-medium">
              Interview time
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="time"
                value={form.interviewTime}
                onChange={(event) => setForm({ ...form, interviewTime: event.target.value })}
                disabled={isLoading}
              />
            </label>
          </div>

          <button
            className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)]"
            disabled={isLoading}
          >
            Save changes
          </button>
          <button
            className="w-full rounded-2xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground"
            disabled={isLoading}
          >
            Delete application
          </button>
        </div>
      </section>
    </div>
  );
}
