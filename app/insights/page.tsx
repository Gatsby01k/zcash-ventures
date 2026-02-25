import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, Muted, Card, H2 } from "@/components/ui";
import { insights } from "@/lib/insights";

const CANONICAL = "https://zcash.ventures/insights";

export const metadata: Metadata = {
  title: "Insights | ZEC OTC Execution, Privacy & Market Structure",
  description:
    "Practical notes on ZEC OTC execution, privacy considerations, slippage, and structured brokerage workflows.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Insights",
    description:
      "Structured ZEC execution, OTC vs exchange, privacy models, and slippage control.",
    images: [{ url: "https://zcash.ventures/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights",
    description:
      "ZEC OTC execution, privacy, slippage, and market structure.",
    images: ["https://zcash.ventures/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      {/* Collection + ItemList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Insights",
            url: CANONICAL,
            description:
              "Practical notes on ZEC OTC execution, privacy considerations, and structured brokerage workflows.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: insights.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://zcash.ventures/insights/${post.slug}`,
                name: post.title,
              })),
            },
            publisher: {
              "@type": "Organization",
              name: "Zcash Ventures",
              logo: {
                "@type": "ImageObject",
                url: "https://zcash.ventures/og-image.jpg",
              },
            },
          }),
        }}
      />

      <H1>Insights</H1>
      <Muted className="mt-2">
        Practical notes on structured ZEC execution and privacy-aware workflows.
      </Muted>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {insights.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="block"
          >
            <Card>
              <H2>{post.title}</H2>
              <p className="mt-2 text-sm text-muted">
                {post.description}
              </p>
              <p className="mt-4 text-sm">Read →</p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
