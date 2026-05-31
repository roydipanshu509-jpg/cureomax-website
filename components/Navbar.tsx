"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Products",
    dropdown: [
      { href: "/clinic-os", label: "Clinic OS", sub: "For Clinics & Doctors" },
      { href: "/authority-os", label: "Authority OS", sub: "For Individual Doctors" },
      { href: "/brand-connect", label: "Brand Connect", sub: "For Healthcare Brands" },
    ],
  },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(17,16,14,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(200,164,93,0.12)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 600, color: "#FAFAF7", letterSpacing: "-0.01em" }}>Cureo</span>
          <span style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 600, color: "#C8A45D", letterSpacing: "-0.01em" }}>max</span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} style={{ position: "relative" }}
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}>
                <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem", color: "rgba(250,250,247,0.7)", fontFamily: "var(--sans)", fontSize: "0.87rem", fontWeight: 500, letterSpacing: "0.02em" }}>
                  {item.label} <ChevronDown size={13} />
                </button>
                {dropOpen && (
                  <div style={{ position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: "#11100E", border: "1px solid rgba(200,164,93,0.15)", borderRadius: 4, padding: "0.5rem", minWidth: 240, boxShadow: "0 16px 48px rgba(0,0,0,0.5)" }}>
                    {item.dropdown.map((d) => (
                      <Link key={d.href} href={d.href} style={{ display: "block", padding: "0.75rem 1rem", borderRadius: 3, textDecoration: "none", transition: "background 0.15s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,164,93,0.08)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                        <div style={{ color: "#FAFAF7", fontSize: "0.88rem", fontWeight: 600, fontFamily: "var(--sans)", marginBottom: "0.1rem" }}>{d.label}</div>
                        <div style={{ color: "var(--trust-gray)", fontSize: "0.75rem", fontFamily: "var(--sans)" }}>{d.sub}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href!} style={{ color: "rgba(250,250,247,0.7)", textDecoration: "none", fontFamily: "var(--sans)", fontSize: "0.87rem", fontWeight: 500, letterSpacing: "0.02em", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A45D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,250,247,0.7)")}>
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="desktop-only" style={{ display: "flex", gap: "0.75rem" }}>
          <Link href="/book-demo" className="btn-gold" style={{ fontSize: "0.82rem", padding: "0.65rem 1.4rem" }}>Book Strategy Call</Link>
        </div>

        {/* Mobile */}
        <button className="mobile-only" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#FAFAF7", cursor: "pointer", display: "block" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-only" style={{ background: "#11100E", borderTop: "1px solid rgba(200,164,93,0.12)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link href="/clinic-os" onClick={() => setOpen(false)} style={{ color: "rgba(250,250,247,0.8)", textDecoration: "none", fontSize: "1rem", fontFamily: "var(--sans)" }}>Clinic OS</Link>
          <Link href="/authority-os" onClick={() => setOpen(false)} style={{ color: "rgba(250,250,247,0.8)", textDecoration: "none", fontSize: "1rem", fontFamily: "var(--sans)" }}>Authority OS</Link>
          <Link href="/brand-connect" onClick={() => setOpen(false)} style={{ color: "rgba(250,250,247,0.8)", textDecoration: "none", fontSize: "1rem", fontFamily: "var(--sans)" }}>Brand Connect</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} style={{ color: "rgba(250,250,247,0.8)", textDecoration: "none", fontSize: "1rem", fontFamily: "var(--sans)" }}>Pricing</Link>
          <Link href="/book-demo" onClick={() => setOpen(false)} className="btn-gold" style={{ textAlign: "center" }}>Book Strategy Call</Link>
        </div>
      )}
    </header>
  );
}
