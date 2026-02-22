# zcash.ventures (production)

Professional, conversion-first Next.js site for a ZEC gateway.
Includes:
- App Router pages
- High-conversion copy + trust blocks
- Lead form -> `/api/lead`
- Anti-spam: honeypot + basic rate limiting
- Email delivery via Resend (optional) + optional webhook (Slack/CRM)

## Local dev
```bash
npm install
npm run dev
```

## Deploy on Vercel
1) Push repo to GitHub
2) Import into Vercel
3) Add environment variables

### Required (for email delivery)
- `RESEND_API_KEY`
- `LEAD_TO_EMAIL` (your inbox, e.g. start@zcash.ventures)
- `LEAD_FROM_EMAIL` (a verified sender, e.g. no-reply@zcash.ventures)

### Optional
- `LEAD_WEBHOOK_URL` (post JSON to Slack/Discord/CRM webhook)

If Resend env vars are not set, the API still returns OK (use webhook or add mailer).

## Notes
- Replace `/terms` with counsel-approved terms.
- Publish a PGP fingerprint on `/contact` for stronger trust.
