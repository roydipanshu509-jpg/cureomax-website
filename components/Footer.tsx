"use client";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import Logo from "./Logo";

const cols = [
  { heading: "Clinic OS", links: [{ href: "/clinic-os", label: "Overview" }, { href: "/demo", label: "Demo" }, { href: "/pricing", label: "Pricing" }] },
  { heading: "Authority OS", links: [{ href: "/authority-os", label: "Overview" }, { href: "/authority-os#modules", label: "Modules" }, { href: "/book-demo", label: "Get Early Access" }] },
  { heading: "Brand Connect", links: [{ href: "/brand-connect", label: "Overview" }, { href: "/book-demo", label: "Brand Access" }] },
  { heading: "Company", links: [{ href: "/book-demo", label: "Strategy Call" }, { href: "/contact", label: "Contact" }, { href: "/privacy-policy", label: "Privacy" }, { href: "/terms", label: "Terms" }, { href: "/data-security", label: "Data Security" }] },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060E18",
        borderTop: "1px solid rgba(200,164,93,0.1)",
        padding: "4rem 0 0",
        fontFamily: "var(--sans)",
      }}
    >
      <div
        style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "1rem" }}>
            <Logo variant="dark" size="sm" />
          </div>
          <p style={{ fontSize: "0.82rem", color: "rgba(141,138,128,0.8)", lineHeight: 1.7, maxWidth: 200, marginBottom: "1.5rem" }}>
            AI Growth Systems for Healthcare Trust.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "rgba(141,138,128,0.6)" }}>
              <MapPin size={12} color="#C8A45D" /> Noida, Delhi NCR, India
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "rgba(141,138,128,0.6)" }}>
              <Mail size={12} color="#C8A45D" /> hello@cureomax.com
            </div>
          </div>
        </div>

        {/* Columns */}
        {cols.map((col) => (
          <div key={col.heading}>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A45D", marginBottom: "1rem" }}>
              {col.heading}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ color: "rgba(141,138,128,0.75)", textDecoration: "none", fontSize: "0.86rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(141,138,128,0.75)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{ maxWidth: 1280, margin: "3rem auto 0", padding: "0 1.5rem" }}>
        <div
          style={{
            borderTop: "1px solid rgba(200,164,93,0.08)",
            padding: "1.5rem 0",
            display: "flex", flexWrap: "wrap", gap: "1rem",
            justifyContent: "space-between", alignItems: "center",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(141,138,128,0.45)" }}>
            © {new Date().getFullYear()} Cureomax. All rights reserved. Made with care in India.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(141,138,128,0.35)", maxWidth: 600, lineHeight: 1.6 }}>
            Cureomax is a clinic workflow and AI-assistance platform. It does not provide medical advice, diagnosis, or treatment. AI assists. Doctors decide.
          </p>
        </div>
      </div>
    </footer>
  );
}
