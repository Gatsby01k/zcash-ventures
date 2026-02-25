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
    slug: "market-impact-and-zec",
    title: "Market Impact and ZEC: How to Avoid Slippage on Larger Orders",
    description:
      "How slippage happens in thin order books and how structured execution reduces market impact for ZEC.",
    lastModified: "2026-02-25",
  },
];
