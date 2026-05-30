import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy", description: "Cureomax privacy policy — how we collect, use, and protect your data." };
function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.75rem" }}>{title}</h2>
      <div style={{ color: "#4A3326", fontSize: "0.92rem", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>{children}</div>
    </div>
  );
}
export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      <section style={{ background: "#0F2A1D", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#C8A96A", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: "1rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", fontWeight: 600, color: "#F7F1E5" }}>Privacy Policy</h1>
          <p style={{ color: "rgba(247,241,229,0.5)", fontSize: "0.85rem", fontFamily: "var(--font-body)", marginTop: "0.75rem" }}>Last updated: January 2025. This is a starter privacy policy. It has not been reviewed by legal counsel and should not be relied upon as final legal advice.</p>
        </div>
      </section>
      <section style={{ background: "#F7F1E5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ background: "rgba(90,31,36,0.06)", border: "1px solid rgba(90,31,36,0.15)", borderRadius: "3px", padding: "1.25rem 1.5rem", marginBottom: "3rem" }}>
            <p style={{ color: "#5A1F24", fontSize: "0.88rem", lineHeight: 1.65, fontFamily: "var(--font-body)", fontWeight: 500 }}>
              Cureomax is a clinic workflow and AI-assistance platform. Cureomax does not provide medical advice, diagnosis, or treatment. All AI-generated content must be reviewed and approved by a qualified healthcare professional before use.
            </p>
          </div>
          <LegalSection title="1. Who We Are">
            <p>Cureomax is an AI-assisted clinic management platform developed by Cureomax (a product venture based in Noida, Delhi NCR, India). Our platform helps clinics manage patient inquiries, appointments, follow-ups, clinical documentation, and billing. We are accessible at cureomax.com.</p>
          </LegalSection>
          <LegalSection title="2. Information We Collect">
            <p style={{ marginBottom: "0.75rem" }}>We collect the following categories of information:</p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Clinic information:</strong> Clinic name, doctor/owner name, phone, email, city, specialty.</li>
              <li><strong>Patient data (entered by clinic staff):</strong> Name, contact details, medical complaint, visit history, clinical notes. This data belongs to the clinic.</li>
              <li><strong>Usage data:</strong> How clinic staff interact with the platform, session logs, feature usage.</li>
              <li><strong>Communication data:</strong> WhatsApp messages processed through the system (with patient consent).</li>
            </ul>
          </LegalSection>
          <LegalSection title="3. How We Use Your Information">
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>To provide and maintain the Cureomax platform</li>
              <li>To generate AI-assisted drafts for clinic workflows (all requiring doctor approval)</li>
              <li>To send follow-up reminders and notifications on behalf of the clinic</li>
              <li>To improve our product and features</li>
              <li>To communicate updates, pilot information, and product news to authorised contacts</li>
            </ul>
          </LegalSection>
          <LegalSection title="4. Patient Data">
            <p>Patient data entered into Cureomax belongs to the clinic. Cureomax processes this data only on the instruction of the clinic and does not use patient data for advertising, profiling, or any purpose outside the scope of clinic operations. Clinics are responsible for obtaining patient consent before entering their data into the system.</p>
          </LegalSection>
          <LegalSection title="5. Data Security">
            <p>We implement role-based access controls, encrypted storage, and audit logs. Access to patient data is restricted by user roles. We do not sell, share, or rent your data to third parties.</p>
          </LegalSection>
          <LegalSection title="6. Data Retention and Deletion">
            <p>Clinics may request export or deletion of their data at any time by contacting hello@cureomax.com. We will process deletion requests within 30 days.</p>
          </LegalSection>
          <LegalSection title="7. Contact">
            <p>For privacy-related queries, contact us at: hello@cureomax.com</p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}
