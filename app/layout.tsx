// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zcash.ventures"),
  title: {
    default: "Private ZEC Broker | Zcash OTC Execution",
    template: "%s | Zcash Ventures",
  },
  description:
    "Private ZEC brokerage facilitating discreet, structured Zcash (ZEC) transactions outside public exchanges. Off-exchange execution for privacy-sensitive or larger orders.",
  keywords: [
    "private ZEC broker",
    "Zcash OTC",
    "ZEC OTC desk",
    "buy ZEC privately",
    "sell ZEC OTC",
    "Zcash broker",
    "discreet crypto broker",
    "non-custodial brokerage",
    "structured execution",
    "market impact reduction",
  ],
  alternates: { canonical: "https://zcash.ventures" },
  openGraph: {
    title: "Private ZEC Broker | Zcash OTC Execution",
    description:
      "Discreet, structured ZEC execution outside public order books. No retail funnel. No custody requirement.",
    url: "https://zcash.ventures",
    siteName: "Zcash Ventures",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Private ZEC Brokerage | Zcash Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private ZEC Broker | Zcash OTC Execution",
    description:
      "Structured ZEC execution outside public exchanges. Discreet coordination. Non-custodial workflow.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zcash Ventures",
  url: "https://zcash.ventures",
  description:
    "Private ZEC brokerage facilitating discreet, structured Zcash (ZEC) transactions outside public exchanges.",
  sameAs: [],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Zcash Ventures",
  url: "https://zcash.ventures",
  serviceType: "Cryptocurrency Brokerage",
  areaServed: "Global",
  description:
    "Private ZEC brokerage facilitating structured Zcash OTC execution outside public order books.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />

        {/* Schema.org for SEO trust */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
        />
      </body>
    </html>
  );
}
