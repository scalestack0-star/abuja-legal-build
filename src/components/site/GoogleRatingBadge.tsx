import { Star } from "lucide-react";
import { firm } from "@/lib/site-data";

export function GoogleRatingBadge() {
  return (
    <div className="inline-flex items-center gap-4 border border-border bg-card px-5 py-4">
      <div className="flex items-center gap-1.5">
        <Star className="size-4 fill-gold text-gold" aria-hidden="true" />
        <span className="font-serif text-xl text-navy">{firm.google.rating}</span>
      </div>
      <div className="border-l border-border pl-4 text-left">
        <p className="text-[0.8125rem] font-medium text-navy">Google Rating</p>
        <p className="text-xs text-muted-foreground">
          {firm.google.reviewCount} Google reviews
        </p>
      </div>
    </div>
  );
}
