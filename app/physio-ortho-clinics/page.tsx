"use client";
import Link from "next/link";
import { CheckCircle, ArrowRight, Activity, TrendingUp, Bell, BarChart3, FileText, AlertTriangle } from "lucide-react";


const useCases = [
  { icon: "🦴", title: "Lower Back Pain Rehab", desc: "Track pain scores from day 1, automate 3-day check-ins, send session reminders, and flag patients who stop responding mid-course." },
  { icon: "🦵", title: "Knee Pain & Replacement", desc: "Session package tracking with utilisation alerts. Pain score timeline across pre-op, surgery, and post-op phases." },
  { icon: "💪", title: "Shoulder Pain Recovery", desc: "Mobility exercise reminders, attendance tracking across sessions, drop-off flags when a patient misses two sessions in a row." },
  { icon: "🏥", title: "Post-Surgery Physiotherapy", desc: "Structured follow-up at Day 3, Week 1, Week 2, Week 4. Milestone check-ins, report upload reminders, and GP communication drafts." },
  { icon: "⚽", title: "Sports Injury Recovery", desc: "Phase-wise recovery tracking, return-to-play milestone reminders, exercise protocol follow-up, and athlete-specific session notes." },
  { icon: "💻", title: "Office Worker Posture & Pain", desc: "Long-term chronic pain patients need consistent follow-up. Automated check-ins prevent drop-offs without burdening reception staff." },
];

const timeline = [
  { day: "Day 1", type: "visit", text: "Rohan visits for lower back pain. Pain score 8/10 recorded. Treatment plan: 8 physio sessions over 3 weeks. AI drafts visit note — doctor approves." },
  { day: "Day 1 — 6 PM", type: "reminder", text: "Cureomax sends: 'Hi Rohan, here are your home exercises for tonight. 10 minutes each — morning and evening. Take your medication on time.'" },
  { day: "Day 3", type: "check", text: "Automated check-in: 'How is your back today? Reply with your pain score (1–10).' Rohan replies: 5. Score updated. Progress logged." },
  { day: "Day 5 — 9 AM", type: "reminder", text: "Session reminder: 'Your next physio session is tomorrow at 11 AM. Reply YES to confirm.' Rohan confirms." },
  { day: "Day 7", type: "visit", text: "Second session. Pain score: 4/10. Doctor notes improvement. Two more sessions scheduled. AI drafts progress note — doctor approves." },
  { day: "Day 12", type: "reminder", text: "Cureomax flags: 'Rohan Sharma has not booked his 5th session — due this week.' Receptionist calls. Session booked." },
  { day: "Day 21", type: "complete", text: "Course complete. Pain score: 1/10. Discharge note drafted by AI — reviewed and approved by doctor. Follow-up check sent in 30 days." },
];

const metrics = [
  { label: "Active Physio Patients", value: "34", note: "11 with sessions this week" },
  { label: "Avg Pain Score Drop", value: "4.2 pts", note: "Over a 2-week course" },
  { label: "Session Utilisation", value: "88%", note: "Up from 71% last month" },
  { label: "Mid-Course Drop-offs", value: "3", note: "Down from 9 last month" },
  { label: "Follow-up Completion", value: "82%", note: "Automated system running" },
  { label: "Revenue — Physio", value: "₹84,000", note: "This month" },
];

const typeColors: Record<string, string> = {
  visit: "#C8A45D", reminder: "#0A7075", check: "#0A7075", complete: "#A8B8A1",
};

export default function PhysioOrthoPage() {
  return (
    <div style={{ paddingTop: 68 }}>

      {/* Hero */}
      <section style={{ background: "var(--navy-deep)", backgroundImage: "radial-gradient(ellipse at 15% 70%, rgba(10,112,117,0.15) 0%, transparent 55%)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <Activity size={16} color="#0E8E94" />
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E8E94", fontFamily: "var(--sans)" }}>Physiotherapy &amp; Orthopedics</span>
          </div>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.1, maxWidth: 780, marginBottom: "1.5rem" }}>
            AI Follow-up and Clinic CRM for Physio &amp; Ortho Clinics
          </h1>
          <p style={{ color: "var(--white-70)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 580, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            Reduce patient drop-offs, track pain recovery automatically, automate session reminders, and bring patients back for every visit — without adding to your receptionist's workload.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link href="/book-demo" className="btn-gold">Book a Physio Clinic Demo <ArrowRight size={15} /></Link>
            <Link href="/demo" className="btn-outline-gold">See Patient Journey Demo</Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {["Physiotherapy", "Orthopedics", "Sports Medicine", "Post-Surgery Rehab", "Chronic Pain"].map((s) => (
              <span key={s} className="specialty-tag">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem stat section */}
      <section style={{ background: "#0A1220", padding: "4rem 1.5rem", borderTop: "1px solid rgba(200,164,93,0.07)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>The Physio Problem</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Physio patients drop out mid-course. And clinics never know why.
            </h2>
            <p style={{ color: "var(--white-70)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)", marginBottom: "1.25rem" }}>
              A patient visits for lower back pain. Pain score is 8/10. You book them for 8 sessions. They complete 3 — then stop responding. Their pain improved a little, they got busy, they forgot. Your revenue is lost. Their recovery is incomplete.
            </p>
            <p style={{ color: "var(--white-50)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>
              Cureomax tracks every patient, automates the follow-ups, and shows you who is at risk of dropping out — before they do.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: "📉", title: "Average drop-off rate", stat: "35–45%", desc: "Patients who start physio treatment but don't complete the course" },
              { icon: "💬", title: "Revenue lost per drop-off", stat: "₹3,000–₹8,000", desc: "Across unfinished sessions, packages, and follow-up consultations" },
              { icon: "📅", title: "No-show rate without reminders", stat: "15–22%", desc: "Appointments booked but not attended — most are preventable" },
            ].map((s) => (
              <div key={s.title} style={{ background: "var(--navy-mid)", border: "1px solid rgba(200,164,93,0.1)", borderRadius: 6, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
                <div>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 600, color: "#C8A45D", lineHeight: 1 }}>{s.stat}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", fontWeight: 600, color: "#FAFAF8", margin: "0.3rem 0 0.2rem" }}>{s.title}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", color: "var(--white-50)", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Recovery Timeline */}
      <section style={{ background: "var(--navy)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Patient Journey</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.75rem" }}>
            Rohan Sharma — Lower back pain
          </h2>
          <p style={{ color: "var(--white-50)", fontSize: "0.95rem", fontFamily: "var(--sans)", marginBottom: "3rem" }}>
            Pain score 8/10 on Day 1. See how Cureomax manages his full 21-day recovery journey automatically — without a single manual follow-up call.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: "1.5rem",
                  paddingBottom: i < timeline.length - 1 ? "1.75rem" : 0,
                  borderLeft: i < timeline.length - 1 ? "2px solid rgba(200,164,93,0.15)" : "2px solid transparent",
                  marginLeft: "20px", paddingLeft: "2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute", left: "-10px", top: 0,
                    width: 18, height: 18, borderRadius: "50%",
                    background: typeColors[item.type],
                    flexShrink: 0,
                    boxShadow: `0 0 8px ${typeColors[item.type]}44`,
                  }}
                />
                <div style={{ paddingTop: "0.1rem" }}>
                  <p style={{ color: typeColors[item.type], fontSize: "0.72rem", fontWeight: 700, fontFamily: "var(--sans)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{item.day}</p>
                  <p style={{ color: "var(--white-70)", fontSize: "0.9rem", lineHeight: 1.65, fontFamily: "var(--sans)" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", padding: "1.25rem 1.5rem", background: "rgba(10,112,117,0.1)", border: "1px solid rgba(10,112,117,0.2)", borderRadius: 4 }}>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <CheckCircle size={14} color="#0A7075" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ color: "var(--white-70)", fontSize: "0.85rem", lineHeight: 1.65, fontFamily: "var(--sans)" }}>
                Every automated message above was sent by Cureomax without manual intervention. Doctor-approved visit notes only. Zero staff burden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ background: "#0A1220", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Treatment Categories</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#FAFAF8", marginBottom: "3rem" }}>
            Built for how physio clinics actually work
          </h2>
          <div className="grid-3" style={{ gap: "1.25rem" }}>
            {useCases.map((uc) => (
              <div key={uc.title} style={{ background: "var(--navy-mid)", border: "1px solid rgba(200,164,93,0.1)", borderRadius: 6, padding: "1.75rem", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(10,112,117,0.4)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.1)")}>
                <div style={{ fontSize: "1.6rem", marginBottom: "0.875rem" }}>{uc.icon}</div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.5rem" }}>{uc.title}</h3>
                <p style={{ color: "var(--white-50)", fontSize: "0.87rem", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section style={{ background: "var(--navy)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Clinic Dashboard</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.75rem" }}>
            Your physio clinic numbers — finally visible.
          </h2>
          <p style={{ color: "var(--white-50)", fontSize: "0.95rem", fontFamily: "var(--sans)", marginBottom: "3rem", maxWidth: 560 }}>
            Most physio clinic owners don't know their session utilisation rate, follow-up completion rate, or monthly recovery rate. Cureomax shows all of it — live.
          </p>
          <div className="grid-3" style={{ gap: "1.25rem" }}>
            {metrics.map((m) => (
              <div key={m.label} style={{ background: "var(--navy-mid)", border: "1px solid rgba(200,164,93,0.12)", borderRadius: 6, padding: "1.5rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--trust-gray)", fontFamily: "var(--sans)", marginBottom: "0.5rem" }}>{m.label}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 600, color: "#C8A45D", lineHeight: 1, marginBottom: "0.3rem" }}>{m.value}</p>
                <p style={{ fontSize: "0.78rem", color: "var(--white-50)", fontFamily: "var(--sans)" }}>{m.note}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "1.25rem 1.5rem", background: "rgba(158,59,50,0.06)", border: "1px solid rgba(158,59,50,0.15)", borderRadius: 4 }}>
            <AlertTriangle size={14} color="rgba(196,112,106,0.8)" style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ color: "rgba(196,112,106,0.8)", fontSize: "0.83rem", lineHeight: 1.65, fontFamily: "var(--sans)" }}>
              <strong style={{ color: "rgba(196,150,146,0.9)" }}>Medical Disclaimer: </strong>
              Cureomax supports clinical workflows. All AI-generated visit notes, summaries, and follow-up content require doctor review and approval before use. Cureomax does not replace medical judgment or autonomous diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--teal)", padding: "5.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>
            Stop losing physio patients mid-course.
          </h2>
          <p style={{ color: "rgba(250,250,248,0.75)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            Book a 30-minute demo. We will show you exactly how Cureomax handles your clinic's follow-up workflow — built specifically for physiotherapy and orthopedic clinics.
          </p>
          <Link href="/book-demo" className="btn-gold" style={{ background: "white", color: "var(--teal)" }}>
            Book a Demo for My Physio Clinic <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  );
}
