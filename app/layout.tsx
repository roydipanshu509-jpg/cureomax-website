import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: { default: "Cureomax | AI Growth Systems for Healthcare Trust", template: "%s | Cureomax" },
  description: "Cureomax builds AI-powered growth, automation, and digital authority systems for doctors, clinics, and healthcare brands in India.",
  keywords: ["AI clinic assistant India", "doctor digital authority", "healthcare brand collaboration", "clinic CRM India", "WhatsApp clinic automation", "doctor media kit India", "physiotherapy clinic software India", "AI clinic CRM"],
  openGraph: {
    type: "website", locale: "en_IN", url: "https://cureomax.com", siteName: "Cureomax",
    title: "Cureomax | AI Growth Systems for Healthcare Trust",
    description: "AI-powered growth, automation, and digital authority systems for doctors, clinics, and healthcare brands in India.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cureomax" }],
  },
  twitter: { card: "summary_large_image", title: "Cureomax | AI Growth Systems for Healthcare Trust", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://cureomax.com"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
