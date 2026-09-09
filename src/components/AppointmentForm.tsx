"use client";

import { useState } from "react";
import { company } from "@/lib/site";

type Status = "idle" | "sending" | "sent";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
] as const;

export default function AppointmentForm({
  variant = "appointment",
}: {
  variant?: "appointment" | "message";
}) {
  const [status, setStatus] = useState<Status>("idle");

  // No backend is wired up yet — the submission is composed into an email so
  // enquiries still reach the team. Swap this for an API route when ready.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    const subject =
      variant === "appointment"
        ? "Appointment request — Zenvitaa Exports"
        : "Website enquiry — Zenvitaa Exports";

    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      "",
      `${data.get("note") ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-3">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="sr-only">{f.label}</span>
            <input
              required
              type={f.type}
              name={f.name}
              autoComplete={f.autoComplete}
              placeholder={f.label}
              className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/55 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/15"
            />
          </label>
        ))}
      </div>

      <label className="block">
        <span className="sr-only">Note</span>
        <textarea
          name="note"
          rows={4}
          placeholder="Tell us about the products and volumes you need"
          className="w-full resize-y rounded-lg border border-cream-dark bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/55 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/15"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-8 py-3.5 font-display text-sm tracking-[0.14em] text-white uppercase transition-all hover:bg-gold-600 hover:shadow-[0_10px_30px_rgba(200,160,106,0.4)] disabled:opacity-70"
        >
          {variant === "appointment" ? "Get an Appointment" : "Send Message"}
        </button>

        {status === "sent" ? (
          <p className="text-sm text-ink-soft" role="status">
            Opening your email app — if nothing happens, write to{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-gold-600 underline underline-offset-4"
            >
              {company.email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
