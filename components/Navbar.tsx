"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/demo", label: "Demo" },
  { href: "/physio-ortho-clinics", label: "For Physio & Ortho" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#0F2A1D",
        borderBottom: scrolled
          ? "1px solid rgba(200,169,106,0.25)"
          : "1px solid rgba(200,169,106,0.12)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#F7F1E5",
              letterSpacing: "-0.01em",
            }}
          >
            Cureo
          </span>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#C8A96A",
              letterSpacing: "-0.01em",
            }}
          >
            max
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(247,241,229,0.75)",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                fontFamily: "var(--font-body)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#C8A96A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(247,241,229,0.75)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          className="hidden-mobile"
        >
          <Link
            href="/book-demo"
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.6rem 1.4rem" }}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "#F7F1E5",
            cursor: "pointer",
            padding: "0.25rem",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "#0F2A1D",
            borderTop: "1px solid rgba(200,169,106,0.15)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: "rgba(247,241,229,0.8)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "var(--font-body)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-demo"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{ textAlign: "center" }}
          >
            Book a Demo
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
