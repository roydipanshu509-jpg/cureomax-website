"use client";
import Link from "next/link";
import { CheckCircle, ArrowRight, Shield, Star, TrendingUp, BarChart3, FileText, Zap } from "lucide-react";


const modules = [
  {
    icon: <Star size={20} color="#C8A45D" />,
    title: "Authority Score",
    desc: "Measures credibility across content quality, consistency, engagement, audience trust, specialty relevance, and professional presence. Updated monthly.",
    metrics: ["Content Quality", "Consistency Index", "Audience Trust", "Specialty Relevance"],
  },
  {
    icon: <FileText size={20} color="#C8A45D" />,
    title: "Media Kit Generator",
    desc: "Creates a premium doctor profile with bio, specialties, audience insights, top content, collaboration rules, and brand-safe positioning.",
    metrics: ["Doctor Bio", "Audience Insights", "Top Content", "Collaboration Terms"],
  },
  {
    icon: <Zap size={20} color="#A8B8A1" />,
    title: "Brand Fit Engine",
    desc: "Identifies ethical partnership categories — diagnostics, healthtech apps, medical devices, wellness education, and patient platforms.",
    metrics: ["Category Matching", "Ethics Score", "Brand Alignment", "Revenue Potential"],
  },
  {
    icon: <Shield size={20} color="#A8B8A1" />,
    title: "Compliance Safety Layer",
    desc: "Flags risky claims, undisclosed promotions, misleading health statements, before-after claims, and patient privacy risks before they go live.",
    metrics: ["Risk Flags", "Disclosure Checker", "Claim Validator", "Privacy Audit"],
  },
  {
    icon: <BarChart3 size={20} color="#C8A45D" />,
    title: "Deal CRM",
    desc: "Tracks brand leads from outreach to negotiation, content approval, publishing, reporting, and payment in one structured workflow.",
    metrics: ["Pipeline View", "Approval Flow", "Payment Tracking", "Performance Log"],
  },
  {
    icon: <TrendingUp size={20} color="#C8A45D" />,
    title: "Monthly Growth Report",
    desc: "Performance, content insights, patient trust signals, and recommended next actions — delivered as a private monthly intelligence report.",
    metrics: ["Growth Signals", "Content Analysis", "Trust Metrics", "Next Actions"],
  },
];

const principles = [
  { title: "Doctors, not influencers", desc: "Authority OS is built around professional credibility. Every metric reflects medical trust, not follower counts." },
  { title: "Reputation-safe by design", desc: "The compliance layer reviews every collaboration request against healthcare ethics guidelines before it reaches you." },
  { title: "Verified partnerships only", desc: "Brands are vetted before they can contact doctors. No random DMs. No irrelevant product requests." },
  { title: "Your data stays private", desc: "Your authority metrics, audience data, and deal history are private and never shared without explicit consent." },
];

export default function AuthorityOSPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section style={{
        background: "#0A0905",
        backgroundImage: "radial-gradient(ellipse at 30% 60%, rgba(200,164,93,0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(139,110,53,0.06) 0%, transparent 50%)",
        padding: "6rem 1.5rem",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(200,164,93,0.08)", border: "1px solid rgba(200,164,93,0.2)", borderRadius: 2, padding: "0.35rem 1rem", marginBottom: "2rem" }}>
            <span style={{ color: "#C8A45D", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>For Individual Doctors</span>
          </div>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#FAFAF7", lineHeight: 1.08, maxWidth: 760, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Turn medical expertise into measurable digital authority.
          </h1>
          <p style={{ color: "rgba(232,216,184,0.7)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 580, marginBottom: "1.75rem", fontFamily: "var(--sans)" }}>
            Built for doctors who want to grow their professional presence, attract the right opportunities, and protect their reputation — without compromising medical ethics.
          </p>
          <div style={{ background: "rgba(200,164,93,0.06)", border: "1px solid rgba(200,164,93,0.15)", borderRadius: 4, padding: "1.25rem 1.5rem", maxWidth: 560, marginBottom: "2.5rem", borderLeft: "3px solid #C8A45D" }}>
            <p style={{ color: "rgba(232,216,184,0.85)", fontSize: "0.92rem", lineHeight: 1.7, fontFamily: "var(--sans)", fontStyle: "italic" }}>
              "Cureomax does not turn doctors into influencers. It helps doctors become trusted medical authorities with measurable credibility and ethical partnership systems."
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-gold">Get Early Access <ArrowRight size={15} /></Link>
            <Link href="#modules" className="btn-outline-gold">See All Modules</Link>
          </div>
        </div>
      </section>

      {/* Core Principle */}
      <section style={{ background: "var(--charcoal)", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {principles.map((p) => (
            <div key={p.title} style={{ borderLeft: "3px solid rgba(200,164,93,0.25)", paddingLeft: "1.25rem" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600, color: "#C8A45D", marginBottom: "0.5rem" }}>{p.title}</h3>
              <p style={{ fontSize: "0.86rem", color: "rgba(232,216,184,0.6)", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section id="modules" style={{ background: "var(--obsidian)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Six Modules</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#FAFAF7", marginBottom: "3.5rem", maxWidth: 560 }}>
            A complete authority system for modern Indian doctors.
          </h2>
          <div className="grid-3" style={{ gap: "1.5rem" }}>
            {modules.map((m) => (
              <div key={m.title} className="hover-glow" style={{ background: "rgba(200,164,93,0.03)", border: "1px solid rgba(200,164,93,0.12)", borderRadius: 6, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(200,164,93,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>{m.icon}</div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600, color: "#FAFAF7" }}>{m.title}</h3>
                </div>
                <p style={{ fontSize: "0.86rem", color: "rgba(232,216,184,0.6)", lineHeight: 1.7, fontFamily: "var(--sans)", marginBottom: "1.5rem", flex: 1 }}>{m.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {m.metrics.map((metric) => (
                    <span key={metric} style={{ background: "rgba(200,164,93,0.06)", border: "1px solid rgba(200,164,93,0.12)", borderRadius: 2, padding: "0.2rem 0.6rem", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>{metric}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0A0905", padding: "6rem 1.5rem", textAlign: "center", backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(200,164,93,0.08) 0%, transparent 60%)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Private Access</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#FAFAF7", marginBottom: "1rem" }}>
            Authority OS is in private early access.
          </h2>
          <p style={{ color: "rgba(232,216,184,0.65)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            We are onboarding a select cohort of Indian doctors in Delhi NCR to refine the Authority Score model and media kit generator.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-gold">Request Early Access <ArrowRight size={15} /></Link>
            <Link href="/book-demo" className="btn-outline-gold">Book Strategy Call</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
