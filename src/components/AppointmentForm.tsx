"use client";

import { useState } from "react";
import { company } from "@/lib/site";

type Status = "idle" | "sending" | "sent";
type Variant = "appointment" | "message" | "request";

const fieldClass =
  "w-full rounded-md border border-transparent bg-black/[0.045] px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/15";

const labelClass = "mb-2 block font-display text-[15px] font-semibold text-ink";

const buttonLabel: Record<Variant, string> = {
  appointment: "Get an Appointment",
  message: "Send Message",
  request: "Request",
};

const subjects: Record<Variant, string> = {
  appointment: "Appointment request — Zenvitaa Exports",
  message: "Website enquiry — Zenvitaa Exports",
  request: "Product information request — Zenvitaa Exports",
};

export default function AppointmentForm({
  variant = "appointment",
}: {
  variant?: Variant;
}) {
  const [status, setStatus] = useState<Status>("idle");

  // Only the appointment form asks for a phone number or pairs fields into
  // columns; the other two stack full width.
  const isAppointment = variant === "appointment";
  const isMessage = variant === "message";
  const freeTextLabel = isMessage ? "Message" : "Note";
  const freeTextName = isMessage ? "message" : "note";

  // No backend yet — the submission is composed into a WhatsApp message to the
  // company number so enquiries reach the team with their content intact.
  // Swap this for an API route when one exists.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    const text = [
      subjects[variant],
      "",
      `Name: ${data.get("name") ?? ""}`,
      ...(isAppointment ? [`Phone: ${data.get("phone") ?? ""}`] : []),
      `Email: ${data.get("email") ?? ""}`,
      "",
      `${data.get(freeTextName) ?? ""}`,
    ].join("\n");

    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={isAppointment ? "grid gap-5 sm:grid-cols-2" : ""}>
        <div>
          <label htmlFor={`${variant}-name`} className={labelClass}>
            Name
          </label>
          <input
            required
            id={`${variant}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Name"
            className={fieldClass}
          />
        </div>

        {isAppointment ? (
          <div>
            <label htmlFor={`${variant}-phone`} className={labelClass}>
              Phone
            </label>
            <input
              required
              id={`${variant}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone"
              className={fieldClass}
            />
          </div>
        ) : null}
      </div>

      <div className={isAppointment ? "grid gap-5 sm:grid-cols-2" : ""}>
        <div>
          <label htmlFor={`${variant}-email`} className={labelClass}>
            Email
          </label>
          <input
            required
            id={`${variant}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${variant}-free`} className={labelClass}>
          {freeTextLabel}
        </label>
        <textarea
          id={`${variant}-free`}
          name={freeTextName}
          rows={4}
          placeholder={freeTextLabel}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div
        className={
          variant === "request" ? "pt-1" : "flex flex-wrap items-center gap-4 pt-1"
        }
      >
        <button
          type="submit"
          disabled={status === "sending"}
          className={`rounded-md bg-gold-500 py-4 font-display text-[15px] font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-[0_10px_30px_rgba(200,160,106,0.4)] disabled:opacity-70 ${
            variant === "request" ? "w-full px-8" : "px-8"
          }`}
        >
          {buttonLabel[variant]}
        </button>

        {status === "sent" ? (
          <p className="text-sm text-ink-soft" role="status">
            Opening WhatsApp — if nothing happens, message us on{" "}
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-600 underline underline-offset-4"
            >
              {company.phones[0]}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
