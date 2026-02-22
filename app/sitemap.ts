// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zcash.ventures";
  const now = new Date();

  const routes = [
    "/",
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

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/start" ? 0.95 : 0.7,
  }));
}
