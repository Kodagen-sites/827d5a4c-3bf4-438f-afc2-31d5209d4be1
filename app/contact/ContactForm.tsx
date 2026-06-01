"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site-config";

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const dates = String(data.get("dates") || "");
    const guests = String(data.get("guests") || "");
    const message = String(data.get("message") || "");

    const subject = `Charter enquiry — ${name || "New guest"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Preferred dates: ${dates}`,
      `Guests: ${guests}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-ink/70">
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-ink/70">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="dates" className="mb-2 block text-sm text-ink/70">
            Preferred dates
          </label>
          <input id="dates" name="dates" className={fieldClass} placeholder="e.g. July 2026" />
        </div>
        <div>
          <label htmlFor="guests" className="mb-2 block text-sm text-ink/70">
            Number of guests
          </label>
          <input id="guests" name="guests" className={fieldClass} placeholder="e.g. 8" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink/70">
          Tell us about your voyage
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={fieldClass}
          placeholder="Destinations, occasion, the experience you have in mind…"
        />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-[48px] items-center rounded-full bg-primary px-8 py-3.5 font-display text-sm text-bg transition-all hover:brightness-110"
      >
        {siteConfig.cta.primary} →
      </button>
      {sent ? (
        <p className="text-sm text-accent">
          Opening your email client — if nothing happens, write to {siteConfig.company.email}.
        </p>
      ) : null}
    </form>
  );
}
