import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service", description: "Cureomax terms of service." };
function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.75rem" }}>{title}</h2>
      <div style={{ color: "#4A3326", fontSize: "0.92rem", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>{children}</div>
    </div>
  );
}
export default function TermsPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      <section style={{ background: "#0F2A1D", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#C8A96A", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: "1rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", fontWeight: 600, color: "#F7F1E5" }}>Terms of Service</h1>
          <p style={{ color: "rgba(247,241,229,0.5)", fontSize: "0.85rem", fontFamily: "var(--font-body)", marginTop: "0.75rem" }}>Last updated: January 2025. Starter terms — not lawyer-reviewed. Subject to change.</p>
        </div>
      </section>
      <section style={{ background: "#F7F1E5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <LegalSection title="1. Acceptance of Terms">
            <p>By accessing or using the Cureomax platform, you agree to these Terms of Service. If you do not agree, please do not use the platform. These terms apply to clinic owners, doctors, and clinic staff who use Cureomax.</p>
          </LegalSection>
          <LegalSection title="2. Description of Service">
            <p>Cureomax is a clinic workflow and AI-assistance platform. It helps clinics manage WhatsApp inquiries, patient records, appointments, follow-up reminders, AI-assisted documentation drafts, billing, and analytics. Cureomax is not a medical service. It does not provide medical advice, diagnosis, or treatment.</p>
          </LegalSection>
          <LegalSection title="3. Clinical Responsibility">
            <p style={{ marginBottom: "0.75rem" }}>The clinic and its doctors are solely responsible for all clinical decisions. Cureomax AI-generated content — including visit note drafts, patient summaries, and prescription templates — must be reviewed and approved by a qualified healthcare professional before use. Cureomax assumes no liability for any clinical outcome arising from the use of AI-generated content.</p>
            <p style={{ fontWeight: 600 }}>AI assists. Doctors decide.</p>
          </LegalSection>
          <LegalSection title="4. Data and Privacy">
            <p>Patient data entered into Cureomax belongs to the clinic. You are responsible for obtaining patient consent before entering their data into the system. You agree to use patient data only for lawful clinic operations. See our Privacy Policy for details on how we handle data.</p>
          </LegalSection>
          <LegalSection title="5. Acceptable Use">
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>You may not use Cureomax for unlawful purposes.</li>
              <li>You may not enter false patient information into the system.</li>
              <li>You may not attempt to circumvent the doctor-approval requirement for clinical outputs.</li>
              <li>You may not share your account credentials with unauthorised persons.</li>
            </ul>
          </LegalSection>
          <LegalSection title="6. Payments and Billing">
            <p>Subscription fees are billed monthly in advance. No refunds are provided for partial months. We reserve the right to suspend access for unpaid accounts after reasonable notice.</p>
          </LegalSection>
          <LegalSection title="7. Limitation of Liability">
            <p>Cureomax is not liable for any clinical outcomes, patient outcomes, financial losses, or operational disruptions arising from use of the platform. The platform is provided as a workflow tool to assist clinic staff, not to replace clinical judgment.</p>
          </LegalSection>
          <LegalSection title="8. Contact">
            <p>For questions about these terms, contact hello@cureomax.com.</p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}
