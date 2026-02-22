import { Container, Card, H1, H2, Muted, Pill, ButtonLink, Badge } from "@/components/ui";

export const metadata = { title: "How it works — zcash.ventures" };

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <Card>
      <div className="space-y-2">
        <div className="text-xs text-muted">Step {n}</div>
        <div className="text-lg font-semibold">{title}</div>
        <p className="text-sm text-muted">{body}</p>
      </div>
    </Card>
  );
}

export default function Page() {
  return (
    <Container>
      <div className="py-14 sm:py-20">
        <div className="flex flex-wrap items-center gap-2">
          <Pill><Badge tone="good">Written</Badge> quote first</Pill>
          <Pill><Badge tone="good">Verifiable</Badge> delivery</Pill>
          <Pill><Badge tone="warn">No seed phrase</Badge> ever</Pill>
        </div>

        <div className="mt-6 space-y-4">
          <H1>How it works</H1>
          <Muted>
            Simple process. No ambiguity. Everything in writing before you pay.
          </Muted>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Step n="1" title="Submit a request" body="Choose amount and payment method. Add notes if you’re new or paying with crypto." />
          <Step n="2" title="Receive quote + payment details" body="We reply with the exact quote and step-by-step instructions." />
          <Step n="3" title="Send funds + your ZEC address" body="You send payment and provide the ZEC address where you want to receive funds." />
          <Step n="4" title="Receive ZEC + onboarding pack" body="We deliver ZEC and send the checklist: wallet setup, verification, safe usage." />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card>
            <H2>What you get</H2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Written quote before payment</li>
              <li>• Clear payment instructions</li>
              <li>• Verifiable delivery (tx details)</li>
              <li>• Beginner onboarding pack</li>
            </ul>
          </Card>

          <Card>
            <H2>Before you pay</H2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Verify domain: zcash.ventures</li>
              <li>• Read the security checklist</li>
              <li>• Never share seed phrase (we never ask)</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/start">Get my quote</ButtonLink>
              <ButtonLink href="/security" variant="ghost">Security checklist</ButtonLink>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
