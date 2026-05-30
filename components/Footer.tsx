"use client";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const productLinks = [
  { href: "/product", label: "Product" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/app-preview", label: "App Preview" },
];

const specialtyLinks = [
  { href: "/physio-ortho-clinics", label: "Physio & Ortho Clinics" },
  { href: "/women-health-clinics", label: "Women's Health Clinics" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/data-security", label: "Data Security" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F2A1D",
        color: "rgba(247,241,229,0.75)",
        padding: "4rem 0 0",
        borderTop: "1px solid rgba(200,169,106,0.15)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.6rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            <span style={{ color: "#F7F1E5" }}>Cureo</span>
            <span style={{ color: "#C8A96A" }}>max</span>
          </div>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.7,
              maxWidth: "220px",
              color: "rgba(247,241,229,0.6)",
            }}
          >
            AI Clinic Assistant for modern Indian clinics. Built to save
            doctor time and recover lost patients.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.82rem",
                color: "rgba(247,241,229,0.55)",
              }}
            >
              <MapPin size={13} color="#C8A96A" />
              Noida, Delhi NCR, India
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.82rem",
                color: "rgba(247,241,229,0.55)",
              }}
            >
              <Mail size={13} color="#C8A96A" />
              hello@cureomax.com
            </div>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4
            style={{
              color: "#C8A96A",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Product
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {productLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(247,241,229,0.6)",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#F7F1E5")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(247,241,229,0.6)")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div>
          <h4
            style={{
              color: "#C8A96A",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Specialties
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {specialtyLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(247,241,229,0.6)",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#F7F1E5")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(247,241,229,0.6)")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4
            style={{
              color: "#C8A96A",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Legal
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(247,241,229,0.6)",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#F7F1E5")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(247,241,229,0.6)")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Safety banner */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "3rem auto 0",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(200,169,106,0.15)",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(247,241,229,0.4)",
              lineHeight: 1.7,
              maxWidth: "800px",
            }}
          >
            <strong style={{ color: "rgba(247,241,229,0.6)" }}>
              Medical Disclaimer:{" "}
            </strong>
            Cureomax is a clinic workflow and AI-assistance platform. Cureomax
            does not provide medical advice, diagnosis, or treatment. All
            AI-generated content must be reviewed and approved by a qualified
            healthcare professional before use. AI assists. Doctors decide.
          </p>
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(247,241,229,0.35)",
            }}
          >
            © {new Date().getFullYear()} Cureomax. All rights reserved. Made
            with care in Noida, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
