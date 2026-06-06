import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Source One Home Loans home">
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-sm bg-gold text-navy shadow-sm">
        <span className="absolute top-2 h-4 w-4 rotate-45 border-l-2 border-t-2 border-navy" />
        <span className="mt-2 text-sm font-bold tracking-tight">S1</span>
      </span>
      <span className="leading-none">
        <span className="block text-lg font-bold tracking-[0.04em] text-white group-hover:text-gold">SOURCE ONE</span>
        <span className="mt-1 block text-[10px] font-semibold tracking-[0.28em] text-gold">HOME LOANS</span>
      </span>
    </Link>
  );
}
