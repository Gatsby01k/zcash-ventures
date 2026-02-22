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

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      {...props}
      className={cx(
        "rounded-2xl border border-line bg-card p-5 shadow-sm",
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
        "inline-flex items-center rounded-full border border-line bg-card px-3 py-1 text-xs text-muted",
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
      : "border-line text-text";

  return (
    <div
      {...props}
      className={cx(
        "inline-flex items-center rounded-full border bg-card px-2.5 py-1 text-[11px] font-semibold",
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
        className
      )}
    />
  );
}

export function H2({ className, ...props }: HeadingProps) {
  return (
    <h2
      {...props}
      className={cx("text-xl font-semibold tracking-tight md:text-2xl", className)}
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
    <p {...props} className={cx("text-sm text-muted", className)} />
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
      className={cx("text-sm hover:underline", className)}
    >
      {children}
    </a>
  );
}

export function ButtonLink({
  className,
  href,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      href={href}
      className={cx(
        "inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-bg hover:opacity-90",
        className
      )}
    >
      {children}
    </Link>
  );
}
