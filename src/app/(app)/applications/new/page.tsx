"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createApplication } from "@/lib/api";

export default function AddApplicationPage() {
  const router = useRouter();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [nextFollowUp, setNextFollowUp] = useState("");
  const [notes, setNotes] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Create the application via API, then return to the list.
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setIsSaving(true);
    try {
      await createApplication({
        company,
        role,
        status,
        dateApplied,
        nextFollowUp,
        notes,
        jobUrl,
        interviewDate,
        interviewTime,
      });
      router.push("/applications");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setIsSaving(false);
    }
  };

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
        {/* Form id allows the sidebar button to submit. */}
        <form
          id="add-application-form"
          className="space-y-6 rounded-[26px] border border-border bg-card p-6"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Company
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                placeholder="Nova Tech"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                required
              />
            </label>
            <label className="text-sm font-medium">
              Role
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                placeholder="Frontend Engineer"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                required
              />
            </label>
            <label className="text-sm font-medium">
              Status
              <select
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
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
                value={dateApplied}
                onChange={(event) => setDateApplied(event.target.value)}
              />
            </label>
            <label className="text-sm font-medium">
              Next follow-up
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                type="date"
                value={nextFollowUp}
                onChange={(event) => setNextFollowUp(event.target.value)}
              />
            </label>
          </div>

          <label className="text-sm font-medium">
            Notes
            <textarea
              className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
              rows={4}
              placeholder="What did you discuss? What is next?"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </label>

          <div className="space-y-4 border-t border-border pt-4">
            <h2 className="text-lg font-semibold">Link and interview</h2>
            <label className="text-sm font-medium">
              Job posting URL
              <input
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                placeholder="https://company.com/jobs"
                value={jobUrl}
                onChange={(event) => setJobUrl(event.target.value)}
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium">
                Interview date
                <input
                  className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                  type="date"
                  value={interviewDate}
                  onChange={(event) => setInterviewDate(event.target.value)}
                />
              </label>
              <label className="text-sm font-medium">
                Interview time
                <input
                  className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm"
                  type="time"
                  value={interviewTime}
                  onChange={(event) => setInterviewTime(event.target.value)}
                />
              </label>
            </div>
            <label className="flex items-center gap-3 rounded-2xl border border-border bg-secondary px-4 py-3 text-sm">
              <input type="checkbox" className="h-4 w-4 rounded border-border" />
              <span>
                <span className="block font-semibold">Interview reminder</span>
                <span className="block text-xs text-muted-foreground">
                  Notify me 1 day before the interview.
                </span>
              </span>
            </label>
          </div>

          <div className="space-y-4 border-t border-border pt-4">
            <h2 className="text-lg font-semibold">Documents</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium">
                Resume
                <input
                  className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-2 text-sm"
                  type="file"
                />
              </label>
              <label className="text-sm font-medium">
                Cover letter
                <input
                  className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-2 text-sm"
                  type="file"
                />
              </label>
            </div>
          </div>

          {error ? (
            <div className="rounded-2xl border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
              {error}
            </div>
          ) : null}
        </form>

        <div className="space-y-6 rounded-[26px] border border-border bg-card p-6">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Next steps</h2>
            <div className="rounded-2xl border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
              Add follow-up and interview details on the left to keep your plan in one place.
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>1. Confirm recruiter contact</p>
              <p>2. Prepare interview notes</p>
              <p>3. Upload resume and cover letter</p>
            </div>
          </div>
          <button
            className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(16,20,24,0.2)]"
            type="submit"
            form="add-application-form"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save application"}
          </button>
        </div>
      </section>
    </div>
  );
}
