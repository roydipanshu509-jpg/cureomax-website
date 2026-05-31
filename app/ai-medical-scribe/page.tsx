import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Medical Scribe India — Voice-to-Notes for Clinic Doctors",
  description: "Cureomax AI Medical Scribe turns consultation voice into structured SOAP notes in seconds. Doctor reviews and approves every draft. Built for Indian specialty clinics.",
  keywords: ["AI medical scribe India", "doctor notes automation India", "voice to notes clinic", "AI SOAP notes India", "clinic documentation AI"],
};

export default function AIMedicalScribePage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "var(--navy-deep)", backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(200,164,93,0.08) 0%, transparent 55%)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>AI Medical Scribe</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.1, maxWidth: 700, marginBottom: "1.5rem" }}>
            Turn consultation voice into structured notes in seconds — not 20 minutes.
          </h1>
          <p style={{ color: "var(--white-70)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 560, marginBottom: "2rem", fontFamily: "var(--sans)" }}>
            Doctors spend 15–20 minutes per patient on documentation. Cureomax AI Scribe drafts a structured SOAP note while the doctor focuses on the patient. Doctor reviews and approves every draft before anything is saved.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", background: "rgba(158,59,50,0.1)", border: "1px solid rgba(158,59,50,0.25)", borderRadius: 2 }}>
              <AlertTriangle size={13} color="#9E3B32" />
              <span style={{ fontSize: "0.78rem", color: "rgba(196,112,106,0.9)", fontFamily: "var(--sans)", fontWeight: 600 }}>Doctor approval required before every save</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-gold">Book a Demo <ArrowRight size={15} /></Link>
            <Link href="/product" className="btn-outline-gold">See All Modules</Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>How It Works</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { step: "1", title: "Doctor speaks during or after consultation", desc: "Cureomax captures the consultation — symptoms, examination findings, clinical assessment, treatment plan." },
                { step: "2", title: "AI drafts a structured SOAP note", desc: "Subjective, Objective, Assessment, Plan — structured and formatted. Draft generated in under 30 seconds." },
                { step: "3", title: "Doctor reviews every field", desc: "The draft opens in the patient card. Doctor reads, edits any field, and corrects the AI where needed." },
                { step: "4", title: "Doctor approves — note is saved", desc: "Nothing is saved or sent without explicit doctor sign-off. The approval action is logged in the audit trail." },
              ].map((s) => (
                <div key={s.step} style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy-mid)", border: "1px solid rgba(200,164,93,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#C8A45D", fontSize: "0.75rem", fontWeight: 700, fontFamily: "var(--sans)" }}>{s.step}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.25rem" }}>{s.title}</p>
                    <p style={{ color: "var(--white-50)", fontSize: "0.85rem", lineHeight: 1.65, fontFamily: "var(--sans)" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>What Doctors Get Back</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                "15–18 minutes saved per patient on documentation",
                "Consistent SOAP note format across all doctors",
                "No more end-of-day note backlog",
                "Patient-friendly discharge summary from the approved note",
                "All notes stored in the patient&apos;s timeline",
                "Prescription draft generated from the approved note",
              ].map((t) => (
                <div key={t} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                  <CheckCircle size={14} color="#0A7075" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "var(--white-70)", fontSize: "0.9rem", fontFamily: "var(--sans)", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: t }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--teal)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>
            Cut documentation time by 80%.
          </h2>
          <p style={{ color: "rgba(250,250,248,0.75)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)", marginBottom: "2rem" }}>
            Book a demo and we will show you the AI Scribe working on a real consultation scenario for your specialty.
          </p>
          <Link href="/book-demo" className="btn-gold">Book a Demo <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  );
}
