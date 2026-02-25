import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

const CANONICAL = "https://zcash.ventures/buy-zec-privately";

export const metadata: Metadata = {
  title: "Buy Zcash (ZEC) Privately | Structured OTC Execution",
  description:
    "Buy Zcash (ZEC) privately with structured, off-exchange execution. Reduce public signaling, minimize slippage on larger orders, and settle on defined terms.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Buy Zcash (ZEC) Privately",
    description:
      "Structured OTC execution for privacy-sensitive or larger ZEC transactions: defined quote window, coordinated settlement, optional tranche planning.",
    images: [{ url: "https://zcash.ventures/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Zcash (ZEC) Privately",
    description:
      "Structured off-exchange execution for privacy-sensitive or larger ZEC transactions.",
    images: ["https://zcash.ventures/og-image.jpg"],
  },
};

const FAQ = [
  {
    q: "What does “buy Zcash privately” mean in practice?",
    a: "It means minimizing unnecessary exposure of intent and reducing public signaling. In practice this is achieved through structured quoting and coordinated execution outside public order books.",
  },
  {
    q: "Is OTC execution only for very large orders?",
    a: "OTC is most useful when size, discretion, or execution quality matters. Even mid-sized orders can benefit when the visible order book is thin or when timing constraints increase slippage risk.",
  },
  {
    q: "Do you ever ask for seed phrases or wallet access?",
    a: "Never. You should never share seed phrases, private keys, or remote wallet access with anyone. Any request for these is fraud.",
  },
  {
    q: "How does a quote work?",
    a: "You provide a size range, settlement preference, and any constraints. You receive a confidential quote framework (or a structured plan) and can decide whether to proceed—no obligation.",
  },
  {
    q: "How do you reduce slippage and market impact?",
    a: "By avoiding public order book signaling, coordinating execution, and using tranche-based execution when appropriate so that timing and liquidity conditions can be managed deliberately.",
  },
  {
    q: "What information do I need to share to request a quote?",
    a: "Typically: approximate size, settlement preference (fiat/crypto/mixed), jurisdiction signal (country), and optional constraints like timing or tranche preference.",
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
            name: "Buy Zcash (ZEC) Privately",
            url: CANONICAL,
            description:
              "Buy Zcash (ZEC) privately with structured, off-exchange execution designed to reduce public signaling and minimize slippage on larger orders.",
            publisher: {
              "@type": "Organization",
              name: "Zcash Ventures",
              logo: {
                "@type": "ImageObject",
                url: "https://zcash.ventures/og-image.png",
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

      <H1>Buy Zcash (ZEC) Privately</H1>
      <Muted className="mt-2">
        If you’re size-aware or privacy-sensitive, structured OTC execution can be the cleanest path.
      </Muted>

      {/* Top CTA (helps conversion + UX) */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/start">Request Confidential Quote</ButtonLink>
        <Link
          href="/zcash-otc-desk"
          className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
        >
          Read: Zcash OTC Desk →
        </Link>
      </div>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Why “private” often means “structured”</H2>
          <p className="mt-3 text-sm text-muted">
            The goal is to reduce unnecessary exposure: public intent, visible order placement, and
            retail-style flows. A structured quote process defines terms before execution and keeps
            coordination controlled—especially when liquidity is thin.
          </p>
        </Card>

        <Card>
          <H2>When OTC structure tends to matter most</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• You’re buying enough size that visible execution could increase slippage</li>
            <li>• You want defined terms and a clear settlement plan</li>
            <li>• You want to reduce public signaling and attention around intent</li>
            <li>• You have timing constraints and prefer controlled coordination</li>
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
          <H2>What you typically provide</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Approximate size (range is fine)</li>
            <li>• Settlement preference (fiat / crypto / mixed)</li>
            <li>• Jurisdiction signal (country)</li>
            <li>• Optional constraints (timing, tranche preference, settlement notes)</li>
          </ul>

          <p className="mt-4 text-sm text-muted">
            If you’re new to OTC, start here:{" "}
            <Link className="hover:underline" href="/insights/what-is-a-zcash-otc-desk">
              what is a Zcash OTC desk
            </Link>
            .
          </p>
        </Card>

        <Card>
          <H2>What you should never provide</H2>
          <p className="mt-3 text-sm text-muted">
            Seed phrases, private keys, or remote wallet access. Any request for these is fraud.
          </p>

          <H3 className="mt-6">Next step</H3>
          <p className="mt-2 text-sm text-muted">
            Submit a request to receive a confidential, obligation-free quote framework.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/start">Request Confidential Quote</ButtonLink>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
            >
              How it works →
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
          Related:{" "}
          <Link href="/fees" className="hover:underline">
            quotes & transparency
          </Link>
          ,{" "}
          <Link href="/security" className="hover:underline">
            security notes
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
