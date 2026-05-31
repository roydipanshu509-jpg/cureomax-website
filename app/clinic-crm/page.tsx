import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinic CRM India — Patient Records, Visits, Follow-ups | Cureomax",
  description: "Cureomax Patient CRM gives every clinic a structured patient timeline — inquiry, visits, notes, follow-ups, billing, next visit. Built for Indian specialty clinics.",
  keywords: ["clinic CRM India", "patient management software India", "clinic patient records software", "physiotherapy CRM India", "doctor patient CRM"],
};

export default function ClinicCRMPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "var(--navy-deep)", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Patient CRM</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.1, maxWidth: 700, marginBottom: "1.5rem" }}>
            Every patient&apos;s full journey — in one structured card.
          </h1>
          <p style={{ color: "var(--white-70)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 560, marginBottom: "2.5rem", fontFamily: "var(--sans)" }}>
            First inquiry, all appointments, visit notes, pain score timeline, follow-up history, billing records, and next visit date — structured and searchable. No more Excel, paper files, or WhatsApp threads.
          </p>
          <Link href="/book-demo" className="btn-gold">Book a Demo <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>What&apos;s in every patient card</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "WhatsApp inquiry captured and timestamped",
                  "Patient profile: name, age, contact, chief complaint",
                  "Full appointment history with dates and doctors",
                  "AI visit notes — approved by doctor, stored per visit",
                  "Pain score timeline across visits",
                  "Follow-up history — sent, opened, replied",
                  "Session package status and remaining sessions",
                  "Billing records and outstanding payments",
                  "Next action: upcoming appointment or follow-up due",
                  "At-risk flag: patient hasn't returned past revisit date",
                ].map((t) => (
                  <div key={t} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <CheckCircle size={14} color="#0A7075" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "var(--white-70)", fontSize: "0.9rem", fontFamily: "var(--sans)", lineHeight: 1.6 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Who uses it</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { role: "Doctor", desc: "Opens patient card before consultation — sees full history, last note, pain score progress. Opens draft note after — reviews and approves." },
                  { role: "Receptionist", desc: "Manages the inquiry queue, books appointments, confirms WhatsApp messages, and sees the follow-up due list each morning." },
                  { role: "Clinic Owner", desc: "Views the analytics dashboard — inquiry conversion, active patients, no-show rate, revenue, at-risk patients." },
                ].map((r) => (
                  <div key={r.role} style={{ padding: "1.25rem 1.5rem", background: "var(--navy-mid)", border: "1px solid rgba(200,164,93,0.12)", borderRadius: 6 }}>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 600, color: "#C8A45D", marginBottom: "0.35rem" }}>{r.role}</p>
                    <p style={{ color: "var(--white-70)", fontSize: "0.87rem", lineHeight: 1.65, fontFamily: "var(--sans)" }}>{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--teal)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>Know every patient. Miss nobody.</h2>
          <p style={{ color: "rgba(250,250,248,0.75)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)", marginBottom: "2rem" }}>Book a demo and see the Patient CRM working in a real physio or ortho clinic scenario.</p>
          <Link href="/book-demo" className="btn-gold">Book a Demo <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  );
}
