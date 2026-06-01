import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-ink text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-display font-bold tracking-[0.15em] uppercase text-lg text-white">
              {siteConfig.company.name}
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              {siteConfig.company.description}
            </p>

            {/* Real brand SVGs via the shared social-icons component (cp'd to
                components/social-icons.tsx). Renders one icon per populated
                siteConfig.socials entry; empties are skipped, unknown → globe.
                NEVER render initials/letters as social icons. */}
            <SocialLinks
              socials={siteConfig.socials}
              className="pt-4 gap-4 text-white/80"
              iconClassName="h-5 w-5"
            />
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {siteConfig.services.slice(0, 5).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/work" className="hover:text-white">Work</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-white">
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.company.phone}`} className="hover:text-white">
                  {siteConfig.company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-primary flex-shrink-0" />
                <span>{siteConfig.company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-white/40 font-mono">
          <div>© {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/70">Privacy</Link>
            <Link href="/terms" className="hover:text-white/70">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
