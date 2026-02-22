import Link from "next/link";
import { Container, H1, H2, Muted, Card } from "@/components/ui";

export const metadata = {
  title: "Market Impact and ZEC",
  description:
    "Why market impact happens, how visible intent affects execution, and why tranche structure exists for ZEC.",
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <H1>Market Impact and ZEC: Why Structure Matters</H1>
      <Muted className="mt-2">Large visible intent changes pricing behavior.</Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>What “market impact” means</H2>
          <p className="mt-3 text-sm text-muted">
            When an order is large relative to available liquidity, execution itself can move price.
            Public order books can amplify this by broadcasting intent.
          </p>
        </Card>

        <Card>
          <H2>Why tranches exist</H2>
          <p className="mt-3 text-sm text-muted">
            Splitting execution into tranches can reduce visible pressure and allow timing control.
            It’s not about mystery—it’s about mechanics.
          </p>
        </Card>

        <p className="text-xs text-muted">
          Next: <Link className="hover:underline" href="/fees">quotes & transparency</Link> ·{" "}
          <Link className="hover:underline" href="/start">request a quote</Link>
        </p>
      </div>
    </Container>
  );
}
