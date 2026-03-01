import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const lead = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" },
        { status: 500 }
      );
    }

    const amount = lead.customAmount || lead.amount || "-";
    const text =
      `📩 New quote request\n\n` +
      `Email: ${lead.email || "-"}\n` +
      `Amount: ${amount}\n` +
      `Payment: ${lead.payment || "-"}\n` +
      `Country: ${lead.country || "-"}\n` +
      `Notes: ${lead.notes ? String(lead.notes).slice(0, 1200) : "-"}\n`;

    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!r.ok) {
      const err = await r.text();
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
