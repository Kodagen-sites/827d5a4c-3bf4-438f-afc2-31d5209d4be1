import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.company.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <article className="section-pad bg-bg pt-40 md:pt-48">
      <div className="mx-auto max-w-[760px] px-5 md:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Legal</div>
        <h1 className="mt-4 font-display text-[clamp(34px,6vw,64px)] font-light leading-[1.05] text-ink">
          Privacy Policy
        </h1>
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-ink/75">
          <p>
            {siteConfig.company.name} respects your privacy. This policy explains what information we
            collect when you enquire about or book a charter, and how we use it.
          </p>
          <h2 className="pt-4 font-display text-2xl text-ink">Information we collect</h2>
          <p>
            When you contact us we collect the details you provide — such as your name, email,
            telephone number, preferred dates and the nature of your enquiry — so that we can prepare
            and discuss a charter proposal with you.
          </p>
          <h2 className="pt-4 font-display text-2xl text-ink">How we use it</h2>
          <p>
            We use your information solely to respond to your enquiry, arrange your charter and
            provide ongoing service. We do not sell your personal information to third parties.
          </p>
          <h2 className="pt-4 font-display text-2xl text-ink">Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at any
            time by writing to{" "}
            <a href={`mailto:${siteConfig.company.email}`} className="text-accent hover:underline">
              {siteConfig.company.email}
            </a>
            .
          </p>
          <p className="pt-6 text-sm text-ink/50">
            This page is provided for general information and does not constitute legal advice.
          </p>
        </div>
      </div>
    </article>
  );
}
