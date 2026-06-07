import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { founder } from "@/lib/site-data";

type FounderImageProps = {
  variant: "home" | "about" | "avatar";
  priority?: boolean;
};

export function FounderImage({ variant, priority = false }: FounderImageProps) {
  const headshotPath = join(process.cwd(), "public", "images", "david-bates-headshot.jpg");
  const hasHeadshot = existsSync(headshotPath) && statSync(headshotPath).size > 0;

  if (!hasHeadshot) {
    const fallbackClass =
      variant === "avatar"
        ? "flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy text-xl font-bold text-gold"
        : "flex aspect-[4/5] w-full items-center justify-center rounded-2xl bg-navy text-6xl font-bold text-gold";

    return (
      <div className={fallbackClass} role="img" aria-label={founder.imageAlt}>
        DB
      </div>
    );
  }

  if (variant === "avatar") {
    return (
      <Image
        src={founder.image}
        alt={founder.imageAlt}
        width={96}
        height={96}
        className="h-24 w-24 shrink-0 rounded-full border-2 border-gold object-cover object-top"
      />
    );
  }

  return (
    <Image
      src={founder.image}
      alt={founder.imageAlt}
      width={variant === "about" ? 820 : 720}
      height={variant === "about" ? 980 : 860}
      className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
      priority={priority}
    />
  );
}
