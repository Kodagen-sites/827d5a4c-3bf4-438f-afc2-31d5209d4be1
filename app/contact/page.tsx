import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/content/site-config";
import { img } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a private yacht charter quote from Ocean Crown. Share your dates and your dream voyage — we return a curated proposal, discreetly and without obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title={
          <>
            Tell us where the <span className="italic text-mint">horizon</span> goes
          </>
        }
        image={img("section-contact")}
        intro={siteConfig.ctaBlock.description}
      />

      <section className="section-pad bg-bg">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:grid-cols-[1.5fr_1fr] md:px-10">
          <div>
            <h2 className="font-display text-[clamp(26px,4vw,40px)] font-light leading-[1.1] text-ink">
              Start your charter enquiry
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-ink/65">
              No obligation, no pressure. Your charter manager will reply with a curated proposal.
            </p>
            <div className="mt-9">
              <ContactForm />
            </div>
          </div>

          <aside className="h-fit space-y-7 rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Direct
            </div>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-accent" />
                <a href={`mailto:${siteConfig.company.email}`} className="text-ink/80 hover:text-accent">
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-accent" />
                <a href={`tel:${siteConfig.company.phone}`} className="text-ink/80 hover:text-accent">
                  {siteConfig.company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-accent" />
                <span className="text-ink/80">{siteConfig.company.location}</span>
              </li>
            </ul>
            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Cruising grounds
              </div>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {siteConfig.serviceAreas.map((a) => (
                  <li key={a.region}>{a.region}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
