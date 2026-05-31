import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Cureomax",
  description: "Cureomax is an AI clinic operating system built for India's next generation of healthcare providers. Founded in Noida, Delhi NCR.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "var(--navy-deep)", padding: "5.5rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Mission</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Built for clinics that can&apos;t afford to keep losing patients between visits.
          </h1>
          <p style={{ color: "var(--white-70)", fontSize: "1.05rem", lineHeight: 1.8, fontFamily: "var(--sans)", maxWidth: 640 }}>
            Cureomax started from a simple observation: India&apos;s best clinics are losing 40% of their patients not because of bad care — but because no system exists to bring them back. WhatsApp messages go unanswered. Follow-ups never happen. Notes take longer than consultations.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>The Belief</p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>
                AI should assist doctors, not replace them.
              </h2>
              <p style={{ color: "var(--white-70)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)", marginBottom: "1.25rem" }}>
                Every output Cureomax generates — notes, prescriptions, follow-up messages — is a draft that a doctor reviews and approves. We are a productivity tool, not an autonomous medical system.
              </p>
              <p style={{ color: "var(--white-70)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>
                We are building for the physiotherapy clinic in Noida that sees 25 patients a day. The orthopaedic surgeon in Saket who spends 3 hours on documentation. The gynaecologist in Gurugram whose receptionist is managing 60 WhatsApp threads at once.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Where We Are</p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>
                Private pilot. Delhi NCR. June 2025.
              </h2>
              <p style={{ color: "var(--white-70)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)", marginBottom: "1.25rem" }}>
                We are onboarding 5 pilot clinics in Delhi NCR. Physiotherapy, orthopaedics, and gynaecology first. Assisted setup, custom templates, and 14-day measurable results.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { icon: <Heart size={14} color="#0A7075" />, text: "Founded in Noida, Delhi NCR" },
                  { icon: <Shield size={14} color="#0A7075" />, text: "DPDP Act-aware from day one" },
                  { icon: <Shield size={14} color="#C8A45D" />, text: "Doctor approval gate on all AI outputs" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    {item.icon}
                    <span style={{ color: "var(--white-70)", fontSize: "0.9rem", fontFamily: "var(--sans)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--teal)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>
            If you run a clinic in Delhi NCR, talk to us.
          </h2>
          <p style={{ color: "rgba(250,250,248,0.75)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--sans)", marginBottom: "2rem" }}>
            We are actively looking for pilot clinic partners. 30-minute demo, assisted setup, 14 days free.
          </p>
          <Link href="/book-demo" className="btn-gold">Book a Demo <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  );
}
