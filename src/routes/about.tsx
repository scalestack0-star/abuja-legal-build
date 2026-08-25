import { createFileRoute } from "@tanstack/react-router";
import aboutTeam from "@/assets/about-team.jpg";
import abujaArchitecture from "@/assets/abuja-architecture.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTABanner } from "@/components/site/CTABanner";
import { TeamMemberCard } from "@/components/site/TeamMemberCard";
import { principles, teamPlaceholders } from "@/lib/site-data";

const title = "About Our Abuja Law Firm | R. S. KINYA & CO.";
const description =
  "Learn about R. S. KINYA & CO., a law firm in Wuse, Abuja. Our approach, values and commitment to professionalism, confidentiality and client-centered legal service.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An Abuja Law Firm Focused on Sound Legal Counsel"
        description="R. S. KINYA & CO. advises and represents individuals, businesses and organizations in Abuja and across Nigeria, with an emphasis on clarity, discretion and practical outcomes."
      />

      <section aria-labelledby="intro-heading" className="bg-background">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader eyebrow="Introduction" title="Who We Are" />
              <div className="mt-6 space-y-5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  R. S. KINYA &amp; CO. is a firm of legal practitioners and
                  consultants based in Wuse, Abuja. The firm provides legal advice,
                  documentation and representation across a range of civil and
                  commercial matters.
                </p>
                <p>
                  Clients come to the firm at different stages — some before a
                  decision is taken, others once a dispute has already arisen. In
                  either case, the work begins with understanding the facts and the
                  documents, and ends with advice the client can act on.
                </p>
                <p>
                  The firm serves clients in the Federal Capital Territory and,
                  where instructed, in matters arising elsewhere in Nigeria.
                </p>
              </div>
            </div>
            <div>
              <img
                src={aboutTeam}
                alt="Legal professionals reviewing documents at a conference table in Abuja"
                loading="lazy"
                width={1408}
                height={1600}
                className="w-full object-cover shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="bg-ivory">
        <div className="container-page section-y">
          <SectionHeader
            eyebrow="Our Approach"
            title="Understand the Issue, Then Advise on It"
            description="Legal problems are rarely solved by procedure alone. The firm's approach is to establish the position accurately, identify the realistic options and explain the consequences of each."
          />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {[
              {
                title: "Assess",
                body: "Review the facts, the documents and the client's objectives before proposing any course of action.",
              },
              {
                title: "Advise",
                body: "Explain the legal position in plain language, including the risks and the limits of what can be achieved.",
              },
              {
                title: "Act",
                body: "Prepare the documentation, negotiate, or represent the client as the matter requires.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-ivory p-7 lg:p-9">
                <span className="gold-rule" aria-hidden="true" />
                <h3 className="mt-6 text-xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="bg-background">
        <div className="container-page section-y">
          <SectionHeader eyebrow="Our Values" title="The Standards We Work To" />
          <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {principles.map((principle) => (
              <div key={principle.title} className="border-t border-gold/50 pt-6">
                <dt className="text-lg text-navy">{principle.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="client-service-heading" className="surface-navy">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow text-gold">
                <span className="h-px w-6 bg-gold" aria-hidden="true" />
                Client-Centered Service
              </p>
              <h2
                id="client-service-heading"
                className="mt-5 text-[1.75rem] leading-tight text-navy-foreground sm:text-4xl"
              >
                Advice Built Around the Client's Objectives
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-foreground/75">
                No two matters are identical. The firm takes time to understand what
                a client is trying to achieve — commercially, personally or
                organizationally — and shapes its advice accordingly. Clients are
                kept informed of developments and of the reasoning behind each
                recommendation.
              </p>
            </div>
            <div>
              <h2 className="text-[1.75rem] leading-tight text-navy-foreground sm:text-4xl">
                Professionalism &amp; Confidentiality
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-foreground/75">
                Client information is treated as confidential. Every instruction is
                handled with diligence and discretion, and matters are managed with
                attention to detail from first contact through to conclusion.
              </p>
            </div>
          </div>
          <img
            src={abujaArchitecture}
            alt="Modern corporate architecture in Abuja at blue hour"
            loading="lazy"
            width={1600}
            height={1008}
            className="mt-14 w-full object-cover"
          />
        </div>
      </section>

      <section aria-labelledby="team-heading" className="bg-ivory">
        <div className="container-page section-y">
          <SectionHeader
            eyebrow="Our People"
            title="Meet Our Legal Team"
            description="Lawyer profiles will be published here once the firm supplies photographs, titles, practice areas, biographies and professional qualifications. No credentials have been assumed."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamPlaceholders.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Discuss Your Matter With the Firm"
        description="Arrange a consultation to review your circumstances and consider the legal options available to you."
      />
    </>
  );
}
