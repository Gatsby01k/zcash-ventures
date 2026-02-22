import { Container, Card, H1, Muted } from "@/components/ui";

export const metadata = { title: "Disclaimer — zcash.ventures" };

export default function Page() {
  return (
    <Container>
      <div className="py-14 sm:py-20">
        <div className="space-y-4">
          <H1>Disclaimer</H1>
          <Muted>This site provides execution assistance and onboarding. It is not financial advice.</Muted>
        </div>

        <div className="mt-10 space-y-4">
          <Card>
            <div className="text-sm font-semibold">No investment advice</div>
            <p className="mt-2 text-sm text-muted">
              Information provided is for educational and operational purposes only and does not constitute financial, investment, legal, or tax advice.
            </p>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Risk disclosure</div>
            <p className="mt-2 text-sm text-muted">
              Digital assets involve risk, including loss of principal. Past performance does not guarantee future results.
            </p>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Seed phrase</div>
            <p className="mt-2 text-sm text-muted">
              We will never ask for your seed phrase. Never share it with anyone.
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
}
