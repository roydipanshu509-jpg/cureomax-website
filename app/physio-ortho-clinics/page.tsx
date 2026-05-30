import type { Metadata } from "next";
import Link from "next/link";
import { Activity, CheckCircle, TrendingUp, Bell, FileText, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Physio & Ortho Clinics — AI Follow-up and Clinic CRM",
  description: "Cureomax helps physiotherapy and orthopedic clinics reduce patient drop-offs, track pain recovery, automate session reminders, and bring patients back for the next visit.",
};

const useCases = [
  { title: "Lower Back Pain", desc: "Track pain scores from day 1, automate session reminders, check recovery progress at day 3 and 7." },
  { title: "Knee Pain Rehab", desc: "Session package tracking, exercise reminders, pain score timeline, revisit nudges after discharge." },
  { title: "Shoulder Pain Recovery", desc: "Send mobility exercise reminders, track patient attendance across sessions, flag drop-offs." },
  { title: "Post-Surgery Physiotherapy", desc: "Structured follow-up at Day 3, Week 1, Week 2, Week 4. Milestone tracking, report upload reminders." },
  { title: "Sports Injury Recovery", desc: "Phase-wise recovery tracking, RTP (return to play) milestone reminders, exercise protocol follow-up." },
  { title: "Office Worker Posture Care", desc: "Chronic pain patients need long-term follow-up. Automated check-ins prevent drop-offs." },
];

const recoveryTimeline = [
  { day: "Day 1", action: "Patient visits for lower back pain. Pain score recorded: 8/10. Treatment begins.", type: "visit" },
  { day: "Day 1 — 2 PM", action: "Cureomax sends: 'Thank you for visiting. Here are your home exercises for tonight.'", type: "reminder" },
  { day: "Day 3", action: "Cureomax sends: 'Hi Rohan, how is your back today? Reply with your pain score (1–10).'", type: "check" },
  { day: "Day 3 — 8 PM", action: "Rohan replies: '5'. Pain score updated to 5/10. Progress noted.", type: "data" },
  { day: "Day 5", action: "Cureomax sends: 'Your next physio session is Day 6 at 5 PM. Reply YES to confirm.'", type: "reminder" },
  { day: "Day 7", action: "Second session. Doctor notes improvement. Pain score: 4/10. Two more sessions scheduled.", type: "visit" },
  { day: "Day 14", action: "Course complete. Pain score: 2/10. Discharge note drafted by AI — reviewed by doctor.", type: "complete" },
];

const analyticsCards = [
  { label: "Active Physio Patients", value: "34", note: "11 with sessions this week" },
  { label: "Avg Pain Score Drop", value: "4.2 pts", note: "Over a 2-week course" },
  { label: "Session Package Utilisation", value: "88%", note: "Up from 71% last month" },
  { label: "Patients Lost Mid-Course", value: "3", note: "Down from 9 last month" },
  { label: "Follow-up Completion Rate", value: "82%", note: "Automated reminders working" },
  { label: "Revenue — Physio", value: "₹84,000", note: "This month" },
];

export default function PhysioOrthoPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem", backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(200,169,106,0.08) 0%, transparent 55%)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <Activity size={18} color="#9AAB89" />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9AAB89", fontFamily: "var(--font-body)" }}>Physiotherapy & Orthopedics</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#F7F1E5", lineHeight: 1.12, maxWidth: "760px", marginBottom: "1.5rem" }}>
            AI Follow-up and Clinic CRM for Physio &amp; Ortho Clinics
          </h1>
          <p style={{ color: "rgba(247,241,229,0.7)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem", fontFamily: "var(--font-body)" }}>
            Reduce patient drop-offs, track pain recovery, automate session reminders, and bring patients back for the next visit.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-primary">Book a Demo →</Link>
            <Link href="/demo" className="btn-outline">View Demo Story</Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section style={{ background: "#F7F1E5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>The Physio Problem</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#0F2A1D", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Physio patients drop out mid-course. And clinics never know why.
            </h2>
            <p style={{ color: "#4A3326", fontSize: "0.95rem", lineHeight: 1.75, fontFamily: "var(--font-body)", marginBottom: "1.25rem" }}>
              A patient comes for lower back pain. Pain is 8/10. You book them for 8 sessions. They complete 3 — then stop returning. Their pain improved a little, they got busy, they forgot. Your revenue is lost, their recovery is incomplete.
            </p>
            <p style={{ color: "#4A3326", fontSize: "0.95rem", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>
              Cureomax tracks every patient, automates the follow-ups, and shows you who is at risk of dropping out — before they do.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: "📉", title: "Average drop-off rate", stat: "35–45%", desc: "Patients who start physio treatment but don't complete the course" },
              { icon: "💬", title: "Missed follow-up cost", stat: "₹3,000–₹8,000", desc: "Estimated per patient lost mid-treatment, across sessions and prescriptions" },
              { icon: "📅", title: "No-show rate", stat: "15–22%", desc: "Appointments booked but not attended without any prior notice" },
            ].map((stat) => (
              <div key={stat.title} style={{ background: "white", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "3px", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                <span style={{ fontSize: "1.5rem" }}>{stat.icon}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600, color: "#5A1F24" }}>{stat.stat}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 600, color: "#0F2A1D" }}>{stat.title}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "#4A3326", lineHeight: 1.5 }}>{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Timeline Demo */}
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>Patient Journey Example</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#F7F1E5", marginBottom: "0.75rem" }}>Rohan Sharma — Lower back pain</h2>
          <p style={{ color: "rgba(247,241,229,0.6)", fontSize: "0.95rem", fontFamily: "var(--font-body)", marginBottom: "3rem" }}>Pain score 8/10 on Day 1. See how Cureomax manages his full 14-day recovery journey automatically.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {recoveryTimeline.map((item, i) => {
              const typeColors: Record<string, string> = { visit: "#C8A96A", reminder: "#9AAB89", check: "#9AAB89", data: "#C8A96A", complete: "#9AAB89" };
              return (
                <div key={i} style={{ display: "flex", gap: "1.25rem", paddingBottom: i < recoveryTimeline.length - 1 ? "1.5rem" : 0, borderLeft: i < recoveryTimeline.length - 1 ? "2px solid rgba(200,169,106,0.2)" : "2px solid transparent", marginLeft: "16px", paddingLeft: "1.75rem", position: "relative" }}>
                  <div style={{ position: "absolute", left: "-9px", top: "2px", width: "16px", height: "16px", borderRadius: "50%", background: typeColors[item.type], flexShrink: 0 }} />
                  <div>
                    <p style={{ color: "#C8A96A", fontSize: "0.72rem", fontWeight: 700, fontFamily: "var(--font-body)", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>{item.day}</p>
                    <p style={{ color: "rgba(247,241,229,0.75)", fontSize: "0.88rem", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>{item.action}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ background: "#EFE3D0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>Use Cases</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#0F2A1D", marginBottom: "3rem" }}>Built for how physio clinics actually work</h2>
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

      {/* Analytics Preview */}
      <section style={{ background: "#F7F1E5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>Clinic Dashboard</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#0F2A1D", marginBottom: "3rem" }}>What your physio clinic dashboard looks like</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {analyticsCards.map((a) => (
              <div key={a.label} style={{ background: "white", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "3px", padding: "1.5rem" }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AAB89", fontFamily: "var(--font-body)", marginBottom: "0.5rem" }}>{a.label}</p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.25rem" }}>{a.value}</p>
                <p style={{ fontSize: "0.78rem", color: "#4A3326", fontFamily: "var(--font-body)" }}>{a.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#F7F1E5", marginBottom: "1rem" }}>Stop losing physio patients mid-course.</h2>
          <p style={{ color: "rgba(247,241,229,0.6)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", fontFamily: "var(--font-body)" }}>Book a 30-minute demo. We will show you exactly how Cureomax handles your clinic's follow-up workflow — built for physiotherapy and orthopedics.</p>
          <Link href="/book-demo" className="btn-primary">Book a Demo for My Physio Clinic →</Link>
        </div>
      </section>
    </div>
  );
}
