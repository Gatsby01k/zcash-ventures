import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

const CANONICAL =
  "https://zcash.ventures/insights/how-crypto-otc-execution-works";

export const metadata: Metadata = {
  title: "How Crypto OTC Execution Works | Quote, Settlement & Tranches",
  description:
    "A practical guide to OTC execution: how quotes work, what a quote window is, settlement coordination, and why tranche structure is used for size-aware trades.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "How Crypto OTC Execution Works",
    description:
      "Quote → execution → settlement. A clear breakdown of OTC workflow, risks, and why structure matters for larger orders.",
    images: [{ url: "https://zcash.ventures/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Crypto OTC Execution Works",
    description:
      "A practical OTC guide: quote window, settlement coordination, tranche execution, and execution risk.",
    images: ["https://zcash.ventures/og-image.jpg"],
  },
};

const FAQ = [
  {
    q: "What is an OTC quote window?",
    a: "A quote window is a defined time period during which quoted terms are valid. It reduces ambiguity and helps both sides coordinate execution and settlement cleanly.",
  },
  {
    q: "Why do OTC trades use tranche execution?",
    a: "Tranches split execution into planned segments to manage timing, liquidity, and market impact. It’s used when size is meaningful relative to available liquidity or when tighter control is needed.",
  },
  {
    q: "Do OTC desks require custody of my wallet?",
    a: "No. Legitimate coordination never requires your seed phrase, private keys, or remote wallet access. Any request for these is fraud.",
  },
];

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Crypto OTC Execution Works",
            description:
              "A practical guide to OTC execution: quotes, quote windows, settlement coordination, and tranche structure.",
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

      <H1>How Crypto OTC Execution Works</H1>
      <Muted className="mt-2">
        A practical breakdown of the OTC workflow: quote → execution → settlement, and why structure
        matters when size or discretion is important.
      </Muted>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/start">Request Confidential Quote</ButtonLink>
        <Link
          href="/zcash-otc-desk"
          className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
        >
          Zcash OTC Desk →
        </Link>
      </div>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>The OTC workflow (high level)</H2>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            <li>1) You submit a request (size range, settlement preference, constraints).</li>
            <li>2) A quote framework is provided (terms + quote window).</li>
            <li>3) Execution is coordinated (single fill or tranches depending on size/conditions).</li>
            <li>4) Settlement occurs on defined rails (crypto / fiat / mixed, as applicable).</li>
          </ol>
          <p className="mt-4 text-sm text-muted">
            If you want the plain-language definition first:{" "}
            <Link className="hover:underline" href="/insights/what-is-a-zcash-otc-desk">
              what is a Zcash OTC desk
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>1) Inputs: what you provide (and why)</H2>
          <p className="mt-3 text-sm text-muted">
            OTC is not “mystery trading.” It’s coordination. The desk needs enough information to
            price and structure execution without you broadcasting intent publicly.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Approximate size range (so execution can be sized to liquidity)</li>
            <li>• Settlement preference (fiat / crypto / mixed)</li>
            <li>• Jurisdiction signal (country) for operational constraints</li>
            <li>• Timing constraints (if execution must happen in a window)</li>
            <li>• Tranche preference (optional) if size is meaningful</li>
          </ul>
        </Card>

        <Card>
          <H2>2) Quotes: what you receive</H2>
          <p className="mt-3 text-sm text-muted">
            A quote framework typically defines the price logic and terms for a limited period.
            The point is to reduce ambiguity: both sides know what “done” looks like before execution.
          </p>

          <H3 className="mt-6">What a “quote window” is</H3>
          <p className="mt-2 text-sm text-muted">
            A quote window is the time period during which the quoted terms are valid. Markets move.
            OTC uses defined windows so execution can be coordinated cleanly without prolonged exposure.
          </p>

          <p className="mt-4 text-sm text-muted">
            See also:{" "}
            <Link className="hover:underline" href="/fees">
              quotes & transparency
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>3) Execution: single fill vs tranche structure</H2>
          <p className="mt-3 text-sm text-muted">
            Execution is where many buyers leak “privacy” unintentionally. Visible order placement
            on public venues can signal intent, widen spreads, and create adverse selection.
          </p>

          <H3 className="mt-6">When tranches make sense</H3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Size is meaningful relative to available liquidity</li>
            <li>• Timing constraints require controlled pacing</li>
            <li>• You want to reduce market impact and slippage risk</li>
          </ul>

          <p className="mt-4 text-sm text-muted">
            Related reading:{" "}
            <Link className="hover:underline" href="/insights/market-impact-and-zec">
              market impact and ZEC
            </Link>{" "}
            ·{" "}
            <Link className="hover:underline" href="/insights/how-to-avoid-slippage-buying-zec">
              avoiding slippage when buying ZEC
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>4) Settlement: coordination matters</H2>
          <p className="mt-3 text-sm text-muted">
            Settlement is where “execution quality” becomes real: timing, rails, confirmations, and
            operational discipline. Structured OTC focuses on finishing cleanly on defined terms.
          </p>
          <p className="mt-3 text-sm text-muted">
            If you’re optimizing for discretion, execution privacy often matters as much as the asset.
            Start here if that’s your use case:{" "}
            <Link className="hover:underline" href="/buy-zec-privately">
              buy Zcash (ZEC) privately
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>Security baseline (non-negotiable)</H2>
          <p className="mt-3 text-sm text-muted">
            Never share seed phrases, private keys, or remote wallet access. Legitimate OTC coordination
            does not require custody of your wallet. Any request for these is fraud.
          </p>
          <p className="mt-4 text-sm text-muted">
            See:{" "}
            <Link className="hover:underline" href="/security">
              security guidelines
            </Link>
            .
          </p>
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

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/zcash-otc-desk">Zcash OTC Desk →</ButtonLink>
            <ButtonLink href="/start">Request Confidential Quote</ButtonLink>
          </div>
        </Card>

        <p className="text-xs text-muted">
          Next:{" "}
          <Link href="/insights/how-to-buy-zcash-privately" className="hover:underline">
            how to buy Zcash privately
          </Link>{" "}
          ·{" "}
          <Link href="/insights/otc-vs-exchange" className="hover:underline">
            OTC vs exchange
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
