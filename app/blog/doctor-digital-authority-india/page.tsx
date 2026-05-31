import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Doctor Digital Authority India: What It Is and How to Build It",
  description: "Indian patients now research doctors online before booking. Your digital authority — content quality, credibility signals, audience trust — determines whether they choose you or move on.",
  keywords: ["doctor digital authority India", "doctor personal brand India", "medical influencer India", "doctor social media India", "doctor online reputation India"],
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "1rem" }}>{title}</h2>
      <div style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.85, fontFamily: "var(--sans)" }}>{children}</div>
    </div>
  );
}

export default function Post2() {
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "var(--navy-deep)", padding: "5rem 1.5rem 3.5rem", borderBottom: "1px solid rgba(200,164,93,0.08)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C8A45D", fontFamily: "var(--sans)", background: "rgba(200,164,93,0.08)", border: "1px solid rgba(200,164,93,0.2)", borderRadius: 2, padding: "0.2rem 0.6rem" }}>Authority OS</span>
            <span style={{ fontSize: "0.78rem", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>7 min read · May 2025</span>
          </div>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Doctor Digital Authority: Why Your Patients Google You Before They Trust You
          </h1>
          <p style={{ color: "var(--white-50)", fontSize: "1rem", lineHeight: 1.8, fontFamily: "var(--sans)" }}>
            Digital authority is not the same as being a medical influencer. It is your professional credibility — measurable, ethical, and increasingly the difference between a patient choosing you or someone else.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "4rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Section title="The shift that already happened">
            <p style={{ marginBottom: "1rem" }}>In 2019, an Indian patient would ask a neighbour or relative for a doctor recommendation. In 2025, they ask Google first — and then ask the neighbour. This shift changes everything about how medical trust is built.</p>
            <p>When a patient searches "orthopedic doctor Noida" or "best physiotherapist south Delhi" and your name appears — what do they find? A Google Business listing with no reviews? A social media profile with 12 posts from three years ago? Or a consistent, credible presence that answers their questions and builds trust before they ever walk into your clinic?</p>
          </Section>

          <Section title="Digital authority is not 'becoming an influencer'">
            <p style={{ marginBottom: "1rem" }}>This is the most important distinction to understand. Digital authority for a doctor is not about follower counts, viral videos, or dancing on Instagram Reels. It is about professional credibility that is measurable and reputation-safe.</p>
            <p style={{ marginBottom: "1rem" }}>A doctor with genuine digital authority has:</p>
            <p style={{ marginBottom: "0.75rem" }}>— Consistent, accurate content in their specialty area that patients find genuinely useful</p>
            <p style={{ marginBottom: "0.75rem" }}>— An audience whose trust is based on clinical knowledge, not entertainment value</p>
            <p style={{ marginBottom: "0.75rem" }}>— A professional online presence that a colleague or hospital would be comfortable with</p>
            <p style={{ marginBottom: "0.75rem" }}>— Compliance with healthcare communication guidelines — no misleading claims, no before-after photos without context, no undisclosed promotions</p>
            <p>This is fundamentally different from influencer marketing. The goal is not reach. The goal is trust.</p>
          </Section>

          <Section title="How digital authority translates to practice growth">
            <p style={{ marginBottom: "1rem" }}>The connection between digital presence and clinic revenue is direct, even if it is not always measured.</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>New patient acquisition:</strong> Patients who find you through content — a YouTube explanation of a condition, an Instagram post about a common myth, a detailed Google answer — arrive with a pre-existing sense of trust. They are easier to convert, less likely to price-compare, and more likely to refer others.</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Partnership opportunities:</strong> Healthcare brands — diagnostics companies, medical device manufacturers, health apps, hospitals — are increasingly looking for doctors with credible digital authority to partner with. These partnerships range from content collaborations to advisory roles to paid brand associations. Doctors with measured authority attract better-fit, higher-value opportunities.</p>
            <p><strong style={{ color: "#FAFAF8" }}>Professional positioning:</strong> Digital authority compounds. A doctor who publishes consistently for two years has a portfolio of work that signals expertise, reliability, and depth — to patients, to colleagues, and to institutions.</p>
          </Section>

          <Section title="What the Cureomax Authority Score measures">
            <p style={{ marginBottom: "1rem" }}>The Cureomax Authority Score is a composite metric built specifically for Indian medical professionals. It measures six dimensions:</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Content quality:</strong> Is your content medically accurate, useful, and clearly explained for a patient audience? Does it cite appropriate sources and avoid overclaiming?</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Consistency:</strong> Are you publishing regularly enough to maintain audience trust and search relevance? Consistency outperforms volume.</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Audience trust:</strong> What is the quality of engagement on your content? Comments asking clinical questions signal a trusting audience. Generic reactions do not.</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Specialty relevance:</strong> Is your content clearly within your area of clinical expertise? Breadth without depth reduces authority in your primary specialty.</p>
            <p style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Professional presence:</strong> Does your online profile reflect the same standard you maintain in your clinic? Is your bio accurate, your credentials visible, and your communication professional?</p>
            <p><strong style={{ color: "#FAFAF8" }}>Compliance safety:</strong> This is the most important dimension. Does your content comply with healthcare communication guidelines? Are sponsored posts disclosed? Are claims evidence-based? The compliance layer is what protects your reputation.</p>
          </Section>

          <div style={{ padding: "1.5rem 2rem", background: "rgba(200,164,93,0.06)", border: "1px solid rgba(200,164,93,0.15)", borderLeft: "3px solid #C8A45D", borderRadius: "0 6px 6px 0", marginBottom: "2.5rem" }}>
            <p style={{ color: "var(--white-70)", fontSize: "0.95rem", lineHeight: 1.75, fontFamily: "var(--sans)", fontStyle: "italic" }}>
              "Cureomax Authority OS is in private early access for a select cohort of Indian doctors in Delhi NCR. The goal is to build a reputation-safe growth system — not a social media tool."
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(200,164,93,0.1)", paddingTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 600, color: "#FAFAF8" }}>Get early access to Authority OS</h3>
            <p style={{ color: "var(--white-50)", fontSize: "0.95rem", fontFamily: "var(--sans)" }}>We are onboarding a small cohort of Indian doctors to the Cureomax Authority OS. Request early access and we will reach out with details.</p>
            <Link href="/authority-os" className="btn-gold">Request Early Access <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
