// app/terms/page.tsx
import { Container, H1, H2, Muted, Card } from "@/components/ui";

export const metadata = {
  title: "Terms",
  description:
    "Terms for using Zcash Ventures website and requesting ZEC brokerage quotes.",
};

export default function Page() {
  return (
    <Container className="py-12 md:py-16">
      <H1>Terms</H1>
      <Muted className="mt-2">Effective date: publish date</Muted>

      <div className="mt-10 space-y-6">
        <Card>
          <H2>Nature of Service</H2>
          <p className="mt-3 text-sm text-muted">
            Zcash Ventures provides private brokerage facilitation for ZEC transactions. We are not
            a retail exchange and do not provide custodial wallet services. All decisions and risk
            acceptance remain solely with you.
          </p>
        </Card>

        <Card>
          <H2>No Advice</H2>
          <p className="mt-3 text-sm text-muted">
            We do not provide investment, legal, or tax advice. Any information is provided for
            operational coordination only.
          </p>
        </Card>

        <Card>
          <H2>Eligibility & Refusal</H2>
          <p className="mt-3 text-sm text-muted">
            You must be legally permitted to transact in your jurisdiction. We reserve the right to
            decline any request at our discretion.
          </p>
        </Card>

        <Card>
          <H2>Security</H2>
          <p className="mt-3 text-sm text-muted">
            We will never request seed phrases, private keys, or remote wallet access. If anyone
            requests these while claiming to represent us, treat it as fraud.
          </p>
        </Card>

        <Card>
          <H2>Changes</H2>
          <p className="mt-3 text-sm text-muted">
            We may update these terms from time to time. Continued use of the website constitutes
            acceptance of changes.
          </p>
        </Card>
      </div>
    </Container>
  );
}
