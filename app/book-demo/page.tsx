"use client";
import { useState } from "react";
import { CheckCircle, Shield } from "lucide-react";

const specialtyOptions = [
  "Physiotherapy", "Orthopedics", "Gynecology", "Dental",
  "Dermatology", "Diabetes / Chronic Care", "Other",
];
const problemOptions = [
  "Missed WhatsApp inquiries", "Weak follow-up", "Too many no-shows",
  "Manual notes taking too long", "Billing tracking", "Patient retention",
  "No clinic analytics",
];
const doctorCountOptions = ["1 doctor", "2–3 doctors", "4–6 doctors", "7+ doctors"];
const volumeOptions = ["Under 50 patients/month", "50–150/month", "150–400/month", "400+ patients/month"];
const timeOptions = ["Morning (9 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 7 PM)", "Weekends"];

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    clinicName: "", doctorName: "", phone: "", email: "", city: "",
    specialty: "", doctorCount: "", volume: "", problem: "", preferredTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Demo booking submission:", form);
    // TODO: Replace with Resend/EmailJS/API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: "68px" }}>
      <section style={{ background: "#0F2A1D", padding: "5rem 1.5rem 3rem", backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(200,169,106,0.08) 0%, transparent 55%)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8A96A", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>Delhi NCR Pilot</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#F7F1E5", lineHeight: 1.15, maxWidth: "640px", marginBottom: "1.25rem" }}>
            Book your Cureomax clinic demo
          </h1>
          <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "520px", fontFamily: "var(--font-body)" }}>
            We are onboarding 5 pilot clinics in Delhi NCR. Our team will contact you to schedule a 30-minute demo tailored to your clinic type.
          </p>
        </div>
      </section>

      <section style={{ background: "#F7F1E5", padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>

          {/* Left: Trust signals */}
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "1.5rem" }}>What happens after you submit</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { step: "01", title: "We review your details", desc: "Our team reviews your clinic type and current challenges within 24 hours." },
                { step: "02", title: "We schedule your demo", desc: "A 30-minute demo call at your preferred time. We focus on your clinic's specific workflow." },
                { step: "03", title: "You see Cureomax in action", desc: "We walk through exactly how Cureomax would work for your clinic — WhatsApp, notes, follow-ups, billing." },
                { step: "04", title: "14-day pilot (optional)", desc: "If it fits, we set up a pilot. Our team handles setup, templates, and training. You measure results." },
              ].map((s) => (
                <div key={s.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#0F2A1D", border: "2px solid #C8A96A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#C8A96A", fontSize: "0.65rem", fontWeight: 700, fontFamily: "var(--font-body)" }}>{s.step}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.2rem" }}>{s.title}</p>
                    <p style={{ color: "#4A3326", fontSize: "0.85rem", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem", padding: "1.25rem 1.5rem", background: "#0F2A1D", borderRadius: "3px", border: "1px solid rgba(200,169,106,0.2)" }}>
              <div style={{ display: "flex", gap: "0.6rem", marginBottom: "0.6rem" }}>
                <Shield size={16} color="#9AAB89" />
                <span style={{ color: "#C8A96A", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>Privacy Promise</span>
              </div>
              <p style={{ color: "rgba(247,241,229,0.65)", fontSize: "0.83rem", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
                Your information is only used to schedule your demo and send you relevant Cureomax updates. We do not sell or share data with third parties.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div style={{ background: "white", border: "1px solid rgba(200,169,106,0.25)", borderRadius: "4px", padding: "3rem", textAlign: "center" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(154,171,137,0.15)", border: "2px solid #9AAB89", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <CheckCircle size={28} color="#9AAB89" />
                </div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 600, color: "#0F2A1D", marginBottom: "0.75rem" }}>Demo request received</h2>
                <p style={{ color: "#4A3326", fontSize: "1rem", lineHeight: 1.7, fontFamily: "var(--font-body)", maxWidth: "400px", margin: "0 auto" }}>
                  Thank you. The Cureomax team will contact you shortly to schedule your clinic demo.
                </p>
              </div>
            ) : (
              <div style={{ background: "white", border: "1px solid rgba(200,169,106,0.2)", borderRadius: "4px", overflow: "hidden", boxShadow: "0 8px 40px rgba(15,42,29,0.08)" }}>
                <div style={{ background: "#0F2A1D", padding: "1.5rem 2rem" }}>
                  <p style={{ color: "#F7F1E5", fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 600 }}>Clinic Demo Request</p>
                  <p style={{ color: "rgba(247,241,229,0.5)", fontSize: "0.82rem", fontFamily: "var(--font-body)", marginTop: "0.25rem" }}>Takes 2 minutes to fill. We respond within 24 hours.</p>
                </div>
                <form onSubmit={handleSubmit} style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label className="form-label">Clinic Name *</label>
                      <input className="form-input" name="clinicName" required value={form.clinicName} onChange={handleChange} placeholder="e.g. Sharma Physio Clinic" />
                    </div>
                    <div>
                      <label className="form-label">Doctor / Owner Name *</label>
                      <input className="form-input" name="doctorName" required value={form.doctorName} onChange={handleChange} placeholder="Dr. / Your name" />
                    </div>
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input className="form-input" name="phone" required type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="form-label">Email Address</label>
                      <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@clinic.com" />
                    </div>
                    <div>
                      <label className="form-label">City *</label>
                      <input className="form-input" name="city" required value={form.city} onChange={handleChange} placeholder="e.g. Noida, Delhi, Gurgaon" />
                    </div>
                    <div>
                      <label className="form-label">Clinic Specialty *</label>
                      <select className="form-input" name="specialty" required value={form.specialty} onChange={handleChange}>
                        <option value="">Select specialty</option>
                        {specialtyOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Number of Doctors</label>
                      <select className="form-input" name="doctorCount" value={form.doctorCount} onChange={handleChange}>
                        <option value="">Select</option>
                        {doctorCountOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Monthly Patient Volume</label>
                      <select className="form-input" name="volume" value={form.volume} onChange={handleChange}>
                        <option value="">Select</option>
                        {volumeOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Biggest Clinic Challenge</label>
                    <select className="form-input" name="problem" value={form.problem} onChange={handleChange}>
                      <option value="">Select your biggest challenge</option>
                      {problemOptions.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Preferred Demo Time</label>
                    <select className="form-input" name="preferredTime" value={form.preferredTime} onChange={handleChange}>
                      <option value="">Select preferred time</option>
                      {timeOptions.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{ width: "100%", textAlign: "center", opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer", fontSize: "0.95rem", padding: "0.9rem" }}
                  >
                    {loading ? "Submitting..." : "Book my Cureomax demo →"}
                  </button>
                  <p style={{ textAlign: "center", color: "#4A3326", fontSize: "0.78rem", fontFamily: "var(--font-body)" }}>
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
