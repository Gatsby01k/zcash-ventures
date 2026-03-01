import Link from "next/link";
import { Container } from "@/components/ui";

const COLS = [
  {
    title: "Product",
    links: [
      { href: "/start", label: "Start" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/fees", label: "Quote terms" },
      { href: "/security", label: "Security" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/faq", label: "FAQ" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/start", label: "Request a quote" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10">
      {/* top glow line */}
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(90,215,255,0.35),transparent)]" />

      <div className="border-t border-line/70 bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.15))] backdrop-blur">
        <Container className="py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-semibold tracking-tight motion-safe:transition motion-safe:hover:opacity-95"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                  Z
                </span>
                <span>zcash.ventures</span>
              </Link>

              <p className="mt-3 max-w-[58ch] text-sm text-muted leading-relaxed">
                Private ZEC brokerage for discreet, structured execution outside public exchanges.
                Quotes are confirmed in writing before payment. Non-custodial workflow.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
                <span className="rounded-full border border-line/70 bg-[rgba(0,0,0,0.22)] px-3 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  Off-exchange execution
                </span>
                <span className="rounded-full border border-line/70 bg-[rgba(0,0,0,0.22)] px-3 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  Written quote flow
                </span>
                <span className="rounded-full border border-line/70 bg-[rgba(0,0,0,0.22)] px-3 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  Privacy-first
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                {COLS.map((c) => (
                  <div key={c.title}>
                    <div className="text-sm font-semibold">{c.title}</div>
                    <ul className="mt-3 space-y-2">
                      {c.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className="text-sm text-muted underline-offset-4 hover:text-text hover:underline motion-safe:transition"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom notes */}
              <div className="mt-8 rounded-3xl border border-line/70 bg-[rgba(0,0,0,0.22)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="text-sm font-semibold">Operational note</div>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Never share seed phrases. We only request a receiving address after written terms are confirmed.
                  For encrypted replies, include your PGP public key in the request form.
                </p>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="mt-10 flex flex-col gap-3 border-t border-line/70 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
            <div>© {year} Zcash Ventures. All rights reserved.</div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/disclaimer"
                className="hover:text-text hover:underline underline-offset-4 motion-safe:transition"
              >
                Disclaimer
              </Link>
              <Link
                href="/security"
                className="hover:text-text hover:underline underline-offset-4 motion-safe:transition"
              >
                Security
              </Link>
              <Link
                href="/contact"
                className="hover:text-text hover:underline underline-offset-4 motion-safe:transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
