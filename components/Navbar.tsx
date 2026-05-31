"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

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
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(8,15,24,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,164,93,0.1)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo with mark */}
        <Logo variant="dark" size="md" />

        {/* Desktop Nav */}
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: "0.3rem",
                    color: "rgba(250,250,248,0.65)", fontFamily: "var(--sans)",
                    fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.02em",
                    transition: "color 0.2s",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A45D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,250,248,0.65)")}
                >
                  {item.label} <ChevronDown size={13} />
                </button>

                {dropOpen && (
                  <div
                    style={{
                      position: "absolute", top: "calc(100% + 10px)", left: "50%",
                      transform: "translateX(-50%)",
                      background: "#09121E",
                      border: "1px solid rgba(200,164,93,0.15)",
                      borderRadius: 6, padding: "0.5rem", minWidth: 250,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                    }}
                  >
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        style={{
                          display: "block", padding: "0.8rem 1rem",
                          borderRadius: 4, textDecoration: "none",
                          transition: "background 0.15s",
                          borderBottom: "1px solid rgba(200,164,93,0.06)",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,164,93,0.07)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <div
                          style={{
                            color: "#FAFAF8", fontSize: "0.9rem",
                            fontWeight: 600, fontFamily: "var(--sans)", marginBottom: "0.15rem",
                          }}
                        >
                          {d.label}
                        </div>
                        <div
                          style={{
                            color: "var(--trust-gray)", fontSize: "0.78rem",
                            fontFamily: "var(--sans)",
                          }}
                        >
                          {d.sub}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                style={{
                  color: "rgba(250,250,248,0.65)", textDecoration: "none",
                  fontFamily: "var(--sans)", fontSize: "0.875rem",
                  fontWeight: 500, letterSpacing: "0.02em", transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A45D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,250,248,0.65)")}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="desktop-only" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <Link
            href="/book-demo"
            className="btn-gold"
            style={{ fontSize: "0.83rem", padding: "0.65rem 1.4rem" }}
          >
            Book Strategy Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-only"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#FAFAF8", cursor: "pointer", display: "block", padding: "4px" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="mobile-only"
          style={{
            background: "#09121E",
            borderTop: "1px solid rgba(200,164,93,0.1)",
            padding: "1.5rem",
            display: "flex", flexDirection: "column", gap: "1rem",
          }}
        >
          {[
            { href: "/clinic-os", label: "Clinic OS" },
            { href: "/authority-os", label: "Authority OS" },
            { href: "/brand-connect", label: "Brand Connect" },
            { href: "/demo", label: "Demo" },
            { href: "/pricing", label: "Pricing" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: "rgba(250,250,248,0.75)", textDecoration: "none",
                fontSize: "1rem", fontFamily: "var(--sans)",
                padding: "0.5rem 0", borderBottom: "1px solid rgba(200,164,93,0.08)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book-demo" onClick={() => setOpen(false)} className="btn-gold" style={{ textAlign: "center", marginTop: "0.5rem" }}>
            Book Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
}
