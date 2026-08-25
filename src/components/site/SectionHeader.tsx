import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as = "h2",
  className,
}: Props) {
  const Heading = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow",
            tone === "light" && "text-gold",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "mt-4 text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-[2.625rem]",
          tone === "light" ? "text-navy-foreground" : "text-navy",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-[1.0625rem]",
            tone === "light" ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
