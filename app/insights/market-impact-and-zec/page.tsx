import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, Muted, Card } from "@/components/ui";

const CANONICAL = "https://zcash.ventures/insights/market-impact-and-zec";

export const metadata: Metadata = {
  title: "Market Impact and ZEC | How to Avoid Slippage on Larger Orders",
  description:
    "How slippage happens in thinner order books and how structured execution can reduce market impact for larger ZEC trades.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Market Impact and ZEC: Why Structure Matters",
    description:
      "Understanding slippage, market impact, and why tranche-based execution can help with larger ZEC orders.",
    images: [{ url: "https://zcash.ventures/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Impact and ZEC",
    description: "How to reduce slippage when executing larger ZEC trades.",
    images: ["https://zcash.ventures/og-image.png"],
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
            headline: "Market Impact and ZEC: Why Structure Matters",
            description:
              "How slippage happens in thinner order books and how structured execution can reduce market impact for larger ZEC trades.",
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

      <H1>Market Impact and ZEC: Why Structure Matters</H1>
      <Muted className="mt-2">Large visible intent changes pricing behavior.</Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>What “market impact” means</H2>
          <p className="mt-3 text-sm text-muted">
            When an order is large relative to available liquidity, execution itself can move price.
            Public order books can amplify this by broadcasting intent.
          </p>
        </Card>

        <Card>
          <H2>Why tranches exist</H2>
          <p className="mt-3 text-sm text-muted">
            Splitting execution into tranches can reduce visible pressure and allow timing control.
            It’s not about mystery—it’s about mechanics.
          </p>
        </Card>

        <p className="text-xs text-muted">
          Next: <Link className="hover:underline" href="/fees">quotes & transparency</Link> ·{" "}
          <Link className="hover:underline" href="/start">request a quote</Link>
        </p>
      </div>
    </Container>
  );
}
