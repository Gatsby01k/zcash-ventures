// app/contact/page.tsx
import { Container, H1, H2, Muted, Card, ButtonLink } from "@/components/ui";

export const metadata = {
  title: "Contact",
  description:
    "Secure contact options for Zcash Ventures, including PGP fingerprint verification guidance.",
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <H1>Contact</H1>
      <Muted className="mt-2">
        For fastest response, submit a quote request. For sensitive comms, use PGP.
      </Muted>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <H2>Start with a confidential quote</H2>
          <p className="mt-3 text-sm text-muted">
            Provide approximate size and settlement preference. No obligation.
          </p>
          <div className="mt-6">
            <ButtonLink href="/start">Request Quote</ButtonLink>
          </div>
        </Card>

        <Card>
          <H2>PGP</H2>
          <p className="mt-3 text-sm text-muted">
            Verify fingerprint via an independent channel before encrypting sensitive content.
          </p>
          <p className="mt-4 text-sm">
            <span className="text-muted">PGP Fingerprint:</span>
            <br />
            <code className="text-sm">XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX</code>
          </p>
          <p className="mt-4 text-sm text-muted">
            Replace the fingerprint above with your real one. If you publish a public key file, also
            link it here (e.g., /public/pgp.txt).
          </p>
        </Card>
      </div>
    </Container>
  );
}
