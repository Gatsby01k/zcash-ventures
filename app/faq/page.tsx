import { Container, Card, H1, Muted } from "@/components/ui";

export const metadata = { title: "FAQ — zcash.ventures" };

const faqs = [
  { q: "Do you accept small amounts?", a: "Yes. Any amount is accepted — from starter buys to large allocations." },
  { q: "Fiat or crypto?", a: "Both. Choose your route in the request and we reply with the exact quote and payment details." },
  { q: "How do I know this is legitimate?", a: "We run a verifiable workflow: written quote before payment, explicit instructions, and verifiable delivery with transaction details." },
  { q: "Do I need wallet experience?", a: "No. We provide step-by-step onboarding: wallet setup, seed safety, and verification steps." },
  { q: "Will you ask for my seed phrase?", a: "Never. If anyone asks for it — it’s a scam. Full stop." },
  { q: "How do I verify I received ZEC?", a: "We provide transaction details and a checklist to verify in-wallet and via explorer." },
  { q: "Can you reply encrypted?", a: "Yes. Provide your PGP public key in the request." },
  { q: "Do you guarantee returns?", a: "No. Execution assistance only. Digital assets carry risk." }
];

export default function Page() {
  return (
    <Container>
      <div className="py-14 sm:py-20">
        <div className="space-y-4">
          <H1>FAQ</H1>
          <Muted>Fast answers to reduce friction and speed up your allocation.</Muted>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((f) => (
            <Card key={f.q}>
              <div className="text-base font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
