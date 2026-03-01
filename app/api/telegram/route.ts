import { NextRequest, NextResponse } from "next/server";

function safe(s: unknown) {
  return String(s ?? "").trim();
}

export async function POST(req: NextRequest) {
  // ✅ 1) защита endpoint
  const secret = req.headers.get("x-webhook-secret");
  if (!process.env.TELEGRAM_WEBHOOK_SECRET || secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  try {
    const body = await req.json();

    // ✅ 2) поддержка разных форматов, если вдруг менял payload
    const lead = body?.lead ?? body?.data ?? body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ ok: false, error: "Missing TELEGRAM env" }, { status: 500 });
    }

    const email = safe(lead.email) || "-";
    const amount = safe(lead.customAmount || lead.amount || lead.amountRange) || "-";
    const payment = safe(lead.payment) || "-";
    const country = safe(lead.country || lead.region) || "-";
    const notes = safe(lead.notes) || "-";
    const ip = safe(lead.ip) || "-";
    const time = safe(lead.time) || new Date().toISOString();

    // ✅ 3) OTC-формат + “high value” метка
    const isHigh =
      /\d/.test(amount) && (() => {
        // пробуем вытащить числа из amount (очень грубо, но практично)
        const nums = amount.replace(/[, ]/g, "").match(/\d+/g)?.map(Number) ?? [];
        const max = nums.length ? Math.max(...nums) : 0;
        return max >= 50000;
      })();

    const header = isHigh ? "🔥 *HIGH VALUE LEAD*" : "📩 *NEW OTC QUOTE REQUEST*";

    // Telegram Markdown (не MarkdownV2) — проще, меньше экранирования
    const text =
      `${header}\n\n` +
      `💰 *Size:* ${amount}\n` +
      `💳 *Payment:* ${payment}\n` +
      `🌍 *Region:* ${country}\n\n` +
      `📧 *Email:* ${email}\n` +
      `📝 *Notes:* ${notes.slice(0, 1200)}\n\n` +
      `🕒 *UTC:* ${time}\n` +
      `🌐 *IP:* ${ip}`;

    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
