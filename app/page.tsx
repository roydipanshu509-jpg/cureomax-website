"use client";
import Link from "next/link";
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users, BarChart3, Star } from "lucide-react";


const dashMetrics = [
  { label: "Authority Score",   value: "87/100", trend: "+12 this month",   color: "#C8A45D" },
  { label: "Follow-up Rate",    value: "94%",    trend: "↑ from 61%",        color: "#0A7075" },
  { label: "Brand Fit Index",   value: "9.2",    trend: "3 matches ready",   color: "#C8A45D" },
  { label: "Revenue Insights",  value: "₹4.2L",  trend: "this month",        color: "#0A7075" },
  { label: "Compliance Score",  value: "98%",    trend: "All flags cleared", color: "#A8B8A1" },
  { label: "Growth Report",     value: "↑ 34%",  trend: "vs last quarter",   color: "#C8A45D" },
];

const problems = [
  { icon: "📱", title: "Missed follow-ups", desc: "Patients don't come back because no system exists to bring them back automatically." },
  { icon: "📉", title: "Weak patient retention", desc: "Clinics lose 40–60% of patients after the first visit with no recovery mechanism." },
  { icon: "👁", title: "Zero performance visibility", desc: "No data on conversion rates, content reach, or doctor authority signals." },
  { icon: "🤝", title: "Unstructured collaborations", desc: "Brand deals arrive through random DMs with no compliance layer or value tracking." },
];

const verticals = [
  {
    tag: "For Clinics",
    title: "Cureomax Clinic OS",
    desc: "An AI operating system for small and mid-sized clinics to manage patients, appointments, follow-ups, billing, and performance analytics.",
    features: ["Patient CRM", "WhatsApp reminders", "AI visit summaries", "Follow-up automation", "Billing dashboard", "Clinic analytics"],
    href: "/clinic-os",
    accentBorder: "rgba(10,112,117,0.25)",
    tagColor: "#0A7075",
    tagBg: "rgba(10,112,117,0.1)",
    hoverShadow: "0 16px 48px rgba(10,112,117,0.15)",
  },
  {
    tag: "For Doctors",
    title: "Cureomax Authority OS",
    desc: "A private digital authority dashboard that helps doctors measure online credibility, generate a premium media kit, and unlock reputation-safe partnerships.",
    features: ["Authority Score", "Social performance insights", "Audience trust analytics", "Premium media kit", "Compliance checklist", "Brand-fit engine"],
    href: "/authority-os",
    accentBorder: "rgba(200,164,93,0.35)",
    tagColor: "#C8A45D",
    tagBg: "rgba(200,164,93,0.1)",
    hoverShadow: "0 16px 48px rgba(200,164,93,0.12)",
    featured: true,
  },
  {
    tag: "For Brands",
    title: "Cureomax Brand Connect",
    desc: "A compliant doctor-brand collaboration platform for healthcare companies that want to work with verified medical professionals and track campaign ROI.",
    features: ["Verified doctor discovery", "Specialty-based matching", "Campaign CRM", "Content approval workflow", "Compliance tracking", "ROI reports"],
    href: "/brand-connect",
    accentBorder: "rgba(168,184,161,0.25)",
    tagColor: "#A8B8A1",
    tagBg: "rgba(168,184,161,0.08)",
    hoverShadow: "0 16px 48px rgba(168,184,161,0.1)",
  },
];

const steps = [
  { num: "01", title: "Audit", desc: "We analyse your clinic, doctor profile, or brand's current digital and operational presence to find gaps." },
  { num: "02", title: "System Design", desc: "We build the right dashboard, workflows, automations, and reporting layers for your use case." },
  { num: "03", title: "Launch", desc: "We deploy the Cureomax system with CRM, analytics, content, and automation modules fully configured." },
  { num: "04", title: "Optimise", desc: "We track growth, performance, trust signals, and revenue opportunities monthly with detailed reports." },
];

const trustItems = [
  "Doctor-approved workflows", "Compliance-first content review",
  "Patient privacy awareness", "No autonomous diagnosis",
  "Clear sponsorship disclosure", "Ethical partnership matching",
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: 68 }}>

      {/* ── HERO ── */}
      <section
        style={{
          background: "var(--navy-deep)",
          backgroundImage: `
            radial-gradient(ellipse at 10% 70%, rgba(10,112,117,0.14) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 15%, rgba(200,164,93,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(13,27,42,0.8) 0%, transparent 60%)
          `,
          minHeight: "92vh",
          display: "flex", alignItems: "center",
          padding: "5rem 1.5rem 4rem",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Subtle dot grid */}
        <div
          style={{
            position: "absolute", inset: 0, opacity: 0.4,
            backgroundImage: "radial-gradient(circle, rgba(200,164,93,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px", pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                background: "rgba(10,112,117,0.12)",
                border: "1px solid rgba(10,112,117,0.28)",
                borderRadius: 2, padding: "0.4rem 1rem", marginBottom: "2rem",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0A7075", display: "inline-block" }} />
              <span style={{ color: "#0E8E94", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>
                AI Growth Systems for Healthcare
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.6rem, 4.8vw, 4rem)",
                fontWeight: 600, color: "#FAFAF8",
                lineHeight: 1.08, letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              AI Growth Systems for Doctors, Clinics &amp;{" "}
              <span style={{ color: "#C8A45D" }}>Healthcare Brands</span>
            </h1>

            <p
              style={{
                fontSize: "1.05rem", color: "var(--white-70)",
                lineHeight: 1.8, maxWidth: 560, marginBottom: "2.5rem",
                fontFamily: "var(--sans)",
              }}
            >
              Cureomax helps healthcare professionals automate patient engagement, measure digital authority, and build ethical growth systems without compromising medical trust.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
              <Link href="/book-demo" className="btn-gold">Book a Strategy Call <ArrowRight size={15} /></Link>
              <Link href="/clinic-os" className="btn-outline-gold">Explore Cureomax OS</Link>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem" }}>
              {["HIPAA-aware design", "Compliance-first AI", "Doctor-in-the-loop"].map((t) => (
                <div key={t} className="trust-badge">
                  <CheckCircle size={13} color="#0A7075" /> {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="desktop-only" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="dash-wrap">
              <div className="dash-header">
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>
                    CUREOMAX OS — Overview
                  </p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600, color: "#FAFAF8", marginTop: 2 }}>Dr. Aviral Mehta</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0A7075", boxShadow: "0 0 8px rgba(10,112,117,0.6)" }} />
                  <span style={{ fontSize: "0.72rem", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>Live</span>
                </div>
              </div>

              <div style={{ padding: "1.25rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.875rem" }}>
                {dashMetrics.map((m) => (
                  <div key={m.label} className="dash-metric">
                    <p className="dash-label">{m.label}</p>
                    <p className="dash-val" style={{ color: m.color }}>{m.value}</p>
                    <p className="dash-trend">{m.trend}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ background: "#060E18", border: "1px solid rgba(10,112,117,0.14)", borderRadius: 8, padding: "1.25rem" }}>
                <p style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)", marginBottom: "0.9rem" }}>
                  Follow-up Pipeline
                </p>
                {[["Knee Rehab", "Day 5", 85], ["PCOS Follow-up", "Day 3", 60], ["Post-Op Care", "Day 8", 40]].map(([name, day, pct]) => (
                  <div key={name as string} style={{ marginBottom: "0.85rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--white-70)", fontFamily: "var(--sans)" }}>{name as string}</span>
                      <span style={{ fontSize: "0.68rem", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>{day as string}</span>
                    </div>
                    <div className="prog-track"><div className="prog-fill" style={{ width: `${pct}%` }} /></div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#060E18", border: "1px solid rgba(200,164,93,0.12)", borderRadius: 8, padding: "1.25rem" }}>
                <p style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)", marginBottom: "0.9rem" }}>
                  Brand Matches
                </p>
                {[["MedLife Diagnostics", "Excellent fit", "#A8B8A1"], ["HealthTech India", "Good fit", "#C8A45D"], ["Apollo Wellness", "Review", "var(--trust-gray)"]].map(([name, fit, c]) => (
                  <div key={name as string} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.55rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: "0.78rem", color: "var(--white-70)", fontFamily: "var(--sans)" }}>{name as string}</span>
                    <span style={{ fontSize: "0.67rem", fontWeight: 600, color: c as string, fontFamily: "var(--sans)" }}>{fit as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ background: "#0A1220", padding: "5.5rem 1.5rem", borderTop: "1px solid rgba(200,164,93,0.07)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>The Problem</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Healthcare growth is still fragmented.
            </h2>
            <p style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>
              Doctors manage patients on WhatsApp, content on Instagram, appointments in spreadsheets, follow-ups manually, and brand opportunities through random DMs. Cureomax brings all of this into structured systems built for healthcare trust.
            </p>
          </div>
          <div className="grid-4">
            {problems.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(200,164,93,0.1)",
                  borderRadius: 6, padding: "1.75rem",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.3)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.1)")}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: "var(--white-50)", fontSize: "0.87rem", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE VERTICALS ── */}
      <section style={{ background: "var(--navy)", padding: "5.5rem 1.5rem", borderTop: "1px solid rgba(200,164,93,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>One Platform. Three Workspaces.</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15 }}>
              Built for every layer of healthcare growth
            </h2>
          </div>

          <div className="grid-3">
            {verticals.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "var(--navy-mid)",
                  border: `1px solid ${v.accentBorder}`,
                  borderRadius: 8, padding: "2.25rem",
                  display: "flex", flexDirection: "column",
                  transition: "box-shadow 0.3s, transform 0.3s",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = v.hoverShadow;
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {v.featured && (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #C8A45D, transparent)" }} />
                )}
                <div
                  style={{
                    display: "inline-block", alignSelf: "flex-start",
                    background: v.tagBg,
                    border: `1px solid ${v.accentBorder}`,
                    borderRadius: 2, padding: "0.25rem 0.75rem", marginBottom: "1.5rem",
                  }}
                >
                  <span style={{ color: v.tagColor, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>{v.tag}</span>
                </div>

                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>{v.title}</h3>
                <p style={{ color: "var(--white-50)", fontSize: "0.9rem", lineHeight: 1.75, fontFamily: "var(--sans)", marginBottom: "2rem", flex: 1 }}>{v.desc}</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                  {v.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <CheckCircle size={13} color={v.tagColor} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: "0.85rem", color: "var(--white-50)", fontFamily: "var(--sans)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={v.href}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    color: v.tagColor, fontFamily: "var(--sans)",
                    fontSize: "0.85rem", fontWeight: 600,
                    textDecoration: "none", letterSpacing: "0.02em",
                    borderTop: `1px solid ${v.accentBorder}`, paddingTop: "1.25rem",
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "0.75rem")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "0.5rem")}
                >
                  Explore {v.title.split(" ").slice(-2).join(" ")} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHORITY OS SPOTLIGHT ── */}
      <section style={{ background: "#060E18", padding: "5.5rem 1.5rem", borderTop: "1px solid rgba(200,164,93,0.07)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Authority OS</p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Turn medical expertise into measurable digital authority.
              </h2>
              <p style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.75rem", fontFamily: "var(--sans)" }}>
                Built for doctors who want to grow their professional presence, attract the right opportunities, and protect their reputation — without compromising medical ethics.
              </p>
              <div
                style={{
                  background: "rgba(200,164,93,0.06)",
                  border: "1px solid rgba(200,164,93,0.15)",
                  borderLeft: "3px solid #C8A45D",
                  borderRadius: "0 4px 4px 0",
                  padding: "1.25rem 1.5rem", marginBottom: "2rem",
                }}
              >
                <p style={{ color: "rgba(250,250,248,0.85)", fontSize: "0.92rem", lineHeight: 1.75, fontFamily: "var(--sans)", fontStyle: "italic" }}>
                  "Cureomax does not turn doctors into influencers. It helps doctors become trusted medical authorities with measurable credibility and ethical partnership systems."
                </p>
              </div>
              <Link href="/authority-os" className="btn-gold">Explore Authority OS <ArrowRight size={15} /></Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: <Star size={16} color="#C8A45D" />, title: "Authority Score", desc: "Measures credibility across content quality, consistency, engagement, and professional presence." },
                { icon: <Shield size={16} color="#0A7075" />, title: "Compliance Safety Layer", desc: "Flags risky claims, undisclosed promotions, and patient privacy risks before they go live." },
                { icon: <TrendingUp size={16} color="#C8A45D" />, title: "Brand Fit Engine", desc: "Identifies ethical partnership categories — diagnostics, healthtech, medical devices, and more." },
                { icon: <BarChart3 size={16} color="#0A7075" />, title: "Monthly Growth Report", desc: "Performance insights, content analytics, patient trust signals, and recommended next actions." },
              ].map((m) => (
                <div
                  key={m.title}
                  style={{
                    background: "var(--navy-mid)",
                    border: "1px solid rgba(200,164,93,0.1)",
                    borderRadius: 6, padding: "1.25rem 1.5rem",
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.25)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.1)")}
                >
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,164,93,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {m.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.25rem" }}>{m.title}</p>
                    <p style={{ fontSize: "0.82rem", color: "var(--white-50)", lineHeight: 1.6, fontFamily: "var(--sans)" }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "var(--ivory)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="eyebrow" style={{ color: "#8B6E35", marginBottom: "1rem" }}>The Process</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 600, color: "var(--navy)", lineHeight: 1.15 }}>
              How Cureomax works
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{ padding: "2rem 1.5rem", borderRight: i < 3 ? "1px solid rgba(13,27,42,0.1)" : "none", position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", fontWeight: 600, color: "rgba(13,27,42,0.08)", lineHeight: 1 }}>{s.num}</span>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#C8A45D" }} />
                  </div>
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.87rem", color: "#4A4540", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section style={{ background: "var(--teal)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "#A8D8DB", marginBottom: "1rem" }}>Compliance &amp; Trust</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>
            Designed for healthcare trust from day one.
          </h2>
          <p style={{ color: "rgba(250,250,248,0.7)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 3rem", fontFamily: "var(--sans)" }}>
            In healthcare, growth without trust is a liability. Cureomax is built around reputation-safe systems for doctors, clinics, and brands.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", textAlign: "left" }}>
            {trustItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1.25rem 1.5rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4 }}>
                <CheckCircle size={15} color="rgba(250,250,248,0.7)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "rgba(250,250,248,0.85)", fontSize: "0.88rem", fontFamily: "var(--sans)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ background: "var(--navy-deep)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center", gap: "0.3rem" }}>
            {[1,2,3,4,5].map((n) => <Star key={n} size={16} color="#C8A45D" fill="#C8A45D" />)}
          </div>
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)", fontWeight: 400, color: "#FAFAF8", lineHeight: 1.65, fontStyle: "italic", marginBottom: "2rem" }}>
            "Cureomax helped us see patient follow-ups, content performance, and growth opportunities in one dashboard. We recovered 38% of lost patients in the first month."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(200,164,93,0.12)", border: "1px solid rgba(200,164,93,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600, color: "#C8A45D" }}>A</span>
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ color: "#FAFAF8", fontWeight: 600, fontSize: "0.9rem", fontFamily: "var(--sans)" }}>Dr. Ananya Sharma</p>
              <p style={{ color: "var(--trust-gray)", fontSize: "0.8rem", fontFamily: "var(--sans)" }}>Clinic Founder, Delhi NCR</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          background: "var(--navy-deep)",
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(10,112,117,0.15) 0%, transparent 60%)",
          padding: "7rem 1.5rem",
          borderTop: "1px solid rgba(200,164,93,0.07)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Private Strategy Call</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Build your healthcare growth system with Cureomax.
          </h2>
          <p style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
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
