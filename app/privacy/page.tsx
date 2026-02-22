// app/privacy/page.tsx
import { Container, H1, H2, Muted, Card } from "@/components/ui";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Zcash Ventures. Data minimization, security, and retention principles for quote inquiries.",
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <H1>Privacy Policy</H1>
      <Muted className="mt-2">Effective date: publish date</Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Data We Collect</H2>
          <p className="mt-3 text-sm text-muted">
            We collect only the information you submit through the quote form: email, country,
            approximate transaction size, settlement preference, and any optional notes or a PGP
            public key.
          </p>
        </Card>

        <Card>
          <H2>How We Use Data</H2>
          <p className="mt-3 text-sm text-muted">
            Submitted information is used only to evaluate feasibility, provide a tailored quote, and
            coordinate communication. We do not sell or rent your data. We do not use it for
            advertising or behavioral profiling.
          </p>
        </Card>

        <Card>
          <H2>Retention</H2>
          <p className="mt-3 text-sm text-muted">
            We retain inquiry data only as long as necessary to respond to your request or complete
            a transaction if you proceed. Non-actionable inquiries may be deleted periodically.
          </p>
        </Card>

        <Card>
          <H2>Security</H2>
          <p className="mt-3 text-sm text-muted">
            If you provide a PGP public key, we may use it to encrypt sensitive communication. Avoid
            sending confidential details via unencrypted email. We will never request seed phrases,
            private keys, or remote wallet access.
          </p>
        </Card>

        <Card>
          <H2>Basic Logs</H2>
          <p className="mt-3 text-sm text-muted">
            We may process basic server logs (e.g., IP address, timestamp, request path) for security
            monitoring and abuse prevention.
          </p>
        </Card>

        <Card>
          <H2>Contact</H2>
          <p className="mt-3 text-sm text-muted">
            For privacy requests (access, correction, deletion), contact us via the contact page.
          </p>
        </Card>
      </div>
    </Container>
  );
}
