import type { Metadata } from "next";
import { Syne, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne"
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant"
});

const siteUrl = "https://aasteen.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AASTEEN — Wear Your Confidence",
    template: "%s | AASTEEN"
  },
  description:
    "AASTEEN is a premium Indian oversized streetwear house — luxury minimalism engineered for the next generation.",
  keywords: [
    "AASTEEN",
    "streetwear India",
    "premium oversized tees",
    "luxury streetwear",
    "hoodies India",
    "cargo pants India"
  ],
  openGraph: {
    title: "AASTEEN — Wear Your Confidence",
    description:
      "Premium oversized streetwear engineered for the next generation.",
    url: siteUrl,
    siteName: "AASTEEN",
    images: [{ url: "/og/aasteen-og.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AASTEEN — Wear Your Confidence",
    description:
      "Premium oversized streetwear engineered for the next generation.",
    images: ["/og/aasteen-og.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${grotesk.variable} ${cormorant.variable}`}>
      <body className="font-body antialiased">
        {children}
        <div className="vignette" />
        <div className="noise" />
      </body>
    </html>
  );
}
