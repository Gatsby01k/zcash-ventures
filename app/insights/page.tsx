// app/insights/page.tsx
import Link from "next/link";
import { Container, H1, Muted, Card, H2 } from "@/components/ui";

export const metadata = {
  title: "Insights",
  description:
    "Short, practical notes on ZEC OTC execution, market impact, and structured private brokerage workflows.",
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
