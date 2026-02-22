import Link from "next/link";
import { Badge, ButtonLink, Card, Container, H1, H2, H3, Muted, Pill } from "@/components/ui";

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <Card>
      <div className="space-y-2">
        <H3>{title}</H3>
        <p className="text-sm text-muted">{body}</p>
      </div>
    </Card>
  );
}

export default function Page() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <Container>
          <div className="py-14 sm:py-20">
            <div className="flex flex-wrap items-center gap-2">
              <Pill><Badge tone="good">Any amount</Badge> $1,000 → large</Pill>
              <Pill><Badge tone="good">Fiat or crypto</Badge> choose your route</Pill>
              <Pill><Badge tone="warn">No seed phrase</Badge> ever</Pill>
            </div>

            <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5">
                <H1>Buy ZEC now. Fast, clear, verifiable.</H1>
                <Muted>
                  You get a written quote before payment, exact instructions, and verifiable delivery to your wallet.
                  New to ZEC? We guide you from zero: wallet setup, seed safety, and how to verify your transaction.
                </Muted>

                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/start">Get my quote</ButtonLink>
                  <ButtonLink href="/how-it-works" variant="ghost">See how it works</ButtonLink>
                </div>

                <div className="text-xs text-muted">
                  No phone calls. No public chats. Private written coordination only.
                </div>
              </div>

              <Card>
                <div className="space-y-5">
                  <div className="text-sm font-semibold">4-step execution</div>
                  <ol className="space-y-3 text-sm text-muted">
                    <li><span className="text-text font-semibold">1.</span> Submit your request</li>
                    <li><span className="text-text font-semibold">2.</span> Receive a written quote + payment details</li>
                    <li><span className="text-text font-semibold">3.</span> Send funds + your ZEC address</li>
                    <li><span className="text-text font-semibold">4.</span> Receive ZEC + onboarding pack</li>
                  </ol>

                  <div className="rounded-xl border border-line bg-bg p-4 text-xs text-muted">
                    Before paying, read the <Link className="underline decoration-line underline-offset-4 hover:decoration-accent" href="/security">security checklist</Link>.
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <Link href="/faq" className="text-sm text-muted underline decoration-line underline-offset-4 hover:decoration-accent">
                      Read FAQ
                    </Link>
                    <ButtonLink href="/start">Start now</ButtonLink>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container>
          <div className="py-14 sm:py-20">
            <div className="mb-8 space-y-2">
              <H2>Trust is built into the flow</H2>
              <Muted>
                People lose money when processes are unclear. We do the opposite: written quotes, explicit steps, verifiable delivery.
              </Muted>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Feature
                title="Written quote before payment"
                body="You receive the exact quote and payment details in writing before you send anything."
              />
              <Feature
                title="Verifiable delivery"
                body="You receive transaction details and a checklist to verify in-wallet and via explorer."
              />
              <Feature
                title="Beginner-proof onboarding"
                body="From zero to self-custody: wallet setup, seed safety rules, and safe usage guidance."
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/security" variant="ghost">Security checklist</ButtonLink>
              <ButtonLink href="/fees" variant="ghost">Quote & fees</ButtonLink>
              <ButtonLink href="/start">Get my quote</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container>
          <div className="py-14 sm:py-20">
            <div className="mb-8 space-y-2">
              <H2>Designed for everyone</H2>
              <Muted>Beginners, experienced crypto users, small buys, and large allocations.</Muted>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Feature title="New to crypto?" body="We guide you through wallet basics and how to avoid beginner mistakes." />
              <Feature title="Already have crypto?" body="Tell us what you have and we route the cleanest execution path." />
              <Feature title="Large allocation?" body="We can split execution and provide a stricter verification checklist." />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container>
          <div className="py-14 sm:py-20">
            <Card>
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="space-y-2">
                  <div className="text-sm font-semibold">Ready?</div>
                  <p className="text-sm text-muted">
                    Start with a request. We reply with a written quote and clear payment instructions.
                  </p>
                </div>
                <div className="flex gap-3">
                  <ButtonLink href="/start">Get my quote</ButtonLink>
                  <ButtonLink href="/how-it-works" variant="ghost">How it works</ButtonLink>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
