import { Container, Card, H1, H2, Muted } from "@/components/ui";
import Link from "next/link";

export const metadata = { title: "Quote — zcash.ventures" };

export default function Page() {
  return (
    <Container>
      <div className="py-14 sm:py-20">
        <div className="space-y-4">
          <H1>Quotes & transparency</H1>
          <Muted>
            You receive an exact quote in writing before payment. After you confirm the quote, there are no hidden changes.
          </Muted>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <H2>What a quote includes</H2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• The exact amount to send</li>
              <li>• The exact ZEC amount to receive</li>
              <li>• Payment details and confirmation steps</li>
              <li>• Delivery verification checklist</li>
              <li>• Beginner onboarding pack (if needed)</li>
            </ul>
          </Card>

          <Card>
            <H2>Fees</H2>
            <p className="mt-2 text-sm text-muted">
              Your quote is all-inclusive for processing and execution. There are no hidden charges after confirmation.
            </p>
            <p className="mt-4 text-xs text-muted">
              (If you want to publish fee ranges for extra conversion lift, update this page later.)
            </p>
          </Card>
        </div>

        <div className="mt-10">
          <Card>
            <H2>Get your quote</H2>
            <p className="mt-2 text-sm text-muted">
              Start here: <Link className="underline decoration-line underline-offset-4 hover:decoration-accent" href="/start">Get my quote</Link>.
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
}
