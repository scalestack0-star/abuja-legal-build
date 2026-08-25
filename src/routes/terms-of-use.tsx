import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

const title = "Terms of Use | R. S. KINYA & CO.";
const description =
  "Terms governing the use of the R. S. KINYA & CO. website, including permitted use, intellectual property and limitations of liability.";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-of-use" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="These terms are a template for the firm's review and adoption before publication."
      />
      <div className="container-page section-y">
        <div className="mx-auto max-w-2xl space-y-8 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-2xl text-navy">Use of this website</h2>
            <p className="mt-4">
              This website is provided for general information about the firm and
              its areas of practice. By using the site you agree to use it only for
              lawful purposes and in a manner that does not restrict the use of the
              site by others.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">No legal advice</h2>
            <p className="mt-4">
              Content on this website is general in nature and does not constitute
              legal advice. You should not act, or refrain from acting, on the basis
              of website content without obtaining advice specific to your
              circumstances.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">Intellectual property</h2>
            <p className="mt-4">
              Text, layout, graphics and other material on this website belong to
              the firm unless otherwise stated, and may not be reproduced without
              permission.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">Third-party links</h2>
            <p className="mt-4">
              Where this website links to third-party resources, such links are
              provided for convenience only. The firm does not control and is not
              responsible for the content of external sites.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-navy">Governing law</h2>
            <p className="mt-4">
              Use of this website is governed by the laws of the Federal Republic of
              Nigeria.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
