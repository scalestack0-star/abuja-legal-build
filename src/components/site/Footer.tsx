import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { firm, navigation, practiceAreas, legalPages, disclaimer } from "@/lib/site-data";

export function Footer() {
  const footerNav = navigation.filter((n) => n.label !== "Why Choose Us");

  return (
    <footer className="surface-navy pb-24 lg:pb-0">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <p className="font-serif text-lg tracking-[0.06em] text-navy-foreground">
              R. S. KINYA <span className="text-gold">&amp;</span> CO.
            </p>
            <p className="mt-2 text-[0.625rem] font-medium tracking-[0.22em] text-navy-foreground/60 uppercase">
              {firm.tagline}
            </p>
            <span className="gold-rule mt-6" aria-hidden="true" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              {firm.shortDescription}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-navy-foreground/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Practice areas">
            <h2 className="text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
              Practice Areas
            </h2>
            <ul className="mt-5 space-y-3">
              {practiceAreas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link
                    to="/practice-areas/$slug"
                    params={{ slug: area.slug }}
                    className="text-sm text-navy-foreground/75 transition-colors hover:text-gold"
                  >
                    {area.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <address className="not-italic">
                  {firm.address.line1}
                  <br />
                  Wuse, Abuja, Nigeria
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {firm.phoneHref ? (
                  <a href={firm.phoneHref} className="transition-colors hover:text-gold">
                    {firm.phonePlaceholder}
                  </a>
                ) : (
                  <span>{firm.phonePlaceholder}</span>
                )}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {firm.emailHref ? (
                  <a href={firm.emailHref} className="transition-colors hover:text-gold">
                    {firm.emailPlaceholder}
                  </a>
                ) : (
                  <span>{firm.emailPlaceholder}</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 max-w-3xl border-t border-navy-foreground/10 pt-8 text-xs leading-relaxed text-navy-foreground/55">
          {disclaimer}
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-navy-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-navy-foreground/55">
            © 2026 R. S. KINYA &amp; CO. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalPages.map((page) => (
              <li key={page.to}>
                <Link
                  to={page.to}
                  className="text-xs text-navy-foreground/55 transition-colors hover:text-gold"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
