import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-card/70 p-6 shadow-soft backdrop-blur">
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{children}</h1>;
}
export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">{children}</h2>;
}
export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-balance text-xl font-semibold tracking-tight">{children}</h3>;
}

export function Muted({ children }: { children: ReactNode }) {
  return <p className="text-pretty text-sm text-muted sm:text-base">{children}</p>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const cls =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-bg hover:brightness-110 active:brightness-95"
      : "inline-flex items-center justify-center rounded-xl border border-line bg-transparent px-4 py-2.5 text-sm font-semibold text-text hover:bg-card active:bg-card/80";
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-accent">
      {children}
    </a>
  );
}

export function Badge({ tone = "neutral", children }: { tone?: "neutral" | "good" | "warn"; children: ReactNode }) {
  const cls =
    tone === "good"
      ? "border-good/40 bg-good/10 text-good"
      : tone === "warn"
        ? "border-warn/40 bg-warn/10 text-warn"
        : "border-line bg-card text-muted";
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${cls}`}>{children}</span>;
}
