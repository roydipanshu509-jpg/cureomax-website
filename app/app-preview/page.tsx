"use client";
import Link from "next/link";
import { MessageSquare, Users, Calendar, FileText, Bell, CreditCard, BarChart3, TrendingUp } from "lucide-react";


export default function AppPreviewPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(200,169,106,0.1)", border: "1px solid rgba(200,169,106,0.25)", borderRadius: "2px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
            <span style={{ color: "#C8A96A", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>Product Preview — Not the Live App</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#F7F1E5", lineHeight: 1.15, maxWidth: "700px", marginBottom: "1.25rem" }}>
            The Cureomax Clinic Dashboard
          </h1>
          <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "560px", fontFamily: "var(--font-body)" }}>
            This is a visual preview of what the Cureomax dashboard looks and feels like. All data shown is illustrative. The real dashboard is demonstrated in your clinic during the demo.
          </p>
        </div>
      </section>

      <section style={{ background: "#171717", padding: "2rem 1.5rem 5rem", borderTop: "1px solid rgba(200,169,106,0.1)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Top Bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem", background: "#0F2A1D", borderRadius: "4px 4px 0 0", border: "1px solid rgba(200,169,106,0.15)", borderBottom: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600, color: "#F7F1E5" }}>Cureo</span>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600, color: "#C8A96A" }}>max</span>
              <span style={{ color: "rgba(247,241,229,0.35)", fontSize: "0.8rem", fontFamily: "var(--font-body)", marginLeft: "0.5rem" }}>/ Cureomax Demo Clinic, Noida Sector 150</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#9AAB89" }} />
              <span style={{ color: "rgba(247,241,229,0.6)", fontSize: "0.8rem", fontFamily: "var(--font-body)" }}>Dr. Aviral Mehta</span>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div style={{ background: "#1a1a1a", border: "1px solid rgba(200,169,106,0.12)", borderRadius: "0 0 4px 4px", padding: "1.5rem", display: "flex", gap: "1.25rem" }}>
            {/* Sidebar */}
            <div style={{ width: "180px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {[
                { icon: <BarChart3 size={14} />, label: "Overview", active: true },
                { icon: <MessageSquare size={14} />, label: "WhatsApp", active: false, badge: "9" },
                { icon: <Users size={14} />, label: "Patients", active: false },
                { icon: <Calendar size={14} />, label: "Appointments", active: false },
                { icon: <FileText size={14} />, label: "Doctor Copilot", active: false },
                { icon: <Bell size={14} />, label: "Follow-ups", active: false, badge: "5" },
                { icon: <CreditCard size={14} />, label: "Billing", active: false },
                { icon: <BarChart3 size={14} />, label: "Analytics", active: false },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.55rem 0.75rem", borderRadius: "3px", background: item.active ? "rgba(200,169,106,0.12)" : "transparent", cursor: "default" }}>
                  <span style={{ color: item.active ? "#C8A96A" : "rgba(247,241,229,0.4)" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.8rem", fontFamily: "var(--font-body)", color: item.active ? "#F7F1E5" : "rgba(247,241,229,0.45)", fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
                  {item.badge && <span style={{ marginLeft: "auto", background: "#C8A96A", color: "#0F2A1D", fontSize: "0.6rem", fontWeight: 700, borderRadius: "10px", padding: "0.1rem 0.4rem", fontFamily: "var(--font-body)" }}>{item.badge}</span>}
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* KPI Row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                {[
                  { label: "Today's Inquiries", value: "14", sub: "↑ 3 vs yesterday", icon: <MessageSquare size={14} color="#C8A96A" /> },
                  { label: "Appointments Today", value: "22", sub: "3 pending confirm", icon: <Calendar size={14} color="#9AAB89" /> },
                  { label: "Follow-ups Due", value: "8", sub: "5 overdue", icon: <Bell size={14} color="#C8A96A" /> },
                  { label: "Revenue Today", value: "₹18,400", sub: "↑ ₹2k vs yesterday", icon: <TrendingUp size={14} color="#9AAB89" /> },
                ].map((kpi) => (
                  <div key={kpi.label} style={{ background: "#0F2A1D", border: "1px solid rgba(200,169,106,0.15)", borderRadius: "3px", padding: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-body)", color: "rgba(247,241,229,0.4)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{kpi.label}</span>
                      {kpi.icon}
                    </div>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600, color: "#F7F1E5" }}>{kpi.value}</p>
                    <p style={{ fontSize: "0.72rem", color: "rgba(247,241,229,0.4)", fontFamily: "var(--font-body)", marginTop: "0.2rem" }}>{kpi.sub}</p>
                  </div>
                ))}
              </div>

              {/* Two column middle */}
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "1rem" }}>
                {/* WhatsApp Queue */}
                <div style={{ background: "#0F2A1D", border: "1px solid rgba(200,169,106,0.15)", borderRadius: "3px", padding: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <p style={{ color: "#F7F1E5", fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 600 }}>WhatsApp Inquiries</p>
                    <span style={{ background: "#C8A96A", color: "#0F2A1D", fontSize: "0.6rem", fontWeight: 700, borderRadius: "10px", padding: "0.1rem 0.5rem", fontFamily: "var(--font-body)" }}>9 pending</span>
                  </div>
                  {[
                    { name: "Rohan Sharma", issue: "Lower back pain · 7/10", time: "2 min ago", status: "New" },
                    { name: "Priya Mehta", issue: "Knee pain · appointment request", time: "14 min ago", status: "New" },
                    { name: "Suresh Kumar", issue: "Shoulder follow-up", time: "32 min ago", status: "Pending" },
                    { name: "Anjali Gupta", issue: "Physiotherapy package inquiry", time: "1 hr ago", status: "Pending" },
                  ].map((row) => (
                    <div key={row.name} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.65rem 0", borderBottom: "1px solid rgba(200,169,106,0.08)" }}>
                      <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(200,169,106,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: "0.7rem", color: "#C8A96A", fontWeight: 700, fontFamily: "var(--font-body)" }}>{row.name.charAt(0)}</span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ color: "#F7F1E5", fontSize: "0.8rem", fontFamily: "var(--font-body)", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.name}</p>
                        <p style={{ color: "rgba(247,241,229,0.4)", fontSize: "0.72rem", fontFamily: "var(--font-body)" }}>{row.issue}</p>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <p style={{ color: "rgba(247,241,229,0.35)", fontSize: "0.65rem", fontFamily: "var(--font-body)" }}>{row.time}</p>
                        <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-body)", color: row.status === "New" ? "#C8A96A" : "rgba(247,241,229,0.35)", fontWeight: 600 }}>{row.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Today's Schedule */}
                <div style={{ background: "#0F2A1D", border: "1px solid rgba(200,169,106,0.15)", borderRadius: "3px", padding: "1.25rem" }}>
                  <p style={{ color: "#F7F1E5", fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 600, marginBottom: "1rem" }}>Today's Schedule</p>
                  {[
                    { time: "10:00 AM", patient: "Rahul D.", type: "Ortho consult", status: "Confirmed" },
                    { time: "11:30 AM", patient: "Meena R.", type: "Physio session 3/8", status: "Confirmed" },
                    { time: "2:00 PM", patient: "Ankit J.", type: "Follow-up", status: "Pending" },
                    { time: "4:30 PM", patient: "Sonal M.", type: "New patient", status: "Confirmed" },
                    { time: "6:00 PM", patient: "Rohan S.", type: "Physio session 1", status: "Booked" },
                  ].map((appt) => (
                    <div key={appt.time} style={{ display: "flex", gap: "0.6rem", padding: "0.6rem 0", borderBottom: "1px solid rgba(200,169,106,0.08)", alignItems: "center" }}>
                      <span style={{ color: "#C8A96A", fontSize: "0.7rem", fontFamily: "var(--font-body)", fontWeight: 600, width: "56px", flexShrink: 0 }}>{appt.time}</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ color: "#F7F1E5", fontSize: "0.78rem", fontFamily: "var(--font-body)" }}>{appt.patient}</p>
                        <p style={{ color: "rgba(247,241,229,0.4)", fontSize: "0.68rem", fontFamily: "var(--font-body)" }}>{appt.type}</p>
                      </div>
                      <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-body)", color: appt.status === "Confirmed" ? "#9AAB89" : appt.status === "Pending" ? "#C8A96A" : "rgba(247,241,229,0.4)", fontWeight: 600 }}>{appt.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p style={{ color: "rgba(247,241,229,0.35)", fontSize: "0.78rem", fontFamily: "var(--font-body)", marginTop: "1rem", textAlign: "center" }}>
            All data shown is illustrative. The live Cureomax dashboard is demonstrated during your clinic demo.
          </p>
        </div>
      </section>

      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#F7F1E5", marginBottom: "1rem" }}>See the real dashboard in your demo</h2>
          <p style={{ color: "rgba(247,241,229,0.6)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", fontFamily: "var(--font-body)" }}>Book a 30-minute demo and we will show you the full Cureomax dashboard with your clinic's specific workflow.</p>
          <Link href="/book-demo" className="btn-primary">Book a Demo →</Link>
        </div>
      </section>
    </div>
  );
}
