"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const AMOUNTS = [
  { value: "1000-5000", label: "$1,000 — $5,000" },
  { value: "5000-20000", label: "$5,000 — $20,000" },
  { value: "20000-100000", label: "$20,000 — $100,000" },
  { value: "100000+", label: "$100,000+" },
  { value: "custom", label: "Custom" }
] as const;

const PAYMENT = [
  { value: "fiat", label: "Fiat" },
  { value: "crypto", label: "Crypto" },
  { value: "both", label: "Either" }
] as const;

export function StartForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<(typeof AMOUNTS)[number]["value"]>("1000-5000");
  const [customAmount, setCustomAmount] = useState("");
  const [payment, setPayment] = useState<(typeof PAYMENT)[number]["value"]>("both");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
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
    if (!canSend) return;
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
          pgp,
          hp
        })
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-semibold">Email</label>
        <input
          className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder="start@yourdomain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
          autoComplete="email"
        />
        <div className="mt-1 text-xs text-muted">We reply in writing with an exact quote.</div>
      </div>

      {/* Honeypot field (hidden from humans) */}
      <div className="hidden">
        <label>Website</label>
        <input value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold">Amount</label>
          <select
            className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
            value={amount}
            onChange={(e) => setAmount(e.target.value as any)}
          >
            {AMOUNTS.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
          {amount === "custom" && (
            <input
              className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
              placeholder="e.g. $37,500"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          )}
        </div>

        <div>
          <label className="text-sm font-semibold">Payment</label>
          <select
            className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
            value={payment}
            onChange={(e) => setPayment(e.target.value as any)}
          >
            {PAYMENT.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold">Country / Region</label>
        <input
          className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder="e.g. Ukraine / EU / UAE"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          autoComplete="country-name"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Notes (optional)</label>
        <textarea
          className="mt-2 min-h-[90px] w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder="If paying in crypto: which asset? If new: do you need wallet setup help?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-semibold">PGP public key (optional)</label>
        <textarea
          className="mt-2 min-h-[90px] w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm font-mono text-xs outline-none focus:border-accent"
          placeholder="Paste your PGP public key if you want encrypted replies."
          value={pgp}
          onChange={(e) => setPgp(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={!canSend || status === "sending" || status === "sent"}
        className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-bg disabled:opacity-60"
      >
        {status === "idle" && "Get my quote"}
        {status === "sending" && "Sending…"}
        {status === "sent" && "Submitted ✓"}
        {status === "error" && "Error — try again"}
      </button>

      {status === "sent" && (
        <div className="rounded-xl border border-line bg-bg p-4 text-sm text-muted">
          <div className="font-semibold text-text">Submitted.</div>
          <div className="mt-1">
            Next: watch your inbox for the written quote + payment details. Before paying, read the{" "}
            <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href="/security">security checklist</a>.
          </div>
        </div>
      )}

      <p className="text-xs text-muted">
        By submitting you confirm you’ve read the <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href="/disclaimer">disclaimer</a>.
      </p>
    </form>
  );
}
