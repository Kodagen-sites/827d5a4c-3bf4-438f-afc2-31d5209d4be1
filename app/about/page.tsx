import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import { img } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.aboutStory.slice(0, 155),
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ocean Crown"
        title={siteConfig.aboutHeading}
        image={img("section-about")}
      />

      <section className="section-pad bg-bg">
        <div className="mx-auto max-w-[820px] px-5 md:px-10">
          <p className="text-xl leading-relaxed text-ink/80 md:text-2xl md:leading-relaxed">
            {siteConfig.aboutStory}
          </p>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-10">
          <p className="font-display text-[clamp(26px,4vw,46px)] font-light italic leading-[1.25] text-mint">
            “{siteConfig.manifesto}”
          </p>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            What we believe
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {siteConfig.values.map((v) => (
              <div key={v.title} className="border-t border-ink/15 pt-6">
                <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mint/40">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <h2 className="max-w-[16ch] font-display text-[clamp(30px,5vw,56px)] font-light leading-[1.05] text-ink">
            {siteConfig.ctaBlock.heading}
          </h2>
          <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-ink/70">
            {siteConfig.ctaBlock.description}
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex min-h-[48px] items-center rounded-full bg-primary px-8 py-3.5 font-display text-sm text-bg transition-all hover:brightness-110"
          >
            {siteConfig.cta.primary} →
          </Link>
        </div>
      </section>
    </>
  );
}
