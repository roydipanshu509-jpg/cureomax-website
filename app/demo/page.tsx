"use client";
import Link from "next/link";
import { CheckCircle, MessageSquare, Calendar, FileText, Bell, CreditCard, BarChart3 } from "lucide-react";


const demoSteps = [
  {
    step: "01",
    icon: <MessageSquare size={20} color="#C8A96A" />,
    title: "Patient WhatsApp Inquiry",
    label: "Inquiry Captured",
    color: "#C8A96A",
    whatsappBubble: {
      patient: "Hi, I have lower back pain for the last 3 days. Can I get an appointment today?",
      ai: "Hi Rohan, thanks for reaching out to Cureomax Demo Clinic. I can help you book an appointment. May I ask a few quick questions?\n\nHow severe is the pain on a scale of 1 to 10?\nDo you have any numbness, weakness, or pain radiating to the leg?\nWhat time works for you today?",
      patient2: "Pain is 7/10. No numbness. Evenings after 5 PM work for me.",
      ai2: "Thank you. I have noted your intake details. Our receptionist will confirm your appointment shortly. If your pain becomes severe or you have any fever, numbness, or difficulty moving, please seek urgent care.",
    },
    insight: "Intake captured: Rohan Sharma | Lower back pain | Severity 7/10 | Slot request: Today evening",
  },
  {
    step: "02",
    icon: <Calendar size={20} color="#C8A96A" />,
    title: "Receptionist Books Appointment",
    label: "Appointment Booked",
    color: "#9AAB89",
    card: {
      clinic: "Cureomax Demo Clinic, Noida Sector 150",
      patient: "Rohan Sharma",
      doctor: "Dr. Aviral Mehta — Orthopedic Consultant",
      time: "Today, 6:00 PM",
      type: "Lower back pain assessment",
      status: "Confirmed",
    },
  },
  {
    step: "03",
    icon: <FileText size={20} color="#C8A96A" />,
    title: "Doctor Copilot — Visit Note Draft",
    label: "AI Draft Ready",
    color: "#C8A96A",
    noteCard: {
      patient: "Rohan Sharma, 31M",
      complaint: "Lower back pain × 3 days. Severity 7/10. No neurological signs.",
      aiDraft: "Patient presents with acute mechanical lower back pain of 3 days duration. No red flags. Initial treatment plan: physiotherapy sessions (4×/week × 2 weeks), posture advice, NSAIDs as prescribed. Follow-up in 3 days for pain score assessment.",
      status: "Awaiting Doctor Review & Approval",
      warning: "This is an AI-generated draft. Doctor review and approval is required before this note is saved or shared.",
    },
  },
  {
    step: "04",
    icon: <Bell size={20} color="#C8A96A" />,
    title: "Automated Follow-Up Reminders",
    label: "Reminders Scheduled",
    color: "#9AAB89",
    reminders: [
      { day: "Day 1", message: "Hi Rohan, hope you are feeling better. Remember your exercises — 10 minutes morning and evening. Take your medicines on time.", time: "9:00 AM" },
      { day: "Day 3", message: "Hi Rohan, it has been 3 days since your visit. How is your back pain today — on a scale of 1 to 10? Reply with a number.", time: "10:00 AM" },
      { day: "Day 7", message: "Your next physiotherapy session is tomorrow at 6 PM at Cureomax Demo Clinic. Reply 'YES' to confirm.", time: "6:00 PM" },
    ],
  },
  {
    step: "05",
    icon: <CreditCard size={20} color="#C8A96A" />,
    title: "Billing Created",
    label: "Invoice Generated",
    color: "#C8A96A",
    invoice: {
      patient: "Rohan Sharma",
      items: [
        { name: "Initial Consultation — Dr. Aviral Mehta", amount: "₹800" },
        { name: "Physiotherapy Session Package (8 sessions)", amount: "₹4,800" },
      ],
      total: "₹5,600",
      status: "Pending payment",
    },
  },
  {
    step: "06",
    icon: <BarChart3 size={20} color="#C8A96A" />,
    title: "Clinic Owner Analytics",
    label: "Dashboard Updated",
    color: "#9AAB89",
    analytics: [
      { label: "WhatsApp Inquiries Today", value: "14", trend: "↑ 3 vs yesterday" },
      { label: "Appointment Conversion Rate", value: "68%", trend: "↑ 5% vs last week" },
      { label: "Follow-ups Completed", value: "32 / 38", trend: "84% completion" },
      { label: "Revenue This Week", value: "₹1,24,000", trend: "↑ ₹18k vs last week" },
      { label: "Patients Overdue for Visit", value: "7", trend: "Action required" },
      { label: "No-Show Rate", value: "12%", trend: "↓ from 18% last month" },
    ],
  },
];

export default function DemoPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section
        style={{
          background: "#0F2A1D",
          padding: "5rem 1.5rem 3rem",
          backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(200,169,106,0.08) 0%, transparent 55%)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>
            Product Demo
          </p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#F7F1E5", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            One patient. Six moments. Zero patients lost.
          </h1>
          <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto 2rem", fontFamily: "var(--font-body)" }}>
            Follow Rohan Sharma — lower back pain, Noida — from WhatsApp inquiry to clinic analytics. This is Cureomax at work.
          </p>
        </div>
      </section>

      {/* Demo Steps */}
      <section style={{ background: "#F7F1E5", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
          {demoSteps.map((step, i) => (
            <div key={step.step} style={{ background: "white", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "4px", overflow: "hidden", boxShadow: "0 4px 30px rgba(15,42,29,0.06)" }}>
              {/* Step Header */}
              <div style={{ background: "#0F2A1D", padding: "1.25rem 1.75rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(200,169,106,0.15)", border: "1px solid rgba(200,169,106,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {step.icon}
                </div>
                <div>
                  <p style={{ color: "rgba(247,241,229,0.5)", fontSize: "0.7rem", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Step {step.step}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, color: "#F7F1E5" }}>
                    {step.title}
                  </h3>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <span style={{ background: "rgba(200,169,106,0.15)", border: "1px solid rgba(200,169,106,0.25)", borderRadius: "2px", padding: "0.25rem 0.75rem", color: "#C8A96A", fontSize: "0.7rem", fontWeight: 600, fontFamily: "var(--font-body)", letterSpacing: "0.06em" }}>
                    {step.label}
                  </span>
                </div>
              </div>

              {/* Step Content */}
              <div style={{ padding: "1.75rem" }}>
                {/* WhatsApp Mock */}
                {step.whatsappBubble && (
                  <div>
                    <div style={{ background: "#E5DDD5", borderRadius: "4px", padding: "1.25rem", marginBottom: "1rem" }}>
                      <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "#4A3326", fontFamily: "var(--font-body)", marginBottom: "0.75rem", letterSpacing: "0.06em" }}>WhatsApp — Patient Conversation</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                          <div style={{ background: "#DCF8C6", borderRadius: "8px 8px 2px 8px", padding: "0.75rem 1rem", maxWidth: "80%", fontSize: "0.88rem", fontFamily: "var(--font-body)", color: "#1a1a1a", lineHeight: 1.55 }}>
                            {step.whatsappBubble.patient}
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div style={{ background: "white", borderRadius: "8px 8px 8px 2px", padding: "0.75rem 1rem", maxWidth: "85%", fontSize: "0.88rem", fontFamily: "var(--font-body)", color: "#1a1a1a", lineHeight: 1.65, whiteSpace: "pre-line" }}>
                            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0F2A1D", display: "block", marginBottom: "0.25rem" }}>Cureomax AI Receptionist</span>
                            {step.whatsappBubble.ai}
                          </div>
                        </div>
                        {step.whatsappBubble.patient2 && (
                          <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <div style={{ background: "#DCF8C6", borderRadius: "8px 8px 2px 8px", padding: "0.75rem 1rem", maxWidth: "80%", fontSize: "0.88rem", fontFamily: "var(--font-body)", color: "#1a1a1a", lineHeight: 1.55 }}>
                              {step.whatsappBubble.patient2}
                            </div>
                          </div>
                        )}
                        {step.whatsappBubble.ai2 && (
                          <div style={{ display: "flex" }}>
                            <div style={{ background: "white", borderRadius: "8px 8px 8px 2px", padding: "0.75rem 1rem", maxWidth: "85%", fontSize: "0.88rem", fontFamily: "var(--font-body)", color: "#1a1a1a", lineHeight: 1.65, whiteSpace: "pre-line" }}>
                              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0F2A1D", display: "block", marginBottom: "0.25rem" }}>Cureomax AI Receptionist</span>
                              {step.whatsappBubble.ai2}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div style={{ background: "#0F2A1D", borderRadius: "3px", padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <CheckCircle size={14} color="#9AAB89" />
                      <span style={{ color: "rgba(247,241,229,0.8)", fontSize: "0.82rem", fontFamily: "var(--font-body)" }}>{step.insight}</span>
                    </div>
                  </div>
                )}

                {/* Appointment Card */}
                {step.card && (
                  <div style={{ border: "1px solid rgba(200,169,106,0.25)", borderRadius: "4px", padding: "1.5rem", background: "#F7F1E5" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      {Object.entries(step.card).map(([k, v]) => (
                        <div key={k}>
                          <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AAB89", fontFamily: "var(--font-body)", marginBottom: "0.2rem" }}>{k.charAt(0).toUpperCase() + k.slice(1)}</p>
                          <p style={{ fontSize: "0.9rem", color: k === "status" ? "#0F2A1D" : "#4A3326", fontFamily: "var(--font-body)", fontWeight: k === "status" ? 600 : 400 }}>{v as string}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Note Card */}
                {step.noteCard && (
                  <div>
                    <div style={{ border: "1px solid rgba(200,169,106,0.25)", borderRadius: "4px", padding: "1.5rem", background: "#F7F1E5", marginBottom: "1rem" }}>
                      <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C8A96A", fontFamily: "var(--font-body)", marginBottom: "0.75rem" }}>AI Draft — Visit Note</p>
                      <p style={{ fontSize: "0.82rem", color: "#4A3326", fontFamily: "var(--font-body)", marginBottom: "0.5rem" }}><strong>Patient:</strong> {step.noteCard.patient}</p>
                      <p style={{ fontSize: "0.82rem", color: "#4A3326", fontFamily: "var(--font-body)", marginBottom: "0.75rem" }}><strong>Complaint:</strong> {step.noteCard.complaint}</p>
                      <p style={{ fontSize: "0.88rem", color: "#171717", fontFamily: "var(--font-body)", lineHeight: 1.65, background: "rgba(255,255,255,0.7)", padding: "0.75rem", borderRadius: "3px", borderLeft: "3px solid #C8A96A" }}>{step.noteCard.aiDraft}</p>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.75rem 1rem", background: "rgba(90,31,36,0.06)", border: "1px solid rgba(90,31,36,0.15)", borderRadius: "3px" }}>
                      <p style={{ color: "#5A1F24", fontSize: "0.8rem", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>⚠️ {step.noteCard.warning}</p>
                    </div>
                  </div>
                )}

                {/* Reminders */}
                {step.reminders && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {step.reminders.map((r) => (
                      <div key={r.day} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                        <div style={{ minWidth: "56px", background: "#0F2A1D", borderRadius: "2px", padding: "0.3rem 0.5rem", textAlign: "center" }}>
                          <span style={{ color: "#C8A96A", fontSize: "0.7rem", fontWeight: 700, fontFamily: "var(--font-body)" }}>{r.day}</span>
                        </div>
                        <div style={{ background: "#DCF8C6", borderRadius: "8px 8px 8px 2px", padding: "0.75rem 1rem", flex: 1 }}>
                          <p style={{ fontSize: "0.85rem", fontFamily: "var(--font-body)", color: "#1a1a1a", lineHeight: 1.55 }}>{r.message}</p>
                          <p style={{ fontSize: "0.68rem", color: "#666", fontFamily: "var(--font-body)", marginTop: "0.3rem" }}>Sent at {r.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Invoice */}
                {step.invoice && (
                  <div style={{ border: "1px solid rgba(200,169,106,0.25)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ background: "#0F2A1D", padding: "1rem 1.5rem" }}>
                      <p style={{ color: "#F7F1E5", fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 600 }}>Invoice — {step.invoice.patient}</p>
                    </div>
                    <div style={{ padding: "1.25rem 1.5rem", background: "#F7F1E5" }}>
                      {step.invoice.items.map((item) => (
                        <div key={item.name} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(200,169,106,0.15)" }}>
                          <span style={{ fontSize: "0.88rem", fontFamily: "var(--font-body)", color: "#4A3326" }}>{item.name}</span>
                          <span style={{ fontSize: "0.88rem", fontFamily: "var(--font-body)", fontWeight: 600, color: "#0F2A1D" }}>{item.amount}</span>
                        </div>
                      ))}
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0 0" }}>
                        <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#0F2A1D" }}>Total</span>
                        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600, color: "#C8A96A" }}>{step.invoice.total}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Analytics */}
                {step.analytics && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    {step.analytics.map((a) => (
                      <div key={a.label} style={{ background: "#F7F1E5", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "3px", padding: "1.25rem" }}>
                        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AAB89", fontFamily: "var(--font-body)", marginBottom: "0.5rem" }}>{a.label}</p>
                        <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.25rem" }}>{a.value}</p>
                        <p style={{ fontSize: "0.78rem", color: "#4A3326", fontFamily: "var(--font-body)" }}>{a.trend}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#F7F1E5", marginBottom: "1rem" }}>
            Ready to see this in your clinic?
          </h2>
          <p style={{ color: "rgba(247,241,229,0.6)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", fontFamily: "var(--font-body)" }}>
            Book a 30-minute live demo. We will walk through your clinic's specific workflow and show you exactly what Cureomax can recover.
          </p>
          <Link href="/book-demo" className="btn-primary">Book your Cureomax demo →</Link>
        </div>
      </section>
    </div>
  );
}
