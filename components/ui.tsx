// components/ui.tsx
import Link from "next/link";
import React from "react";

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type PProps = React.HTMLAttributes<HTMLParagraphElement>;

export function Container({ className, ...props }: DivProps) {
  return (
    <div
      {...props}
      className={cx("mx-auto w-full max-w-6xl px-5 md:px-8", className)}
    />
  );
}

/**
 * Premium “glass” card:
 * - subtle gradient fill
 * - top highlight (radial)
 * - deeper shadow
 * - softer border
 */
export function Card({ className, ...props }: DivProps) {
  return (
    <div
      {...props}
      className={cx(
        "relative overflow-hidden rounded-3xl",
        "border border-line/70",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
        "shadow-[0_18px_70px_-40px_rgba(0,0,0,0.9)]",
        "backdrop-blur",
        // soft top highlight
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(1200px_320px_at_20%_0%,rgba(255,255,255,0.09),transparent_60%)]",
        // very subtle inner edge
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className
      )}
    />
  );
}

export function Pill({ className, ...props }: DivProps) {
  return (
    <div
      {...props}
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs",
        "border border-line/70 text-muted",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
        "shadow-[0_10px_30px_-22px_rgba(0,0,0,0.9)]",
        "backdrop-blur",
        className
      )}
    />
  );
}

export function Badge({
  className,
  tone = "neutral",
  ...props
}: DivProps & { tone?: "good" | "warn" | "neutral" }) {
  const toneClass =
    tone === "good"
      ? "border-good/40 text-good"
      : tone === "warn"
      ? "border-warn/40 text-warn"
      : "border-line/70 text-text";

  return (
    <div
      {...props}
      className={cx(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
        "shadow-[0_10px_30px_-22px_rgba(0,0,0,0.9)]",
        "backdrop-blur",
        toneClass,
        className
      )}
    />
  );
}

export function H1({ className, ...props }: HeadingProps) {
  return (
    <h1
      {...props}
      className={cx(
        "text-3xl font-semibold tracking-tight md:text-5xl",
        "leading-[1.06]",
        className
      )}
    />
  );
}

export function H2({ className, ...props }: HeadingProps) {
  return (
    <h2
      {...props}
      className={cx(
        "text-xl font-semibold tracking-tight md:text-2xl",
        "leading-snug",
        className
      )}
    />
  );
}

export function H3({ className, ...props }: HeadingProps) {
  return (
    <h3
      {...props}
      className={cx("text-base font-semibold tracking-tight", className)}
    />
  );
}

export function Muted({ className, ...props }: PProps) {
  return (
    <p
      {...props}
      className={cx("text-sm text-muted leading-relaxed", className)}
    />
  );
}

export function ExternalLink({
  className,
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cx(
        "text-sm text-text/90 hover:text-text hover:underline underline-offset-4",
        className
      )}
    >
      {children}
    </a>
  );
}

export function ButtonLink({
  className,
  href,
  children,
  variant = "solid",
  ...props
}: React.ComponentProps<typeof Link> & {
  variant?: "solid" | "ghost";
}) {
  const base =
    "relative inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition";
  const solid = cx(
    "bg-accent text-bg",
    "shadow-[0_18px_60px_-28px_rgba(90,220,255,0.9)]",
    "hover:opacity-95 hover:-translate-y-[1px] active:translate-y-0"
  );
  const ghost = cx(
    "border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]",
    "text-text hover:bg-card/40",
    "shadow-[0_14px_40px_-28px_rgba(0,0,0,0.9)]"
  );

  return (
    <Link
      {...props}
      href={href}
      className={cx(base, variant === "ghost" ? ghost : solid, className)}
    >
      {children}
    </Link>
  );
}
