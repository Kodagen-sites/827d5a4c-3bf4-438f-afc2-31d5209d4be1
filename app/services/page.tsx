import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import { img, serviceImage } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Charters & Bespoke Voyages",
  description:
    "Motor yacht, sailing yacht and superyacht charters, corporate events, bespoke itineraries and concierge — fully crewed across the Mediterranean, Caribbean and Dubai.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Charters & Bespoke Voyages"
        title={
          <>
            Every way to <span className="italic text-mint">meet the sea</span>
          </>
        }
        image={img("section-services")}
        intro="From a day aboard a motor yacht to a fortnight on a fully crewed superyacht, every Ocean Crown charter is designed entirely around you."
      />

      <section className="section-pad bg-bg">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {siteConfig.services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={serviceImage(svc.slug)}
                    alt={svc.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <h2 className="font-display text-2xl text-ink md:text-3xl">{svc.name}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">
                    {svc.description}
                  </p>
                  {svc.highlights ? (
                    <ul className="mt-5 space-y-2">
                      {svc.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    Explore charter →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
            Where we sail
          </div>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(32px,5vw,60px)] font-light leading-[1.05]">
            Three seas, one standard
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {siteConfig.serviceAreas.map((area) => (
              <div key={area.region} className="border-t border-white/15 pt-6">
                <h3 className="font-display text-2xl">{area.region}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">{area.detail}</p>
              </div>
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
