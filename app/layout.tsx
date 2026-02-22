import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Buy ZEC Now | zcash.ventures",
  description: "Direct gateway to ZEC. Any amount. Fast processing. Written quote before payment.",
  metadataBase: new URL("https://zcash.ventures"),
  openGraph: {
    title: "Buy ZEC Now | zcash.ventures",
    description: "Direct gateway to ZEC. Any amount. Fast processing. Written quote before payment.",
    url: "https://zcash.ventures",
    siteName: "zcash.ventures",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
