import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Source One Home Loans home">
      <Image
        src="/branding/logo/source-one-approved-horizontal.svg"
        alt="Source One Home Loans"
        width={variant === "footer" ? 300 : 220}
        height={variant === "footer" ? 90 : 66}
        className={variant === "footer" ? "h-auto w-[280px] max-w-full" : "h-auto w-[190px] sm:w-[220px]"}
        priority={variant === "header"}
        unoptimized
      />
    </Link>
  );
}
