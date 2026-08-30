import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Source One Home Loans home">
      <Image
        src="/branding/logo/source-one-horizontal-dark.svg"
        alt="Source One Home Loans"
        width={variant === "footer" ? 270 : 210}
        height={variant === "footer" ? 90 : 70}
        className={variant === "footer" ? "h-auto w-[250px]" : "h-auto w-[185px] sm:w-[210px]"}
        priority={variant === "header"}
      />
    </Link>
  );
}
