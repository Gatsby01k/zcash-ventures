"use client";

import React, { useMemo, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const AMOUNTS = [
  { value: "1000-5000", label: "$1k–$5k" },
  { value: "5000-20000", label: "$5k–$20k" },
  { value: "20000-100000", label: "$20k–$100k" },
  { value: "100000+", label: "$100k+" },
  { value: "custom", label: "Custom" },
] as const;

const PAYMENT = [
  { value: "both", label: "Either" },
  { value: "crypto", label: "Crypto" },
  { value: "fiat", label: "Fiat" },
] as const;

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function SegButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "h-10 rounded-xl px-3 text-sm transition",
        "border border-line/70",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        active
          ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-text"
          : "bg-[rgba(0,0,0,0.18)] text-muted hover:text-text hover:bg-[rgba(255,255,255,0.04)]"
      )}
    >
      {children}
    </button>
  );
}

export function StartForm() {
  const [status, setStatus] = useState<Status>("idle");

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<(typeof AMOUNTS)[number]["value"]>("1000-5000");
  const [customAmount, setCustomAmount] = useState("");

  const [payment, setPayment] = useState<(typeof PAYMENT)[number]["value"]>("both");

  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");

  const [showPgp, setShowPgp] = useState(false);
  const [pgp, setPgp] = useState("");

  const [hp, setHp] = useState(""); // honeypot

  const canSend = useMemo(() => {
    if (!email.trim()) return false;
    if (!country.trim()) return false;
    if (amount === "custom" && !customAmount.trim()) return false;
    return true;
  }, [email, country, amount, customAmount]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSend || status === "sending" || status === "sent") return;

    setStatus("sending");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          amount,
          customAmount: amount === "custom" ? customAmount : "",
          payment,
          country,
          notes,
          pgp: showPgp ? pgp : "",
          hp,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  // Inset / fintech input style
  const inputBase = cx(
    "mt-2 h-11 w-full rounded-2xl px-4 text-sm outline-none",
    "border border-line/70",
    "bg-[rgba(0,0,0,0.25)]",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
    "focus:border-accent/60 focus:ring-2 focus:ring-accent/30"
  );

  const textAreaBase = cx(
    "mt-2 w-full rounded-2xl px-4 py-3 text-sm outline-none",
    "border border-line/70",
    "bg-[rgba(0,0,0,0.25)]",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
    "focus:border-accent/60 focus:ring-2 focus:ring-accent/30"
  );

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <label className="text-sm font-semibold">Email</label>
        <input
          className={inputBase}
          placeholder="start@yourdomain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
          autoComplete="email"
        />
        <div className="mt-1 text-xs text-muted">
          We reply by email with an exact written quote.
        </div>
      </div>

      {/* Honeypot (hidden) */}
      <div className="hidden">
        <label>Website</label>
        <input value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      {/* Amount + Payment */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Amount */}
        <div>
          <label className="text-sm font-semibold">Amount</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {AMOUNTS.map((a) => (
              <SegButton
                key={a.value}
                active={amount === a.value}
                onClick={() => setAmount(a.value)}
              >
                {a.label}
              </SegButton>
            ))}
          </div>

          {amount === "custom" && (
            <input
              className={cx(inputBase, "mt-2")}
              placeholder="e.g. $37,500 or 500 ZEC"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          )}

          <div className="mt-1 text-xs text-muted">Pick a range (or enter a custom size).</div>
        </div>

        {/* Payment */}
        <div>
          <label className="text-sm font-semibold">Payment</label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {PAYMENT.map((p) => (
              <SegButton
                key={p.value}
                active={payment === p.value}
                onClick={() => setPayment(p.value)}
              >
                {p.label}
              </SegButton>
            ))}
          </div>
          <div className="mt-1 text-xs text-muted">Select your preferred settlement route.</div>
        </div>
      </div>

      {/* Country */}
      <div>
        <label className="text-sm font-semibold">Country / Region</label>
        <input
          className={inputBase}
          placeholder="e.g. Ukraine / EU / UAE"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          autoComplete="country-name"
        />
      </div>

      {/* Notes */}
      <div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold">Notes</label>
          <span className="text-xs text-muted">optional</span>
        </div>
        <textarea
          className={cx(textAreaBase, "min-h-[92px]")}
          placeholder="If paying in crypto: which asset (USDT/USDC/BTC)? Any urgency? New to ZEC and need wallet help?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {/* PGP */}
      <div>
        <button
          type="button"
          onClick={() => setShowPgp((v) => !v)}
          className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-text hover:decoration-accent"
        >
          {showPgp ? "Hide PGP public key" : "Add PGP public key (optional)"}
        </button>

        {showPgp && (
          <textarea
            className={cx(textAreaBase, "mt-2 min-h-[120px] font-mono text-xs")}
            placeholder="Paste your PGP public key for encrypted replies."
            value={pgp}
            onChange={(e) => setPgp(e.target.value)}
          />
        )}
      </div>

      {/* CTA */}
      <div>
        <button
          type="submit"
          disabled={!canSend || status === "sending" || status === "sent"}
          className={cx(
            "h-12 w-full rounded-2xl px-4 text-sm font-semibold transition",
            "bg-accent text-bg",
            "shadow-[0_18px_60px_-28px_rgba(90,220,255,0.9)]",
            "hover:-translate-y-[1px] hover:opacity-95 active:translate-y-0",
            "disabled:opacity-60 disabled:hover:translate-y-0"
          )}
        >
          {status === "idle" && "Get my quote"}
          {status === "sending" && "Sending…"}
          {status === "sent" && "Submitted ✓"}
          {status === "error" && "Error — try again"}
        </button>

        <div className="mt-2 text-center text-xs text-muted">
          You’ll receive exact terms in writing before any payment.
        </div>
      </div>

      {/* Success */}
      {status === "sent" && (
        <div className="rounded-3xl border border-line/70 bg-[rgba(0,0,0,0.18)] p-4 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="font-semibold text-text">Request received.</div>
          <div className="mt-1 text-muted">
            Next: check your inbox for the written quote + payment details. Before paying, read the{" "}
            <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href="/security">
              security checklist
            </a>
            .
          </div>
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="rounded-3xl border border-line/70 bg-[rgba(0,0,0,0.18)] p-4 text-sm text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          Couldn’t submit. Try again — or use{" "}
          <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href="/contact">
            contact
          </a>
          .
        </div>
      )}

      <p className="text-xs text-muted">
        By submitting you confirm you’ve read the{" "}
        <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href="/disclaimer">
          disclaimer
        </a>
        .
      </p>
    </form>
  );
}
