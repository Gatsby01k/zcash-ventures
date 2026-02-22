import Link from "next/link";
import { Container, H1, H2, Muted, Card } from "@/components/ui";

export const metadata = {
  title: "OTC vs Exchange",
  description:
    "Structural differences between OTC execution and retail exchange flow for ZEC: signaling, liquidity, settlement control.",
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <H1>OTC vs Exchange: Structural Differences</H1>
      <Muted className="mt-2">Different tools for different objectives.</Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Exchange flow</H2>
          <p className="mt-3 text-sm text-muted">
            Retail exchanges optimize for convenience and standardized execution. Public order books
            and on-exchange flow may be fine for small sizes, but they can be suboptimal for
            discretion and impact control.
          </p>
        </Card>

        <Card>
          <H2>OTC flow</H2>
          <p className="mt-3 text-sm text-muted">
            OTC execution emphasizes coordination and structure: defined quote window, settlement
            preference, and optional tranche planning for size-aware execution.
          </p>
        </Card>

        <p className="text-xs text-muted">
          Next: <Link className="hover:underline" href="/buy-zec-privately">buy ZEC privately</Link> ·{" "}
          <Link className="hover:underline" href="/start">request a quote</Link>
        </p>
      </div>
    </Container>
  );
}
