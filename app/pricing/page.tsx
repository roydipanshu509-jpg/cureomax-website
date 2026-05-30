import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Transparent Plans for Indian Clinics",
  description: "Cureomax pricing starting at ₹4,999/month. Starter, Pro, and Growth plans for Indian specialty clinics. 14-day pilot available.",
};

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "per month",
    tagline: "For small clinics starting with appointment and follow-up management.",
    highlight: false,
    features: [
      { name: "WhatsApp inquiry tracking", included: true },
      { name: "Patient CRM (up to 500 patients)", included: true },
      { name: "Appointment booking", included: true },
      { name: "Basic automated reminders", included: true },
      { name: "Basic analytics dashboard", included: true },
      { name: "1 doctor account", included: true },
      { name: "AI doctor note drafts", included: false },
      { name: "Follow-up automation", included: false },
      { name: "Billing management", included: false },
      { name: "Multi-doctor dashboard", included: false },
      { name: "Revenue recovery reports", included: false },
      { name: "Priority onboarding", included: false },
    ],
  },
  {
    name: "Pro",
    price: "₹14,999",
    period: "per month",
    tagline: "For clinics ready to automate patient follow-ups and doctor workflows.",
    highlight: true,
    badge: "Most Popular",
    features: [
      { name: "WhatsApp inquiry tracking", included: true },
      { name: "Patient CRM (up to 2,000 patients)", included: true },
      { name: "Appointment booking", included: true },
      { name: "Advanced automated reminders", included: true },
      { name: "Advanced analytics dashboard", included: true },
      { name: "Up to 3 doctor accounts", included: true },
      { name: "AI doctor note drafts", included: true },
      { name: "Follow-up automation", included: true },
      { name: "Billing management", included: true },
      { name: "Patient timeline", included: true },
      { name: "Multi-doctor dashboard", included: false },
      { name: "Priority onboarding", included: false },
    ],
  },
  {
    name: "Growth",
    price: "₹29,999",
    period: "per month",
    tagline: "For multi-doctor and growing clinics that need full visibility and control.",
    highlight: false,
    features: [
      { name: "WhatsApp inquiry tracking", included: true },
      { name: "Unlimited patient CRM", included: true },
      { name: "Appointment booking", included: true },
      { name: "Advanced automated reminders", included: true },
      { name: "Full analytics dashboard", included: true },
      { name: "Unlimited doctor accounts", included: true },
      { name: "AI doctor note drafts", included: true },
      { name: "Follow-up automation", included: true },
      { name: "Billing management", included: true },
      { name: "Patient timeline", included: true },
      { name: "Multi-doctor dashboard", included: true },
      { name: "Priority onboarding & custom templates", included: true },
    ],
  },
];

const faq = [
  {
    q: "Is there a free trial?",
    a: "We offer a 14-day pilot for clinics in Delhi NCR. During the pilot, our team assists with setup, customises templates, and helps you track results. Contact us to join the pilot.",
  },
  {
    q: "Is my patient data safe?",
    a: "Yes. Patient data is stored securely with role-based access. Consent is required before recording consultations. All data can be exported or deleted on request.",
  },
  {
    q: "Does AI replace my doctor?",
    a: "No. Cureomax is an AI clinic assistant. All AI-generated notes and clinical content require mandatory doctor review and approval before use. AI assists. Doctors decide.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade plans at the start of any billing cycle. Our team will help you migrate data and settings.",
  },
  {
    q: "What clinics does Cureomax work for?",
    a: "Cureomax is designed for Indian specialty clinics: physiotherapy, orthopedics, gynecology, dental, dermatology, diabetes care, and similar small to mid-size clinics.",
  },
  {
    q: "What if I need custom features?",
    a: "Growth plan includes custom templates. For additional customisation, contact us and we will assess your needs.",
  },
];

export default function PricingPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem", backgroundImage: "radial-gradient(ellipse at 30% 60%, rgba(200,169,106,0.08) 0%, transparent 55%)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>Pricing</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#F7F1E5", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Transparent pricing. No surprises.
          </h1>
          <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto", fontFamily: "var(--font-body)" }}>
            Built for Indian clinics. No setup fees. No long contracts. Start with a 14-day pilot.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section style={{ background: "#F7F1E5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {plans.map((plan) => (
              <div key={plan.name} style={{ background: plan.highlight ? "#0F2A1D" : "rgba(255,255,255,0.9)", border: plan.highlight ? "1px solid #C8A96A" : "1px solid rgba(200,169,106,0.2)", borderRadius: "4px", overflow: "hidden", position: "relative", boxShadow: plan.highlight ? "0 8px 40px rgba(15,42,29,0.2)" : "0 4px 20px rgba(15,42,29,0.06)" }}>
                {plan.badge && (
                  <div style={{ background: "#C8A96A", padding: "0.4rem 0", textAlign: "center" }}>
                    <span style={{ color: "#0F2A1D", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>{plan.badge}</span>
                  </div>
                )}
                <div style={{ padding: "2rem" }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", fontFamily: "var(--font-body)", marginBottom: "0.5rem" }}>{plan.name}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "2.6rem", fontWeight: 600, color: plan.highlight ? "#F7F1E5" : "#0F2A1D" }}>{plan.price}</span>
                    <span style={{ color: plan.highlight ? "rgba(247,241,229,0.45)" : "#4A3326", fontSize: "0.85rem", fontFamily: "var(--font-body)" }}>{plan.period}</span>
                  </div>
                  <p style={{ color: plan.highlight ? "rgba(247,241,229,0.55)" : "#4A3326", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "2rem", fontFamily: "var(--font-body)" }}>{plan.tagline}</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" }}>
                    {plan.features.map((f) => (
                      <div key={f.name} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        {f.included ? (
                          <CheckCircle size={14} color="#9AAB89" style={{ flexShrink: 0 }} />
                        ) : (
                          <X size={14} color={plan.highlight ? "rgba(247,241,229,0.2)" : "rgba(74,51,38,0.25)"} style={{ flexShrink: 0 }} />
                        )}
                        <span style={{ fontSize: "0.85rem", color: f.included ? (plan.highlight ? "rgba(247,241,229,0.8)" : "#4A3326") : (plan.highlight ? "rgba(247,241,229,0.3)" : "rgba(74,51,38,0.4)"), fontFamily: "var(--font-body)", textDecoration: f.included ? "none" : "line-through" }}>
                          {f.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/book-demo"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "0.85rem 1rem",
                      borderRadius: "2px",
                      background: plan.highlight ? "#C8A96A" : "transparent",
                      color: plan.highlight ? "#0F2A1D" : "#C8A96A",
                      border: plan.highlight ? "none" : "1px solid rgba(200,169,106,0.5)",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      letterSpacing: "0.03em",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    Start with a 14-day pilot
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center", padding: "2rem", background: "rgba(200,169,106,0.08)", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "3px" }}>
            <p style={{ color: "#0F2A1D", fontSize: "0.95rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              All plans include onboarding support, WhatsApp integration setup, and access to the Cureomax team during your pilot.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#EFE3D0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>FAQ</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: "#0F2A1D", marginBottom: "3rem" }}>Common questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {faq.map((item) => (
              <div key={item.q} style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "3px", padding: "1.5rem 1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.5rem" }}>{item.q}</h3>
                <p style={{ color: "#4A3326", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#F7F1E5", marginBottom: "1rem" }}>Start with 14 days. Risk-free.</h2>
          <p style={{ color: "rgba(247,241,229,0.6)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", fontFamily: "var(--font-body)" }}>Our team will set up Cureomax for your clinic, customise templates, and help you track results for 14 days. Then you decide.</p>
          <Link href="/book-demo" className="btn-primary">Book your Cureomax demo →</Link>
        </div>
      </section>
    </div>
  );
}
