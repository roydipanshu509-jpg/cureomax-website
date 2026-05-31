"use client";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

const cols = [
  { heading: "Clinic OS", links: [{ href: "/clinic-os", label: "Overview" }, { href: "/demo", label: "Demo" }, { href: "/pricing", label: "Pricing" }, { href: "/book-demo", label: "Book Demo" }] },
  { heading: "Authority OS", links: [{ href: "/authority-os", label: "Overview" }, { href: "/authority-os#modules", label: "Modules" }, { href: "/book-demo", label: "Get Early Access" }] },
  { heading: "Brand Connect", links: [{ href: "/brand-connect", label: "Overview" }, { href: "/brand-connect", label: "Use Cases" }, { href: "/book-demo", label: "Brand Access" }] },
  { heading: "Company", links: [{ href: "/book-demo", label: "Strategy Call" }, { href: "/contact", label: "Contact" }, { href: "/privacy-policy", label: "Privacy Policy" }, { href: "/terms", label: "Terms" }, { href: "/disclaimer", label: "Disclaimer" }, { href: "/data-security", label: "Data Security" }] },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0905", borderTop: "1px solid rgba(200,164,93,0.1)", padding: "4rem 0 0", fontFamily: "var(--sans)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "3rem" }}>
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "0.75rem" }}>
            <span style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 600, color: "#FAFAF7" }}>Cureo</span>
            <span style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 600, color: "#C8A45D" }}>max</span>
          </div>
          <p style={{ fontSize: "0.82rem", color: "var(--trust-gray)", lineHeight: 1.7, maxWidth: 200, marginBottom: "1.5rem" }}>AI Growth Systems for Healthcare Trust.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "rgba(141,138,128,0.7)" }}>
              <MapPin size={12} color="#C8A45D" /> Noida, Delhi NCR, India
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "rgba(141,138,128,0.7)" }}>
              <Mail size={12} color="#C8A45D" /> hello@cureomax.com
            </div>
          </div>
        </div>
        {/* Columns */}
        {cols.map((col) => (
          <div key={col.heading}>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A45D", marginBottom: "1rem" }}>{col.heading}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} style={{ color: "rgba(141,138,128,0.8)", textDecoration: "none", fontSize: "0.86rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAF7")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(141,138,128,0.8)")}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Bottom bar */}
      <div style={{ maxWidth: 1280, margin: "3rem auto 0", padding: "0 1.5rem" }}>
        <div style={{ borderTop: "1px solid rgba(200,164,93,0.08)", padding: "1.5rem 0", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(141,138,128,0.5)" }}>© {new Date().getFullYear()} Cureomax. All rights reserved.</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(141,138,128,0.4)", maxWidth: 600, lineHeight: 1.6 }}>
            Cureomax is a clinic workflow and AI-assistance platform. It does not provide medical advice, diagnosis, or treatment. All AI-generated content requires doctor review. AI assists. Doctors decide.
          </p>
        </div>
      </div>
    </footer>
  );
}
