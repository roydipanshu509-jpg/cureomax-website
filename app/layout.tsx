import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    default: "Cureomax | AI Clinic Assistant for Indian Clinics",
    template: "%s | Cureomax",
  },
  description:
    "Cureomax helps Indian clinics convert WhatsApp inquiries, automate follow-ups, draft doctor-approved notes, manage billing, and recover lost revenue.",
  keywords: [
    "AI clinic assistant India",
    "clinic CRM India",
    "WhatsApp clinic automation",
    "doctor notes AI India",
    "clinic follow-up software",
    "physiotherapy clinic software India",
    "orthopedic clinic CRM",
    "AI receptionist for clinics",
    "patient follow-up automation",
    "clinic billing and analytics",
  ],
  authors: [{ name: "Cureomax" }],
  creator: "Cureomax",
  publisher: "Cureomax",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cureomax.com",
    siteName: "Cureomax",
    title: "Cureomax | AI Clinic Assistant for Indian Clinics",
    description:
      "Convert WhatsApp inquiries, automate patient follow-ups, draft doctor-approved notes, and manage billing — from one elegant dashboard.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cureomax — AI Clinic Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cureomax | AI Clinic Assistant for Indian Clinics",
    description:
      "AI Clinic Assistant that helps Indian clinics stop losing patients.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://cureomax.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
