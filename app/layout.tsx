// app/layout.tsx
import "./globals.css";
import Script from "next/script";
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
    "Zcash",
    "Buy Zcash",
    "Buy ZEC",
    "Privacy Coin",
    "Investment Zcash",
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
      <body className="bg-bg text-text antialiased">
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MTT4RRVC0Y"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MTT4RRVC0Y');
          `}
        </Script>

        {/* Premium app background */}
        <div className="relative min-h-screen">
          {/* Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

          {/* Top vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_60%)]" />

          {/* Glows */}
          <div className="pointer-events-none absolute -top-36 left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
          <div className="pointer-events-none absolute top-[28vh] -right-56 h-[680px] w-[680px] rounded-full bg-white/4 blur-[150px]" />
          <div className="pointer-events-none absolute -bottom-72 -left-72 h-[780px] w-[780px] rounded-full bg-white/3 blur-[170px]" />

          {/* Noise overlay (class defined in globals.css) */}
          <div className="noise pointer-events-none absolute inset-0 opacity-[0.055]" />

          {/* Content */}
          <div className="relative z-10">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
        </div>

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
