import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Analytics from "@/components/Analytics";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: { default: "Cureomax — AI Clinic OS for Modern Indian Healthcare", template: "%s | Cureomax" },
  description: "Cureomax helps clinics automate patient intake, doctor notes, prescription drafts, follow-ups, billing, and CRM — without replacing clinical judgment.",
  keywords: ["AI clinic software India", "clinic CRM India", "WhatsApp clinic automation", "AI medical scribe India", "physiotherapy clinic software", "doctor notes automation India", "clinic follow-up software"],
  openGraph: {
    type: "website", locale: "en_IN", url: "https://cureomax.com",
    siteName: "Cureomax",
    title: "Cureomax — AI Clinic OS for Modern Indian Healthcare",
    description: "Automate notes, follow-ups, billing, and CRM — built for Indian specialty clinics.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://cureomax.com"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#0D1B2A",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cureomax.com/#org",
      name: "Cureomax",
      url: "https://cureomax.com",
      logo: "https://cureomax.com/favicon.svg",
      description: "AI Clinic OS for Modern Indian Healthcare",
      address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      contactPoint: { "@type": "ContactPoint", email: "hello@cureomax.com", contactType: "customer support" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://cureomax.com/#app",
      name: "Cureomax Clinic OS",
      applicationCategory: "HealthcareApplication",
      operatingSystem: "Web",
      url: "https://cureomax.com",
      description: "AI-powered clinic operating system for Indian specialty clinics. Automates patient notes, follow-ups, billing, and CRM.",
      offers: { "@type": "Offer", price: "4999", priceCurrency: "INR", priceValidUntil: "2026-12-31" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <StickyMobileCTA />
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
