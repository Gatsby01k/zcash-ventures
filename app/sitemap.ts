import { MetadataRoute } from "next";

const baseUrl = "https://zcash.ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/start",
    "/how-it-works",
    "/security",
    "/fees",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/zcash-otc-desk",
    "/buy-zec-privately",
    "/insights",
  ];

  const insightPages = [
    "/insights/what-is-a-zcash-otc-desk",
    "/insights/otc-vs-exchange",
    "/insights/market-impact-and-zec",
  ];

  return [...staticPages, ...insightPages].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/insights") ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
