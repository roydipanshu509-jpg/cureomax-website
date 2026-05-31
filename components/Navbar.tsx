"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const features = [
  { href: "/ai-medical-scribe", label: "AI Medical Scribe", sub: "Voice-to-notes in seconds" },
  { href: "/patient-follow-up", label: "Follow-up Engine", sub: "WhatsApp automation" },
  { href: "/clinic-crm", label: "Patient CRM", sub: "Full patient timeline" },
  { href: "/physio-ortho-clinics", label: "Physio & Ortho", sub: "Specialty workflows" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,15,24,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(200,164,93,0.1)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

        <Logo variant="dark" size="md" />

        {/* Desktop */}
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: "2.25rem" }}>

          {/* Features dropdown */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button style={{ background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "0.3rem",
              fontFamily: "var(--sans)", fontSize: "0.875rem", fontWeight: 500,
              letterSpacing: "0.02em", padding: 0 }}
              className="nav-link">
              Features <ChevronDown size={13} />
            </button>
            {drop && (
              <div style={{
                position: "absolute", top: "calc(100% + 10px)", left: "50%",
                transform: "translateX(-50%)",
                background: "#09121E", border: "1px solid rgba(200,164,93,0.15)",
                borderRadius: 6, padding: "0.5rem", minWidth: 260,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}>
                {features.map((f) => (
                  <Link key={f.href} href={f.href} style={{
                    display: "block", padding: "0.8rem 1rem",
                    borderRadius: 4, textDecoration: "none",
                    borderBottom: "1px solid rgba(200,164,93,0.06)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(200,164,93,0.07)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                    <div style={{ color: "#FAFAF8", fontSize: "0.9rem", fontWeight: 600,
                      fontFamily: "var(--sans)", marginBottom: "0.15rem" }}>{f.label}</div>
                    <div style={{ color: "var(--trust-gray)", fontSize: "0.78rem",
                      fontFamily: "var(--sans)" }}>{f.sub}</div>
                  </Link>
                ))}
                <Link href="/product" style={{
                  display: "block", padding: "0.75rem 1rem", textDecoration: "none",
                  color: "#C8A45D", fontSize: "0.82rem", fontWeight: 600,
                  fontFamily: "var(--sans)", letterSpacing: "0.03em",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(200,164,93,0.07)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                  View all 6 modules →
                </Link>
              </div>
            )}
          </div>

          {[
            { href: "/demo", label: "Demo" },
            { href: "/pricing", label: "Pricing" },
            { href: "/blog", label: "Blog" },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="nav-link"
              style={{ textDecoration: "none", fontFamily: "var(--sans)",
                fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.02em" }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="desktop-only" style={{ display: "flex", gap: "0.75rem" }}>
          <Link href="/book-demo" className="btn-gold" style={{ fontSize: "0.83rem", padding: "0.65rem 1.4rem" }}>
            Book a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-only" onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#FAFAF8", cursor: "pointer", display: "block" }}
          aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-only" style={{
          background: "#09121E", borderTop: "1px solid rgba(200,164,93,0.1)",
          padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem",
        }}>
          {[
            { href: "/ai-medical-scribe", label: "AI Medical Scribe" },
            { href: "/patient-follow-up", label: "Follow-up Engine" },
            { href: "/clinic-crm", label: "Patient CRM" },
            { href: "/physio-ortho-clinics", label: "Physio & Ortho" },
            { href: "/product", label: "All Features" },
            { href: "/demo", label: "Demo" },
            { href: "/pricing", label: "Pricing" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About" },
          ].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: "rgba(250,250,248,0.75)", textDecoration: "none",
                fontSize: "1rem", fontFamily: "var(--sans)",
                padding: "0.5rem 0", borderBottom: "1px solid rgba(200,164,93,0.08)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/book-demo" onClick={() => setOpen(false)}
            className="btn-gold" style={{ textAlign: "center", marginTop: "0.5rem" }}>
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
