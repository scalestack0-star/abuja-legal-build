import { Link } from "@tanstack/react-router";
import { firm } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label={`${firm.name} — home`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-serif text-[1.0625rem] font-semibold tracking-[0.06em] sm:text-lg",
          tone === "light" ? "text-navy-foreground" : "text-navy",
        )}
      >
        R. S. KINYA <span className="text-gold">&amp;</span> CO.
      </span>
      <span
        className={cn(
          "mt-1 text-[0.5625rem] font-medium tracking-[0.22em] uppercase sm:text-[0.625rem]",
          tone === "light" ? "text-navy-foreground/65" : "text-muted-foreground",
        )}
      >
        Legal Practitioners &amp; Consultants
      </span>
    </Link>
  );
}
