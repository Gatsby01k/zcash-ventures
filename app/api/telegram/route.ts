import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // поддерживаем разные форматы: {email...} И {lead:{...}} И {data:{...}}
    const lead = body?.lead ?? body?.data ?? body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      return NextResponse.json({ ok: false, error: "Missing TELEGRAM env" }, { status: 500 });
    }

    const amount = lead.customAmount || lead.amount || lead.amountRange || "-";
    const payment = lead.payment || "-";
    const country = lead.country || lead.region || "-";
    const email = lead.email || "-";
    const notes = lead.notes ? String(lead.notes).slice(0, 1200) : "-";

    const text =
      `📩 New quote request\n\n` +
      `Email: ${email}\n` +
      `Amount: ${amount}\n` +
      `Payment: ${payment}\n` +
      `Country: ${country}\n` +
      `Notes: ${notes}\n`;

    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!r.ok) return NextResponse.json({ ok: false, error: await r.text() }, { status: 500 });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
