import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare, Users, FileText, Bell, CreditCard,
  BarChart3, Shield, CheckCircle, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product — AI Clinic Modules",
  description:
    "Explore Cureomax product modules: AI WhatsApp Receptionist, Patient CRM, Doctor Copilot, Follow-up Automation, Billing, and Clinic Analytics.",
};

const modules = [
  {
    icon: <MessageSquare size={28} color="#C8A96A" />,
    tag: "WhatsApp",
    title: "AI WhatsApp Receptionist",
    problem:
      "Patients message on WhatsApp but inquiries are never tracked. The receptionist replies when possible, then forgets. No conversion data exists.",
    solution:
      "Cureomax captures every WhatsApp inquiry, extracts patient intake details, and shows a clear queue of pending, booked, and missed inquiries. Nothing is lost.",
    workflow: [
      "Patient sends WhatsApp: 'I have lower back pain for 3 days'",
      "Cureomax extracts: symptom, duration, preferred time",
      "Receptionist sees the intake card and confirms the appointment",
      "Patient gets booking confirmation with clinic details",
      "Inquiry is marked: converted / pending / missed",
    ],
    benefit:
      "Recover 30–50% of lost inquiries. See your clinic's true inquiry-to-appointment conversion rate for the first time.",
    safetyNote: null,
  },
  {
    icon: <Users size={28} color="#C8A96A" />,
    tag: "CRM",
    title: "Patient CRM",
    problem:
      "Patient records are scattered across Excel, paper files, and chat history. No single view of a patient's full journey.",
    solution:
      "Every patient has a structured timeline: first inquiry, appointments, visit notes, follow-ups, billing, and next visit date — all in one card.",
    workflow: [
      "Patient profile created from first WhatsApp inquiry",
      "Appointment history, notes, and billing are linked",
      "Follow-up queue shows who needs a check-in today",
      "Patient health timeline shows pain score progress",
      "Revisit alerts prevent patient drop-off",
    ],
    benefit:
      "Stop losing patients between visits. Know exactly who needs attention today and who is at risk of not returning.",
    safetyNote: null,
  },
  {
    icon: <FileText size={28} color="#C8A96A" />,
    tag: "Documentation",
    title: "Doctor Copilot",
    problem:
      "Doctors spend 15–20 minutes per patient writing notes, summaries, and referrals. Repetitive documentation reduces consultation time.",
    solution:
      "The AI Copilot drafts visit notes, patient-friendly summaries, and prescription templates based on the consultation. Doctors review, edit, and approve — nothing is sent without sign-off.",
    workflow: [
      "Doctor opens patient card during or after consultation",
      "AI drafts visit note based on complaint and treatment",
      "Doctor reviews and edits the draft",
      "Doctor approves: note is saved and patient summary is generated",
      "Follow-up instructions are auto-scheduled",
    ],
    benefit:
      "Save 10–15 minutes per patient on documentation. See more patients without staying late.",
    safetyNote:
      "All AI-generated clinical content requires mandatory doctor review and approval before use. Cureomax does not diagnose or prescribe independently.",
  },
  {
    icon: <Bell size={28} color="#C8A96A" />,
    tag: "Retention",
    title: "Follow-up Automation",
    problem:
      "A patient is told to come back in 3 days. No reminder is sent. They forget. The revenue is lost — and the clinic never knows.",
    solution:
      "Cureomax automates personalised follow-up messages: session reminders, pain score check-ins, exercise reminders, medicine timings, report upload requests, and revisit confirmations.",
    workflow: [
      "Doctor sets follow-up instructions at end of visit",
      "Cureomax schedules automated reminders via WhatsApp",
      "Pain score check-in sent on day 3",
      "Session reminder sent 24 hours before next appointment",
      "Missed patients flagged for manual follow-up call",
    ],
    benefit:
      "Increase patient retention. Reduce no-shows. Create a follow-up system that works even when your staff is busy.",
    safetyNote: null,
  },
  {
    icon: <CreditCard size={28} color="#C8A96A" />,
    tag: "Billing",
    title: "Billing & Payments",
    problem:
      "Billing is handled manually. Packages are tracked in notebooks. Outstanding payments are difficult to recover. Package usage is unclear.",
    solution:
      "Create invoices, track session packages, manage outstanding balances, and send payment reminders — all linked to the patient profile.",
    workflow: [
      "Invoice is generated at end of consultation",
      "Session package is tracked (e.g. 10 physio sessions)",
      "Outstanding payments are highlighted in the dashboard",
      "Payment reminder is sent if invoice is overdue",
      "Revenue is visible in the analytics dashboard",
    ],
    benefit:
      "Reduce revenue leakage. Track every session, package, and payment without a spreadsheet.",
    safetyNote: null,
  },
  {
    icon: <BarChart3 size={28} color="#C8A96A" />,
    tag: "Analytics",
    title: "Clinic Analytics",
    problem:
      "Clinic owners have no visibility into how the clinic is actually performing. Conversion rate, follow-up completion, revenue per patient — none of these are tracked.",
    solution:
      "The clinic dashboard gives owners a clear view: inquiry volume, conversion rate, appointment fill rate, follow-up completion, no-show rate, revenue, and recovery opportunities.",
    workflow: [
      "Live dashboard shows today's inquiries, appointments, and follow-ups",
      "Weekly summary shows performance vs previous week",
      "Revenue dashboard tracks collections and outstanding",
      "Patient drop-off report highlights who hasn't returned",
      "Specialty-wise analytics (physiotherapy vs general, etc.)",
    ],
    benefit:
      "Make informed decisions about staffing, pricing, and patient care. Know your clinic's numbers for the first time.",
    safetyNote: null,
  },
];

export default function ProductPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section
        style={{
          background: "#0F2A1D",
          padding: "5rem 1.5rem",
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(200,169,106,0.07) 0%, transparent 50%)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C8A96A",
              marginBottom: "1rem",
              fontFamily: "var(--font-body)",
            }}
          >
            The Product
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              color: "#F7F1E5",
              lineHeight: 1.15,
              maxWidth: "720px",
              marginBottom: "1.5rem",
            }}
          >
            Six modules. One clinic operating system.
          </h1>
          <p
            style={{
              color: "rgba(247,241,229,0.65)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              maxWidth: "580px",
              fontFamily: "var(--font-body)",
            }}
          >
            Cureomax connects WhatsApp, patient records, documentation, follow-up,
            billing, and analytics into one system — built specifically for Indian
            specialty clinics.
          </p>
        </div>
      </section>

      {/* Modules */}
      {modules.map((m, i) => (
        <section
          key={m.title}
          style={{
            background: i % 2 === 0 ? "#F7F1E5" : "#EFE3D0",
            padding: "5rem 1.5rem",
            borderTop: "1px solid rgba(200,169,106,0.12)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left: Info */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#0F2A1D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {m.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C8A96A",
                    fontFamily: "var(--font-body)",
                    border: "1px solid rgba(200,169,106,0.35)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "2px",
                  }}
                >
                  {m.tag}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 600,
                  color: "#0F2A1D",
                  marginBottom: "1.25rem",
                }}
              >
                {m.title}
              </h2>

              <div style={{ marginBottom: "1.5rem" }}>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#5A1F24",
                    fontFamily: "var(--font-body)",
                    marginBottom: "0.5rem",
                  }}
                >
                  The Problem
                </p>
                <p
                  style={{
                    color: "#4A3326",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {m.problem}
                </p>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#0F2A1D",
                    fontFamily: "var(--font-body)",
                    marginBottom: "0.5rem",
                  }}
                >
                  What Cureomax Does
                </p>
                <p
                  style={{
                    color: "#4A3326",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {m.solution}
                </p>
              </div>

              {/* Benefit */}
              <div
                style={{
                  background: "#0F2A1D",
                  borderRadius: "3px",
                  padding: "1.25rem 1.5rem",
                  borderLeft: "3px solid #C8A96A",
                }}
              >
                <p
                  style={{
                    color: "rgba(247,241,229,0.85)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                  }}
                >
                  {m.benefit}
                </p>
              </div>

              {m.safetyNote && (
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "flex-start",
                    padding: "1rem",
                    background: "rgba(90,31,36,0.06)",
                    border: "1px solid rgba(90,31,36,0.15)",
                    borderRadius: "3px",
                  }}
                >
                  <Shield
                    size={14}
                    color="#5A1F24"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <p
                    style={{
                      color: "#5A1F24",
                      fontSize: "0.8rem",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {m.safetyNote}
                  </p>
                </div>
              )}
            </div>

            {/* Right: Workflow */}
            <div>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#C8A96A",
                  marginBottom: "1.25rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                Example Workflow
              </p>
              <div
                style={{
                  background: "#0F2A1D",
                  borderRadius: "4px",
                  padding: "1.75rem",
                  border: "1px solid rgba(200,169,106,0.2)",
                }}
              >
                {m.workflow.map((step, si) => (
                  <div
                    key={si}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      paddingBottom: si < m.workflow.length - 1 ? "1.25rem" : 0,
                      borderBottom:
                        si < m.workflow.length - 1
                          ? "1px solid rgba(200,169,106,0.1)"
                          : "none",
                      marginBottom: si < m.workflow.length - 1 ? "1.25rem" : 0,
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(200,169,106,0.15)",
                        border: "1px solid rgba(200,169,106,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          color: "#C8A96A",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {si + 1}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "rgba(247,241,229,0.72)",
                        fontSize: "0.88rem",
                        lineHeight: 1.6,
                        fontFamily: "var(--font-body)",
                        paddingTop: "0.1rem",
                      }}
                    >
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section
        style={{
          background: "#0F2A1D",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 600,
              color: "#F7F1E5",
              marginBottom: "1rem",
            }}
          >
            See it working in your clinic
          </h2>
          <p
            style={{
              color: "rgba(247,241,229,0.6)",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Book a 30-minute demo with the Cureomax team. We will show you
            exactly how each module works for your clinic type.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-primary">Book a Demo →</Link>
            <Link href="/demo" className="btn-outline">View Demo Story</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
