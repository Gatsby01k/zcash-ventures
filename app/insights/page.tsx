import type { Metadata } from "next";
import Link from "next/link";
import { Container, H1, Muted, Card, H2 } from "@/components/ui";

const CANONICAL = "https://zcash.ventures/insights";

export const metadata: Metadata = {
  title: "Insights | ZEC OTC Execution, Slippage & Private Brokerage",
  description:
    "Short, practical notes on ZEC OTC execution, market impact, and structured private brokerage workflows.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Insights",
    description:
      "Practical notes on structured ZEC execution: OTC vs exchange, market impact, and execution structure.",
    images: [{ url: "https://zcash.ventures/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights",
    description:
      "Practical notes on structured ZEC execution: OTC, slippage, and market impact.",
    images: ["https://zcash.ventures/og-image.png"],
  },
};

const POSTS = [
  {
    href: "/insights/what-is-a-zcash-otc-desk",
    title: "What Is a Zcash OTC Desk?",
    desc: "How OTC execution differs from retail exchange flow and why it matters for ZEC.",
  },
  {
    href: "/insights/market-impact-and-zec",
    title: "Market Impact and ZEC: Why Structure Matters",
    desc: "Why visible intent can increase slippage and why tranche execution exists.",
  },
  {
    href: "/insights/otc-vs-exchange",
    title: "OTC vs Exchange: Structural Differences",
    desc: "Execution mechanics: signaling, liquidity, settlement coordination, and control.",
  },
];

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Insights",
            description:
              "Short, practical notes on ZEC OTC execution, market impact, and structured private brokerage workflows.",
            url: CANONICAL,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: POSTS.map((p, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://zcash.ventures${p.href}`,
                name: p.title,
              })),
            },
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

      <H1>Insights</H1>
      <Muted className="mt-2">Practical notes on structured ZEC execution.</Muted>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {POSTS.map((p) => (
          <Link key={p.href} href={p.href} className="block">
            <Card>
              <H2>{p.title}</H2>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
              <p className="mt-4 text-sm">Read →</p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
