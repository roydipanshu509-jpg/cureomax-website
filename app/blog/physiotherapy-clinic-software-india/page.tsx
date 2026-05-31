import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Physiotherapy Clinic Software India: What to Look for in 2025",
  description: "Most physio clinics in India still use WhatsApp and Excel. Here is a practical guide to choosing physiotherapy clinic software that fits how Indian clinics actually work.",
  keywords: ["physiotherapy clinic software India", "physio practice management India", "physiotherapy patient management system", "clinic software for physiotherapists India", "best physiotherapy software India"],
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>{title}</h2>
      <div style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.85, fontFamily: "var(--sans)" }}>{children}</div>
    </div>
  );
}

export default function Post3() {
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "var(--navy-deep)", padding: "5rem 1.5rem 3.5rem", borderBottom: "1px solid rgba(200,164,93,0.08)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0E8E94", fontFamily: "var(--sans)", background: "rgba(10,112,117,0.1)", border: "1px solid rgba(10,112,117,0.2)", borderRadius: 2, padding: "0.2rem 0.6rem" }}>Physiotherapy</span>
            <span style={{ fontSize: "0.78rem", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>9 min read · May 2025</span>
          </div>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Physiotherapy Clinic Software India: What to Look for in 2025
          </h1>
          <p style={{ color: "var(--white-50)", fontSize: "1rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>
            Most physiotherapy clinics in India manage patients through WhatsApp and Excel. The right software should not make this harder — it should organise what you already do, automatically.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "4rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Section title="Why most clinic software does not fit Indian physio clinics">
            <p style={{ marginBottom: "1rem" }}>The Indian physiotherapy clinic market is dominated by independent practitioners and small multi-doctor setups. They do not need hospital-grade EMR software. They do not have IT teams. And they cannot afford 6-month implementation projects.</p>
            <p style={{ marginBottom: "1rem" }}>Yet most clinic software available in India is built for hospitals, requires extensive training, and costs more than the average monthly revenue of a small physio clinic.</p>
            <p>What a physiotherapy clinic actually needs is different. It needs something that organises WhatsApp (not replaces it), automates follow-ups (not just appointment reminders), tracks pain scores and session packages, and shows the owner how the clinic is actually performing.</p>
          </Section>

          <Section title="The five things a physio clinic needs from software">
            <p style={{ marginBottom: "1.25rem" }}>Before evaluating any system, be clear about what problems you are trying to solve:</p>
            {[
              { title: "Patient follow-up automation", desc: "The #1 problem in physio clinics. Patients who were told to return in 3 days do not return. Software that sends automated WhatsApp check-ins, pain score requests, and session reminders reduces drop-offs by 30–40% in most clinics." },
              { title: "Session package tracking", desc: "If you offer 8-session or 12-session packages, you need to know who has used how many sessions, who has outstanding sessions, and who is unlikely to return. This cannot be managed in Excel at scale." },
              { title: "Pain score tracking", desc: "The physiotherapy outcome that matters most — pain reduction — is almost never systematically tracked in small clinics. Software that records pain scores at intake, at Day 3, at Week 2, and at discharge gives you clinical data and outcome proof." },
              { title: "WhatsApp organisation", desc: "WhatsApp is not going away. Your patients are on it. The right software does not replace WhatsApp — it organises it. Inquiry queue, booking confirmation, and follow-up automation — all through WhatsApp, but tracked and systematised." },
              { title: "Clinic analytics", desc: "How many patients visited this week? What is the no-show rate? How many packages are outstanding? Which treatment category generates the most revenue? These questions should take 10 seconds to answer — not an afternoon with Excel." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                <CheckCircle size={16} color="#0A7075" style={{ flexShrink: 0, marginTop: 3 }} />
                <div>
                  <p style={{ fontWeight: 600, color: "#FAFAF8", marginBottom: "0.25rem", fontFamily: "var(--sans)", fontSize: "0.95rem" }}>{item.title}</p>
                  <p style={{ color: "var(--white-70)", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </Section>

          <Section title="What to avoid">
            {[
              "Software that requires a full-time receptionist to operate",
              "Complex EMR systems built for hospitals with 50+ features you will never use",
              "Annual contracts before you have seen the product work in your clinic",
              "Systems that do not integrate with WhatsApp (your patients will not switch)",
              "Software with AI that sends clinical content without mandatory doctor review",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <X size={14} color="rgba(196,112,106,0.8)" style={{ flexShrink: 0, marginTop: 4 }} />
                <p style={{ color: "var(--white-50)", fontSize: "0.9rem", lineHeight: 1.6, fontFamily: "var(--sans)" }}>{item}</p>
              </div>
            ))}
          </Section>

          <Section title="The 14-day test">
            <p style={{ marginBottom: "1rem" }}>The best way to evaluate any clinic software is a structured 14-day pilot. Not a demo. A pilot.</p>
            <p style={{ marginBottom: "1rem" }}>In 14 days, you should be able to measure three things:</p>
            <p style={{ marginBottom: "0.75rem" }}>1. How many inquiries were captured and converted to appointments that would otherwise have been missed?</p>
            <p style={{ marginBottom: "0.75rem" }}>2. How many follow-up messages were sent automatically that you would not have sent manually?</p>
            <p>3. How many patients were recovered from drop-off — either through reminders or through the receptionist being flagged to call?</p>
          </Section>

          <div style={{ padding: "1.5rem 2rem", background: "rgba(10,112,117,0.08)", border: "1px solid rgba(10,112,117,0.2)", borderLeft: "3px solid #0A7075", borderRadius: "0 6px 6px 0", marginBottom: "2.5rem" }}>
            <p style={{ color: "var(--white-70)", fontSize: "0.95rem", lineHeight: 1.75, fontFamily: "var(--sans)" }}>
              Cureomax is currently running a 14-day pilot program for physiotherapy and orthopedic clinics in Delhi NCR. The pilot includes assisted setup, custom templates for your clinic type, and a results report at Day 14.
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(200,164,93,0.1)", paddingTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 600, color: "#FAFAF8" }}>Book the physio clinic demo</h3>
            <p style={{ color: "var(--white-50)", fontSize: "0.95rem", fontFamily: "var(--sans)" }}>See how Cureomax handles follow-ups, session tracking, and pain score recording for physiotherapy clinics — in a 30-minute live demo.</p>
            <Link href="/physio-ortho-clinics" className="btn-gold">See Cureomax for Physio Clinics <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
