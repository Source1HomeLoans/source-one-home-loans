import { BadgeCheck, Home, ShieldCheck } from "lucide-react";

const badges = [
  { label: "Veteran-Owned Business", icon: BadgeCheck },
  { label: "Equal Housing Opportunity", icon: Home },
  { label: "NMLS Licensed", icon: ShieldCheck },
];

export function TrustBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <span
            key={badge.label}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] ${
              isDark ? "border-white/15 bg-white/5 text-white/75" : "border-navy/10 bg-white text-navy"
            }`}
          >
            <Icon className="h-4 w-4 text-gold" />
            {badge.label}
          </span>
        );
      })}
    </div>
  );
}
