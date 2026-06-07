import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { loanPrograms } from "@/lib/site-data";

type LoanProgram = (typeof loanPrograms)[number];

export function LoanCard({ program }: { program: LoanProgram }) {
  const Icon = program.icon;

  return (
    <article className="group rounded-sm border border-navy/10 bg-white p-7 shadow-[0_14px_40px_rgba(13,27,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_50px_rgba(13,27,42,0.1)]">
      <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/15 text-gold">
        <Icon className="h-6 w-6" strokeWidth={1.7} />
      </span>
      <h3 className="mt-6 text-xl font-semibold text-navy">{program.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{program.description}</p>
      <Link href={`/mortgage-programs/${program.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:text-gold">
        Explore Your Loan Options <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
