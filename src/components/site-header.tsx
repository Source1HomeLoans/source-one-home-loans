import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-md">
      <div className="container-shell flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-white/80 transition hover:text-gold">
              {item.label}
            </Link>
          ))}
          <Link href="/contact#lead-form" className="button-gold">
            Apply Now
          </Link>
        </nav>
        <details className="relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-sm border border-white/20 text-white transition hover:border-gold hover:text-gold">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <nav className="absolute right-0 mt-3 w-64 rounded-sm border border-white/10 bg-navy p-3 shadow-2xl" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-sm px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-gold">
                {item.label}
              </Link>
            ))}
            <Link href="/contact#lead-form" className="button-gold mt-2 w-full">
              Apply Now
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
