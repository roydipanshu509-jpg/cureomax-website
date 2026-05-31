import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: { default: "Cureomax | AI Growth Systems for Healthcare Trust", template: "%s | Cureomax" },
  description: "Cureomax builds AI-powered growth, automation, and digital authority systems for doctors, clinics, and healthcare brands.",
  keywords: ["AI clinic assistant India", "doctor digital authority", "healthcare brand collaboration", "clinic CRM India", "WhatsApp clinic automation", "doctor media kit", "healthcare compliance platform"],
  openGraph: {
    type: "website", locale: "en_IN", url: "https://cureomax.com", siteName: "Cureomax",
    title: "Cureomax | AI Growth Systems for Healthcare Trust",
    description: "AI-powered growth, automation, and digital authority systems for doctors, clinics, and healthcare brands in India.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://cureomax.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
