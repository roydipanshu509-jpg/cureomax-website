import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Women's Health Clinics — AI Clinic Assistant",
  description: "Cureomax supports women's health clinics with patient follow-up, appointment management, and care coordination — with full privacy and consent controls.",
};

const useCases = [
  { title: "PCOS Management", desc: "Long-term patient tracking, lifestyle follow-ups, periodic lab reminders, and revisit nudges for ongoing care." },
  { title: "Fertility & IVF Support", desc: "Sensitive, consent-first communication. Appointment reminders, medication timings, and care-team coordination." },
  { title: "Antenatal & Postnatal Care", desc: "Trimester-wise checkup reminders, vaccination schedules, report upload prompts, and postpartum follow-up." },
  { title: "Nutrition & Lifestyle Clinics", desc: "Weekly check-in messages, progress tracking, diet reminder nudges, and revisit scheduling." },
  { title: "Gynaecology Clinics", desc: "Routine checkup reminders, Pap smear follow-ups, prescription renewals, and test result follow-up." },
  { title: "Mental & Emotional Wellness", desc: "Sensitive, empathetic follow-up support. Appointment reminders with care and discretion." },
];

export default function WomensHealthPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem", backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(200,169,106,0.08) 0%, transparent 55%)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <Heart size={18} color="#9AAB89" />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9AAB89", fontFamily: "var(--font-body)" }}>Women's Health Clinics</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#F7F1E5", lineHeight: 1.12, maxWidth: "760px", marginBottom: "1.5rem" }}>
            Compassionate AI Clinic Support for Women's Health
          </h1>
          <p style={{ color: "rgba(247,241,229,0.7)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "1.5rem", fontFamily: "var(--font-body)" }}>
            Cureomax helps women's health clinics manage patient follow-up, appointment scheduling, care reminders, and team coordination — with full consent control and data privacy.
          </p>
          <div style={{ background: "rgba(200,169,106,0.08)", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "3px", padding: "1rem 1.25rem", maxWidth: "560px", marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <Shield size={14} color="#9AAB89" style={{ flexShrink: 0, marginTop: "2px" }} />
              <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "0.85rem", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                Cureomax does not diagnose, prescribe, or replace clinical judgment. All AI assistance supports the clinic and care team. Patient consent is always required before any communication or recording.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-primary">Book a Demo →</Link>
            <Link href="/product" className="btn-outline">View Product</Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ background: "#F7F1E5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>Use Cases</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#0F2A1D", marginBottom: "3rem" }}>Built for the full spectrum of women's care</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {useCases.map((uc) => (
              <div key={uc.title} style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "3px", padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.5rem" }}>{uc.title}</h3>
                <p style={{ color: "#4A3326", fontSize: "0.88rem", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy First */}
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>Privacy & Consent</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#F7F1E5", marginBottom: "1.25rem" }}>Privacy is not optional in women's healthcare.</h2>
          <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "3rem", fontFamily: "var(--font-body)" }}>
            Cureomax is built with consent-first design. Patient data is protected, access is role-controlled, and no AI-generated communication is sent without proper consent.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", textAlign: "left" }}>
            {[
              "Patient consent required before any communication",
              "Sensitive data is role-access controlled",
              "No AI diagnosis or prescription — ever",
              "All clinical notes require doctor approval",
              "Audit logs for all system activity",
              "Data export and deletion on request",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", padding: "1rem", border: "1px solid rgba(200,169,106,0.15)", borderRadius: "3px" }}>
                <CheckCircle size={14} color="#9AAB89" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "rgba(247,241,229,0.72)", fontSize: "0.85rem", lineHeight: 1.5, fontFamily: "var(--font-body)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section style={{ background: "#EFE3D0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "rgba(200,169,106,0.15)", border: "1px solid rgba(200,169,106,0.3)", borderRadius: "2px", padding: "0.35rem 1rem", marginBottom: "1.75rem" }}>
            <span style={{ color: "#C8A96A", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>Coming Soon — Women's Health Module</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 600, color: "#0F2A1D", marginBottom: "1rem" }}>
            A dedicated women's health module is in development
          </h2>
          <p style={{ color: "#4A3326", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem", fontFamily: "var(--font-body)" }}>
            We are building specific workflows for PCOS management, antenatal tracking, fertility clinic coordination, and postnatal follow-up. If you run a women's health clinic and want to be part of shaping it — reach out.
          </p>
          <Link href="/book-demo" className="btn-primary">Join the Waitlist →</Link>
        </div>
      </section>
    </div>
  );
}
