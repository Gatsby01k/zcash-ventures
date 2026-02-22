// app/fees/page.tsx
import Link from "next/link";
import { Container, H1, H2, Muted, Card, ButtonLink } from "@/components/ui";

export const metadata = {
  title: "Quotes & Transparency",
  description:
    "How Zcash Ventures structures ZEC OTC quotes, what influences pricing, and how transparency is handled.",
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <H1>Quotes & Transparency</H1>
      <Muted className="mt-2">
        Clear structure. Direct coordination. Quote terms defined before execution.
      </Muted>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <H2>What influences a quote</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Transaction size and urgency</li>
            <li>• Settlement method (fiat / crypto / mixed)</li>
            <li>• Liquidity conditions and execution complexity</li>
            <li>• Jurisdictional constraints</li>
          </ul>
        </Card>

        <Card>
          <H2>How we keep it transparent</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Quote terms defined up front</li>
            <li>• Execution can be structured in tranches when appropriate</li>
            <li>• No custodial requirement as a default model</li>
          </ul>
        </Card>
      </div>

      <Card className="mt-6">
        <H2>Why we don’t publish a fixed fee table</H2>
        <p className="mt-3 text-sm text-muted">
          OTC execution is context-dependent: market depth, counterparties, settlement rails, and
          timing matter. A fixed public schedule typically leads to worse outcomes. Instead, we
          provide a tailored proposal.
        </p>
        <p className="mt-3 text-sm text-muted">
          If you want the cleanest answer: submit size + settlement preference and you’ll get a
          direct quote framework.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/start">Request Quote</ButtonLink>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
          >
            How it works →
          </Link>
        </div>
      </Card>
    </Container>
  );
}
