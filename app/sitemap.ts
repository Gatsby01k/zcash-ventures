import { MetadataRoute } from "next";
import { insights } from "@/lib/insights";

const baseUrl = "https://zcash.ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
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

  const insightRoutes = insights.map((p) => ({
    url: `${baseUrl}/insights/${p.slug}`,
    lastModified: new Date(p.lastModified),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...pages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route.startsWith("/insights") ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...insightRoutes,
  ];
}
