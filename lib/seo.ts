import type { Metadata } from "next";

const SITE = "https://zcash.ventures";
const OG_IMAGE = `${SITE}/og-image.jpg`;

export function articleMeta(opts: {
  slug: string; // "/insights/..."
  title: string;
  description: string;
}): Metadata {
  const url = `${SITE}${opts.slug}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: opts.title,
      description: opts.description,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [OG_IMAGE],
    },
  };
}

export function collectionMeta(opts: {
  slug: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${SITE}${opts.slug}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: opts.title,
      description: opts.description,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [OG_IMAGE],
    },
  };
}

export const seoConst = { SITE, OG_IMAGE };
