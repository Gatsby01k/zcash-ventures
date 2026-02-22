// app/zcash-otc-desk/page.tsx
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

export const metadata = {
  title: "Zcash OTC Desk",
  description:
    "What a Zcash OTC desk is, when structured ZEC execution makes sense, and how private brokerage differs from retail exchanges.",
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <H1>Zcash OTC Desk</H1>
      <Muted className="mt-2">
        Private ZEC execution outside public order books — structured, discreet, direct.
      </Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>What an OTC desk does (in plain terms)</H2>
          <p className="mt-3 text-sm text-muted">
            OTC (over-the-counter) execution coordinates a transaction outside public order books.
            Instead of placing visible bids/asks, the workflow is structured: size, settlement method,
            timing, and quote window are agreed before execution.
          </p>
        </Card>

        <Card>
          <H2>When OTC typically matters for ZEC</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• You want to avoid public order book signaling</li>
            <li>• Size-sensitive execution where slippage matters</li>
            <li>• Settlement constraints (fiat/crypto rails, timing, structure)</li>
            <li>• Privacy-sensitive coordination and controlled communication</li>
          </ul>
        </Card>

        <Card>
          <H2>Execution structure</H2>
          <p className="mt-3 text-sm text-muted">
            For complex orders, execution may be split into tranches. This reduces visible impact and
            gives better control over timing. The goal is to coordinate a clean outcome, not to “spray”
            a large order into a public book.
          </p>

          <H3 className="mt-6">Security baseline</H3>
          <p className="mt-2 text-sm text-muted">
            We never request seed phrases, private keys, or remote wallet access.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/start">Request Quote</ButtonLink>
            <Link
              href="/security"
              className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
            >
              Security guidelines →
            </Link>
          </div>
        </Card>

        <p className="text-xs text-muted">
          Read also:{" "}
          <Link href="/buy-zec-privately" className="hover:underline">
            Buy ZEC privately
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
