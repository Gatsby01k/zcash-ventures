import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

const CANONICAL =
  "https://zcash.ventures/insights/how-to-buy-zcash-privately";

export const metadata: Metadata = {
  title:
    "How to Buy Zcash (ZEC) Privately | A Practical Guide",
  description:
    "A practical guide to buying Zcash (ZEC) privately while reducing public order book exposure, slippage, and unnecessary signaling.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "How to Buy Zcash (ZEC) Privately",
    description:
      "Step-by-step guide to acquiring ZEC privately with structured execution and reduced market impact.",
    images: [{ url: "https://zcash.ventures/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy Zcash (ZEC) Privately",
    description:
      "A practical guide to buying ZEC privately and minimizing slippage.",
    images: ["https://zcash.ventures/og-image.png"],
  },
};

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
            headline: "How to Buy Zcash (ZEC) Privately",
            description:
              "A practical guide to buying Zcash (ZEC) privately while reducing public signaling and slippage.",
            datePublished: "2026-02-25",
            dateModified: "2026-02-25",
            author: {
              "@type": "Organization",
              name: "Zcash Ventures",
            },
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

      <H1>How to Buy Zcash (ZEC) Privately</H1>
      <Muted className="mt-2">
        A practical guide to reducing public exposure, slippage, and unnecessary signaling.
      </Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>1. Understand what “private” actually means</H2>
          <p className="mt-3 text-sm text-muted">
            Buying Zcash privately does not simply mean using a privacy-focused asset.
            It means minimizing unnecessary exposure of intent during execution.
            On public exchanges, visible order placement can signal size and move price —
            especially when liquidity is thin.
          </p>
          <p className="mt-3 text-sm text-muted">
            If you are unfamiliar with OTC execution, start here:{" "}
            <Link
              href="/insights/what-is-a-zcash-otc-desk"
              className="hover:underline"
            >
              what is a Zcash OTC desk
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>2. Assess size and liquidity conditions</H2>
          <p className="mt-3 text-sm text-muted">
            Slippage occurs when your order consumes visible liquidity in the book.
            The larger your order relative to available depth, the more likely
            execution itself moves price.
          </p>
          <p className="mt-3 text-sm text-muted">
            For a deeper explanation, see{" "}
            <Link
              href="/insights/market-impact-and-zec"
              className="hover:underline"
            >
              market impact and ZEC
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>3. Consider structured OTC execution</H2>
          <p className="mt-3 text-sm text-muted">
            Instead of placing visible bids in a public order book, OTC execution
            coordinates terms before execution: size range, settlement method,
            timing, and quote window.
          </p>
          <p className="mt-3 text-sm text-muted">
            This structure reduces signaling and allows controlled coordination —
            particularly relevant for size-aware or privacy-sensitive transactions.
          </p>
          <p className="mt-3 text-sm text-muted">
            Compare approaches here:{" "}
            <Link
              href="/insights/otc-vs-exchange"
              className="hover:underline"
            >
              OTC vs exchange
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>4. Define constraints before execution</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Approximate size range</li>
            <li>• Settlement preference (fiat / crypto / mixed)</li>
            <li>• Jurisdiction signal (country)</li>
            <li>• Timing requirements</li>
            <li>• Tranche preference (if relevant)</li>
          </ul>

          <p className="mt-4 text-sm text-muted">
            Clear constraints reduce friction and improve execution quality.
          </p>
        </Card>

        <Card>
          <H2>5. Maintain security discipline</H2>
          <p className="mt-3 text-sm text-muted">
            Never share seed phrases, private keys, or remote wallet access.
            Legitimate OTC coordination never requires custody of your wallet.
          </p>
        </Card>

        <Card>
          <H2>When structured execution makes the most sense</H2>
          <p className="mt-3 text-sm text-muted">
            OTC tends to be most appropriate when:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Order size is meaningful relative to visible liquidity</li>
            <li>• Discretion is important</li>
            <li>• Settlement flexibility is required</li>
            <li>• Timing control matters</li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/buy-zec-privately">
              Buy Zcash (ZEC) Privately →
            </ButtonLink>
            <ButtonLink href="/start">
              Request Confidential Quote
            </ButtonLink>
          </div>
        </Card>

        <p className="text-xs text-muted">
          Related:{" "}
          <Link href="/zcash-otc-desk" className="hover:underline">
            Zcash OTC Desk
          </Link>{" "}
          ·{" "}
          <Link href="/fees" className="hover:underline">
            quotes & transparency
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
