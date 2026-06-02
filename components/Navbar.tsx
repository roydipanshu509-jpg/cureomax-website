"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

// Taction-style: teal dot = core product features, gold dot = vertical/specialty
const features = [
  { href: "/ai-medical-scribe",    label: "AI Medical Scribe",   sub: "Voice-to-notes in seconds",      dot: "teal" },
  { href: "/patient-follow-up",    label: "Follow-up Engine",    sub: "WhatsApp automation",             dot: "teal" },
  { href: "/clinic-crm",           label: "Patient CRM",         sub: "Full patient timeline",           dot: "teal" },
  { href: "/physio-ortho-clinics", label: "Physio & Ortho",      sub: "Specialty workflows",             dot: "gold" },
  { href: "/women-health-clinics", label: "Women's Health",      sub: "Gynaecology workflows",           dot: "gold" },
];

const DOT: Record<string, string> = {
  teal: "#0A7075",
  gold: "#C8A45D",
};

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop]       = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,15,24,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(200,164,93,0.1)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <nav style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 68,
      }}>

        <Logo variant="dark" size="md" />

        {/* Desktop links */}
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: "2.25rem" }}>

          {/* Features dropdown — Taction-style with colored dot indicators */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button
              style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "0.3rem",
                fontFamily: "var(--sans)", fontSize: "0.875rem", fontWeight: 500,
                letterSpacing: "0.02em", padding: 0,
              }}
              className="nav-link"
            >
              Features <ChevronDown size={13} style={{ transition: "transform 0.2s", transform: drop ? "rotate(180deg)" : "none" }} />
            </button>

            {drop && (
              <div style={{
                position: "absolute", top: "calc(100% + 12px)", left: "50%",
                transform: "translateX(-50%)",
                background: "#09121E",
                border: "1px solid rgba(200,164,93,0.15)",
                borderRadius: 10, padding: "0.5rem",
                minWidth: 270,
                boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
                animation: "fadeInDrop 0.15s ease",
              }}>
                {features.map((f) => (
                  <Link
                    key={f.href} href={f.href}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "0.75rem",
                      padding: "0.75rem 0.875rem", borderRadius: 6,
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(200,164,93,0.06)",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(200,164,93,0.06)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    {/* Taction dot */}
                    <span style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: DOT[f.dot], flexShrink: 0, marginTop: 5,
                    }} />
                    <div>
                      <div style={{ color: "#FAFAF8", fontSize: "0.875rem", fontWeight: 600, fontFamily: "var(--sans)", marginBottom: "0.1rem" }}>
                        {f.label}
                      </div>
                      <div style={{ color: "var(--trust-gray)", fontSize: "0.775rem", fontFamily: "var(--sans)" }}>
                        {f.sub}
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/product"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "0.7rem 0.875rem", textDecoration: "none",
                    color: "#C8A45D", fontSize: "0.8rem", fontWeight: 600,
                    fontFamily: "var(--sans)", letterSpacing: "0.03em",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(200,164,93,0.06)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  View all 6 modules <span>→</span>
                </Link>
              </div>
            )}
          </div>

          {[
            { href: "/demo",    label: "Demo" },
            { href: "/pricing", label: "Pricing" },
            { href: "/blog",    label: "Blog" },
          ].map(l => (
            <Link
              key={l.href} href={l.href}
              className="nav-link"
              style={{ textDecoration: "none", fontFamily: "var(--sans)", fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.02em" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA — pill buttons (Taction style) */}
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link
            href="/demo"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.6rem 1.3rem", borderRadius: 9999,
              border: "1px solid rgba(200,164,93,0.3)", background: "transparent",
              color: "rgba(250,250,248,0.75)", fontSize: "0.82rem", fontWeight: 500,
              fontFamily: "var(--sans)", textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)";
              e.currentTarget.style.color = "#FAFAF8";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(200,164,93,0.3)";
              e.currentTarget.style.color = "rgba(250,250,248,0.75)";
            }}
          >
            Watch Demo
          </Link>
          <Link
            href="/book-demo"
            className="btn-gold"
            style={{ fontSize: "0.82rem", padding: "0.6rem 1.3rem" }}
          >
            Book a Demo →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-only"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#FAFAF8", cursor: "pointer", display: "block", padding: "0.5rem" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="mobile-only"
          style={{
            background: "rgba(9,18,30,0.98)", backdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(200,164,93,0.1)",
            padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0",
          }}
        >
          {[
            { href: "/ai-medical-scribe",    label: "AI Medical Scribe",  dot: "teal" },
            { href: "/patient-follow-up",    label: "Follow-up Engine",   dot: "teal" },
            { href: "/clinic-crm",           label: "Patient CRM",        dot: "teal" },
            { href: "/physio-ortho-clinics", label: "Physio & Ortho",     dot: "gold" },
            { href: "/women-health-clinics", label: "Women's Health",     dot: "gold" },
            { href: "/product",    label: "All Features" },
            { href: "/demo",       label: "Demo" },
            { href: "/pricing",    label: "Pricing" },
            { href: "/blog",       label: "Blog" },
            { href: "/about",      label: "About" },
          ].map(l => (
            <Link
              key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex", alignItems: "center", gap: "0.65rem",
                color: "rgba(250,250,248,0.75)", textDecoration: "none",
                fontSize: "0.95rem", fontFamily: "var(--sans)",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(200,164,93,0.07)",
              }}
            >
              {"dot" in l && l.dot && (
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: DOT[l.dot], flexShrink: 0,
                }} />
              )}
              {l.label}
            </Link>
          ))}
          <Link
            href="/book-demo"
            onClick={() => setOpen(false)}
            className="btn-gold"
            style={{ textAlign: "center", marginTop: "1.25rem", justifyContent: "center" }}
          >
            Book a Demo →
          </Link>
        </div>
      )}

      {/* Dropdown fade-in keyframe (inlined since it's nav-scoped) */}
      <style>{`
        @keyframes fadeInDrop {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </header>
  );
}
