import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { firm } from "@/lib/site-data";

/** Persistent mobile consultation CTA. */
export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <Button asChild variant="gold" size="xl" className="flex-1">
          <Link to="/contact">Book a Consultation</Link>
        </Button>
        {firm.phoneHref ? (
          <Button asChild variant="quiet" size="xl" aria-label="Call the firm">
            <a href={firm.phoneHref}>
              <Phone aria-hidden="true" />
            </a>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
