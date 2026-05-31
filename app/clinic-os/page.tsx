import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinic OS — AI Patient CRM & Clinic Automation | Cureomax",
  description: "Cureomax Clinic OS: AI-powered patient CRM, WhatsApp reminders, follow-up automation, billing, and clinic analytics for Indian specialty clinics.",
};

const modules = [
  { icon: "📋", title: "AI Appointment Intake", desc: "Captures patient details from WhatsApp, extracts complaints, and creates structured intake profiles without manual entry." },
  { icon: "💬", title: "WhatsApp Reminders", desc: "Automated, personalised session reminders, medicine timings, exercise nudges, and revisit confirmations via WhatsApp." },
  { icon: "🎙️", title: "Voice-to-Notes Assistant", desc: "Doctor speaks during consultation. AI transcribes and drafts a structured visit note. Doctor reviews and approves." },
  { icon: "📄", title: "Prescription Draft Support", desc: "AI generates draft prescriptions and patient-friendly summaries from consultation inputs. Always doctor-approved." },
  { icon: "🔄", title: "Follow-up Automation", desc: "Pain score check-ins, session reminders, report upload requests, and revisit scheduling — all automated." },
  { icon: "👥", title: "Patient CRM", desc: "Complete patient timeline: inquiry, visits, notes, follow-ups, billing, and next action — in one structured card." },
  { icon: "💰", title: "Billing Dashboard", desc: "Session packages, invoice generation, outstanding tracking, and payment reminders — all linked to patient profiles." },
  { icon: "📊", title: "Clinic Analytics", desc: "Conversion rates, no-show tracking, revenue recovery, follow-up completion — visible to clinic owners in real time." },
];

const specialties = ["Physiotherapy", "Orthopedics", "Gynecology", "Dental", "Dermatology", "Diabetes Care", "Sports Medicine"];

const outcomes = [
  { stat: "38%", label: "Avg. patient recovery rate", sub: "From missed inquiries in first 30 days" },
  { stat: "94%", label: "Follow-up completion", sub: "vs 61% with manual systems" },
  { stat: "3×", label: "Revenue visibility", sub: "Clinic owners see full picture for first time" },
  { stat: "15 min", label: "Saved per consultation", sub: "From AI-assisted documentation" },
];

export default function ClinicOSPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section style={{ background: "var(--forest)", backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(200,164,93,0.07) 0%, transparent 50%)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Cureomax Clinic OS</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 600, color: "#FAFAF7", lineHeight: 1.1, maxWidth: 720, marginBottom: "1.5rem" }}>
            Built for clinics that want fewer missed patients and more structured growth.
          </h1>
          <p style={{ color: "rgba(232,216,184,0.7)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 580, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            An AI-powered operating system for small and mid-sized Indian clinics to manage patients, appointments, follow-ups, billing, and performance analytics.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-gold">Book Clinic Demo <ArrowRight size={15} /></Link>
            <Link href="/demo" className="btn-outline-gold">See Clinic OS in Action</Link>
          </div>
          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {specialties.map((s) => (
              <span key={s} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(168,184,161,0.2)", borderRadius: 2, padding: "0.3rem 0.85rem", fontSize: "0.75rem", color: "#A8B8A1", fontFamily: "var(--sans)", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ background: "var(--charcoal)", padding: "4rem 1.5rem", borderBottom: "1px solid rgba(200,164,93,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {outcomes.map((o) => (
            <div key={o.label} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "2.8rem", fontWeight: 600, color: "#C8A45D", lineHeight: 1 }}>{o.stat}</p>
              <p style={{ color: "#FAFAF7", fontFamily: "var(--sans)", fontSize: "0.88rem", fontWeight: 600, marginTop: "0.4rem" }}>{o.label}</p>
              <p style={{ color: "var(--trust-gray)", fontFamily: "var(--sans)", fontSize: "0.78rem", marginTop: "0.2rem" }}>{o.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section style={{ background: "var(--obsidian)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Eight Modules</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#FAFAF7", marginBottom: "3.5rem", maxWidth: 560 }}>
            Every layer of your clinic in one system.
          </h2>
          <div className="grid-3" style={{ gap: "1.25rem" }}>
            {modules.map((m) => (
              <div key={m.title} className="card-dark hover-glow" style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>{m.icon}</div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontWeight: 600, color: "#FAFAF7", marginBottom: "0.5rem" }}>{m.title}</h3>
                <p style={{ fontSize: "0.86rem", color: "rgba(232,216,184,0.6)", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{m.desc}</p>
              </div>
            ))}
          </div>
          {/* Safety disclaimer */}
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "1.25rem 1.5rem", background: "rgba(158,59,50,0.06)", border: "1px solid rgba(158,59,50,0.15)", borderRadius: 4 }}>
            <AlertTriangle size={16} color="#9E3B32" style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ color: "rgba(232,216,184,0.7)", fontSize: "0.85rem", lineHeight: 1.65, fontFamily: "var(--sans)" }}>
              <strong style={{ color: "#FAFAF7" }}>Important: </strong>Cureomax supports clinical workflows. It does not replace medical judgment or autonomous diagnosis. All AI-generated content requires doctor review and approval before use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--forest)", padding: "6rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#FAFAF7", marginBottom: "1rem" }}>
            Stop losing patients between visits.
          </h2>
          <p style={{ color: "rgba(232,216,184,0.65)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", fontFamily: "var(--sans)" }}>
            Join pilot clinics in Delhi NCR. Assisted setup, custom templates, 14-day measurable results.
          </p>
          <Link href="/book-demo" className="btn-gold">Book Clinic Demo <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  );
}
