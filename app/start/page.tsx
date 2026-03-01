// app/start/page.tsx
import Link from "next/link";
import { Card, Container, H1, H2, Muted, Pill } from "@/components/ui";
import { StartForm } from "@/components/start-form";

const CHIPS = [
  "Reply in 1–6 hours",
  "Written quote before payment",
  "Non-custodial flow",
  "No seed phrase ever",
];

const NEXT = [
  { t: "Quote + route confirmed", d: "We reply with exact price, fees, and settlement steps." },
  { t: "You send payment", d: "Only after you confirm the written quote." },
  { t: "You receive ZEC", d: "Delivery to your address (shielded supported)." },
];

export default function StartPage() {
  return (
    <Container className="py-10 md:py-14">
      <div className="mb-6 flex flex-wrap gap-2">
        {CHIPS.map((x) => (
          <Pill key={x}>{x}</Pill>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Left */}
        <div className="md:col-span-5">
          <H1>Get your quote</H1>
          <Muted className="mt-3">
            Submit a request and we’ll reply with an exact quote and payment details.
            Everything is confirmed in writing before you pay.
          </Muted>

          <Card className="mt-6 p-6">
            <H2 className="text-base">What happens next</H2>
            <div className="mt-4 space-y-3">
              {NEXT.map((s, i) => (
                <div key={s.t} className="flex gap-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full border border-line text-center text-sm text-muted">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{s.t}</div>
                    <div className="text-sm text-muted">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 text-sm text-muted">
              Before paying, read{" "}
              <Link className="underline underline-offset-4" href="/security">
                Security
              </Link>
              .
            </div>
          </Card>

          <Card className="mt-4 p-6">
            <H2 className="text-base">Quick notes</H2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• If paying in crypto, mention the asset (USDT/USDC/BTC/etc.).</li>
              <li>• If you want encrypted replies, add your PGP public key.</li>
              <li>• Large orders can be structured in tranches.</li>
            </ul>
          </Card>
        </div>

        {/* Right */}
        <div className="md:col-span-7">
          <Card className="p-6 md:p-7">
            <div className="mb-4">
              <div className="text-sm font-medium">Request form</div>
              <div className="text-sm text-muted">We respond by email with an exact quote.</div>
            </div>
            <StartForm />
          </Card>
        </div>
      </div>
    </Container>
  );
}
