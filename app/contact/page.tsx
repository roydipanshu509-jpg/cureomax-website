import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Talk to Cureomax",
  description: "Contact Cureomax to book a clinic demo, join the Delhi NCR pilot, or ask questions about the product.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem", backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(200,169,106,0.08) 0%, transparent 55%)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>Get in Touch</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#F7F1E5", lineHeight: 1.15, maxWidth: "640px", marginBottom: "1.25rem" }}>
            Talk to Cureomax
          </h1>
          <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "520px", fontFamily: "var(--font-body)" }}>
            We are onboarding pilot clinics in Delhi NCR. Whether you want a demo, have a question about the product, or want to partner — reach out directly.
          </p>
        </div>
      </section>

      <section style={{ background: "#F7F1E5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "2rem" }}>Ways to reach us</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#0F2A1D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={18} color="#C8A96A" />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.25rem" }}>Email us</p>
                  <p style={{ color: "#4A3326", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>hello@cureomax.com</p>
                  <p style={{ color: "#4A3326", fontSize: "0.82rem", fontFamily: "var(--font-body)", marginTop: "0.2rem" }}>We respond within 24 hours on business days.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MessageSquare size={18} color="white" />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.25rem" }}>WhatsApp</p>
                  <a href="https://wa.me/911234567890?text=Hi%2C%20I%20want%20to%20see%20a%20Cureomax%20demo%20for%20my%20clinic." target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontSize: "0.9rem", fontFamily: "var(--font-body)", textDecoration: "none", fontWeight: 500 }}>
                    Message on WhatsApp →
                  </a>
                  <p style={{ color: "#4A3326", fontSize: "0.82rem", fontFamily: "var(--font-body)", marginTop: "0.2rem" }}>Fastest way to reach us for demo requests.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#0F2A1D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={18} color="#C8A96A" />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.25rem" }}>Based in</p>
                  <p style={{ color: "#4A3326", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>Noida, Delhi NCR, India</p>
                  <p style={{ color: "#4A3326", fontSize: "0.82rem", fontFamily: "var(--font-body)", marginTop: "0.2rem" }}>Currently onboarding clinics in the Delhi NCR region.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { title: "Book a clinic demo", desc: "30 minutes. We walk through Cureomax for your clinic type. No pressure.", cta: "Book a Demo", href: "/book-demo" },
              { title: "Join the Delhi NCR pilot", desc: "We are selecting 5 clinics for our pilot. Assisted setup, custom templates, and 14-day trial.", cta: "Apply for the Pilot", href: "/book-demo" },
              { title: "View the product first", desc: "Not ready to talk yet? Walk through the product demo at your own pace.", cta: "View Product Demo", href: "/demo" },
            ].map((card) => (
              <div key={card.title} style={{ background: "white", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "3px", padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.5rem" }}>{card.title}</h3>
                <p style={{ color: "#4A3326", fontSize: "0.88rem", lineHeight: 1.6, fontFamily: "var(--font-body)", marginBottom: "1rem" }}>{card.desc}</p>
                <Link href={card.href} className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.6rem 1.2rem" }}>{card.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
