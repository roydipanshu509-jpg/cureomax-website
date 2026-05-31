"use client";
import { useState } from "react";
import { CheckCircle, Shield, ArrowRight } from "lucide-react";

const specialtyOptions = [
  "Physiotherapy", "Orthopedics", "Gynecology", "Dental",
  "Dermatology", "Diabetes / Chronic Care", "Other",
];
const problemOptions = [
  "Missed WhatsApp inquiries", "Weak follow-up", "Too many no-shows",
  "Manual notes taking too long", "Billing tracking", "Patient retention", "No clinic analytics",
];
const doctorCountOptions = ["1 doctor", "2–3 doctors", "4–6 doctors", "7+ doctors"];
const volumeOptions = ["Under 50/month", "50–150/month", "150–400/month", "400+/month"];
const timeOptions = ["Morning (9 AM–12 PM)", "Afternoon (12–4 PM)", "Evening (4–7 PM)", "Weekends"];

const steps = [
  { n: "01", title: "We review your details", desc: "Our team reviews your clinic type and current challenges within 24 hours." },
  { n: "02", title: "We schedule your demo", desc: "A 30-minute demo call focused on your clinic's specific workflow." },
  { n: "03", title: "You see Cureomax in action", desc: "We walk through exactly how Cureomax would work for your clinic." },
  { n: "04", title: "14-day pilot (optional)", desc: "We set up a pilot — assisted setup, custom templates, measurable results." },
];

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    clinicName: "", doctorName: "", phone: "", email: "",
    city: "", specialty: "", doctorCount: "", volume: "",
    problem: "", preferredTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try WhatsApp instead.");
      }
    } catch {
      setError("Network error. Please try again or reach us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section style={{ background: "var(--navy-deep)", backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(10,112,117,0.12) 0%, transparent 55%)", padding: "5rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(10,112,117,0.1)", border: "1px solid rgba(10,112,117,0.25)", borderRadius: 2, padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0A7075" }} />
            <span style={{ color: "#0E8E94", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>Delhi NCR Pilot — 5 Clinics Only</span>
          </div>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#FAFAF8", lineHeight: 1.12, maxWidth: 640, marginBottom: "1.25rem" }}>
            Book your Cureomax clinic demo
          </h1>
          <p style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 520, fontFamily: "var(--sans)" }}>
            We are onboarding 5 pilot clinics in Delhi NCR. Our team will contact you within 24 hours to schedule a 30-minute demo tailored to your clinic type.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "var(--navy)", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>

          {/* Left */}
          <div>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "2rem" }}>What happens next</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {steps.map((s) => (
                <div key={s.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy-mid)", border: "1px solid rgba(200,164,93,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#C8A45D", fontSize: "0.65rem", fontWeight: 700, fontFamily: "var(--sans)" }}>{s.n}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.2rem" }}>{s.title}</p>
                    <p style={{ color: "var(--white-50)", fontSize: "0.85rem", lineHeight: 1.6, fontFamily: "var(--sans)" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem", padding: "1.25rem 1.5rem", background: "var(--navy-mid)", borderRadius: 6, border: "1px solid rgba(200,164,93,0.15)" }}>
              <div style={{ display: "flex", gap: "0.6rem", marginBottom: "0.6rem", alignItems: "center" }}>
                <Shield size={14} color="#0A7075" />
                <span style={{ color: "#0E8E94", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>Privacy Promise</span>
              </div>
              <p style={{ color: "var(--white-50)", fontSize: "0.83rem", lineHeight: 1.65, fontFamily: "var(--sans)" }}>
                Your information is only used to schedule your demo. We do not share or sell clinic data. Ever.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div style={{ background: "var(--navy-mid)", border: "1px solid rgba(10,112,117,0.3)", borderRadius: 8, padding: "3rem", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(10,112,117,0.12)", border: "2px solid #0A7075", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <CheckCircle size={28} color="#0A7075" />
                </div>
                <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", fontWeight: 600, color: "#FAFAF8", marginBottom: "0.75rem" }}>Demo request received</h2>
                <p style={{ color: "var(--white-70)", fontSize: "1rem", lineHeight: 1.7, fontFamily: "var(--sans)", maxWidth: 380, margin: "0 auto" }}>
                  Thank you. The Cureomax team will contact you within 24 hours to schedule your clinic demo.
                </p>
              </div>
            ) : (
              <div style={{ background: "var(--navy-mid)", border: "1px solid rgba(200,164,93,0.15)", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ background: "#060E18", padding: "1.5rem 2rem", borderBottom: "1px solid rgba(200,164,93,0.1)" }}>
                  <p style={{ color: "#FAFAF8", fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 600 }}>Clinic Demo Request</p>
                  <p style={{ color: "var(--white-50)", fontSize: "0.82rem", fontFamily: "var(--sans)", marginTop: "0.25rem" }}>Takes 2 minutes · We respond within 24 hours</p>
                </div>
                <form onSubmit={handleSubmit} style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div><label className="form-label">Clinic Name *</label><input className="form-input" name="clinicName" required value={form.clinicName} onChange={handleChange} placeholder="e.g. Sharma Physio Clinic" /></div>
                    <div><label className="form-label">Doctor / Owner Name *</label><input className="form-input" name="doctorName" required value={form.doctorName} onChange={handleChange} placeholder="Dr. / Your name" /></div>
                    <div><label className="form-label">Phone Number *</label><input className="form-input" name="phone" required type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" /></div>
                    <div><label className="form-label">Email Address</label><input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@clinic.com" /></div>
                    <div><label className="form-label">City *</label><input className="form-input" name="city" required value={form.city} onChange={handleChange} placeholder="Noida, Delhi, Gurgaon…" /></div>
                    <div><label className="form-label">Clinic Specialty *</label>
                      <select className="form-input" name="specialty" required value={form.specialty} onChange={handleChange}>
                        <option value="">Select specialty</option>
                        {specialtyOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div><label className="form-label">Number of Doctors</label>
                      <select className="form-input" name="doctorCount" value={form.doctorCount} onChange={handleChange}>
                        <option value="">Select</option>
                        {doctorCountOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div><label className="form-label">Monthly Patient Volume</label>
                      <select className="form-input" name="volume" value={form.volume} onChange={handleChange}>
                        <option value="">Select</option>
                        {volumeOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div><label className="form-label">Biggest Clinic Challenge</label>
                    <select className="form-input" name="problem" value={form.problem} onChange={handleChange}>
                      <option value="">Select your biggest challenge</option>
                      {problemOptions.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label className="form-label">Preferred Demo Time</label>
                    <select className="form-input" name="preferredTime" value={form.preferredTime} onChange={handleChange}>
                      <option value="">Select preferred time</option>
                      {timeOptions.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  {error && (
                    <div style={{ padding: "0.75rem 1rem", background: "rgba(158,59,50,0.1)", border: "1px solid rgba(158,59,50,0.25)", borderRadius: 4 }}>
                      <p style={{ color: "#C4706A", fontSize: "0.85rem", fontFamily: "var(--sans)" }}>{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold"
                    style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer", fontSize: "0.95rem", padding: "1rem" }}
                  >
                    {loading ? "Sending…" : <>Book my Cureomax demo <ArrowRight size={16} /></>}
                  </button>
                  <p style={{ textAlign: "center", color: "var(--white-30)", fontSize: "0.78rem", fontFamily: "var(--sans)" }}>
                    No spam. No sales pressure. Just a 30-minute demo at your convenience.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
