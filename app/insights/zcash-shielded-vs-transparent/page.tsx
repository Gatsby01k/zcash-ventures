import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

const CANONICAL =
  "https://zcash.ventures/insights/zcash-shielded-vs-transparent";

export const metadata: Metadata = {
  title: "Zcash Shielded vs Transparent | z-address vs t-address Explained",
  description:
    "A practical explanation of Zcash shielded vs transparent transactions: what each reveals, how privacy outcomes depend on usage, and why execution still matters.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Zcash Shielded vs Transparent",
    description:
      "z-address vs t-address explained: what’s visible, what can be shielded, and why privacy depends on usage and execution.",
    images: [{ url: "https://zcash.ventures/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zcash Shielded vs Transparent",
    description:
      "z-address vs t-address: what’s visible, what can be shielded, and why execution still matters.",
    images: ["https://zcash.ventures/og-image.jpg"],
  },
};

const FAQ = [
  {
    q: "Is Zcash private by default?",
    a: "Zcash supports both transparent and shielded transactions. Privacy outcomes depend on how ZEC is used (e.g., whether shielded transfers are used and how funds move between pools).",
  },
  {
    q: "What is the difference between a z-address and a t-address?",
    a: "A t-address is transparent (similar to Bitcoin-style visibility). A z-address is used for shielded transfers, which can conceal transaction details depending on the transaction type and usage.",
  },
  {
    q: "Does buying ZEC on an exchange affect privacy?",
    a: "The purchase path can leak intent and create a trail before you even settle. Execution choice (public order books vs structured coordination) is often a major privacy lever.",
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
            headline: "Zcash Shielded vs Transparent: z-address vs t-address Explained",
            description:
              "A practical explanation of shielded vs transparent Zcash usage, what each reveals, and why privacy outcomes depend on usage and execution.",
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

      <H1>Zcash Shielded vs Transparent</H1>
      <Muted className="mt-2">
        z-address vs t-address, what each reveals, and why privacy depends on usage — not slogans.
      </Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Quick overview</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Transparent Zcash activity is visible (similar to Bitcoin-style transparency).</li>
            <li>• Shielded transfers are designed to conceal transaction details, but outcomes depend on usage.</li>
            <li>• Privacy can be undermined by the purchase path (execution, order-book signaling, coordination).</li>
          </ul>
        </Card>

        <Card>
          <H2>1) Transparent (t-address): what’s visible</H2>
          <p className="mt-3 text-sm text-muted">
            Transparent addresses and transactions expose details on-chain in a way that is broadly
            comparable to Bitcoin: observers can see amounts and addresses involved. This can be
            acceptable for some users — but it does not provide strong transaction privacy.
          </p>
          <p className="mt-3 text-sm text-muted">
            If your objective is privacy-sensitive holding or transfers, you typically evaluate
            shielded usage as the baseline.
          </p>
        </Card>

        <Card>
          <H2>2) Shielded (z-address): what can be concealed</H2>
          <p className="mt-3 text-sm text-muted">
            Shielded transactions are designed to hide certain transaction details. In practical
            terms, shielded usage aims to reduce what observers can infer from on-chain data.
          </p>
          <p className="mt-3 text-sm text-muted">
            The key point: privacy is not “a label on the asset.” It’s the result of how the asset is
            used and how funds move over time. Privacy outcomes can vary depending on how frequently
            funds move between transparent and shielded contexts.
          </p>
        </Card>

        <Card>
          <H2>3) Privacy depends on usage patterns</H2>
          <p className="mt-3 text-sm text-muted">
            Even with strong cryptography, operational behavior matters. A common mistake is treating
            privacy as automatic while using workflows that create obvious linkage or identity exposure
            outside the chain.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Avoid unnecessary identity coupling to addresses</li>
            <li>• Be deliberate about how funds move between transparent and shielded usage</li>
            <li>• Consider how the purchase path creates a trail before you even settle</li>
          </ul>
        </Card>

        <Card>
          <H2>4) Execution matters: privacy can leak before settlement</H2>
          <p className="mt-3 text-sm text-muted">
            Many users focus on on-chain privacy while overlooking execution. Public exchanges expose
            intent through visible order placement and standardized flows. When liquidity is thin,
            larger buys can create market impact — which itself signals activity.
          </p>
          <p className="mt-3 text-sm text-muted">
            If discretion matters, structured coordination can reduce unnecessary exposure:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Reduced public signaling vs visible order-book execution</li>
            <li>• Defined quote window and clean settlement coordination</li>
            <li>• Optional tranche planning for size-aware execution</li>
          </ul>

          <p className="mt-4 text-sm text-muted">
            Related reading:{" "}
            <Link className="hover:underline" href="/insights/how-crypto-otc-execution-works">
              how OTC execution works
            </Link>{" "}
            ·{" "}
            <Link className="hover:underline" href="/insights/otc-vs-exchange">
              OTC vs exchange
            </Link>
            .
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/buy-zec-privately">Buy Zcash (ZEC) Privately →</ButtonLink>
            <ButtonLink href="/start">Request Confidential Quote</ButtonLink>
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

          <p className="mt-4 text-sm text-muted">
            Next:{" "}
            <Link className="hover:underline" href="/insights/zcash-vs-monero-privacy">
              Zcash vs Monero privacy
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
          <Link href="/insights" className="hover:underline">
            all insights
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
