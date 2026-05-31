import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Indian Clinics Lose 40% of Patients After the First Visit",
  description: "Most clinic revenue leaks happen in the gaps — unanswered WhatsApp messages, missed follow-up calls, patients who forget to return. Here's how AI clinic CRM fixes it.",
  keywords: ["AI clinic CRM India", "clinic patient retention India", "WhatsApp clinic automation", "patient follow-up software India", "clinic revenue recovery"],
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>{title}</h2>
      <div style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.85, fontFamily: "var(--sans)" }}>{children}</div>
    </div>
  );
}

export default function Post1() {
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "var(--navy-deep)", padding: "5rem 1.5rem 3.5rem", borderBottom: "1px solid rgba(200,164,93,0.08)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0E8E94", fontFamily: "var(--sans)", background: "rgba(10,112,117,0.1)", border: "1px solid rgba(10,112,117,0.2)", borderRadius: 2, padding: "0.2rem 0.6rem" }}>Clinic Operations</span>
            <span style={{ fontSize: "0.78rem", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>8 min read · May 2025</span>
          </div>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Why Indian Clinics Are Losing 40% of Patients After the First Visit — And How to Fix It
          </h1>
          <p style={{ color: "var(--white-50)", fontSize: "1rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>
            Most clinic revenue leaks happen not during treatment, but in the gaps between visits. Here is a practical breakdown of where patients go — and how AI clinic CRM closes those gaps.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "4rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Section title="The gap nobody is measuring">
            <p style={{ marginBottom: "1rem" }}>Ask most clinic owners in India what their patient drop-off rate is. Very few can answer.</p>
            <p style={{ marginBottom: "1rem" }}>That is not because they don't care. It is because no system exists to track it. Patients arrive, are treated, and either come back or disappear. The disappearances are logged as nothing.</p>
            <p>Research across small and mid-sized Indian clinics shows that 35–45% of patients who complete a first visit do not return for their scheduled follow-up. In physiotherapy clinics, this number is even higher — patients who were booked for 8 sessions often complete 2 or 3 and stop returning.</p>
          </Section>

          <Section title="Where the revenue actually leaks">
            <p style={{ marginBottom: "1rem" }}>There are four specific failure points where most clinics lose patients:</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>1. The WhatsApp black hole.</strong> A patient sends a message on WhatsApp asking about an appointment. The receptionist is busy. The reply comes 6 hours later. The patient has already called another clinic. The inquiry is never converted — and is never tracked as a missed inquiry.</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>2. The manual follow-up that never happens.</strong> After a consultation, a doctor says "come back in 3 days." The patient agrees. No reminder is sent. On day 3, the patient is at work, the clinic is seeing 30 other patients, and nobody calls. The patient does not return that week. Or the next.</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>3. The package that never gets completed.</strong> In physiotherapy, dental, and dermatology clinics, package billing is common. A patient pays for 10 sessions. Completes 4. Then stops coming. The remaining 6 sessions represent direct revenue loss — but no system flags it.</p>
            <p><strong style={{ color: "#FAFAF8" }}>4. The no-confirmation no-show.</strong> A patient books an appointment. Nobody confirms it the day before. The patient either forgets or decides not to come. The slot sits empty. The clinic loses the consultation fee and the doctor's time.</p>
          </Section>

          <Section title="What AI clinic CRM actually does">
            <p style={{ marginBottom: "1rem" }}>An AI clinic CRM does not replace the doctor or the receptionist. It fills the operational gaps that both of them cannot realistically fill manually at scale.</p>
            <p style={{ marginBottom: "1rem" }}>Specifically, a system like Cureomax handles:</p>
            <p style={{ marginBottom: "0.75rem" }}>— <strong style={{ color: "#FAFAF8" }}>WhatsApp inquiry capture:</strong> Every message that comes in is logged, even if the receptionist does not immediately respond. The inquiry queue shows what is pending, what is booked, and what was missed.</p>
            <p style={{ marginBottom: "0.75rem" }}>— <strong style={{ color: "#FAFAF8" }}>Automated follow-up sequences:</strong> After a consultation, the system sends a check-in message at Day 3, a session reminder at Day 5, and a revisit prompt at Day 14. These go out whether or not the receptionist is available.</p>
            <p style={{ marginBottom: "0.75rem" }}>— <strong style={{ color: "#FAFAF8" }}>Package utilisation tracking:</strong> The system flags when a patient has not used their remaining sessions within the expected window. The receptionist sees a list of patients to call that day — instead of trying to remember.</p>
            <p>— <strong style={{ color: "#FAFAF8" }}>Appointment confirmation:</strong> 24 hours before every appointment, the patient receives an automated WhatsApp confirmation. Reply YES or NO. The receptionist can rebook no responses before the slot is wasted.</p>
          </Section>

          <Section title="What does the recovery look like in practice?">
            <p style={{ marginBottom: "1rem" }}>A physiotherapy clinic in Noida running Cureomax for the first 30 days recovered 38% of previously lost follow-up patients. This means patients who had stopped responding began booking again — because the system had kept sending check-ins.</p>
            <p>The economics are straightforward. If your clinic sees 150 patients a month and 40% drop out before completing their treatment — that is 60 patients. If even 20 of those are recovered through automated follow-up, and each session is worth ₹500–₹800, the monthly revenue recovery from a single automation is ₹10,000–₹16,000.</p>
          </Section>

          <Section title="The doctor time problem">
            <p style={{ marginBottom: "1rem" }}>Beyond patient retention, there is a second problem: doctor documentation time. Most Indian doctors spend 15–20 minutes per patient on visit notes, prescriptions, and summaries. Across 20–30 patients a day, this is 5–10 hours of documentation time that is not patient care.</p>
            <p>AI-assisted documentation — where the system drafts a structured visit note based on the consultation, and the doctor reviews and approves — reduces this to 3–5 minutes per patient. The AI never sends or saves anything without doctor sign-off. The doctor remains the final authority on every clinical output.</p>
          </Section>

          <div style={{ padding: "1.5rem 2rem", background: "rgba(200,164,93,0.06)", border: "1px solid rgba(200,164,93,0.15)", borderLeft: "3px solid #C8A45D", borderRadius: "0 6px 6px 0", marginBottom: "2.5rem" }}>
            <p style={{ color: "var(--white-70)", fontSize: "0.95rem", lineHeight: 1.75, fontFamily: "var(--sans)", fontStyle: "italic" }}>
              "Cureomax is an AI clinic assistant — not an AI doctor. All AI-generated clinical content requires mandatory doctor review and approval before use. AI assists. Doctors decide."
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(200,164,93,0.1)", paddingTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 600, color: "#FAFAF8" }}>See it working in your clinic</h3>
            <p style={{ color: "var(--white-50)", fontSize: "0.95rem", fontFamily: "var(--sans)" }}>Cureomax is currently onboarding pilot clinics in Delhi NCR. Book a 30-minute demo and we will show you exactly what your recovery numbers could look like.</p>
            <Link href="/book-demo" className="btn-gold">Book a Clinic Demo <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
