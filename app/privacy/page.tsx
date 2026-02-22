import { Container, Card, H1, Muted } from "@/components/ui";

export const metadata = { title: "Privacy — zcash.ventures" };

export default function Page() {
  return (
    <Container>
      <div className="py-14 sm:py-20">
        <div className="space-y-4">
          <H1>Privacy</H1>
          <Muted>Minimal collection. Replace with your formal policy if needed.</Muted>
        </div>

        <div className="mt-10 space-y-4">
          <Card>
            <div className="text-sm font-semibold">What we collect</div>
            <p className="mt-2 text-sm text-muted">
              Form submissions include email, country/region, amount range, payment preference, and optional notes/PGP, used to respond and coordinate.
            </p>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Security</div>
            <p className="mt-2 text-sm text-muted">
              You can provide a PGP key to receive encrypted replies. Always secure your own accounts and devices.
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
}
