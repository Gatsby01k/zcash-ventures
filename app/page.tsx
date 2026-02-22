// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Badge, ButtonLink, Card, Container, H1, H2, H3, Muted, Pill } from "@/components/ui";

const TRUST_POINTS = [
  { title: "Off-Exchange Execution", desc: "Structured ZEC execution outside public order books." },
  { title: "Non-Custodial Workflow", desc: "We do not custody client funds as part of the process." },
  { title: "Discreet Coordination", desc: "Direct, private coordination—no retail funnel." },
  { title: "Quote Transparency", desc: "Clear quote terms before execution. No hidden spreads." },
];

const USE_CASES = [
  "Larger ZEC orders requiring reduced visible market impact",
  "Privacy-sensitive transactions that avoid public order book exposure",
  "Structured settlement and coordination (fiat / crypto / mixed)",
  "Execution planning (tranches, timing, confirmation flow)",
];

export default function Page() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Private ZEC OTC execution desk"
            fill
            priority
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />
        </div>

        <Container className="relative py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge>Private Brokerage · ZEC OTC Execution</Badge>
            <H1 className="mt-4">
              Private ZEC Broker
              <br />
              Structured Zcash OTC Execution
            </H1>
            <p className="mt-4 text-lg text-muted">
              Discreet, direct ZEC execution outside public exchange order books. Designed for
              privacy-sensitive and size-aware transactions—without a retail exchange flow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/start">Request Confidential Quote</ButtonLink>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <Pill>Off-Exchange</Pill>
              <Pill>Discreet</Pill>
              <Pill>Non-Custodial</Pill>
              <Pill>Structured Execution</Pill>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST GRID */}
      <section className="border-b border-line">
        <Container className="py-12 md:py-16">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <H2>Institutional-Style Execution, Built for Privacy</H2>
              <Muted className="mt-2">
                No hype. No retail exchange theatre. Just a structured brokerage workflow for ZEC.
              </Muted>
            </div>
            <div className="hidden md:block">
              <Link href="/security" className="text-sm text-muted hover:text-text">
                Security guidelines →
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {TRUST_POINTS.map((x) => (
              <Card key={x.title}>
                <H3>{x.title}</H3>
                <p className="mt-2 text-sm text-muted">{x.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* VISUAL + USE CASES */}
      <section className="border-b border-line">
        <Container className="py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl border border-line">
              <Image
                src="/section-1.jpg"
                alt="Institutional Zcash brokerage workflow"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <H2>When Private ZEC Brokerage Makes Sense</H2>
              <Muted className="mt-2">
                OTC execution is typically used when public order books are the wrong tool for the job.
              </Muted>

              <ul className="mt-6 space-y-3 text-sm text-muted">
                {USE_CASES.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-3">
                <ButtonLink href="/start">Get My Quote</ButtonLink>
                <Link
                  href="/fees"
                  className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
                >
                  Quotes & transparency
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* LONG-FORM SEO BLOCK */}
      <section>
        <Container className="py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <H2>Zcash (ZEC) OTC Desk — Private Transactions Without Public Order Book Exposure</H2>
              <p className="mt-4 text-sm text-muted">
                Zcash (ZEC) is a privacy-focused digital asset designed to enable shielded transactions
                and more confidential value transfer. While retail exchanges can be convenient, they
                rely on public order books and standardized flows that are not always suitable for
                privacy-sensitive or size-aware execution.
              </p>
              <p className="mt-4 text-sm text-muted">
                For larger ZEC transactions, visible intent can attract unwanted attention and may
                increase slippage. A structured OTC model can reduce public signalling by coordinating
                execution outside open order books and by using an execution plan that fits the order.
              </p>

              <H3 className="mt-8">What an OTC Execution Model Typically Emphasizes</H3>
              <p className="mt-3 text-sm text-muted">
                Brokerage-style execution focuses on clarity, coordination, and structure: a defined
                quote window, clear settlement preference, and a workflow that avoids unnecessary
                exposure. For complex requests, execution may be staged (tranches) to balance market
                impact and timing.
              </p>

              <H3 className="mt-8">Non-Custodial, Discreet Coordination</H3>
              <p className="mt-3 text-sm text-muted">
                Our process is designed to avoid retail exchange patterns and unnecessary data
                collection at the inquiry stage. We coordinate directly and provide a clear quote
                framework before execution.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/start">Request a Confidential Quote</ButtonLink>
                <Link
                  href="/zcash-otc-desk"
                  className="inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 text-sm font-medium hover:bg-card"
                >
                  Read: Zcash OTC Desk →
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <H3>Fast decision signal</H3>
                <p className="mt-2 text-sm text-muted">
                  If you’re comparing retail exchange vs OTC for ZEC, start here.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>Market impact</Pill>
                  <Pill>Discretion</Pill>
                  <Pill>Structure</Pill>
                </div>
              </Card>

              <div className="relative overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/section-2.jpg"
                  alt="Secure ZEC transaction coordination"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>

              <Card>
                <H3>Security baseline</H3>
                <p className="mt-2 text-sm text-muted">
                  We never request seed phrases, private keys, or remote wallet access.
                </p>
                <Link href="/security" className="mt-4 inline-block text-sm hover:underline">
                  View security guidelines →
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
