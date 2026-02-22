// app/buy-zec-privately/page.tsx
import Link from "next/link";
import { Container, H1, H2, H3, Muted, Card, ButtonLink } from "@/components/ui";

export const metadata = {
  title: "Buy ZEC Privately",
  description:
    "How to buy ZEC privately with structured OTC execution, avoiding public order book exposure and retail exchange patterns.",
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <H1>Buy ZEC Privately</H1>
      <Muted className="mt-2">
        If you’re size-aware or privacy-sensitive, OTC structure can be the cleanest path.
      </Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Why “private” often means “structured”</H2>
          <p className="mt-3 text-sm text-muted">
            The goal is to reduce unnecessary exposure: public intent, visible order placement, and
            retail-style flows. A structured quote process defines terms before execution and keeps
            coordination controlled.
          </p>
        </Card>

        <Card>
          <H2>What you typically provide</H2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Approximate size</li>
            <li>• Settlement preference (fiat / crypto / mixed)</li>
            <li>• Jurisdiction signal (country)</li>
            <li>• Optional notes for constraints (timing, tranche preference)</li>
          </ul>
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
              href="/zcash-otc-desk"
              className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
            >
              Read: Zcash OTC Desk →
            </Link>
          </div>
        </Card>

        <p className="text-xs text-muted">
          Related:{" "}
          <Link href="/how-it-works" className="hover:underline">
            how it works
          </Link>
          ,{" "}
          <Link href="/fees" className="hover:underline">
            quotes & transparency
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
