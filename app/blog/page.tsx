"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const posts = [
  {
    slug: "ai-clinic-crm-india",
    title: "Why Indian Clinics Are Losing 40% of Patients After the First Visit — And How to Fix It",
    desc: "Most clinic revenue leaks happen not during treatment, but in the gaps. WhatsApp messages that go unanswered, follow-up calls that never happen, and patients who simply forget to return.",
    tag: "Clinic Operations",
    readTime: "8 min read",
    date: "May 2025",
  },
  {
    slug: "doctor-digital-authority-india",
    title: "Doctor Digital Authority: Why Your Patients Google You Before They Trust You",
    desc: "Indian doctors are increasingly being judged by their online presence before a patient walks into the clinic. Here's what digital authority means for your practice — and how to measure it.",
    tag: "Authority OS",
    readTime: "7 min read",
    date: "May 2025",
  },
  {
    slug: "physiotherapy-clinic-software-india",
    title: "Physiotherapy Clinic Software India: What to Look for in 2025",
    desc: "Most physiotherapy clinics in India use WhatsApp and Excel to manage patients. Here's a practical guide to choosing clinic software that actually fits how Indian physio clinics work.",
    tag: "Physiotherapy",
    readTime: "9 min read",
    date: "May 2025",
  },
];

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "var(--navy-deep)", padding: "5rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Cureomax Blog</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.12, maxWidth: 640 }}>
            AI Healthcare Growth &amp; Clinic Automation
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "3.5rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "var(--navy-mid)", border: "1px solid rgba(200,164,93,0.12)", borderRadius: 8, padding: "2rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(200,164,93,0.3)"; el.style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(200,164,93,0.12)"; el.style.transform = "translateX(0)"; }}>
                <div>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.875rem" }}>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0E8E94", fontFamily: "var(--sans)", background: "rgba(10,112,117,0.1)", border: "1px solid rgba(10,112,117,0.2)", borderRadius: 2, padding: "0.2rem 0.6rem" }}>{post.tag}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>{post.readTime}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--trust-gray)", fontFamily: "var(--sans)" }}>{post.date}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.6rem", lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ color: "var(--white-50)", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "var(--sans)" }}>{post.desc}</p>
                </div>
                <ArrowRight size={20} color="rgba(200,164,93,0.5)" style={{ flexShrink: 0 }} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
