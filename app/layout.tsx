import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { siteConfig } from "@/content/site-config";
import { img } from "@/lib/assets";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/motion/ScrollProgress";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const ogImage = img("og-image", siteConfig.seo.defaultOgImage);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s · ${siteConfig.company.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.company.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.seo.twitterHandle,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [ogImage],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.company.name,
  description: siteConfig.company.description,
  url: siteConfig.seo.siteUrl,
  email: siteConfig.company.email,
  telephone: siteConfig.company.phone,
  sameAs: Object.values(siteConfig.socials).filter(Boolean),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.seo.htmlLang} className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ScrollProgress color="#2E7F8C" thickness={2} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
