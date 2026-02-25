import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, Muted, Card } from "@/components/ui";

const CANONICAL = "https://zcash.ventures/insights/what-is-a-zcash-otc-desk";

export const metadata: Metadata = {
  title: "What Is a Zcash OTC Desk? | Private ZEC Execution Explained",
  description:
    "A detailed explanation of how Zcash OTC desks execute large or privacy-sensitive ZEC transactions outside public exchanges.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "What Is a Zcash OTC Desk?",
    description:
      "Understanding structured, off-exchange execution for ZEC and when OTC makes sense.",
    images: [{ url: "https://zcash.ventures/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Zcash OTC Desk?",
    description: "How private ZEC execution works outside public order books.",
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
            headline: "What Is a Zcash OTC Desk?",
            description:
              "A clear explanation of OTC execution for ZEC and how it differs from public exchange order books.",
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

      <H1>What Is a Zcash OTC Desk?</H1>
      <Muted className="mt-2">OTC is about structure, not hype.</Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Public order books vs OTC</H2>
          <p className="mt-3 text-sm text-muted">
            Public exchanges expose intent: bids/asks appear in the book, and larger visible orders
            can attract attention. OTC execution coordinates outside that environment: terms, quote
            window, and settlement preference are structured before execution.
          </p>
        </Card>

        <Card>
          <H2>Why ZEC clients consider OTC</H2>
          <p className="mt-3 text-sm text-muted">
            Privacy-sensitive or size-aware execution often benefits from controlled coordination.
            OTC can reduce public signaling and allow staged execution when needed.
          </p>
        </Card>

        <p className="text-xs text-muted">
          Next: <Link className="hover:underline" href="/start">request a quote</Link> ·{" "}
          <Link className="hover:underline" href="/zcash-otc-desk">Zcash OTC Desk</Link>
        </p>
      </div>
    </Container>
  );
}
