import { Container, Card, H1, H2, Muted } from "@/components/ui";
import Link from "next/link";

export const metadata = { title: "Contact — zcash.ventures" };

export default function Page() {
  return (
    <Container>
      <div className="py-14 sm:py-20">
        <div className="space-y-4">
          <H1>Contact</H1>
          <Muted>For fastest processing use the Start page. For encrypted coordination, provide your PGP key in the request.</Muted>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <H2>Start</H2>
            <p className="mt-2 text-sm text-muted">
              Submit a request and we’ll reply with the quote and payment details.
            </p>
            <div className="mt-4">
              <Link className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-bg hover:brightness-110" href="/start">
                Get my quote
              </Link>
            </div>
          </Card>

          <Card>
            <H2>PGP (optional)</H2>
            <p className="mt-2 text-sm text-muted">
              Publish your PGP fingerprint here once ready and cross-post it on your official channels for verification.
            </p>
            <div className="mt-4 rounded-xl border border-line bg-bg p-4 text-xs text-muted">
              Fingerprint: <span className="font-mono">TO-BE-PUBLISHED</span>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
