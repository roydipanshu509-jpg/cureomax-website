import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Users,
  FileText,
  Bell,
  BarChart3,
  Shield,
  CheckCircle,
  ChevronRight,
  Stethoscope,
  Activity,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cureomax | AI Clinic Assistant for Indian Clinics",
  description:
    "Cureomax helps Indian clinics convert WhatsApp inquiries, automate follow-ups, draft doctor-approved notes, manage billing, and recover lost revenue.",
};

const problems = [
  {
    icon: "📱",
    title: "WhatsApp inquiries get lost",
    desc: "Patients ask about appointments on WhatsApp. No one tracks which inquiries converted, and which were forgotten.",
  },
  {
    icon: "📋",
    title: "Follow-ups depend on memory",
    desc: "Reception staff are busy. Follow-up calls get skipped. Patients don't come back for their next session.",
  },
  {
    icon: "📝",
    title: "Doctors spend time writing notes",
    desc: "Repetitive documentation takes 15–20 minutes per consultation. Time that could be spent with the next patient.",
  },
  {
    icon: "📅",
    title: "Patients forget revisit dates",
    desc: "A patient is told to come back in 3 days. No reminder is sent. They don't return — and the clinic loses the revenue.",
  },
  {
    icon: "🚫",
    title: "No-shows reduce revenue",
    desc: "Unconfirmed appointments lead to empty slots and lost income. No system to auto-confirm or rebook.",
  },
  {
    icon: "📊",
    title: "Owners lack clinic visibility",
    desc: "How many inquiries came in? What's the conversion rate? How many patients didn't return? These questions have no answers.",
  },
];

const modules = [
  {
    icon: <MessageSquare size={22} color="#C8A96A" />,
    title: "AI WhatsApp Receptionist",
    desc: "Captures patient inquiries, extracts intake information, and helps your team book appointments — all without switching apps.",
    tag: "Inquiries",
  },
  {
    icon: <Users size={22} color="#C8A96A" />,
    title: "Patient CRM",
    desc: "Every patient has a timeline: inquiry, visit, notes, follow-up, billing. Nothing falls through the cracks.",
    tag: "CRM",
  },
  {
    icon: <FileText size={22} color="#C8A96A" />,
    title: "Doctor Copilot",
    desc: "AI drafts visit notes, consultation summaries, and prescription templates. Doctors review, edit, and approve. AI assists. Doctors decide.",
    tag: "Documentation",
  },
  {
    icon: <Bell size={22} color="#C8A96A" />,
    title: "Follow-up Automation",
    desc: "Automated reminders for sessions, medicine, reports, exercise routines, and revisit appointments — personalised for each patient.",
    tag: "Retention",
  },
  {
    icon: <BarChart3 size={22} color="#C8A96A" />,
    title: "Billing & Analytics",
    desc: "Track invoices, packages, outstanding payments, no-show rates, conversion rates, and revenue recovery in one dashboard.",
    tag: "Business",
  },
  {
    icon: <Shield size={22} color="#C8A96A" />,
    title: "Safe by Design",
    desc: "Cureomax does not diagnose or prescribe. All AI output requires doctor approval. Consent-first. Audit-logged. Role-controlled.",
    tag: "Compliance",
  },
];

const steps = [
  {
    num: "01",
    title: "Patient sends WhatsApp inquiry",
    desc: "Rohan Sharma messages about lower back pain. Cureomax captures the inquiry and extracts intake details.",
  },
  {
    num: "02",
    title: "Receptionist books the appointment",
    desc: "The intake is reviewed, slot is confirmed, and the patient receives a booking confirmation — all tracked in one place.",
  },
  {
    num: "03",
    title: "Doctor uses AI Copilot during consultation",
    desc: "The AI drafts a visit note based on the patient's complaint. The doctor reviews, edits, and approves. Nothing is sent without doctor sign-off.",
  },
  {
    num: "04",
    title: "Follow-up is automated",
    desc: "3-day check-in reminder is sent. Pain score is tracked. Session reminder goes out for the next visit.",
  },
  {
    num: "05",
    title: "Billing and analytics update",
    desc: "Invoice is generated. The clinic dashboard shows inquiry-to-appointment conversion, follow-up completion, and revenue recovered.",
  },
];

const specialties = [
  { icon: <Activity size={20} />, name: "Physiotherapy", href: "/physio-ortho-clinics" },
  { icon: <Stethoscope size={20} />, name: "Orthopedics", href: "/physio-ortho-clinics" },
  { icon: <Heart size={20} />, name: "Gynecology", href: "/women-health-clinics" },
  { icon: <FileText size={20} />, name: "Dental", href: "/book-demo" },
  { icon: <Shield size={20} />, name: "Dermatology", href: "/book-demo" },
  { icon: <Users size={20} />, name: "Diabetes Care", href: "/book-demo" },
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* ── Hero ── */}
      <section
        style={{
          background: "#0F2A1D",
          backgroundImage:
            "radial-gradient(ellipse at 15% 60%, rgba(200,169,106,0.08) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(154,171,137,0.07) 0%, transparent 50%)",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(200,169,106,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(200,169,106,0.1)",
                border: "1px solid rgba(200,169,106,0.25)",
                borderRadius: "2px",
                padding: "0.35rem 1rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#C8A96A",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "#C8A96A",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                }}
              >
                Now onboarding pilot clinics in Delhi NCR
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 600,
                color: "#F7F1E5",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              The AI Clinic Assistant Built for{" "}
              <span style={{ color: "#C8A96A" }}>Modern Indian Clinics</span>
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(247,241,229,0.72)",
                lineHeight: 1.75,
                maxWidth: "620px",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Convert WhatsApp inquiries, automate patient follow-ups, draft
              doctor-approved notes, manage billing, and understand your clinic
              from one elegant dashboard.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(247,241,229,0.5)",
                marginBottom: "2.5rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Cureomax helps clinics save doctor time, reduce missed follow-ups,
              and recover lost revenue — without expensive hospital software.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/book-demo" className="btn-primary">
                Book a Demo →
              </Link>
              <Link href="/demo" className="btn-outline">
                View Product Demo
              </Link>
            </div>

            {/* Trust mini */}
            <div
              style={{
                marginTop: "3rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
            >
              {[
                "AI assists. Doctors decide.",
                "Built for Indian clinics",
                "No complex setup",
              ].map((t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.82rem",
                    color: "rgba(247,241,229,0.55)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <CheckCircle size={13} color="#9AAB89" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section
        style={{
          background: "#EFE3D0",
          borderTop: "1px solid rgba(200,169,106,0.2)",
          borderBottom: "1px solid rgba(200,169,106,0.2)",
          padding: "1.25rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {[
            "Physiotherapy Clinics",
            "Orthopedic Clinics",
            "Gynecology Clinics",
            "Dental Clinics",
            "Dermatology Clinics",
          ].map((s) => (
            <span
              key={s}
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "#4A3326",
                letterSpacing: "0.05em",
                fontFamily: "var(--font-body)",
                opacity: 0.7,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* ── Problem Section ── */}
      <section
        style={{
          background: "#F7F1E5",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ maxWidth: "600px", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C8A96A",
                marginBottom: "1rem",
                fontFamily: "var(--font-body)",
              }}
            >
              The Problem
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: "#0F2A1D",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Most clinics lose patients before treatment even begins
            </h2>
            <p
              style={{
                color: "#4A3326",
                fontSize: "1rem",
                lineHeight: 1.7,
                fontFamily: "var(--font-body)",
              }}
            >
              It is not the quality of care that drives patient loss. It is the
              operational gaps — the unanswered WhatsApp, the missed follow-up
              call, the forgotten revisit reminder.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {problems.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(200,169,106,0.2)",
                  borderRadius: "3px",
                  padding: "1.75rem",
                  boxShadow: "0 2px 20px rgba(15,42,29,0.05)",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                  {p.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#0F2A1D",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "#4A3326",
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution / Modules ── */}
      <section
        style={{
          background: "#0F2A1D",
          backgroundImage:
            "radial-gradient(ellipse at 80% 80%, rgba(200,169,106,0.06) 0%, transparent 50%)",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ maxWidth: "600px", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C8A96A",
                marginBottom: "1rem",
                fontFamily: "var(--font-body)",
              }}
            >
              The Solution
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: "#F7F1E5",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              One platform. Every layer of your clinic.
            </h2>
            <p
              style={{
                color: "rgba(247,241,229,0.65)",
                fontSize: "1rem",
                lineHeight: 1.7,
                fontFamily: "var(--font-body)",
              }}
            >
              Cureomax connects WhatsApp inquiries, patient records, doctor
              documentation, follow-up automation, billing, and analytics — into
              one clinic operating system.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {modules.map((m) => (
              <div
                key={m.title}
                style={{
                  border: "1px solid rgba(200,169,106,0.18)",
                  borderRadius: "3px",
                  padding: "2rem",
                  background: "rgba(247,241,229,0.03)",
                  transition: "border-color 0.25s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "rgba(200,169,106,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(200,169,106,0.2)",
                    }}
                  >
                    {m.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(154,171,137,0.8)",
                      fontFamily: "var(--font-body)",
                      border: "1px solid rgba(154,171,137,0.2)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "2px",
                    }}
                  >
                    {m.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#F7F1E5",
                    marginBottom: "0.6rem",
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    color: "rgba(247,241,229,0.58)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/product" className="btn-outline">
              Explore all product modules →
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        style={{
          background: "#EFE3D0",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ maxWidth: "560px", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C8A96A",
                marginBottom: "1rem",
                fontFamily: "var(--font-body)",
              }}
            >
              How It Works
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: "#0F2A1D",
                lineHeight: 1.2,
              }}
            >
              From first inquiry to clinic analytics
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((s, i) => (
              <div
                key={s.num}
                style={{
                  display: "flex",
                  gap: "2rem",
                  paddingBottom: i < steps.length - 1 ? "2.5rem" : 0,
                  borderLeft:
                    i < steps.length - 1
                      ? "2px solid rgba(200,169,106,0.3)"
                      : "2px solid transparent",
                  marginLeft: "1.5rem",
                  paddingLeft: "2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-17px",
                    top: 0,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#0F2A1D",
                    border: "2px solid #C8A96A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      color: "#C8A96A",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <div style={{ paddingTop: "0.25rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#0F2A1D",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "#4A3326",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Link href="/demo" className="btn-primary">
              See the full product demo →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Specialty Clinics ── */}
      <section
        style={{
          background: "#F7F1E5",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ maxWidth: "560px", marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C8A96A",
                marginBottom: "1rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Built for Your Specialty
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                color: "#0F2A1D",
                lineHeight: 1.2,
              }}
            >
              Designed for speciality clinics, not hospitals
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {specialties.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "2rem 1rem",
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(200,169,106,0.2)",
                  borderRadius: "3px",
                  textDecoration: "none",
                  color: "#0F2A1D",
                  textAlign: "center",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 12px rgba(15,42,29,0.04)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(15,42,29,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0F2A1D",
                  }}
                >
                  {s.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#0F2A1D",
                  }}
                >
                  {s.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety Section ── */}
      <section
        style={{
          background: "#0F2A1D",
          padding: "5rem 1.5rem",
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(200,169,106,0.07) 0%, transparent 60%)",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(200,169,106,0.1)",
              border: "1px solid rgba(200,169,106,0.25)",
              borderRadius: "2px",
              padding: "0.35rem 1rem",
              marginBottom: "1.75rem",
            }}
          >
            <span
              style={{
                color: "#C8A96A",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              Safety &amp; Compliance
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#F7F1E5",
              marginBottom: "1rem",
            }}
          >
            AI assists.{" "}
            <span style={{ color: "#C8A96A" }}>Doctors decide.</span>
          </h2>
          <p
            style={{
              color: "rgba(247,241,229,0.65)",
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "3rem",
              fontFamily: "var(--font-body)",
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            Cureomax does not diagnose independently. Cureomax does not
            prescribe independently. Every AI-generated note, summary, and
            communication requires doctor review and approval before use.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              textAlign: "left",
            }}
          >
            {[
              "Doctor approval mandatory for all clinical outputs",
              "Patient consent required before recording consultations",
              "All communications are logged and auditable",
              "Role-based access — staff see only what they need",
              "Secure, encrypted patient data storage",
              "Data export and deletion available on request",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  border: "1px solid rgba(200,169,106,0.15)",
                  borderRadius: "3px",
                  background: "rgba(247,241,229,0.03)",
                }}
              >
                <CheckCircle
                  size={16}
                  color="#9AAB89"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                <span
                  style={{
                    color: "rgba(247,241,229,0.72)",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Preview ── */}
      <section
        style={{
          background: "#F7F1E5",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C8A96A",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                Pricing
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 600,
                  color: "#0F2A1D",
                }}
              >
                Transparent pricing for Indian clinics
              </h2>
            </div>
            <Link href="/pricing" className="btn-outline-dark">
              View full pricing →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                name: "Starter",
                price: "₹4,999",
                per: "/month",
                desc: "For small clinics starting out",
                features: [
                  "WhatsApp inquiry tracking",
                  "Patient CRM",
                  "Appointment booking",
                  "Basic reminders",
                  "Basic analytics",
                ],
                highlight: false,
              },
              {
                name: "Pro",
                price: "₹14,999",
                per: "/month",
                desc: "For clinics ready to automate",
                features: [
                  "Everything in Starter",
                  "AI doctor note drafts",
                  "Follow-up automation",
                  "Billing management",
                  "Advanced patient timeline",
                ],
                highlight: true,
              },
              {
                name: "Growth",
                price: "₹29,999",
                per: "/month",
                desc: "For multi-doctor clinics",
                features: [
                  "Everything in Pro",
                  "Multi-doctor dashboard",
                  "Advanced analytics",
                  "Revenue recovery dashboard",
                  "Priority onboarding",
                ],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.highlight ? "#0F2A1D" : "rgba(255,255,255,0.8)",
                  border: plan.highlight
                    ? "1px solid #C8A96A"
                    : "1px solid rgba(200,169,106,0.2)",
                  borderRadius: "3px",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#C8A96A",
                      color: "#0F2A1D",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.8rem",
                      borderRadius: "0 0 3px 3px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C8A96A",
                    marginBottom: "0.5rem",
                  }}
                >
                  {plan.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.2rem",
                      fontWeight: 600,
                      color: plan.highlight ? "#F7F1E5" : "#0F2A1D",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      color: plan.highlight
                        ? "rgba(247,241,229,0.5)"
                        : "#4A3326",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {plan.per}
                  </span>
                </div>
                <p
                  style={{
                    color: plan.highlight
                      ? "rgba(247,241,229,0.6)"
                      : "#4A3326",
                    fontSize: "0.85rem",
                    marginBottom: "1.5rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {plan.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {plan.features.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontSize: "0.85rem",
                        color: plan.highlight
                          ? "rgba(247,241,229,0.75)"
                          : "#4A3326",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <CheckCircle
                        size={13}
                        color={plan.highlight ? "#9AAB89" : "#C8A96A"}
                      />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pilot CTA ── */}
      <section
        style={{
          background: "#EFE3D0",
          padding: "5rem 1.5rem",
          borderTop: "1px solid rgba(200,169,106,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(15,42,29,0.07)",
              border: "1px solid rgba(15,42,29,0.12)",
              borderRadius: "2px",
              padding: "0.35rem 1rem",
              marginBottom: "1.75rem",
            }}
          >
            <span
              style={{
                color: "#0F2A1D",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              Delhi NCR Pilot — 5 Clinics Only
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#0F2A1D",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            We are onboarding 5 pilot clinics in Delhi NCR
          </h2>
          <p
            style={{
              color: "#4A3326",
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Our team will assist with setup, customise templates for your clinic
            type, train your staff, and help you track three numbers: missed
            inquiries recovered, follow-ups completed, and repeat visits
            generated. After 14 days — you decide.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link href="/book-demo" className="btn-primary">
              Book your Cureomax demo →
            </Link>
            <Link href="/contact" className="btn-outline-dark">
              Talk to the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
