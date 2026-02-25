import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

const CANONICAL = "https://zcash.ventures/zcash-otc-desk";

export const metadata: Metadata = {
  title: "Zcash OTC Desk | Private ZEC Execution & Structured Settlement",
  description:
    "A Zcash OTC desk coordinates ZEC transactions off-exchange with structured quoting, controlled settlement, and optional tranche execution to reduce public signaling and slippage.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Zcash OTC Desk",
    description:
      "Private ZEC execution outside public order books: structured quoting, settlement coordination, and tranche planning for size-aware execution.",
    images: [{ url: "https://zcash.ventures/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zcash OTC Desk",
    description:
      "Structured off-exchange execution for ZEC with controlled coordination and settlement planning.",
    images: ["https://zcash.ventures/og-image.jpg"],
  },
};

const FAQ = [
  {
    q: "What is a Zcash OTC desk?",
    a: "A Zcash OTC desk coordinates ZEC buy/sell transactions outside public exchange order books. The workflow is structured: size, settlement preference, timing, and a quote window are defined before execution.",
  },
  {
    q: "Why use OTC instead of an exchange?",
    a: "OTC can reduce public signaling of intent, help manage slippage on size-aware orders, and allow defined settlement coordination—especially when public order books are thin or timing constraints matter.",
  },
  {
    q: "How does the quote process work?",
    a: "You share an approximate size range, settlement preference, and constraints. You receive a confidential quote framework (or execution plan) and decide whether to proceed—no obligation.",
  },
  {
    q: "Do you ever ask for seed phrases or wallet access?",
    a: "Never. You should never share seed phrases, private keys, or remote wallet access. Any request for these is fraud.",
  },
  {
    q: "What is tranche execution and when is it used?",
    a: "Tranche execution splits an order into planned segments to manage timing and reduce market impact. It can be used when size is large relative to available liquidity or when execution needs tighter control.",
  },
];

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      {/* Pillar structured data + FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Zcash OTC Desk",
            url: CANONICAL,
            description:
              "A Zcash OTC desk coordinates ZEC transactions off-exchange with structured quoting, controlled settlement, and optional tranche execution.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />

      <H1>Zcash OTC Desk</H1>
      <Muted className="mt-2">
        Private ZEC execution outside public order books — structured, discreet, direct.
      </Muted>

      {/* Top CTA */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/start">Request Quote</ButtonLink>
        <Link
          href="/buy-zec-privately"
          className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
        >
          Buy Zcash (ZEC) privately →
        </Link>
      </div>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>What an OTC desk does (in plain terms)</H2>
          <p className="mt-3 text-sm text-muted">
            OTC (over-the-counter) execution coordinates a transaction outside public order books.
            Instead of placing visible bids/asks, the workflow is structured: size, settlement method,
            timing, and quote window are agreed before execution.
          </p>

          <p className="mt-4 text-sm text-muted">
            If you want the deeper breakdown:{" "}
            <Link className="hover:underline" href="/insights/what-is-a-zcash-otc-desk">
              what is a Zcash OTC desk
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>When OTC typically matters for ZEC</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• You want to avoid public order book signaling</li>
            <li>• Size-sensitive execution where slippage matters</li>
            <li>• Settlement constraints (fiat/crypto rails, timing, structure)</li>
            <li>• Privacy-sensitive coordination and controlled communication</li>
          </ul>

          <p className="mt-4 text-sm text-muted">
            Related:{" "}
            <Link className="hover:underline" href="/insights/otc-vs-exchange">
              OTC vs exchange
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>Execution structure</H2>
          <p className="mt-3 text-sm text-muted">
            For complex orders, execution may be split into tranches. This reduces visible impact and
            gives better control over timing. The goal is to coordinate a clean outcome, not to “spray”
            a large order into a public book.
          </p>

          <p className="mt-4 text-sm text-muted">
            Related:{" "}
            <Link className="hover:underline" href="/insights/market-impact-and-zec">
              market impact and ZEC
            </Link>
            .
          </p>

          <H3 className="mt-6">Security baseline</H3>
          <p className="mt-2 text-sm text-muted">
            We never request seed phrases, private keys, or remote wallet access.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/start">Request Quote</ButtonLink>
            <Link
              href="/security"
              className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
            >
              Security guidelines →
            </Link>
          </div>
        </Card>

        <Card>
          <H2>FAQ</H2>
          <div className="mt-4 space-y-4">
            {FAQ.map((f) => (
              <div key={f.q}>
                <p className="text-sm font-medium">{f.q}</p>
                <p className="mt-1 text-sm text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </Card>

        <p className="text-xs text-muted">
          Read also:{" "}
          <Link href="/buy-zec-privately" className="hover:underline">
            Buy ZEC privately
          </Link>{" "}
          ·{" "}
          <Link href="/insights" className="hover:underline">
            all insights
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
