"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollCanvas from "@/components/ScrollCanvas";
import HeroScrollText, { type HeroChapter } from "@/components/motion/HeroScrollText";
import HeroKeyframes from "./HeroKeyframes";
import { siteConfig } from "@/content/site-config";
import { frames } from "@/lib/frames";
import { img, serviceImage } from "@/lib/assets";

const SNAP_POINTS = [0, 0.12, 0.22, 0.38, 0.58, 0.76, 0.95, 1.0];

const HERO_CHAPTERS = siteConfig.heroChapters as unknown as HeroChapter[];

const SCENE_KEYFRAMES = [
  "scene-1-start",
  "scene-1-end",
  "scene-2-start",
  "scene-2-end",
  "scene-3-start",
  "scene-3-end",
]
  .map((slot) => img(slot))
  .filter(Boolean);

export default function HomeClient() {
  const [progress, setProgress] = useState(0);
  const scrollHint = 1 - Math.min(1, progress / 0.06);
  const hasFrames = frames.frameCount > 0;

  return (
    <>
      {/* ── Cinematic scroll hero — HeroScrollText (3 chapters) over live-generated
          footage. Scrub frames when available; cross-dissolve of the generated
          scene keyframes as the sanctioned fallback when the motion pipeline is
          unavailable. Either way progress is fed live into HeroScrollText. ── */}
      {hasFrames ? (
        <ScrollCanvas
          frameCount={frames.frameCount}
          pattern={frames.pattern}
          padLength={4}
          scrollDistance={siteConfig.scrollHero.scrollDistance}
          snapPoints={SNAP_POINTS}
          loadingLabel={siteConfig.company.name}
          loadingVariant="L4"
          onProgress={setProgress}
        >
          <HeroScrollText
            progress={progress}
            chapters={HERO_CHAPTERS}
            position="bottom-left"
            textColor="#f4fbfa"
            accentColor="#A8D9D0"
            accentTextColor="#0E3A47"
          />
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-white/60"
            style={{ opacity: scrollHint }}
          >
            Scroll ↓
          </div>
        </ScrollCanvas>
      ) : (
        <HeroKeyframes images={SCENE_KEYFRAMES} chapters={HERO_CHAPTERS} />
      )}

      {/* ── Intro ── */}
      <section className="section-pad bg-bg">
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {siteConfig.company.tagline}
          </div>
          <p className="mt-6 font-display text-[clamp(24px,3.6vw,42px)] font-light leading-[1.25] text-ink">
            {siteConfig.company.description}
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-pad bg-mint/30">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Charters & Bespoke Voyages
              </div>
              <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(30px,5vw,56px)] font-light leading-[1.05] text-ink">
                {siteConfig.servicesHeading}
              </h2>
            </div>
            <Link
              href="/services"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siteConfig.services.slice(0, 6).map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={serviceImage(svc.slug)}
                    alt={svc.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ink">{svc.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{svc.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="section-pad bg-ink text-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
            {siteConfig.whyUs.heading}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.whyUs.items.map((item) => (
              <div key={item.title} className="border-t border-white/15 pt-6">
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-pad bg-bg">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            How it works
          </div>
          <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(30px,5vw,56px)] font-light leading-[1.05] text-ink">
            From enquiry to anchor
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {siteConfig.process.map((step) => (
              <div key={step.step} className="border-t border-ink/15 pt-6">
                <div className="font-mono text-sm text-accent">0{step.step}</div>
                <h3 className="mt-3 font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad bg-mint/40">
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-10">
          <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(30px,5vw,60px)] font-light leading-[1.05] text-ink">
            {siteConfig.ctaBlock.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-lg leading-relaxed text-ink/70">
            {siteConfig.ctaBlock.description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center rounded-full bg-primary px-8 py-3.5 font-display text-sm text-bg transition-all hover:brightness-110"
            >
              {siteConfig.cta.primary} →
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[48px] items-center rounded-full border border-ink/20 px-8 py-3.5 font-display text-sm text-ink transition-all hover:bg-ink/5"
            >
              {siteConfig.cta.secondary}
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">
            {siteConfig.trustBar.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
