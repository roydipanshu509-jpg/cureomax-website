import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand Connect — Doctor-Brand Collaboration Platform | Cureomax",
  description: "Cureomax Brand Connect: Verified doctor discovery, compliant healthcare campaigns, content approval workflow, and ROI tracking for healthcare brands.",
};

const features = [
  { icon: "🔍", title: "Verified Doctor Network", desc: "Access a curated database of verified Indian doctors with specialty, location, authority score, and audience trust data." },
  { icon: "🎯", title: "Specialty-Based Matching", desc: "Filter by specialty, city, patient audience type, authority score, and content category to find the exact medical voice your brand needs." },
  { icon: "📊", title: "Campaign CRM", desc: "Manage the full collaboration lifecycle — outreach, negotiation, brief, content draft, approval, publishing, and reporting — in one workflow." },
  { icon: "✅", title: "Content Approval Workflow", desc: "Every piece of content goes through a structured approval layer with compliance checks, medical claim reviews, and disclosure confirmation." },
  { icon: "⚖️", title: "Compliance Tracking", desc: "Built-in ASCI/ICMR guideline awareness, disclosure enforcement, and claim flagging to protect your brand from regulatory risk." },
  { icon: "📈", title: "ROI & Performance Reports", desc: "Track reach, engagement, trust signals, audience quality, and brand lift metrics for every doctor collaboration." },
];

const useCases = [
  { brand: "Diagnostics & Labs", fit: "Partner with specialty doctors who regularly recommend tests. Build credibility in specific disease categories." },
  { brand: "Healthtech Apps", fit: "Collaborate with doctors to explain the product, demonstrate clinical utility, and reach patient audiences." },
  { brand: "Medical Devices", fit: "Connect with the right surgical or clinical specialists who use and recommend your device category." },
  { brand: "Wellness Platforms", fit: "Work with preventive care, nutrition, and lifestyle doctors who reach health-conscious patient segments." },
  { brand: "Pharma & Nutraceuticals", fit: "Run ethical, disclosure-compliant educational campaigns with verified medical professionals." },
  { brand: "Hospitals & Clinics", fit: "Build referral relationships, co-create content, and increase specialist visibility through doctor authority networks." },
];

export default function BrandConnectPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section style={{ background: "var(--charcoal)", backgroundImage: "radial-gradient(ellipse at 20% 70%, rgba(16,42,36,0.4) 0%, transparent 55%)", padding: "6rem 1.5rem", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(168,184,161,0.08)", border: "1px solid rgba(168,184,161,0.2)", borderRadius: 2, padding: "0.35rem 1rem", marginBottom: "2rem" }}>
            <span style={{ color: "#A8B8A1", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>For Healthcare Brands</span>
          </div>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 600, color: "#FAFAF7", lineHeight: 1.1, maxWidth: 800, marginBottom: "1.5rem" }}>
            Healthcare brands need trusted medical voices, not random influencers.
          </h1>
          <p style={{ color: "rgba(232,216,184,0.7)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 580, marginBottom: "2rem", fontFamily: "var(--sans)" }}>
            Cureomax Brand Connect helps healthcare companies collaborate with verified doctors in a way that protects medical credibility, brand trust, and regulatory safety.
          </p>
          <div style={{ background: "rgba(168,184,161,0.06)", border: "1px solid rgba(168,184,161,0.15)", borderRadius: 4, padding: "1.25rem 1.5rem", maxWidth: 560, marginBottom: "2.5rem", borderLeft: "3px solid #A8B8A1" }}>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <Shield size={15} color="#A8B8A1" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ color: "rgba(232,216,184,0.75)", fontSize: "0.88rem", lineHeight: 1.65, fontFamily: "var(--sans)" }}>
                Every collaboration on Brand Connect is routed through a compliance layer. Doctors control what they endorse. Brands get verified medical authority, not manufactured reach.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-gold">Request Brand Access <ArrowRight size={15} /></Link>
            <Link href="/book-demo" className="btn-outline-gold">Book Strategy Call</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "var(--obsidian)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Platform Features</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#FAFAF7", marginBottom: "3.5rem", maxWidth: 560 }}>
            A compliant, structured doctor collaboration system.
          </h2>
          <div className="grid-3" style={{ gap: "1.25rem" }}>
            {features.map((f) => (
              <div key={f.title} className="card-dark hover-glow" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontWeight: 600, color: "#FAFAF7", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.86rem", color: "rgba(232,216,184,0.6)", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ background: "var(--ivory)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "#8B6E35", marginBottom: "1rem" }}>Who It's For</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 600, color: "var(--charcoal)", marginBottom: "3rem" }}>Brand categories on Brand Connect</h2>
          <div className="grid-3" style={{ gap: "1.25rem" }}>
            {useCases.map((u) => (
              <div key={u.brand} className="card-light" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600, color: "var(--charcoal)", marginBottom: "0.5rem" }}>{u.brand}</h3>
                <p style={{ fontSize: "0.86rem", color: "#4A4540", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{u.fit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--charcoal)", padding: "6rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#FAFAF7", marginBottom: "1rem" }}>
            Build healthcare campaigns that doctors trust.
          </h2>
          <p style={{ color: "rgba(232,216,184,0.65)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", fontFamily: "var(--sans)" }}>
            Reach verified Indian doctors through a compliance-first platform. Brand Connect is currently in private access for healthcare companies.
          </p>
          <Link href="/book-demo" className="btn-gold">Request Brand Access <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  );
}
