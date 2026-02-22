import { Container, Card, H1, Muted, Pill, Badge } from "@/components/ui";
import { StartForm } from "@/components/start-form";
import Link from "next/link";

export const metadata = { title: "Start — zcash.ventures" };

export default function Page() {
  return (
    <Container>
      <div className="py-14 sm:py-20">
        <div className="flex flex-wrap items-center gap-2">
          <Pill><Badge tone="good">Fast response</Badge></Pill>
          <Pill><Badge tone="good">Any amount</Badge></Pill>
          <Pill><Badge tone="warn">No seed phrase</Badge></Pill>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <H1>Get your quote</H1>
            <Muted>
              Submit a request and we’ll reply with the exact quote and payment details. Everything is confirmed in writing before payment.
            </Muted>

            <Card>
              <div className="text-sm font-semibold">What happens next</div>
              <ol className="mt-3 space-y-2 text-sm text-muted">
                <li>1) We confirm route + quote</li>
                <li>2) You send payment</li>
                <li>3) You receive ZEC</li>
                <li>4) You receive the onboarding checklist</li>
              </ol>
              <div className="mt-4 text-xs text-muted">
                Before paying, read <Link className="underline decoration-line underline-offset-4 hover:decoration-accent" href="/security">Security</Link>.
              </div>
            </Card>

            <Card>
            </Card>
          </div>

          <Card>
            <StartForm />
          </Card>
        </div>
      </div>
    </Container>
  );
}
