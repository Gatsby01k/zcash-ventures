import Link from "next/link";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-10 md:grid-cols-3">
          <div className="space-y-2">
            <div className="font-semibold">zcash.ventures</div>
            <p className="text-sm text-muted">
              Private Zcash (ZEC) brokerage for those who value privacy, self-custody, and structured execution.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold">Pages</div>
            <ul className="space-y-1 text-sm text-muted">
              <li><Link className="hover:text-text" href="/start">Start</Link></li>
              <li><Link className="hover:text-text" href="/how-it-works">How it works</Link></li>
              <li><Link className="hover:text-text" href="/security">Security</Link></li>
              <li><Link className="hover:text-text" href="/fees">Quote</Link></li>
              <li><Link className="hover:text-text" href="/faq">FAQ</Link></li>
              <li><Link className="hover:text-text" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold">Legal</div>
            <ul className="space-y-1 text-sm text-muted">
              <li><Link className="hover:text-text" href="/terms">Terms</Link></li>
              <li><Link className="hover:text-text" href="/privacy">Privacy</Link></li>
              <li><Link className="hover:text-text" href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line py-6 text-xs text-muted">
          © {new Date().getFullYear()} zcash.ventures. Execution assistance only. Not financial advice.
        </div>
      </Container>
    </footer>
  );
}
