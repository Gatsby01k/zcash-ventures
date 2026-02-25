export type Insight = {
  slug: string;
  title: string;
  description: string;
  lastModified: string; // YYYY-MM-DD
  keywords?: string[];
};

export const insights: Insight[] = [
  {
    slug: "what-is-a-zcash-otc-desk",
    title: "What Is a Zcash OTC Desk?",
    description:
      "How OTC execution for ZEC works, why it exists, and when it makes sense for privacy-sensitive orders.",
    lastModified: "2026-02-25",
  },
  {
    slug: "otc-vs-exchange",
    title: "OTC vs Exchange for ZEC: Privacy, Slippage, and Execution Risk",
    description:
      "A practical comparison of OTC vs public exchanges for Zcash (ZEC), with a focus on market impact and discretion.",
    lastModified: "2026-02-25",
  },
  {
  slug: "how-to-avoid-slippage-buying-zec",
  title: "How to Avoid Slippage When Buying ZEC | Practical Execution Tips",
  description:
    "A practical guide to reducing slippage when buying ZEC: liquidity assessment, sizing, timing, and structured execution.",
  lastModified: "2026-02-25",
},
  {
  slug: "how-to-buy-zcash-privately",
  title: "How to Buy Zcash (ZEC) Privately | A Practical Guide",
  description:
    "A practical guide to buying Zcash (ZEC) privately while reducing public order book exposure, slippage, and unnecessary signaling.",
  lastModified: "2026-02-25",
},
{
  slug: "zcash-vs-monero-privacy",
  title: "Zcash vs Monero Privacy | Practical Differences for Buyers",
  description:
    "A practical comparison of Zcash (ZEC) and Monero (XMR): privacy models, tradeoffs, and execution implications for buyers.",
  lastModified: "2026-02-25",
},
  {
  slug: "zcash-shielded-vs-transparent",
  title: "Zcash Shielded vs Transparent | z-address vs t-address Explained",
  description:
    "A practical explanation of shielded vs transparent Zcash usage: what each reveals, how privacy depends on usage, and why execution still matters.",
  lastModified: "2026-02-25",
},
  {
  slug: "what-is-zodl",
  title: "What Is ZODL? | The Long-Term Zcash (ZEC) Holder Mindset",
  description:
    "ZODL is a long-term ZEC holder mindset: disciplined accumulation, privacy-aware practices, and execution that minimizes signaling and slippage.",
  lastModified: "2026-02-25",
},
  {
  slug: "how-crypto-otc-execution-works",
  title: "How Crypto OTC Execution Works | Quote, Settlement & Tranches",
  description:
    "A practical guide to OTC execution: quotes, quote windows, settlement coordination, and tranche structure for size-aware trades.",
  lastModified: "2026-02-25",
},
 {
    slug: "market-impact-and-zec",
    title: "Market Impact and ZEC: How to Avoid Slippage on Larger Orders",
    description:
      "How slippage happens in thin order books and how structured execution reduces market impact for ZEC.",
    lastModified: "2026-02-25",
  },
];
