import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users, BarChart3, Zap, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Cureomax | AI Growth Systems for Healthcare Trust",
  description: "Cureomax builds AI-powered growth, automation, and digital authority systems for doctors, clinics, and healthcare brands.",
};

// ── Dashboard Metrics ──────────────────────────────────────────────────────────
const dashMetrics = [
  { label: "Authority Score", value: "87/100", trend: "+12 this month", color: "#C8A45D" },
  { label: "Follow-up Rate", value: "94%", trend: "↑ from 61%", color: "#A8B8A1" },
  { label: "Brand Fit Index", value: "9.2", trend: "3 matches ready", color: "#C8A45D" },
  { label: "Revenue Insights", value: "₹4.2L", trend: "this month", color: "#A8B8A1" },
  { label: "Compliance Score", value: "98%", trend: "All flags cleared", color: "#C8A45D" },
  { label: "Growth Report", value: "↑ 34%", trend: "vs last quarter", color: "#A8B8A1" },
];

// ── Problems ──────────────────────────────────────────────────────────────────
const problems = [
  { icon: "📱", title: "Missed Follow-ups", desc: "Patients don't come back because no system exists to bring them back." },
  { icon: "📉", title: "Weak Patient Retention", desc: "Clinics lose 40–60% of patients after the first visit with no recovery mechanism." },
  { icon: "👁", title: "Zero Performance Visibility", desc: "No data on conversion rates, content reach, or doctor authority signals." },
  { icon: "🤝", title: "Unstructured Collaborations", desc: "Brand deals arrive through random DMs with no compliance layer or value tracking." },
];

// ── Three Verticals ──────────────────────────────────────────────────────────
const verticals = [
  {
    tag: "For Clinics",
    title: "Clinic OS",
    fullTitle: "Cureomax Clinic OS",
    desc: "An AI operating system for small and mid-sized clinics to manage patients, appointments, follow-ups, billing, and performance analytics.",
    features: ["Patient CRM", "WhatsApp reminders", "AI visit summaries", "Follow-up automation", "Billing dashboard", "Clinic analytics"],
    href: "/clinic-os",
    accentColor: "#102A24",
    accentBorder: "#1A3D2E",
    tagColor: "#A8B8A1",
    bgGradient: "radial-gradient(ellipse at 20% 80%, rgba(16,42,36,0.4) 0%, transparent 60%)",
  },
  {
    tag: "For Doctors",
    title: "Authority OS",
    fullTitle: "Cureomax Authority OS",
    desc: "A private digital authority dashboard that helps doctors measure their online credibility, generate a premium media kit, and unlock reputation-safe healthcare partnerships.",
    features: ["Authority Score", "Social performance insights", "Audience trust analytics", "Premium media kit", "Compliance checklist", "Brand-fit engine"],
    href: "/authority-os",
    accentColor: "#1A1508",
    accentBorder: "#8B6E35",
    tagColor: "#C8A45D",
    bgGradient: "radial-gradient(ellipse at 80% 20%, rgba(200,164,93,0.08) 0%, transparent 60%)",
  },
  {
    tag: "For Brands",
    title: "Brand Connect",
    fullTitle: "Cureomax Brand Connect",
    desc: "A compliant doctor-brand collaboration platform for healthcare companies that want to work with verified medical professionals and track campaign performance.",
    features: ["Verified doctor discovery", "Specialty-based matching", "Campaign CRM", "Content approval workflow", "Compliance tracking", "ROI reports"],
    href: "/brand-connect",
    accentColor: "#0F1510",
    accentBorder: "#2A3A28",
    tagColor: "#A8B8A1",
    bgGradient: "radial-gradient(ellipse at 50% 100%, rgba(168,184,161,0.06) 0%, transparent 60%)",
  },
];

// ── Timeline Steps ────────────────────────────────────────────────────────────
const steps = [
  { num: "01", title: "Audit", desc: "We analyze your clinic's, doctor profile's, or brand's current digital and operational presence." },
  { num: "02", title: "System Design", desc: "We build the right dashboard, workflows, automations, and reporting layers for your specific use case." },
  { num: "03", title: "Launch", desc: "We deploy the Cureomax system with CRM, analytics, content, and automation modules fully configured." },
  { num: "04", title: "Optimize", desc: "We track growth, performance, trust signals, and revenue opportunities monthly with detailed reports." },
];

// ── Trust Badges ─────────────────────────────────────────────────────────────
const trustItems = [
  "Doctor-approved workflows",
  "Compliance-first content review",
  "Patient privacy awareness",
  "No autonomous diagnosis",
  "Clear sponsorship disclosure",
  "Ethical partnership matching",
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: 68 }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: "var(--obsidian)",
        backgroundImage: "radial-gradient(ellipse at 15% 60%, rgba(16,42,36,0.5) 0%, transparent 50%), radial-gradient(ellipse at 85% 20%, rgba(200,164,93,0.06) 0%, transparent 50%)",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(200,164,93,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,93,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(200,164,93,0.08)", border: "1px solid rgba(200,164,93,0.2)", borderRadius: 2, padding: "0.4rem 1rem", marginBottom: "2rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8A45D", display: "inline-block" }} />
              <span style={{ color: "#C8A45D", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>AI Growth Systems for Healthcare</span>
            </div>

            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 600, color: "#FAFAF7", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              AI Growth Systems for Doctors, Clinics &amp; Healthcare Brands
            </h1>

            <p style={{ fontSize: "1.05rem", color: "rgba(232,216,184,0.72)", lineHeight: 1.8, maxWidth: 560, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
              Cureomax helps healthcare professionals automate patient engagement, measure digital authority, and build ethical growth systems without compromising medical trust.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
              <Link href="/book-demo" className="btn-gold">Book a Strategy Call <ArrowRight size={15} /></Link>
              <Link href="/clinic-os" className="btn-outline-gold">Explore Cureomax OS</Link>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {["HIPAA-aware design", "Compliance-first AI", "Doctor-in-the-loop"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.82rem", color: "rgba(168,184,161,0.85)", fontFamily: "var(--sans)" }}>
                  <CheckCircle size={13} color="#A8B8A1" /> {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="desktop-only" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "#0D1412", border: "1px solid rgba(200,164,93,0.15)", borderRadius: 8, padding: "1.5rem", boxShadow: "0 24px 80px rgba(0,0,0,0.5)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div>
                  <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>Cureomax OS — Overview</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600, color: "#FAFAF7" }}>Dr. Aviral Mehta</p>
                </div>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#A8B8A1", boxShadow: "0 0 8px rgba(168,184,161,0.6)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
                {dashMetrics.map((m) => (
                  <div key={m.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, padding: "1rem" }}>
                    <p style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)", marginBottom: "0.4rem" }}>{m.label}</p>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 600, color: m.color, lineHeight: 1 }}>{m.value}</p>
                    <p style={{ fontSize: "0.68rem", color: "rgba(232,216,184,0.45)", fontFamily: "var(--sans)", marginTop: "0.3rem" }}>{m.trend}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ background: "#0D1412", border: "1px solid rgba(200,164,93,0.1)", borderRadius: 6, padding: "1.25rem" }}>
                <p style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)", marginBottom: "0.75rem" }}>Follow-up Pipeline</p>
                {[["Knee Rehab", "Day 5", 85], ["PCOS Follow-up", "Day 3", 60], ["Post-Op Care", "Day 8", 40]].map(([name, day, pct]) => (
                  <div key={name as string} style={{ marginBottom: "0.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                      <span style={{ fontSize: "0.75rem", color: "rgba(250,250,247,0.7)", fontFamily: "var(--sans)" }}>{name as string}</span>
                      <span style={{ fontSize: "0.68rem", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>{day as string}</span>
                    </div>
                    <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#0D1412", border: "1px solid rgba(200,164,93,0.1)", borderRadius: 6, padding: "1.25rem" }}>
                <p style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)", marginBottom: "0.75rem" }}>Brand Matches</p>
                {[["MedLife Diagnostics", "Excellent fit", "#A8B8A1"], ["HealthTech India", "Good fit", "#C8A45D"], ["Apollo Wellness", "Review", "#8D8A80"]].map(([name, fit, c]) => (
                  <div key={name as string} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: "0.78rem", color: "rgba(250,250,247,0.7)", fontFamily: "var(--sans)" }}>{name as string}</span>
                    <span style={{ fontSize: "0.65rem", fontWeight: 600, color: c as string, fontFamily: "var(--sans)" }}>{fit as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--charcoal)", padding: "6rem 1.5rem", borderTop: "1px solid rgba(200,164,93,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>The Problem</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#FAFAF7", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Healthcare growth is still fragmented.
            </h2>
            <p style={{ color: "rgba(232,216,184,0.65)", fontSize: "1rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>
              Doctors manage patients on WhatsApp, content on Instagram, appointments in spreadsheets, follow-ups manually, and brand opportunities through random DMs. Cureomax brings all of this into structured systems built for healthcare trust.
            </p>
          </div>
          <div className="grid-3" style={{ gap: "1.25rem" }}>
            {problems.map((p) => (
              <div key={p.title} className="card-dark hover-glow" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 600, color: "#FAFAF7", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: "rgba(232,216,184,0.6)", fontSize: "0.88rem", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE VERTICALS ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--obsidian)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>One Platform. Three Workspaces.</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#FAFAF7", lineHeight: 1.15 }}>
              Built for every layer of healthcare growth
            </h2>
          </div>
          <div className="grid-3">
            {verticals.map((v) => (
              <div key={v.title} className="hover-glow" style={{ background: `${v.accentColor}`, backgroundImage: v.bgGradient, border: `1px solid ${v.accentBorder}`, borderRadius: 6, padding: "2.5rem", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", border: `1px solid ${v.tagColor}33`, borderRadius: 2, padding: "0.25rem 0.75rem", marginBottom: "1.5rem", alignSelf: "flex-start" }}>
                  <span style={{ color: v.tagColor, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>{v.tag}</span>
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 600, color: "#FAFAF7", marginBottom: "1rem" }}>{v.fullTitle}</h3>
                <p style={{ color: "rgba(232,216,184,0.65)", fontSize: "0.9rem", lineHeight: 1.75, fontFamily: "var(--sans)", marginBottom: "2rem", flex: 1 }}>{v.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                  {v.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <CheckCircle size={13} color={v.tagColor} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: "0.85rem", color: "rgba(232,216,184,0.7)", fontFamily: "var(--sans)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href={v.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: v.tagColor, fontFamily: "var(--sans)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.03em", borderTop: `1px solid ${v.tagColor}22`, paddingTop: "1.25rem" }}>
                  View {v.title} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHORITY OS HIGHLIGHT ────────────────────────────────────────── */}
      <section style={{ background: "#0A0F09", padding: "6rem 1.5rem", borderTop: "1px solid rgba(200,164,93,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Authority OS</p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#FAFAF7", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Turn medical expertise into measurable digital authority.
              </h2>
              <p style={{ color: "rgba(232,216,184,0.65)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem", fontFamily: "var(--sans)" }}>
                Built for doctors who want to grow their professional presence, attract the right opportunities, and protect their reputation.
              </p>
              <div style={{ background: "rgba(200,164,93,0.06)", border: "1px solid rgba(200,164,93,0.15)", borderRadius: 4, padding: "1.25rem 1.5rem", marginBottom: "2rem", borderLeft: "3px solid #C8A45D" }}>
                <p style={{ color: "rgba(232,216,184,0.85)", fontSize: "0.92rem", lineHeight: 1.7, fontFamily: "var(--sans)", fontStyle: "italic" }}>
                  "Cureomax does not turn doctors into influencers. It helps doctors become trusted medical authorities with measurable credibility and ethical partnership systems."
                </p>
              </div>
              <Link href="/authority-os" className="btn-gold">Explore Authority OS <ArrowRight size={15} /></Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: <Star size={16} color="#C8A45D" />, title: "Authority Score", desc: "Measures credibility across content quality, consistency, engagement, and professional presence." },
                { icon: <Shield size={16} color="#A8B8A1" />, title: "Compliance Safety Layer", desc: "Flags risky claims, undisclosed promotions, and patient privacy risks before they go live." },
                { icon: <TrendingUp size={16} color="#C8A45D" />, title: "Brand Fit Engine", desc: "Identifies ethical partnership categories — diagnostics, healthtech, medical devices, and more." },
                { icon: <BarChart3 size={16} color="#A8B8A1" />, title: "Monthly Growth Report", desc: "Performance insights, content analytics, patient trust signals, and recommended next actions." },
              ].map((m) => (
                <div key={m.title} className="card-dark" style={{ padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,164,93,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{m.icon}</div>
                  <div>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 600, color: "#FAFAF7", marginBottom: "0.25rem" }}>{m.title}</p>
                    <p style={{ fontSize: "0.82rem", color: "rgba(232,216,184,0.55)", lineHeight: 1.6, fontFamily: "var(--sans)" }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="eyebrow" style={{ color: "#8B6E35", marginBottom: "1rem" }}>The Process</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "var(--charcoal)", lineHeight: 1.15 }}>How Cureomax works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0" }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{ padding: "2rem 1.5rem", borderRight: i < steps.length - 1 ? "1px solid rgba(15,20,18,0.1)" : "none", position: "relative" }}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", fontWeight: 600, color: "rgba(15,20,18,0.08)", lineHeight: 1, marginBottom: "0.75rem" }}>{s.num}</p>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 600, color: "var(--charcoal)", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#4A4540", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--forest)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Compliance & Trust</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#FAFAF7", marginBottom: "1rem" }}>
            Designed for healthcare trust from day one.
          </h2>
          <p style={{ color: "rgba(232,216,184,0.65)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 580, margin: "0 auto 3rem", fontFamily: "var(--sans)" }}>
            In healthcare, growth without trust is a liability. Cureomax is built around reputation-safe systems for doctors, clinics, and brands.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", textAlign: "left" }}>
            {trustItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1.25rem 1.5rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,184,161,0.15)", borderRadius: 4 }}>
                <CheckCircle size={15} color="#A8B8A1" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "rgba(232,216,184,0.8)", fontSize: "0.88rem", fontFamily: "var(--sans)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--charcoal)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center", gap: "0.3rem" }}>
            {[1,2,3,4,5].map((n) => <Star key={n} size={16} color="#C8A45D" fill="#C8A45D" />)}
          </div>
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 400, color: "#FAFAF7", lineHeight: 1.6, fontStyle: "italic", marginBottom: "2rem" }}>
            "Cureomax helped us see patient follow-ups, content performance, and growth opportunities in one dashboard. We recovered 38% of lost patients in the first month."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(200,164,93,0.15)", border: "1px solid rgba(200,164,93,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600, color: "#C8A45D" }}>A</span>
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ color: "#FAFAF7", fontWeight: 600, fontSize: "0.9rem", fontFamily: "var(--sans)" }}>Dr. Ananya Sharma</p>
              <p style={{ color: "var(--trust-gray)", fontSize: "0.8rem", fontFamily: "var(--sans)" }}>Clinic Founder, Delhi NCR</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--obsidian)", padding: "7rem 1.5rem", backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(200,164,93,0.07) 0%, transparent 60%)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Private Strategy Call</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#FAFAF7", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Build your healthcare growth system with Cureomax.
          </h2>
          <p style={{ color: "rgba(232,216,184,0.65)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            Whether you are a doctor, clinic owner, or healthcare brand, Cureomax helps you build a system that turns trust into structured growth.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/book-demo" className="btn-gold">Book a Private Strategy Call <ArrowRight size={15} /></Link>
            <Link href="/demo" className="btn-outline-gold">Request Demo Dashboard</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
