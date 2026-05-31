import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "WhatsApp Patient Follow-up Automation India — Cureomax",
  description: "Automate patient follow-up via WhatsApp — pain check-ins, session reminders, revisit prompts. Indian clinics recover 30–40% more patients with Cureomax Follow-up Engine.",
  keywords: ["WhatsApp clinic automation India", "patient follow-up software India", "clinic WhatsApp reminder", "automated patient follow-up India", "patient retention clinic"],
};

export default function PatientFollowUpPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "var(--navy-deep)", backgroundImage: "radial-gradient(ellipse at 15% 70%, rgba(10,112,117,0.14) 0%, transparent 55%)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Follow-up Engine</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.1, maxWidth: 740, marginBottom: "1.5rem" }}>
            WhatsApp follow-ups that run themselves — without adding to your receptionist&apos;s workload.
          </h1>
          <p style={{ color: "var(--white-70)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 560, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            35–45% of Indian clinic patients don&apos;t return after their first visit. Cureomax sends automated pain check-ins, session reminders, and revisit prompts via WhatsApp — recovering 30–40% of patients who would otherwise stop returning.
          </p>
          <Link href="/book-demo" className="btn-gold">Book a Demo <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Automated Sequence</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#FAFAF8", marginBottom: "3rem" }}>
            What happens after every consultation — automatically
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { day: "Same day", msg: "Visit summary sent to patient: diagnosis, plan, home exercises, next appointment date" },
              { day: "Day 3", msg: "Pain check-in: 'How is your back today, Rohan? Reply with your pain score 1–10.' Score logged automatically." },
              { day: "Day 5", msg: "Session reminder: 'Your next physio session is Thursday 11 AM. Reply YES to confirm, NO to reschedule.'" },
              { day: "Day 14", msg: "Revisit prompt: 'Time for your 2-week check-in. Shall we book a slot this week?'" },
              { day: "On flag", msg: "Drop-off alert: If patient hasn't responded to 2 messages, receptionist sees them in the urgent follow-up queue." },
            ].map((item) => (
              <div key={item.day} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "1.5rem", alignItems: "flex-start", padding: "1.25rem 1.5rem", background: "var(--navy-mid)", border: "1px solid rgba(10,112,117,0.15)", borderRadius: 6 }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E8E94", fontFamily: "var(--sans)" }}>{item.day}</span>
                <p style={{ color: "var(--white-70)", fontSize: "0.92rem", lineHeight: 1.65, fontFamily: "var(--sans)" }}>{item.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--teal)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>Recover patients before they&apos;re lost.</h2>
          <p style={{ color: "rgba(250,250,248,0.75)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)", marginBottom: "2rem" }}>
            See the follow-up engine running on a real physio clinic scenario in a 30-minute demo.
          </p>
          <Link href="/book-demo" className="btn-gold">Book a Demo <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  );
}
