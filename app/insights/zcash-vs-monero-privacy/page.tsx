import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

const CANONICAL = "https://zcash.ventures/insights/zcash-vs-monero-privacy";

export const metadata: Metadata = {
  title: "Zcash vs Monero Privacy | Practical Differences for Buyers",
  description:
    "A practical comparison of Zcash (ZEC) and Monero (XMR): privacy models, transparency tradeoffs, operational considerations, and execution implications for buyers.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Zcash vs Monero Privacy",
    description:
      "How ZEC and XMR differ in privacy design and what that means in practice for buyers and execution.",
    images: [{ url: "https://zcash.ventures/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zcash vs Monero Privacy",
    description:
      "A practical ZEC vs XMR comparison: privacy model, tradeoffs, and execution implications.",
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
            headline: "Zcash vs Monero Privacy: Practical Differences for Buyers",
            description:
              "A practical comparison of Zcash (ZEC) and Monero (XMR): privacy models, transparency tradeoffs, and execution implications.",
            datePublished: "2026-02-25",
            dateModified: "2026-02-25",
            author: { "@type": "Organization", name: "Zcash Ventures" },
            publisher: {
              "@type": "Organization",
              name: "Zcash Ventures",
              logo: { "@type": "ImageObject", url: "https://zcash.ventures/og-image.jpg" },
            },
            mainEntityOfPage: CANONICAL,
          }),
        }}
      />

      <H1>Zcash vs Monero Privacy</H1>
      <Muted className="mt-2">
        A practical comparison of ZEC and XMR — privacy model, tradeoffs, and what it means for real execution.
      </Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Quick summary</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Zcash supports both transparent and shielded transactions (privacy is possible, but usage matters).</li>
            <li>• Monero is privacy-by-default (strong on-chain privacy assumptions, different tradeoffs).</li>
            <li>• For buyers, “privacy” also depends on execution: order book signaling, slippage, and coordination risk.</li>
          </ul>
        </Card>

        <Card>
          <H2>1) Privacy model: optional vs default</H2>
          <p className="mt-3 text-sm text-muted">
            Zcash offers multiple address types and transaction modes, including shielded transfers that can conceal
            certain transaction details. This flexibility is powerful, but it also means privacy outcomes depend on
            how the asset is used in practice.
          </p>
          <p className="mt-3 text-sm text-muted">
            Monero is designed around privacy-by-default. The intent is that normal usage provides privacy properties
            without requiring users to choose a specific “privacy mode.”
          </p>
        </Card>

        <Card>
          <H2>2) Practical tradeoffs for real users</H2>
          <p className="mt-3 text-sm text-muted">
            In the real world, buyers care about more than on-chain design: wallet UX, operational habits, and how
            the purchase itself is executed can dominate the privacy outcome.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• On-chain privacy model (what the chain can hide)</li>
            <li>• Off-chain execution privacy (how your intent leaks during purchase)</li>
            <li>• Liquidity and market depth (slippage risk when size is meaningful)</li>
          </ul>
        </Card>

        <Card>
          <H2>3) Execution matters: your “privacy” can leak before settlement</H2>
          <p className="mt-3 text-sm text-muted">
            Many people fixate on the chain, but ignore the purchase path. Public exchanges expose intent through
            visible order placement and standardized flows. When liquidity is thin, larger orders can create
            measurable market impact.
          </p>
          <p className="mt-3 text-sm text-muted">
            If the goal is discretion, structured execution is often the bigger lever than people expect:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Reduced public signaling (avoiding visible order-book behavior)</li>
            <li>• Defined quote window and coordination</li>
            <li>• Optional tranche planning for size-aware execution</li>
          </ul>
          <p className="mt-4 text-sm text-muted">
            Related reading:{" "}
            <Link className="hover:underline" href="/insights/market-impact-and-zec">
              market impact and ZEC
            </Link>{" "}
            ·{" "}
            <Link className="hover:underline" href="/insights/otc-vs-exchange">
              OTC vs exchange
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>4) When ZEC buyers typically care about structure</H2>
          <p className="mt-3 text-sm text-muted">
            ZEC buyers tend to seek structured execution when they are:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• size-aware (slippage risk is non-trivial)</li>
            <li>• privacy-sensitive (don’t want public signaling or attention)</li>
            <li>• constrained by timing/settlement preferences</li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/buy-zec-privately">Buy Zcash (ZEC) Privately →</ButtonLink>
            <ButtonLink href="/start">Request Confidential Quote</ButtonLink>
          </div>
        </Card>

        <Card>
          <H2>5) Bottom line</H2>
          <p className="mt-3 text-sm text-muted">
            Zcash and Monero take different approaches. If your objective is “privacy,” evaluate both the on-chain
            model and the off-chain execution path. For ZEC specifically, the execution workflow (signaling, slippage,
            coordination) can be the decisive factor for privacy-sensitive buying.
          </p>
          <p className="mt-4 text-sm text-muted">
            If you want the OTC concept explained simply:{" "}
            <Link className="hover:underline" href="/insights/what-is-a-zcash-otc-desk">
              what is a Zcash OTC desk
            </Link>
            .
          </p>
        </Card>

        <p className="text-xs text-muted">
          Next:{" "}
          <Link href="/insights/how-to-buy-zcash-privately" className="hover:underline">
            how to buy Zcash privately
          </Link>{" "}
          ·{" "}
          <Link href="/zcash-otc-desk" className="hover:underline">
            Zcash OTC desk
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
