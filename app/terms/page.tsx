import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms under which ${siteConfig.company.name} provides its charter brokerage services.`,
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <article className="section-pad bg-bg pt-40 md:pt-48">
      <div className="mx-auto max-w-[760px] px-5 md:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Legal</div>
        <h1 className="mt-4 font-display text-[clamp(34px,6vw,64px)] font-light leading-[1.05] text-ink">
          Terms of Service
        </h1>
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-ink/75">
          <p>
            These terms govern your use of the {siteConfig.company.name} website and our charter
            brokerage services. By enquiring with us you agree to these terms.
          </p>
          <h2 className="pt-4 font-display text-2xl text-ink">Our role</h2>
          <p>
            {siteConfig.company.name} acts as an independent charter broker, arranging fully crewed
            yacht charters between guests and yacht owners or operators. Each charter is subject to a
            separate charter agreement and the terms of the relevant yacht.
          </p>
          <h2 className="pt-4 font-display text-2xl text-ink">Quotes and bookings</h2>
          <p>
            All quotes are indicative and subject to availability and final confirmation. A charter is
            only confirmed once a charter agreement has been signed and any required deposit received.
          </p>
          <h2 className="pt-4 font-display text-2xl text-ink">Liability</h2>
          <p>
            Information on this website is provided in good faith for general guidance. Yacht
            specifications, itineraries and pricing may change. We are not liable for the acts or
            omissions of yacht owners, operators or crew.
          </p>
          <p className="pt-6 text-sm text-ink/50">
            For questions about these terms, contact{" "}
            <a href={`mailto:${siteConfig.company.email}`} className="text-accent hover:underline">
              {siteConfig.company.email}
            </a>
            . This page is provided for general information and does not constitute legal advice.
          </p>
        </div>
      </div>
    </article>
  );
}
