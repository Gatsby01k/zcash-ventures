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

// 🔁 ЗАМЕНИ НА СВОИ URL
const SOCIALS = [
  {
    href: "https://www.linkedin.com/company/your-company",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1 3.87 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2C19.4 8 21 10.1 21 14v10h-4v-9c0-2.1-.04-4.8-2.9-4.8-2.9 0-3.35 2.25-3.35 4.6V24h-4V8z" />
      </svg>
    ),
  },
  {
    href: "https://t.me/yourtelegram",
    label: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M9.04 15.36l-.38 5.32c.55 0 .8-.24 1.1-.53l2.64-2.5 5.47 4c1 .55 1.72.26 1.98-.92l3.6-16.9.01-.01c.33-1.55-.56-2.16-1.53-1.8L1.3 9.26c-1.5.6-1.48 1.43-.25 1.81l5.3 1.65L18.7 5.7c.6-.4 1.15-.18.7.22" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10">
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
                Quotes are confirmed in writing before payment.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={[
                      "inline-flex h-9 w-9 items-center justify-center rounded-2xl",
                      "border border-line/70",
                      "bg-[rgba(0,0,0,0.25)]",
                      "text-muted",
                      "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                      "motion-safe:transition",
                      "motion-safe:hover:-translate-y-[1px]",
                      "hover:text-accent hover:border-accent/40",
                    ].join(" ")}
                  >
                    {s.icon}
                  </a>
                ))}
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

              <div className="mt-8 rounded-3xl border border-line/70 bg-[rgba(0,0,0,0.22)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="text-sm font-semibold">Operational note</div>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Never share seed phrases. We only request a receiving address after written terms are confirmed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-line/70 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
            <div>© {year} Zcash Ventures. All rights reserved.</div>

            <div className="flex flex-wrap gap-4">
              <Link href="/disclaimer" className="hover:text-text hover:underline underline-offset-4">
                Disclaimer
              </Link>
              <Link href="/security" className="hover:text-text hover:underline underline-offset-4">
                Security
              </Link>
              <Link href="/contact" className="hover:text-text hover:underline underline-offset-4">
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
