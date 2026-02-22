import Link from "next/link";
import { Container } from "@/components/ui";

const nav = [
  { href: "/start", label: "Start" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/security", label: "Security" },
  { href: "/fees", label: "Quote" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-line bg-card">Z</span>
            <span>zcash.ventures</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-sm text-muted hover:text-text">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/start"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-3.5 py-2 text-sm font-semibold text-bg hover:brightness-110"
            >
              Get my quote
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
