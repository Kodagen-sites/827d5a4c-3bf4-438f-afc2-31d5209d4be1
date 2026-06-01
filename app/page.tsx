import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeClient />;
}
