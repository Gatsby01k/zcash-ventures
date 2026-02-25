import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, Muted, Card } from "@/components/ui";

const CANONICAL = "https://zcash.ventures/insights/otc-vs-exchange";

export const metadata: Metadata = {
  title: "OTC vs Exchange for ZEC | Privacy, Slippage & Execution Risk",
  description:
    "A practical comparison of OTC desks and public exchanges for Zcash (ZEC), focusing on privacy, slippage, and execution quality.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "OTC vs Exchange for ZEC",
    description:
      "When structured OTC execution may be preferable to public order books for privacy and market-impact control.",
    images: [{ url: "https://zcash.ventures/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTC vs Exchange for ZEC",
    description: "Comparing privacy, liquidity depth, and slippage risk.",
    images: ["https://zcash.ventures/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "OTC vs Exchange for ZEC: Structural Differences",
            description:
              "A practical comparison of OTC desks and public exchanges for Zcash (ZEC), focusing on privacy, slippage, and execution quality.",
            datePublished: "2026-02-25",
            dateModified: "2026-02-25",
            author: { "@type": "Organization", name: "Zcash Ventures" },
            publisher: {
              "@type": "Organization",
              name: "Zcash Ventures",
              logo: {
                "@type": "ImageObject",
                url: "https://zcash.ventures/og-image.jpg",
              },
            },
            mainEntityOfPage: CANONICAL,
          }),
        }}
      />

      <H1>OTC vs Exchange: Structural Differences</H1>
      <Muted className="mt-2">Different tools for different objectives.</Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Exchange flow</H2>
          <p className="mt-3 text-sm text-muted">
            Retail exchanges optimize for convenience and standardized execution. Public order books
            and on-exchange flow may be fine for small sizes, but they can be suboptimal for
            discretion and impact control.
          </p>
        </Card>

        <Card>
          <H2>OTC flow</H2>
          <p className="mt-3 text-sm text-muted">
            OTC execution emphasizes coordination and structure: defined quote window, settlement
            preference, and optional tranche planning for size-aware execution.
          </p>
        </Card>

        <p className="text-xs text-muted">
          Next:{" "}
          <Link className="hover:underline" href="/buy-zec-privately">
            buy ZEC privately
          </Link>{" "}
          · <Link className="hover:underline" href="/start">request a quote</Link>
        </p>
      </div>
    </Container>
  );
}
