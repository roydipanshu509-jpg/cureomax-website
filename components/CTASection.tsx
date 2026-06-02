import Link from "next/link";

/**
 * CTASection — Taction-inspired gradient CTA block.
 * Use near the bottom of every marketing page.
 *
 * <CTASection
 *   headline="Ready to transform your clinic?"
 *   primaryCTA={{ label: "Book a Demo", href: "/book-demo" }}
 * />
 */

interface CTASectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "teal" | "gold";
}

export default function CTASection({
  eyebrow = "Ready to transform your clinic?",
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  variant = "teal",
}: CTASectionProps) {
  const gradientClass = variant === "teal" ? "cta-gradient" : "cta-gradient-gold";

  return (
    <section
      className={`${gradientClass} dot-texture border-glow-top border-glow-bottom`}
      style={{ position: "relative", padding: "5.5rem 1.5rem", textAlign: "center", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {eyebrow && (
          <p className="section-label" style={{ justifyContent: "center", marginBottom: "1.25rem" }}>
            {eyebrow}
          </p>
        )}
        <h2
          className="serif-lg"
          style={{ color: "#FAFAF8", marginBottom: subheadline ? "1rem" : "2rem" }}
        >
          {headline}
        </h2>
        {subheadline && (
          <p style={{ fontSize: "1.05rem", color: "rgba(250,250,248,0.6)", lineHeight: 1.7, marginBottom: "2rem" }}>
            {subheadline}
          </p>
        )}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
          <Link href={primaryCTA.href} className="btn-gold" style={{ fontSize: "0.9rem" }}>
            {primaryCTA.label} →
          </Link>
          {secondaryCTA && (
            <Link href={secondaryCTA.href} className="btn-outline-gold" style={{ fontSize: "0.9rem" }}>
              {secondaryCTA.label}
            </Link>
          )}
        </div>

        {/* Trust signals */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
          {["No setup fee", "DPDP Act compliant", "WhatsApp live in 24h", "Cancel anytime"].map((item) => (
            <span
              key={item}
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", color: "rgba(250,250,248,0.5)" }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7.25" stroke="#0A7075" strokeWidth="1.5" />
                <path d="M5 8l2 2 4-4" stroke="#0A7075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
