import Link from "next/link";
import { Container } from "@/components/ui";

const nav = [
  { href: "/insights", label: "Insights" },
  { href: "/start", label: "Start" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/security", label: "Security" },
  { href: "/fees", label: "Quote" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50">
      {/* premium nav surface */}
      <div className="relative border-b border-line/70 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.25))] backdrop-blur">
        {/* subtle top highlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_120px_at_20%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
        {/* underline glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(90,215,255,0.35),transparent)]" />

        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                Z
              </span>
              <span>zcash.ventures</span>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="text-sm text-muted transition hover:text-text"
                >
                  {i.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/start"
                className={[
                  "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold",
                  "text-bg",
                  "bg-[linear-gradient(135deg,rgba(90,215,255,1),rgba(90,215,255,0.72))]",
                  "shadow-[0_18px_60px_-28px_rgba(90,215,255,0.95)]",
                  "transition hover:-translate-y-[1px] hover:opacity-95 active:translate-y-0",
                ].join(" ")}
              >
                Get my quote
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
