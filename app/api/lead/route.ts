import { NextResponse } from "next/server";

type Lead = {
  email: string;
  amount: string;
  customAmount?: string;
  payment: string;
  country: string;
  notes?: string;
  pgp?: string;
  hp?: string; // honeypot
};

function safe(s: unknown) {
  return typeof s === "string" ? s.trim() : "";
}

function ipFrom(req: Request) {
  // Vercel / proxies
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

// In-memory limiter (works per runtime instance). For production, swap to Upstash/Redis.
// Still useful to cut basic spam.
const bucket: Map<string, { n: number; ts: number }> = (globalThis as any).__leadBucket || new Map();
(globalThis as any).__leadBucket = bucket;

function rateLimit(key: string, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const cur = bucket.get(key);
  if (!cur || now - cur.ts > windowMs) {
    bucket.set(key, { n: 1, ts: now });
    return { ok: true, remaining: limit - 1 };
  }
  if (cur.n >= limit) return { ok: false, remaining: 0 };
  cur.n += 1;
  bucket.set(key, cur);
  return { ok: true, remaining: limit - cur.n };
}

export async function POST(req: Request) {
  const ip = ipFrom(req);
  const rl = rateLimit(ip, 8, 60_000);
  if (!rl.ok) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  const body = (await req.json().catch(() => ({}))) as Partial<Lead>;

  // honeypot: bots fill hidden fields
  if (safe(body.hp)) {
    return NextResponse.json({ ok: true }); // silently accept
  }

  const lead: Lead = {
    email: safe(body.email),
    amount: safe(body.amount),
    customAmount: safe(body.customAmount),
    payment: safe(body.payment),
    country: safe(body.country),
    notes: safe(body.notes),
    pgp: safe(body.pgp),
  };

  if (!lead.email || !lead.country || !lead.amount || !lead.payment) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const to = process.env.LEAD_TO_EMAIL || "";
  const from = process.env.LEAD_FROM_EMAIL || "";
  const resendKey = process.env.RESEND_API_KEY || "";

  const subject = `[zcash.ventures] New quote request — ${lead.amount}${lead.amount === "custom" ? ` (${lead.customAmount || ""})` : ""}`;
  const text = [
    "New quote request",
    "-----------------",
    `Email: ${lead.email}`,
    `Amount: ${lead.amount}${lead.amount === "custom" ? ` (${lead.customAmount || ""})` : ""}`,
    `Payment: ${lead.payment}`,
    `Country/Region: ${lead.country}`,
    lead.notes ? `Notes: ${lead.notes}` : "Notes: (none)",
    lead.pgp ? `PGP: provided (${lead.pgp.length} chars)` : "PGP: (none)",
    `IP: ${ip}`,
    `Time (UTC): ${new Date().toISOString()}`
  ].join("\n");

  // Optional webhook (e.g., Slack/Discord/CRM)
  const webhook = process.env.LEAD_WEBHOOK_URL || "";
  if (webhook) {
    fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ subject, text, lead })
    }).catch(() => {});
  }

  if (resendKey && to && from) {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text
      })
    });

    if (!r.ok) {
      const err = await r.text().catch(() => "");
      return NextResponse.json({ ok: false, error: "Email send failed", detail: err }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
