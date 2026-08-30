import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { TrustBadges } from "@/components/trust-badges";
import { company, navigation } from "@/lib/site-data";

const legalLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/licensing-disclosures", label: "Licensing & Disclosures" },
  { href: "/texas-disclosure", label: "Texas Disclosure" },
  { href: "/sms-terms", label: "SMS Terms" },
  { href: company.nmlsConsumerAccessUrl, label: "NMLS Consumer Access", external: true },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <Logo variant="footer" />
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
            <a href={company.phoneHref} className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white" data-analytics-event="phone_call_click">
              <Phone className="h-4 w-4 text-gold" /> {company.phoneDisplay}
            </a>
            <a href={company.emailHref} className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white" data-analytics-event="email_click">
              <Mail className="h-4 w-4 text-gold" /> {company.email}
            </a>
            <a href={company.borrowerLoginUrl} className="text-sm font-semibold text-gold transition hover:text-white" target="_blank" rel="noopener noreferrer">
              Borrower Login
            </a>
            <p className="text-sm text-white/60">Company NMLS #{company.nmls}</p>
            <p className="text-sm text-white/60">{company.individualName} | NMLS #{company.individualNmls}</p>
            <a href={company.nmlsConsumerAccessUrl} className="text-sm font-semibold text-gold transition hover:text-white" target="_blank" rel="noopener noreferrer">
              Verify licensing through NMLS Consumer Access
            </a>
            <p className="flex items-center gap-3 text-sm text-white/60">
              <Image
                src="/images/equal-housing-opportunity.png"
                alt="Equal Housing Opportunity"
                width={20}
                height={20}
                className="h-5 w-5 shrink-0 object-contain"
              />
              Equal Housing Opportunity
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-7">
          <div className="mb-5">
            <TrustBadges variant="dark" />
          </div>
          <p className="text-xs leading-6 text-white/50">{company.compliance}</p>
          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Legal</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50">
              <span>&copy; {new Date().getFullYear()} Source One Home Loans. All rights reserved.</span>
              {legalLinks.map((item) => (
                item.external ? (
                  <a key={item.href} href={item.href} className="transition hover:text-gold" target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className="transition hover:text-gold">
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
