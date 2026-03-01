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
  {
    t: "We confirm route + quote",
    d: "You get exact pricing, fees, and settlement steps in writing.",
  },
  {
    t: "You confirm and send payment",
    d: "No payment is requested before you approve the written terms.",
  },
  {
    t: "You receive ZEC",
    d: "Delivery to your address (shielded supported where applicable).",
  },
  {
    t: "You receive the onboarding checklist",
    d: "Optional guidance: wallet setup, shielding, and safe handling.",
  },
];

export default function StartPage() {
  return (
    <Container className="py-10 md:py-14">
      <div className="relative">
        {/* Premium background glows */}
        <div className="pointer-events-none absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
        <div className="pointer-events-none absolute top-24 -right-32 h-[460px] w-[460px] rounded-full bg-white/5 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/4 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />

        <div className="relative">
          {/* Chips */}
          <div className="mb-6 flex flex-wrap gap-2">
            {CHIPS.map((x) => (
              <Pill key={x}>{x}</Pill>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Left */}
            <div className="md:col-span-5">
              <H1 className="tracking-tight">Get your quote</H1>
              <Muted className="mt-3 max-w-[56ch] text-[15px] leading-relaxed">
                Submit a request and we’ll reply with the exact quote and payment details.
                Everything is confirmed in writing before you pay.
              </Muted>

              <Card className="mt-6 p-6">
                <H2 className="text-base">What happens next</H2>
                <div className="mt-4 space-y-3">
                  {NEXT.map((s, i) => (
                    <div key={s.t} className="flex gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-line/70 text-xs text-muted">
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
                  <Link
                    className="underline decoration-line underline-offset-4 hover:decoration-accent"
                    href="/security"
                  >
                    Security
                  </Link>
                  .
                </div>
              </Card>

              <Card className="mt-4 p-6">
                <H2 className="text-base">Quick notes</H2>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>• If paying in crypto, specify the asset (USDT/USDC/BTC/etc.).</li>
                  <li>• If you want encrypted replies, add a PGP public key.</li>
                  <li>• Larger orders can be executed in tranches to reduce impact.</li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Link
                    className="underline decoration-line underline-offset-4 hover:decoration-accent"
                    href="/how-it-works"
                  >
                    How it works
                  </Link>
                  <span className="text-muted">·</span>
                  <Link
                    className="underline decoration-line underline-offset-4 hover:decoration-accent"
                    href="/fees"
                  >
                    Quote terms
                  </Link>
                  <span className="text-muted">·</span>
                  <Link
                    className="underline decoration-line underline-offset-4 hover:decoration-accent"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </div>
              </Card>

              <div className="mt-6 text-xs text-muted">
                Privacy note: never share seed phrases. We only need your receiving address after terms are confirmed.
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-7">
              <Card className="p-6 md:p-7">
                <div className="mb-4">
                  <div className="text-sm font-semibold">Request form</div>
                  <div className="mt-1 text-sm text-muted">
                    We respond by email with an exact quote. No payment before written confirmation.
                  </div>
                </div>

                <StartForm />

                <div className="mt-6 border-t border-line/70 pt-4 text-xs text-muted">
                  Operational: Use an email you can access. For encrypted replies, add PGP.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
