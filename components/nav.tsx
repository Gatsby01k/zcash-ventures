"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
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

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Nav() {
  const pathname = usePathname();
  const onStart = isActive(pathname, "/start");

  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // scroll lock + focus
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 50);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // close on route change
  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const items = useMemo(
    () =>
      nav.map((i) => ({
        ...i,
        active: isActive(pathname, i.href),
      })),
    [pathname]
  );

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

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 md:flex">
              {items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className={[
                    "relative text-sm transition",
                    i.active ? "text-text" : "text-muted hover:text-text",
                    "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,transparent,rgba(90,215,255,0.7),transparent)] after:transition-transform",
                    i.active ? "after:scale-x-100" : "hover:after:scale-x-100",
                    "motion-safe:transition",
                  ].join(" ")}
                  aria-current={i.active ? "page" : undefined}
                >
                  {i.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <Link
                href="/start"
                className={[
                  "hidden md:inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold",
                  "text-bg",
                  "bg-[linear-gradient(135deg,rgba(90,215,255,1),rgba(90,215,255,0.72))]",
                  "shadow-[0_18px_60px_-28px_rgba(90,215,255,0.95)]",
                  "motion-safe:transition",
                  "motion-safe:hover:-translate-y-[1px] motion-safe:hover:opacity-95 motion-safe:active:translate-y-0",
                ].join(" ")}
              >
                {onStart ? "Request form" : "Get my quote"}
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={[
                  "inline-flex md:hidden h-10 w-10 items-center justify-center rounded-2xl",
                  "border border-line/70",
                  "bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]",
                  "text-text",
                  "shadow-[0_14px_40px_-28px_rgba(0,0,0,0.9)]",
                  "motion-safe:transition motion-safe:hover:-translate-y-[1px] motion-safe:hover:opacity-95 motion-safe:active:translate-y-0",
                ].join(" ")}
              >
                {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile overlay + sheet */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Overlay */}
          <button
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />

          {/* Sheet */}
          <div
            ref={sheetRef}
            className={[
              "absolute right-3 top-3 w-[min(92vw,420px)]",
              "rounded-3xl border border-line/70",
              "bg-[linear-gradient(180deg,rgba(15,17,23,0.92),rgba(10,12,18,0.82))]",
              "shadow-[0_30px_120px_-60px_rgba(0,0,0,0.95)]",
              "backdrop-blur",
              "overflow-hidden",
              // entry animation (motion-safe)
              "motion-safe:animate-[navIn_220ms_ease-out_both]",
            ].join(" ")}
          >
            {/* top highlight */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_220px_at_20%_0%,rgba(255,255,255,0.10),transparent_60%)]" />

            <div className="relative p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Menu</div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-line/70 bg-[rgba(0,0,0,0.22)] text-text shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] motion-safe:transition motion-safe:hover:-translate-y-[1px]"
                >
                  <IconClose className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {items.map((i, idx) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    ref={idx === 0 ? firstLinkRef : undefined}
                    className={[
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm",
                      "border border-line/70",
                      "bg-[rgba(0,0,0,0.22)]",
                      "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                      "motion-safe:transition motion-safe:hover:-translate-y-[1px]",
                      i.active ? "text-text" : "text-muted hover:text-text",
                    ].join(" ")}
                    aria-current={i.active ? "page" : undefined}
                  >
                    <span>{i.label}</span>
                    <span
                      className={[
                        "h-2 w-2 rounded-full",
                        i.active ? "bg-accent shadow-[0_0_0_4px_rgba(90,215,255,0.18)]" : "bg-white/10",
                      ].join(" ")}
                    />
                  </Link>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="/start"
                  className={[
                    "inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold",
                    "text-bg",
                    "bg-[linear-gradient(135deg,rgba(90,215,255,1),rgba(90,215,255,0.72))]",
                    "shadow-[0_18px_60px_-28px_rgba(90,215,255,0.95)]",
                    "motion-safe:transition motion-safe:hover:-translate-y-[1px] motion-safe:hover:opacity-95 motion-safe:active:translate-y-0",
                  ].join(" ")}
                >
                  {onStart ? "Open request form" : "Get my quote"}
                </Link>

                <div className="mt-3 text-xs text-muted">
                  Tip: use an email you can access. We confirm terms in writing before payment.
                </div>
              </div>
            </div>
          </div>

          {/* keyframes (scoped via global style tag) */}
          <style jsx global>{`
            @media (prefers-reduced-motion: no-preference) {
              @keyframes navIn {
                from {
                  opacity: 0;
                  transform: translateY(-6px) scale(0.985);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            }
          `}</style>
        </div>
      )}
    </header>
  );
}
