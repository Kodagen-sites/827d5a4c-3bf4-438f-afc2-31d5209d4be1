import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import { img, serviceImage } from "@/lib/assets";

type Params = { slug: string };

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = siteConfig.services.find((s) => s.slug === slug);
  if (!svc) return {};
  return {
    title: svc.name,
    description: svc.description,
    alternates: { canonical: `/services/${svc.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const svc = siteConfig.services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const others = siteConfig.services.filter((s) => s.slug !== svc.slug).slice(0, 3);
  const heroImage = serviceImage(svc.slug) || img("section-services");

  return (
    <>
      <PageHero
        eyebrow="Charter"
        title={svc.name}
        image={heroImage}
        intro={svc.description}
      />

      <section className="section-pad bg-bg">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-[1.4fr_1fr] md:px-10">
          <div>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] font-light leading-[1.1] text-ink">
              What this charter includes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">{svc.description}</p>
            {svc.highlights ? (
              <ul className="mt-8 space-y-4">
                {svc.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 border-t border-ink/10 pt-4">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-[15px] leading-relaxed text-ink/80">{h}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <aside className="h-fit rounded-2xl border border-ink/10 bg-white p-7 shadow-sm md:sticky md:top-28">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              How it works
            </div>
            <ol className="mt-5 space-y-5">
              {siteConfig.process.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <span className="font-mono text-sm text-accent">0{step.step}</span>
                  <div>
                    <div className="font-display text-lg text-ink">{step.title}</div>
                    <div className="mt-1 text-sm leading-relaxed text-ink/65">
                      {step.description}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 font-display text-sm text-bg transition-all hover:brightness-110"
            >
              {siteConfig.cta.primary} →
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
            Other charters
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group rounded-2xl border border-white/12 p-7 transition-colors hover:border-white/30"
              >
                <h3 className="font-display text-xl">{o.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{o.description}</p>
                <span className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-mint">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
