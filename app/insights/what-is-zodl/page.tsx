import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

const CANONICAL = "https://zcash.ventures/insights/what-is-zodl";

export const metadata: Metadata = {
  title: "What Is ZODL? | The Long-Term Zcash (ZEC) Holder Mindset",
  description:
    "ZODL is a long-term Zcash holder mindset: disciplined accumulation, privacy-aware custody practices, and execution that avoids unnecessary signaling and slippage.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "What Is ZODL?",
    description:
      "A long-term ZEC holder mindset: disciplined accumulation, privacy-aware practices, and execution that minimizes signaling.",
    images: [{ url: "https://zcash.ventures/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is ZODL?",
    description:
      "The long-term ZEC holder mindset: discipline, privacy-aware practices, and clean execution.",
    images: ["https://zcash.ventures/og-image.jpg"],
  },
};

const FAQ = [
  {
    q: "Is ZODL an official Zcash term?",
    a: "ZODL is an informal community term that describes a long-term, conviction-based holding mindset around ZEC. It is not an official protocol-level term.",
  },
  {
    q: "What makes ZODL different from “HODL”?",
    a: "ZODL emphasizes disciplined long-term accumulation with a stronger focus on privacy-aware operational practices and clean execution, not just holding through volatility.",
  },
  {
    q: "Why does execution matter for long-term holders?",
    a: "Because the purchase path can leak intent and create avoidable slippage. For meaningful size, structured execution can reduce public signaling and improve outcomes over time.",
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
            headline: "What Is ZODL? The Long-Term Zcash (ZEC) Holder Mindset",
            description:
              "ZODL is a long-term Zcash holder mindset: disciplined accumulation, privacy-aware custody practices, and execution that avoids unnecessary signaling and slippage.",
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

      <H1>What Is ZODL?</H1>
      <Muted className="mt-2">
        A long-term Zcash (ZEC) holder mindset: discipline, privacy-aware practices, and clean execution.
      </Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Plain definition</H2>
          <p className="mt-3 text-sm text-muted">
            ZODL is an informal term used to describe a long-term, conviction-based approach to holding
            Zcash (ZEC). The emphasis is not short-term trading, but disciplined accumulation and
            privacy-aware operational habits over time.
          </p>
        </Card>

        <Card>
          <H2>Why long-term holders think differently</H2>
          <p className="mt-3 text-sm text-muted">
            Long-term accumulation changes what “good execution” means. A trader might accept visible
            execution and short-term slippage. A long-term holder often prefers:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• predictable, repeatable acquisition workflow</li>
            <li>• reduced public signaling of intent</li>
            <li>• minimized slippage on meaningful size</li>
            <li>• clear settlement and custody discipline</li>
          </ul>
        </Card>

        <Card>
          <H2>Execution: where ZODL is won or lost</H2>
          <p className="mt-3 text-sm text-muted">
            Many people associate privacy only with the asset. But for ZODL-style accumulation, the
            purchase path is a major risk surface: public order books can leak intent and create
            adverse execution when liquidity is thin.
          </p>

          <p className="mt-3 text-sm text-muted">
            If you’re buying meaningful size, two topics matter immediately:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              • slippage control —{" "}
              <Link className="hover:underline" href="/insights/how-to-avoid-slippage-buying-zec">
                how to avoid slippage when buying ZEC
              </Link>
            </li>
            <li>
              • execution structure —{" "}
              <Link className="hover:underline" href="/insights/how-crypto-otc-execution-works">
                how OTC execution works
              </Link>
            </li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/buy-zec-privately">Buy Zcash (ZEC) Privately →</ButtonLink>
            <ButtonLink href="/start">Request Confidential Quote</ButtonLink>
          </div>
        </Card>

        <Card>
          <H2>Privacy-aware practices (non-technical, but important)</H2>
          <p className="mt-3 text-sm text-muted">
            You don’t need to be an expert to reduce unnecessary exposure. Practical habits tend to
            dominate outcomes:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• keep custody disciplined (never share keys/seed phrases)</li>
            <li>• treat execution as a process, not a single impulse trade</li>
            <li>• reduce public signaling around accumulation intent</li>
            <li>• prefer workflows that allow clean settlement on defined terms</li>
          </ul>

          <p className="mt-4 text-sm text-muted">
            Privacy basics for ZEC usage:{" "}
            <Link className="hover:underline" href="/insights/zcash-shielded-vs-transparent">
              shielded vs transparent
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

          <p className="mt-4 text-sm text-muted">
            Next:{" "}
            <Link className="hover:underline" href="/insights/how-to-buy-zcash-privately">
              how to buy Zcash privately
            </Link>{" "}
            ·{" "}
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
