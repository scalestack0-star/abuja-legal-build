import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { firm } from "@/lib/site-data";

export function GoogleMapSection() {
  return (
    <section aria-labelledby="map-heading" className="bg-ivory">
      <div className="container-page section-y">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              Our Office
            </p>
            <h2 id="map-heading" className="mt-4 text-2xl text-navy sm:text-3xl">
              Visit Us in Wuse, Abuja
            </h2>
            <address className="mt-4 text-sm leading-relaxed text-muted-foreground not-italic">
              {firm.address.line1}
              <br />
              {firm.address.line2}
              <br />
              {firm.address.region}
            </address>
          </div>
          <Button asChild variant="quiet" size="xl">
            <a href={firm.googleDirectionsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin aria-hidden="true" />
              Get Directions
            </a>
          </Button>
        </div>

        <div className="mt-10 overflow-hidden border border-border">
          <iframe
            title={`Map showing the office of ${firm.name} in Wuse, Abuja`}
            src={firm.googleMapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[320px] w-full border-0 sm:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
