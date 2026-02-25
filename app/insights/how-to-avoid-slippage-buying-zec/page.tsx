import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

const CANONICAL =
  "https://zcash.ventures/insights/how-to-avoid-slippage-buying-zec";

export const metadata: Metadata = {
  title: "How to Avoid Slippage When Buying ZEC | Practical Execution Tips",
  description:
    "A practical guide to reducing slippage when buying Zcash (ZEC): order sizing, timing, liquidity assessment, and when structured OTC execution makes sense.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "How to Avoid Slippage When Buying ZEC",
    description:
      "Practical execution tactics for reducing slippage and market impact when acquiring ZEC.",
    images: [{ url: "https://zcash.ventures/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Avoid Slippage When Buying ZEC",
    description:
      "Reduce slippage when buying ZEC: liquidity, sizing, execution structure, and OTC considerations.",
    images: ["https://zcash.ventures/og-image.jpg"],
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
            headline: "How to Avoid Slippage When Buying ZEC",
            description:
              "A practical guide to reducing slippage when buying Zcash (ZEC): order sizing, timing, liquidity assessment, and structured execution.",
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

      <H1>How to Avoid Slippage When Buying ZEC</H1>
      <Muted className="mt-2">
        Slippage is often an execution problem, not a “bad luck” problem. Here’s how to control it.
      </Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Quick definition: what slippage is</H2>
          <p className="mt-3 text-sm text-muted">
            Slippage is the difference between the price you expect and the average price you
            actually get. It usually happens because your order consumes available liquidity faster
            than the market can replenish it.
          </p>
          <p className="mt-3 text-sm text-muted">
            If you want the deeper mechanics:{" "}
            <Link className="hover:underline" href="/insights/market-impact-and-zec">
              market impact and ZEC
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>1) Measure liquidity before you place size</H2>
          <p className="mt-3 text-sm text-muted">
            On public exchanges, the visible order book is only part of the picture. But it’s still
            a useful starting point: if your order is meaningful relative to depth near the mid,
            you should assume slippage will occur.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Check depth near the best bid/ask (not just the top level)</li>
            <li>• Look at recent volume and spread behavior</li>
            <li>• Assume visible liquidity can disappear when you show intent</li>
          </ul>
        </Card>

        <Card>
          <H2>2) Avoid “single-shot” execution if size is meaningful</H2>
          <p className="mt-3 text-sm text-muted">
            The most common way to create slippage is to hit the market with a single large order.
            Even if you use a limit order, visible intent can attract adverse selection or cause the
            market to move away from you.
          </p>
          <p className="mt-3 text-sm text-muted">
            If you’re unsure whether your size is “meaningful,” compare execution models here:{" "}
            <Link className="hover:underline" href="/insights/otc-vs-exchange">
              OTC vs exchange
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>3) Use tranche-based execution (deliberately)</H2>
          <p className="mt-3 text-sm text-muted">
            Tranching means splitting execution into planned segments. The purpose is not secrecy
            for its own sake — it’s mechanics: reducing visible pressure and giving control over
            timing and liquidity conditions.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Use smaller clips sized to available liquidity</li>
            <li>• Avoid predictable timing patterns</li>
            <li>• Reassess price impact between tranches</li>
          </ul>
        </Card>

        <Card>
          <H2>4) Consider off-exchange structured execution for privacy and impact control</H2>
          <p className="mt-3 text-sm text-muted">
            If slippage and signaling are unacceptable, structured OTC execution can help by
            coordinating terms before execution: a defined quote window, settlement preference, and
            (when relevant) tranche planning.
          </p>
          <p className="mt-3 text-sm text-muted">
            OTC basics:{" "}
            <Link className="hover:underline" href="/insights/what-is-a-zcash-otc-desk">
              what is a Zcash OTC desk
            </Link>
            .
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/buy-zec-privately">Buy Zcash (ZEC) Privately →</ButtonLink>
            <ButtonLink href="/start">Request Confidential Quote</ButtonLink>
          </div>
        </Card>

        <Card>
          <H2>5) Common mistakes that create slippage</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Placing size into thin books because the last price looks “stable”</li>
            <li>• Using market orders for anything beyond trivial size</li>
            <li>• Broadcasting intent (public chats, visible laddering, repeated patterns)</li>
            <li>• Ignoring settlement constraints until the last moment</li>
          </ul>
        </Card>

        <Card>
          <H2>Bottom line</H2>
          <p className="mt-3 text-sm text-muted">
            If you want to reduce slippage, treat execution as a process: measure liquidity, avoid
            single-shot size, tranche deliberately, and use structured coordination when discretion
            and impact control matter.
          </p>
          <p className="mt-4 text-sm text-muted">
            Next reading:{" "}
            <Link className="hover:underline" href="/insights/how-to-buy-zcash-privately">
              how to buy Zcash privately
            </Link>
            .
          </p>
        </Card>

        <p className="text-xs text-muted">
          Related:{" "}
          <Link href="/zcash-otc-desk" className="hover:underline">
            Zcash OTC desk
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
