import { Container, Card, H1, Muted } from "@/components/ui";

export const metadata = { title: "Terms — zcash.ventures" };

export default function Page() {
  return (
    <Container>
      <div className="py-14 sm:py-20">
        <div className="space-y-4">
          <H1>Terms</H1>
          <Muted>Replace this page with counsel-approved terms.</Muted>
        </div>

        <div className="mt-10 space-y-4">
          <Card>
            <div className="text-sm font-semibold">Service</div>
            <p className="mt-2 text-sm text-muted">
              zcash.ventures provides execution coordination and onboarding materials related to acquiring and using ZEC.
            </p>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Fees & quotes</div>
            <p className="mt-2 text-sm text-muted">
              Quotes are provided in writing prior to processing. Users must confirm details before sending funds.
            </p>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Liability</div>
            <p className="mt-2 text-sm text-muted">
              To the maximum extent permitted by law, the service is provided “as is” without warranties.
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
}
