import Link from "next/link";
import { Home, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { company, navigation } from "@/lib/site-data";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/licensing-disclosures", label: "Licensing & Disclosures" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            Smart mortgage solutions for homebuyers, investors, and self-employed borrowers.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Navigate</h3>
          <div className="mt-4 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/60 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Connect</h3>
          <div className="mt-4 grid gap-3">
            <a href={company.phoneHref} className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white">
              <Phone className="h-4 w-4 text-gold" /> {company.phoneDisplay}
            </a>
            <a href={company.emailHref} className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white">
              <Mail className="h-4 w-4 text-gold" /> {company.email}
            </a>
            <p className="text-sm text-white/60">Company NMLS #{company.nmls}</p>
            <p className="text-sm text-white/60">{company.individualName} | NMLS #{company.individualNmls}</p>
            <a href={company.nmlsConsumerAccessUrl} className="text-sm font-semibold text-gold transition hover:text-white" target="_blank" rel="noreferrer">
              Verify licensing through NMLS Consumer Access
            </a>
            <p className="flex items-center gap-3 text-sm text-white/60">
              <Home className="h-4 w-4 shrink-0 text-gold" /> Equal Housing Opportunity
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-7">
          <p className="text-xs leading-6 text-white/50">{company.compliance}</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-xs text-white/50">
            <span>(c) {new Date().getFullYear()} Source One Home Loans. All rights reserved.</span>
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
