import type { Metadata } from "next";
export const metadata: Metadata = { title: "Disclaimer", description: "Cureomax medical and AI disclaimer." };
export default function DisclaimerPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      <section style={{ background: "#0F2A1D", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#C8A96A", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: "1rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", fontWeight: 600, color: "#F7F1E5" }}>Disclaimer</h1>
        </div>
      </section>
      <section style={{ background: "#F7F1E5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {[
            { title: "Not a Medical Service", body: "Cureomax is a clinic workflow and AI-assistance platform. Cureomax does not provide medical advice, diagnosis, or treatment. All AI-generated content — including visit note drafts, patient summaries, prescription templates, and follow-up messages — must be reviewed and approved by a qualified healthcare professional before use or delivery." },
            { title: "AI Limitations", body: "AI-generated content may contain errors, omissions, or inaccuracies. It is generated as a draft to assist clinic workflows — not as a clinical recommendation. Cureomax does not warrant the accuracy or completeness of any AI-generated output. Doctor review is mandatory." },
            { title: "No Doctor-Patient Relationship", body: "Use of the Cureomax platform does not create a doctor-patient relationship between Cureomax and any patient. Clinical decisions remain the responsibility of the treating doctor." },
            { title: "Emergency Situations", body: "Cureomax is not a medical emergency service. In any medical emergency, patients and clinics must contact emergency services immediately. Cureomax AI assistants are designed to include safe messaging for urgent red flags, but are not a substitute for emergency care." },
            { title: "Regulatory Compliance", body: "Clinics using Cureomax are responsible for ensuring their use of the platform complies with applicable Indian healthcare regulations, including those issued by the Ministry of Health and Family Welfare, the Medical Council of India, and any applicable state authorities." },
            { title: "Website Information", body: "Information on the Cureomax website is for informational purposes only and should not be relied upon as medical, legal, or financial advice. Clinic outcomes mentioned on the website are illustrative and do not constitute guarantees of results." },
          ].map((s) => (
            <div key={s.title} style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.75rem" }}>{s.title}</h2>
              <p style={{ color: "#4A3326", fontSize: "0.92rem", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
