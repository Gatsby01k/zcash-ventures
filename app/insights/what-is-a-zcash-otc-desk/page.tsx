import Link from "next/link";
import { Container, H1, H2, Muted, Card } from "@/components/ui";

export const metadata = {
  title: "What Is a Zcash OTC Desk?",
  description:
    "A clear explanation of OTC execution for ZEC and how it differs from public exchange order books.",
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <H1>What Is a Zcash OTC Desk?</H1>
      <Muted className="mt-2">OTC is about structure, not hype.</Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Public order books vs OTC</H2>
          <p className="mt-3 text-sm text-muted">
            Public exchanges expose intent: bids/asks appear in the book, and larger visible orders
            can attract attention. OTC execution coordinates outside that environment: terms, quote
            window, and settlement preference are structured before execution.
          </p>
        </Card>

        <Card>
          <H2>Why ZEC clients consider OTC</H2>
          <p className="mt-3 text-sm text-muted">
            Privacy-sensitive or size-aware execution often benefits from controlled coordination.
            OTC can reduce public signaling and allow staged execution when needed.
          </p>
        </Card>

        <p className="text-xs text-muted">
          Next: <Link className="hover:underline" href="/start">request a quote</Link> ·{" "}
          <Link className="hover:underline" href="/zcash-otc-desk">Zcash OTC Desk</Link>
        </p>
      </div>
    </Container>
  );
}
