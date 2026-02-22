import { Container, Card, H1, H2, Muted, Badge } from "@/components/ui";
import Link from "next/link";

export const metadata = { title: "Security — zcash.ventures" };

export default function Page() {
  return (
    <Container>
      <div className="py-14 sm:py-20">
        <div className="space-y-4">
          <H1>Security checklist</H1>
          <Muted>Follow this before you send funds. It reduces risk and increases confidence.</Muted>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <H2>Before you pay</H2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Type the domain yourself: <span className="font-mono text-xs text-text">zcash.ventures</span></li>
              <li>• We do not use public chat for execution. Ignore random DMs.</li>
              <li>• Only pay after you receive a <span className="text-text font-semibold">written quote</span>.</li>
              <li>• Verify payment details match the quote email you received.</li>
              <li>• Optional: provide PGP key to require encrypted replies.</li>
            </ul>
          </Card>

          <Card>
            <H2>Seed phrase rule</H2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge tone="warn">We never ask for it</Badge>
              <Badge tone="warn">Never type it online</Badge>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Never share your seed phrase with anyone.</li>
              <li>• Never store it as a screenshot or in cloud notes.</li>
              <li>• Write it offline and store securely.</li>
            </ul>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <H2>After you receive ZEC</H2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Verify the transaction details in your wallet.</li>
              <li>• Verify via an explorer if needed.</li>
              <li>• If you want privacy: we provide shielded usage guidance.</li>
            </ul>
          </Card>

          <Card>
            <H2>Red flags</H2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Anyone asking for your seed phrase.</li>
              <li>• “Guaranteed returns” language.</li>
              <li>• Look-alike domains or shortened links.</li>
              <li>• Requests to pay without a written quote.</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <Card>
            <H2>Start safely</H2>
            <p className="mt-2 text-sm text-muted">
              Submit a request and wait for the written quote. <Link className="underline decoration-line underline-offset-4 hover:decoration-accent" href="/start">Get my quote</Link>.
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
}
