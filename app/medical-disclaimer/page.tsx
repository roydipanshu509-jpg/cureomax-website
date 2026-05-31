import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer — Cureomax",
  description: "Important medical disclaimer for Cureomax AI Clinic OS. Cureomax supports clinical workflows and does not replace medical judgment or provide autonomous diagnosis.",
};

export default function MedicalDisclaimerPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "var(--navy-deep)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.5rem" }}>Medical Disclaimer</h1>
          <p style={{ color: "var(--trust-gray)", fontFamily: "var(--sans)", fontSize: "0.85rem", marginBottom: "3rem" }}>Last updated: June 2025</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {[
              { title: "AI does not replace doctors", body: "Cureomax is a clinical workflow and documentation support platform. It does not provide medical advice, diagnosis, or treatment. All clinical decisions remain exclusively with licensed medical professionals." },
              { title: "All AI output requires doctor approval", body: "Every AI-generated output — including visit note drafts, prescription summaries, patient summaries, and follow-up messages — is a draft that requires explicit review and approval by a licensed doctor before it is saved, sent, or used in any clinical context." },
              { title: "No autonomous clinical decisions", body: "Cureomax does not autonomously send medical instructions, prescribe medications, recommend treatments, or make clinical judgments. Doctors control all clinical outputs." },
              { title: "Not for emergency use", body: "Cureomax is not designed or suitable for emergency medical situations. If you or someone you know is experiencing a medical emergency, contact emergency services (112 in India) immediately." },
              { title: "Patient-facing content", body: "Automated messages sent to patients — including follow-up reminders, exercise guidance, and visit summaries — are generated from doctor-approved content. Patients should consult their treating doctor for any clinical questions." },
              { title: "No substitute for professional judgment", body: "Information processed by Cureomax is intended to assist documentation and workflow efficiency. It should not be used as a substitute for professional medical examination, diagnosis, or treatment." },
            ].map((s) => (
              <div key={s.title}>
                <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.5rem" }}>{s.title}</h2>
                <p style={{ color: "var(--white-70)", fontSize: "0.93rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
