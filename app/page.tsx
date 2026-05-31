import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Shield, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cureomax — AI Clinic OS for Modern Indian Healthcare",
  description: "Cureomax helps clinics automate patient intake, AI doctor notes, prescription drafts, WhatsApp follow-ups, billing, and CRM — without replacing clinical judgment.",
};

const problems = [
  { icon: "🕐", title: "Documentation eats the day", desc: "Doctors spend 15–20 minutes per patient on notes and prescriptions. Across 25 patients, that is 6+ hours not spent on care." },
  { icon: "📱", title: "Patients fall through the gaps", desc: "WhatsApp inquiries go unanswered. Follow-ups never happen. 35–45% of patients don't return after their first visit." },
  { icon: "📋", title: "No single source of truth", desc: "Patient data lives across paper, WhatsApp, Excel, and UPI apps. No clinic owner knows their actual numbers." },
  { icon: "💰", title: "Revenue is invisible", desc: "Outstanding packages, missed billing, no-shows — all happening daily with no system to catch them." },
];

const modules = [
  {
    num: "01",
    tag: "AI Voice-to-Notes",
    title: "Turn consultation voice into structured notes in seconds",
    desc: "Doctor speaks during or after consultation. Cureomax transcribes and drafts a structured SOAP note. Doctor reviews, edits, and approves. Nothing is saved without explicit approval.",
    href: "/ai-medical-scribe",
    accent: "#C8A45D",
  },
  {
    num: "02",
    tag: "Prescription Draft",
    title: "Doctor-reviewable prescription drafts from consultation inputs",
    desc: "AI generates a draft prescription and patient-friendly summary. Doctor reviews every field before anything is sent or saved. Zero autonomous clinical output.",
    href: "/product",
    accent: "#0A7075",
  },
  {
    num: "03",
    tag: "Follow-up Engine",
    title: "WhatsApp follow-up that actually runs itself",
    desc: "Automated pain check-ins, session reminders, and revisit prompts via WhatsApp. Clinics using this recover 30–40% of patients who would otherwise stop returning.",
    href: "/patient-follow-up",
    accent: "#C8A45D",
  },
  {
    num: "04",
    tag: "Patient CRM",
    title: "Every patient's full journey in one card",
    desc: "First inquiry, appointments, visit notes, follow-ups, billing, and next visit date — structured and searchable. No more Excel or WhatsApp threads.",
    href: "/clinic-crm",
    accent: "#0A7075",
  },
  {
    num: "05",
    tag: "Clinic Billing",
    title: "Revenue, packages, and outstanding — finally visible",
    desc: "Session packages, invoice generation, outstanding tracking, and payment reminders linked to patient profiles. Know your real monthly revenue in one screen.",
    href: "/product",
    accent: "#C8A45D",
  },
  {
    num: "06",
    tag: "Analytics",
    title: "The numbers every clinic owner needs but nobody tracks",
    desc: "Inquiry conversion, no-show rate, follow-up completion, package utilisation, revenue by category. Live dashboard — no reports to build.",
    href: "/product",
    accent: "#0A7075",
  },
];

const demoSteps = [
  { step: "01", title: "Patient books via WhatsApp", detail: "Inquiry captured automatically. No missed message." },
  { step: "02", title: "Intake form captures symptoms", detail: "Structured patient profile created before consultation." },
  { step: "03", title: "Consultation is summarised by AI", detail: "SOAP note drafted. Doctor reviews and approves." },
  { step: "04", title: "Prescription draft generated", detail: "Doctor edits and signs. Patient summary ready." },
  { step: "05", title: "WhatsApp follow-up sent automatically", detail: "Pain check-in, session reminder, revisit prompt — all automated." },
];

const trustPoints = [
  "AI does not replace doctors — it supports documentation and workflow",
  "All AI-generated content requires mandatory doctor approval before use",
  "No autonomous diagnosis, prescription, or clinical decisions",
  "Consent-based patient data capture",
  "Privacy-first architecture — Supabase Mumbai region",
  "Role-based access — doctors, reception, clinic owners see only what they need",
  "Audit logs on all sensitive actions",
  "Data minimisation — only what the clinic workflow needs",
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: 68 }}>

      {/* ── HERO ── */}
      <section style={{
        background: "var(--navy-deep)",
        backgroundImage: "radial-gradient(ellipse at 12% 70%, rgba(10,112,117,0.16) 0%, transparent 52%), radial-gradient(ellipse at 88% 18%, rgba(200,164,93,0.06) 0%, transparent 48%)",
        minHeight: "92vh", display: "flex", alignItems: "center",
        padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.35,
          backgroundImage: "radial-gradient(circle, rgba(200,164,93,0.18) 1px, transparent 1px)",
          backgroundSize: "52px 52px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem",
                background: "rgba(10,112,117,0.12)", border: "1px solid rgba(10,112,117,0.28)",
                borderRadius: 2, padding: "0.4rem 1rem", marginBottom: "2rem" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0A7075" }} />
                <span style={{ color: "#0E8E94", fontSize: "0.72rem", fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>
                  Now in Private Pilot — Delhi NCR Clinics
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.6rem, 4.8vw, 4.2rem)",
                fontWeight: 600, color: "#FAFAF8", lineHeight: 1.07, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                AI Clinic OS for India&apos;s Next Generation Healthcare Providers
              </h1>

              <p style={{ fontSize: "1.05rem", color: "var(--white-70)", lineHeight: 1.8,
                maxWidth: 540, marginBottom: "1rem", fontFamily: "var(--sans)" }}>
                Cureomax helps clinics automate patient intake, doctor notes, prescription drafts, follow-ups, reminders, billing, and patient CRM — without replacing clinical judgment.
              </p>

              <p style={{ fontSize: "0.88rem", color: "rgba(10,142,148,0.9)", fontFamily: "var(--sans)",
                fontWeight: 600, letterSpacing: "0.02em", marginBottom: "2.5rem" }}>
                Doctor-reviewed. Privacy-first. Built for clinic productivity — not autonomous diagnosis.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
                <Link href="/book-demo" className="btn-gold">Book a Demo <ArrowRight size={15} /></Link>
                <Link href="/demo" className="btn-outline-gold">View Clinic Workflow</Link>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem" }}>
                {["Doctor-reviewed outputs", "DPDP-aware design", "India-first"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.45rem",
                    fontSize: "0.82rem", color: "var(--white-50)", fontFamily: "var(--sans)" }}>
                    <CheckCircle size={13} color="#0A7075" /> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dashboard */}
            <div className="desktop-only" style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <div className="dash-wrap">
                <div className="dash-header">
                  <div>
                    <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>
                      Cureomax Clinic OS
                    </p>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 600,
                      color: "#FAFAF8", marginTop: 2 }}>Sharma Physiotherapy Clinic</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0A7075",
                      boxShadow: "0 0 8px rgba(10,112,117,0.6)" }} />
                    <span style={{ fontSize: "0.72rem", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>Live</span>
                  </div>
                </div>
                <div style={{ padding: "1.25rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.875rem" }}>
                  {[
                    { label: "Today's Inquiries", value: "14", trend: "↑ 3 vs yesterday", color: "#C8A45D" },
                    { label: "Follow-up Rate", value: "91%", trend: "Up from 58%", color: "#0A7075" },
                    { label: "Notes Drafted", value: "22", trend: "Doctor-approved", color: "#A8B8A1" },
                    { label: "No-Show Rate", value: "8%", trend: "↓ from 19%", color: "#0A7075" },
                    { label: "Revenue Today", value: "₹18.4K", trend: "↑ ₹2k vs avg", color: "#C8A45D" },
                    { label: "Follow-ups Due", value: "6", trend: "Auto-sending now", color: "#A8B8A1" },
                  ].map(m => (
                    <div key={m.label} className="dash-metric">
                      <p className="dash-label">{m.label}</p>
                      <p className="dash-val" style={{ color: m.color }}>{m.value}</p>
                      <p className="dash-trend">{m.trend}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI note draft preview */}
              <div style={{ background: "#060E18", border: "1px solid rgba(200,164,93,0.12)",
                borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.875rem" }}>
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>
                    AI Note Draft — Pending Doctor Approval
                  </p>
                  <span style={{ fontSize: "0.68rem", background: "rgba(200,164,93,0.1)",
                    border: "1px solid rgba(200,164,93,0.25)", borderRadius: 2,
                    padding: "0.15rem 0.5rem", color: "#C8A45D", fontFamily: "var(--sans)", fontWeight: 600 }}>
                    Draft
                  </span>
                </div>
                {[
                  ["Chief Complaint", "Lower back pain, 6/10, 5 days duration"],
                  ["Examination", "Paraspinal muscle spasm L4–L5, reduced flexion"],
                  ["Plan", "Physio 3×/week × 4 weeks, heat + TENS protocol"],
                ].map(([k, v]) => (
                  <div key={k} style={{ marginBottom: "0.6rem" }}>
                    <p style={{ fontSize: "0.65rem", color: "var(--trust-gray)", fontFamily: "var(--sans)",
                      fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.15rem" }}>{k}</p>
                    <p style={{ fontSize: "0.82rem", color: "var(--white-70)", fontFamily: "var(--sans)", lineHeight: 1.5 }}>{v}</p>
                  </div>
                ))}
                <div style={{ marginTop: "0.875rem", paddingTop: "0.875rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex", gap: "0.6rem" }}>
                  <button style={{ flex: 1, background: "#0A7075", border: "none", borderRadius: 3,
                    padding: "0.5rem", color: "#FAFAF8", fontSize: "0.78rem",
                    fontWeight: 700, cursor: "pointer", fontFamily: "var(--sans)" }}>
                    ✓ Approve &amp; Save
                  </button>
                  <button style={{ flex: 1, background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3,
                    padding: "0.5rem", color: "var(--trust-gray)", fontSize: "0.78rem",
                    cursor: "pointer", fontFamily: "var(--sans)" }}>
                    Edit Draft
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ background: "#0A1220", padding: "5rem 1.5rem", borderTop: "1px solid rgba(200,164,93,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 600, marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>The Problem</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15 }}>
              Clinics lose time in repetitive tasks. Patients forget follow-ups. Small clinics cannot afford heavy hospital software.
            </h2>
          </div>
          <div className="grid-4">
            {problems.map(p => (
              <div key={p.title} className="card-interactive" style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(200,164,93,0.1)",
                borderRadius: 6, padding: "1.75rem",
              }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "0.875rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600,
                  color: "#FAFAF8", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: "var(--white-50)", fontSize: "0.87rem", lineHeight: 1.7,
                  fontFamily: "var(--sans)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 MODULES ── */}
      <section style={{ background: "var(--navy)", padding: "5rem 1.5rem", borderTop: "1px solid rgba(200,164,93,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 4rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Six Modules</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15 }}>
              Every part of clinic operations — in one system
            </h2>
          </div>

          <div className="grid-3">
            {modules.map(m => (
              <Link key={m.num} href={m.href} style={{ textDecoration: "none" }}>
                <div className="module-card" style={{
                  background: "var(--navy-mid)",
                  border: "1px solid rgba(200,164,93,0.12)",
                  borderRadius: 8, padding: "2rem",
                  display: "flex", flexDirection: "column", height: "100%",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
                    <span style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 600,
                      color: "rgba(200,164,93,0.35)" }}>{m.num}</span>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: m.accent, fontFamily: "var(--sans)",
                      background: `${m.accent}14`, border: `1px solid ${m.accent}30`,
                      borderRadius: 2, padding: "0.2rem 0.65rem" }}>
                      {m.tag}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 600,
                    color: "#FAFAF8", marginBottom: "0.75rem", lineHeight: 1.3 }}>{m.title}</h3>
                  <p style={{ color: "var(--white-50)", fontSize: "0.87rem", lineHeight: 1.7,
                    fontFamily: "var(--sans)", flex: 1, marginBottom: "1.25rem" }}>{m.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem",
                    color: m.accent, fontSize: "0.82rem", fontWeight: 600, fontFamily: "var(--sans)" }}>
                    Learn more <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO FLOW ── */}
      <section style={{ background: "var(--ivory)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="eyebrow" style={{ color: "#8B6E35", marginBottom: "1rem" }}>Clinic Workflow Demo</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 600, color: "var(--navy)", lineHeight: 1.15 }}>
              See how Cureomax handles a full patient journey
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {demoSteps.map((s, i) => (
              <div key={s.step} style={{
                display: "grid", gridTemplateColumns: "60px 1fr",
                gap: "1.5rem", alignItems: "flex-start",
                paddingBottom: i < demoSteps.length - 1 ? "2.5rem" : 0,
                position: "relative",
              }}>
                {/* Connector line */}
                {i < demoSteps.length - 1 && (
                  <div style={{ position: "absolute", left: 29, top: 52,
                    bottom: 0, width: 2, background: "rgba(13,27,42,0.12)" }} />
                )}
                {/* Step number */}
                <div style={{ width: 60, height: 60, borderRadius: "50%",
                  background: "var(--navy)", border: "3px solid rgba(13,27,42,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, position: "relative", zIndex: 1 }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "1rem",
                    fontWeight: 600, color: "#C8A45D" }}>{s.step}</span>
                </div>
                <div style={{ paddingTop: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.15rem",
                    fontWeight: 600, color: "var(--navy)", marginBottom: "0.35rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#5A5550", fontFamily: "var(--sans)", lineHeight: 1.7 }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
            <Link href="/demo" className="btn-gold">See the Full Workflow Demo <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ── TRUST & SAFETY ── */}
      <section style={{ background: "var(--teal)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <p className="eyebrow" style={{ color: "#A8D8DB", marginBottom: "1rem" }}>Safety First</p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Cureomax AI does not replace doctors. It supports them.
              </h2>
              <p style={{ color: "rgba(250,250,248,0.75)", fontSize: "1rem", lineHeight: 1.8,
                fontFamily: "var(--sans)", marginBottom: "1.75rem" }}>
                Final clinical decisions remain with licensed medical professionals. Every AI-generated output is a draft that requires explicit doctor approval before it is saved, sent, or used.
              </p>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start",
                padding: "1rem 1.25rem", background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)", borderRadius: 4 }}>
                <AlertTriangle size={15} color="rgba(250,250,248,0.7)" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ color: "rgba(250,250,248,0.8)", fontSize: "0.85rem",
                  lineHeight: 1.65, fontFamily: "var(--sans)" }}>
                  Cureomax supports clinical workflows and documentation. It does not replace medical judgment, diagnosis, or treatment decisions.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
              {trustPoints.map(t => (
                <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem",
                  padding: "0.875rem 1rem", background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)", borderRadius: 4 }}>
                  <CheckCircle size={13} color="rgba(250,250,248,0.65)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <p style={{ color: "rgba(250,250,248,0.82)", fontSize: "0.82rem",
                    fontFamily: "var(--sans)", lineHeight: 1.55 }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "var(--navy-deep)", padding: "7rem 1.5rem",
        backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(10,112,117,0.12) 0%, transparent 60%)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Private Pilot — Delhi NCR</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            fontWeight: 600, color: "#FAFAF8", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            5 clinic pilot slots remaining for June 2025
          </h2>
          <p style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.8,
            marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            Assisted setup, custom templates for your specialty, and 14-day measurable results — or you don&apos;t pay.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/book-demo" className="btn-gold">Book a Demo <ArrowRight size={15} /></Link>
            <Link href="/pricing" className="btn-outline-gold">View Pricing</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
