import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${isFooter ? "gap-4" : "gap-2.5"}`}
      aria-label="Source One Home Loans home"
    >
      <Image
        src="/branding/logo/source-one-approved-logo-400.png"
        alt=""
        width={isFooter ? 124 : 64}
        height={isFooter ? 124 : 64}
        className={`${isFooter ? "h-[124px] w-[124px]" : "h-16 w-16"} shrink-0 rounded-full object-contain`}
        priority={!isFooter}
      />

      <span className={`border-l border-[#D4A017] ${isFooter ? "py-3 pl-5" : "py-1.5 pl-3"}`}>
        <span className={`block whitespace-nowrap font-serif leading-none ${isFooter ? "text-[30px]" : "text-[18px] sm:text-[21px]"}`}>
          <span className="text-white">SOURCE </span>
          <span className="text-[#D4A017]">ONE</span>
        </span>

        <span className={`mt-1.5 flex items-center ${isFooter ? "gap-2" : "gap-1.5"}`}>
          <span className="h-px flex-1 bg-[#D4A017]" />
          <span className={`whitespace-nowrap font-semibold tracking-[0.3em] text-white ${isFooter ? "text-[11px]" : "text-[7px] sm:text-[8px]"}`}>
            HOME LOANS
          </span>
          <span className="h-px flex-1 bg-[#D4A017]" />
        </span>

        <span className={`mt-2 block whitespace-nowrap font-semibold tracking-[0.12em] text-[#D4A017] ${isFooter ? "text-[7px]" : "text-[4px] sm:text-[5px]"}`}>
          YOUR HOME&nbsp;&nbsp;|&nbsp;&nbsp;YOUR FUTURE&nbsp;&nbsp;|&nbsp;&nbsp;OUR FOCUS
        </span>
      </span>
    </Link>
  );
}
