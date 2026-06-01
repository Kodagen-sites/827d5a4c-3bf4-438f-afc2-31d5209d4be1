import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import { img } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Voyages",
  description:
    "A selection of Ocean Crown charters — from Amalfi to Antigua, Monaco to the Grenadines and the Arabian Gulf.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Voyages"
        title={
          <>
            Charters worth <span className="italic text-mint">remembering</span>
          </>
        }
        image={img("section-work")}
        intro="A glimpse of the voyages we have curated — every one designed around a different guest, a different horizon."
      />

      <section className="section-pad bg-bg">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2">
            {siteConfig.work.map((w) => (
              <article key={w.title} className="flex flex-col bg-bg p-8 md:p-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {w.service}
                </div>
                <h2 className="mt-4 font-display text-2xl leading-snug text-ink md:text-3xl">
                  {w.title}
                </h2>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/70">{w.result}</p>
                <div className="mt-6 border-t border-ink/10 pt-4 text-sm text-ink/55">
                  {w.client}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
            In their words
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {siteConfig.testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col border-t border-white/15 pt-6">
                <blockquote className="flex-1 font-display text-lg font-light italic leading-relaxed text-white/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="text-white">{t.name}</div>
                  <div className="text-white/55">{t.detail}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center rounded-full bg-primary px-8 py-3.5 font-display text-sm text-bg transition-all hover:brightness-110"
            >
              {siteConfig.cta.primary} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
