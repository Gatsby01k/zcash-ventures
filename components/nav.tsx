"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname();
  const onStart = isActive(pathname, "/start");

  return (
    <header className="sticky top-0 z-50">
      <div className="relative border-b border-line/70 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.25))] backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_120px_at_20%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(90,215,255,0.35),transparent)]" />

        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold tracking-tight motion-safe:transition motion-safe:hover:opacity-95"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                Z
              </span>
              <span>zcash.ventures</span>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((i) => {
                const active = isActive(pathname, i.href);
                return (
                  <Link
                    key={i.href}
                    href={i.href}
                    className={[
                      "relative text-sm transition",
                      active ? "text-text" : "text-muted hover:text-text",
                      // underline animation
                      "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,transparent,rgba(90,215,255,0.7),transparent)] after:transition-transform",
                      active ? "after:scale-x-100" : "hover:after:scale-x-100",
                      "motion-safe:transition",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    {i.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/start"
                className={[
                  "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold",
                  "text-bg",
                  "bg-[linear-gradient(135deg,rgba(90,215,255,1),rgba(90,215,255,0.72))]",
                  "shadow-[0_18px_60px_-28px_rgba(90,215,255,0.95)]",
                  "motion-safe:transition",
                  "motion-safe:hover:-translate-y-[1px] motion-safe:hover:opacity-95 motion-safe:active:translate-y-0",
                  onStart ? "opacity-95" : "",
                ].join(" ")}
              >
                {onStart ? "Request form" : "Get my quote"}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
