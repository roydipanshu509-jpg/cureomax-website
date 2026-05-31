"use client";
import Link from "next/link";
import { MessageSquare, Users, FileText, Bell, CreditCard, BarChart3, Shield, CheckCircle, ArrowRight, AlertTriangle } from "lucide-react";

// Icons stored as component references, rendered inside the component
const modules = [
  {
    iconName: "MessageSquare",
    tag: "WhatsApp",
    title: "AI WhatsApp Receptionist",
    problem: "Patients message on WhatsApp but inquiries are never tracked. The receptionist replies when possible, then forgets. No conversion data exists.",
    solution: "Cureomax captures every WhatsApp inquiry, extracts patient intake details, and shows a clear queue of pending, booked, and missed inquiries. Nothing is lost.",
    highlight: "Recover 30–50% of lost inquiries. See your clinic's true inquiry-to-appointment conversion rate for the first time.",
    steps: ["Patient sends WhatsApp: 'I have lower back pain for 3 days'", "Cureomax extracts: symptom, duration, preferred time", "Receptionist sees the intake card and confirms the appointment", "Patient gets booking confirmation with clinic details", "Inquiry is marked: converted / pending / missed"],
  },
  {
    iconName: "Users",
    tag: "CRM",
    title: "Patient CRM",
    problem: "Patient records are scattered across Excel, paper files, and chat history. No single view of a patient's full journey.",
    solution: "Every patient has a structured timeline: first inquiry, appointments, visit notes, follow-ups, billing, and next visit date — all in one card.",
    highlight: "Stop losing patients between visits. Know exactly who needs attention today and who is at risk of not returning.",
    steps: ["Patient profile created from first WhatsApp inquiry", "Appointment history, notes, and billing are linked", "Follow-up queue shows who needs a check-in today", "Patient health timeline shows pain score progress", "Revisit alerts prevent patient drop-off"],
  },
  {
    iconName: "FileText",
    tag: "Documentation",
    title: "Doctor Copilot",
    problem: "Documentation takes 15–20 minutes per patient. Across 25 patients a day, that is 6 hours of writing that is not patient care.",
    solution: "Cureomax drafts a structured visit note based on consultation inputs. The doctor reviews, edits, and approves before anything is saved or shared.",
    highlight: "All AI-generated content requires mandatory doctor approval. AI assists — doctors decide. Zero autonomous clinical output.",
    steps: ["Doctor opens patient card during or after consultation", "AI generates a structured draft: chief complaint, findings, plan", "Doctor reviews and edits the draft in under 3 minutes", "Doctor approves — note is saved to patient record", "Prescription and patient summary generated from approved note"],
  },
  {
    iconName: "Bell",
    tag: "Follow-ups",
    title: "Follow-up Engine",
    problem: "Most clinic revenue is lost between visits. Patients who were told to return in 3 days don't — and nobody calls them.",
    solution: "Cureomax sends pain score check-ins at Day 3, session reminders at Day 5, and revisit prompts at Day 14 — automatically, via WhatsApp.",
    highlight: "Clinics using automated follow-up recover 30–40% of patients who would otherwise not return.",
    steps: ["Follow-up schedule set based on treatment type and doctor preference", "Day 3: 'How is your pain today? Reply with score 1–10'", "Patient replies — pain score stored in their timeline", "Day 5: 'Your next session is on Thursday. Reply YES to confirm'", "Day 14: 'Time for your revisit — shall we book a slot this week?'"],
  },
  {
    iconName: "CreditCard",
    tag: "Billing",
    title: "Billing Dashboard",
    problem: "Clinic billing is split across paper, WhatsApp, and UPI apps. No single view of revenue, outstanding payments, or package utilisation.",
    solution: "Session packages, invoice generation, outstanding tracking, and payment reminders — all linked to patient profiles and visit records.",
    highlight: "Know your real monthly revenue. Track package utilisation. Flag patients with outstanding payments automatically.",
    steps: ["Session package created when patient confirms treatment plan", "Invoice generated after each completed session", "Outstanding payment flagged if not settled within 48 hours", "Payment reminder sent via WhatsApp automatically", "Revenue dashboard shows monthly breakdown by treatment category"],
  },
  {
    iconName: "BarChart3",
    tag: "Analytics",
    title: "Clinic Analytics",
    problem: "Most clinic owners don't know their no-show rate, follow-up completion rate, or which treatment category generates the most revenue.",
    solution: "Real-time dashboard: inquiries, conversion rate, no-shows, follow-up completion, active patients, revenue — updated live.",
    highlight: "The metrics most clinics have never seen — visible in one screen, without building a single report.",
    steps: ["Daily: Inquiries received, booked, missed", "Weekly: No-show rate, follow-up completion, new patients", "Monthly: Revenue by category, package utilisation, growth rate", "At-risk list: Patients who have not returned past their revisit date", "Comparison: This month vs last month across all key metrics"],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={24} />,
  Users: <Users size={24} />,
  FileText: <FileText size={24} />,
  Bell: <Bell size={24} />,
  CreditCard: <CreditCard size={24} />,
  BarChart3: <BarChart3 size={24} />,
};

export default function ProductPage() {
  return (
    <div style={{ paddingTop: 68 }}>

      {/* Hero */}
      <section style={{
        background: "var(--navy-deep)",
        backgroundImage: "radial-gradient(ellipse at 15% 70%, rgba(10,112,117,0.12) 0%, transparent 55%)",
        padding: "5.5rem 1.5rem 4rem",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>The Product</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.08, maxWidth: 680, marginBottom: "1.25rem" }}>
            Six modules. One clinic operating system.
          </h1>
          <p style={{ color: "var(--white-70)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 560, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            Cureomax connects WhatsApp, patient records, documentation, follow-up, billing, and analytics into one system — built specifically for Indian specialty clinics.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-gold">Book a Clinic Demo <ArrowRight size={15} /></Link>
            <Link href="/demo" className="btn-outline-gold">See Live Demo</Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      {modules.map((mod, i) => (
        <section
          key={mod.title}
          style={{
            background: i % 2 === 0 ? "var(--navy)" : "#0A1220",
            padding: "5rem 1.5rem",
            borderTop: "1px solid rgba(200,164,93,0.06)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

            {/* Left */}
            <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
              {/* Icon + tag */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.75rem" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: "var(--navy-mid)",
                  border: "1px solid rgba(200,164,93,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#C8A45D",
                }}>
                  {iconMap[mod.iconName]}
                </div>
                <span style={{
                  background: "rgba(10,112,117,0.1)",
                  border: "1px solid rgba(10,112,117,0.25)",
                  borderRadius: 2, padding: "0.2rem 0.7rem",
                  fontSize: "0.68rem", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#0E8E94", fontFamily: "var(--sans)",
                }}>
                  {mod.tag}
                </span>
              </div>

              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 600, color: "#FAFAF8", marginBottom: "2rem", lineHeight: 1.2 }}>
                {mod.title}
              </h2>

              {/* Problem */}
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)", marginBottom: "0.5rem" }}>The Problem</p>
                <p style={{ color: "var(--white-70)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>{mod.problem}</p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: "1.75rem" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)", marginBottom: "0.5rem" }}>What Cureomax Does</p>
                <p style={{ color: "var(--white-70)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>{mod.solution}</p>
              </div>

              {/* Highlight */}
              <div style={{
                padding: "1.1rem 1.4rem",
                background: mod.iconName === "FileText"
                  ? "rgba(158,59,50,0.06)"
                  : "rgba(200,164,93,0.06)",
                border: `1px solid ${mod.iconName === "FileText" ? "rgba(158,59,50,0.2)" : "rgba(200,164,93,0.15)"}`,
                borderLeft: `3px solid ${mod.iconName === "FileText" ? "#9E3B32" : "#C8A45D"}`,
                borderRadius: "0 4px 4px 0",
              }}>
                {mod.iconName === "FileText" && (
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.4rem" }}>
                    <Shield size={13} color="#9E3B32" />
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9E3B32", fontFamily: "var(--sans)" }}>Medical Safety</span>
                  </div>
                )}
                <p style={{ color: mod.iconName === "FileText" ? "rgba(232,216,184,0.8)" : "var(--white-70)", fontSize: "0.88rem", lineHeight: 1.7, fontFamily: "var(--sans)", fontStyle: "italic" }}>
                  {mod.highlight}
                </p>
              </div>
            </div>

            {/* Right — Workflow */}
            <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)", marginBottom: "1.25rem" }}>
                Example Workflow
              </p>
              <div style={{
                background: "#060E18",
                border: "1px solid rgba(200,164,93,0.12)",
                borderRadius: 8,
                overflow: "hidden",
              }}>
                {mod.steps.map((step, si) => (
                  <div
                    key={si}
                    style={{
                      display: "flex", gap: "1rem", alignItems: "flex-start",
                      padding: "1.1rem 1.5rem",
                      borderBottom: si < mod.steps.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    }}
                  >
                    <div style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: si === 0 ? "rgba(10,112,117,0.2)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${si === 0 ? "rgba(10,112,117,0.4)" : "rgba(255,255,255,0.08)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, color: si === 0 ? "#0E8E94" : "var(--trust-gray)", fontFamily: "var(--sans)" }}>{si + 1}</span>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: si === 0 ? "rgba(250,250,248,0.85)" : "var(--white-50)", lineHeight: 1.6, fontFamily: "var(--sans)" }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* Safety disclaimer */}
      <section style={{ background: "#0A1220", padding: "3rem 1.5rem", borderTop: "1px solid rgba(200,164,93,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "1.25rem 1.5rem", background: "rgba(158,59,50,0.06)", border: "1px solid rgba(158,59,50,0.15)", borderRadius: 4 }}>
          <AlertTriangle size={16} color="rgba(196,112,106,0.8)" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ color: "rgba(196,112,106,0.75)", fontSize: "0.85rem", lineHeight: 1.7, fontFamily: "var(--sans)" }}>
            <strong style={{ color: "rgba(196,150,146,0.9)" }}>Medical Disclaimer: </strong>
            Cureomax supports clinical workflows and documentation. It does not replace medical judgment, diagnosis, or treatment decisions. All AI-generated content — including visit note drafts, prescription summaries, and follow-up messages — requires mandatory doctor review and explicit approval before use or distribution. AI assists. Doctors decide.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy-deep)", padding: "6rem 1.5rem", textAlign: "center", backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(10,112,117,0.1) 0%, transparent 60%)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>
            See all six modules working together.
          </h2>
          <p style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            Book a 30-minute demo. We will walk through exactly how Cureomax would work for your clinic type.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-gold">Book a Clinic Demo <ArrowRight size={15} /></Link>
            <Link href="/pricing" className="btn-outline-gold">View Pricing</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
