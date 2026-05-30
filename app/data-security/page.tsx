import type { Metadata } from "next";
import { Shield, CheckCircle } from "lucide-react";
export const metadata: Metadata = { title: "Data Security", description: "How Cureomax protects patient and clinic data." };
export default function DataSecurityPage() {
  const pillars = [
    { title: "Role-Based Access Control", desc: "Each user role (doctor, receptionist, admin, owner) sees only the data relevant to their function. Reception staff cannot access doctor notes. Clinic owners can see all data within their clinic." },
    { title: "Patient Consent Requirements", desc: "Patient consent is required before any consultation is recorded or any communication is initiated on the patient's behalf. Consent is logged and auditable." },
    { title: "Encrypted Storage", desc: "Patient data is stored in encrypted databases. Data in transit is protected by TLS. We do not store data in plain text." },
    { title: "Audit Logs", desc: "All significant system actions — user logins, record access, note approvals, communication sends — are logged with timestamp and user identity. Audit logs are available to clinic owners." },
    { title: "AI Approval Controls", desc: "No AI-generated clinical content is automatically sent or saved without doctor review and approval. Every AI output has a mandatory review gate. This is a core architectural requirement, not an optional setting." },
    { title: "Data Export and Deletion", desc: "Clinics may request a full export of their data at any time. Deletion requests are processed within 30 days. Patient data is handled per the clinic's instruction." },
    { title: "Responsible AI Usage", desc: "Cureomax AI does not make clinical decisions. It generates drafts to assist clinic workflows. All clinical outputs carry an explicit review requirement. We do not train our AI on your patient data without explicit consent." },
    { title: "Access Revocation", desc: "Clinic admins can revoke staff access immediately. Offboarded staff lose system access on revocation. Session tokens expire automatically." },
  ];
  return (
    <div style={{ paddingTop: "68px" }}>
      <section style={{ background: "#0F2A1D", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#C8A96A", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: "1rem" }}>Security</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", fontWeight: 600, color: "#F7F1E5", marginBottom: "1rem" }}>Data Security</h1>
          <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px", fontFamily: "var(--font-body)" }}>Patient data is the most sensitive information a clinic holds. Cureomax is built with that responsibility at its core.</p>
        </div>
      </section>
      <section style={{ background: "#F7F1E5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "1.5rem" }}>
            {pillars.map((p) => (
              <div key={p.title} style={{ background: "white", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "3px", padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <Shield size={16} color="#C8A96A" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 600, color: "#0F2A1D" }}>{p.title}</h2>
                </div>
                <p style={{ color: "#4A3326", fontSize: "0.88rem", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem", background: "#0F2A1D", borderRadius: "3px", padding: "2rem", border: "1px solid rgba(200,169,106,0.2)" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 600, color: "#F7F1E5", marginBottom: "0.75rem" }}>Questions about security?</p>
            <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>Contact our team at hello@cureomax.com with any data security questions. We take security concerns seriously and respond promptly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
