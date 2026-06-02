"use client";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import Logo from "./Logo";

// Taction-style: teal dot = product/resource columns, gold dot = company/CTA columns
const cols = [
  {
    heading: "Clinic OS", dot: "teal",
    links: [
      { href: "/clinic-os",        label: "Overview" },
      { href: "/demo",             label: "Demo" },
      { href: "/pricing",          label: "Pricing" },
      { href: "/app-preview",      label: "App Preview" },
    ],
  },
  {
    heading: "Features", dot: "teal",
    links: [
      { href: "/ai-medical-scribe",   label: "AI Medical Scribe" },
      { href: "/patient-follow-up",   label: "Follow-up Engine" },
      { href: "/clinic-crm",          label: "Patient CRM" },
      { href: "/physio-ortho-clinics",label: "Physio & Ortho" },
      { href: "/women-health-clinics",label: "Women's Health" },
    ],
  },
  {
    heading: "Resources", dot: "gold",
    links: [
      { href: "/blog",                                      label: "Blog" },
      { href: "/blog/ai-clinic-crm-india",                 label: "AI Clinic CRM India" },
      { href: "/blog/doctor-digital-authority-india",       label: "Doctor Authority" },
      { href: "/blog/physiotherapy-clinic-software-india",  label: "Physio Software" },
    ],
  },
  {
    heading: "Company", dot: "gold",
    links: [
      { href: "/about",            label: "About" },
      { href: "/book-demo",        label: "Book a Demo" },
      { href: "/contact",          label: "Contact" },
      { href: "/data-security",    label: "Data Security" },
      { href: "/privacy-policy",   label: "Privacy Policy" },
      { href: "/terms",            label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060E18", borderTop: "1px solid rgba(200,164,93,0.1)", fontFamily: "var(--sans)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem 0" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
          gap: "3rem",
        }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <Logo variant="dark" size="sm" />
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(141,138,128,0.8)", lineHeight: 1.7, maxWidth: 200, marginBottom: "1.5rem" }}>
              AI-powered Clinic OS for independent clinics in India. Built by a doctor.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "rgba(141,138,128,0.6)" }}>
                <MapPin size={12} color="#C8A45D" /> Noida, Delhi NCR, India
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "rgba(141,138,128,0.6)" }}>
                <Mail size={12} color="#C8A45D" /> hello@cureomax.com
              </div>
            </div>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918882815169?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Cureomax"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontSize: "0.8rem", fontWeight: 600, color: "var(--teal-bright)",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#5FC0C2")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--teal-bright)")}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Link columns — Taction category dot style */}
          {cols.map((col) => (
            <div key={col.heading}>
              {/* Category label with dot — Taction signature */}
              <div className={`footer-col-label ${col.dot === "teal" ? "teal" : ""}`}>
                {col.heading}
              </div>
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

        {/* Bottom row */}
        <div style={{
          borderTop: "1px solid rgba(200,164,93,0.08)",
          margin: "3rem 0 0",
          padding: "1.5rem 0",
          display: "flex", flexWrap: "wrap", gap: "1rem",
          justifyContent: "space-between", alignItems: "center",
        }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(141,138,128,0.45)" }}>
            © {new Date().getFullYear()} Cureomax. All rights reserved. Made with care in India.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(141,138,128,0.35)", maxWidth: 580, lineHeight: 1.6, textAlign: "right" }}>
            AI assists. Doctors decide. All AI outputs are drafts — never acted upon without licensed doctor approval.
          </p>
        </div>
      </div>

      {/* Brand accent bar — Taction signature 3px bottom line */}
      <div className="brand-bar" />
    </footer>
  );
}
