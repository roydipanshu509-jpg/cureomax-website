import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cureomax — AI Clinic OS for Healthcare Trust";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%", height: "100%",
        background: "#0D1B2A",
        display: "flex", flexDirection: "column",
        alignItems: "flex-start", justifyContent: "center",
        padding: "80px 100px",
        position: "relative",
      }}
    >
      {/* Grid texture */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: "linear-gradient(rgba(200,164,93,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,93,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px", display: "flex" }} />

      {/* Logo mark */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
        <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="17.5" stroke="#C8A45D" strokeWidth="1.5" />
          <path d="M4 20 H9.5 L12.5 26 L16.5 12.5 L19 20 L21 16.5 L23.5 20 H36"
            stroke="#C8A45D" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: 32, fontWeight: 600, color: "#FAFAF8", letterSpacing: "-0.02em" }}>Cureomax</span>
      </div>

      {/* Headline */}
      <div style={{ fontSize: 64, fontWeight: 700, color: "#FAFAF8", lineHeight: 1.1,
        letterSpacing: "-0.02em", maxWidth: 800, marginBottom: 24, display: "flex", flexWrap: "wrap" }}>
        AI Clinic OS for Indian Healthcare
      </div>

      {/* Subhead */}
      <div style={{ fontSize: 24, color: "rgba(250,250,248,0.6)", maxWidth: 700, lineHeight: 1.5, marginBottom: 48, display: "flex" }}>
        Automate notes, follow-ups, billing, and CRM — without replacing clinical judgment.
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: 12 }}>
        {["Voice-to-Notes", "Patient CRM", "WhatsApp Follow-up", "Clinic Analytics"].map(t => (
          <div key={t} style={{ background: "rgba(10,112,117,0.2)", border: "1px solid rgba(10,112,117,0.4)",
            borderRadius: 4, padding: "6px 16px", fontSize: 16, color: "#0E8E94", fontWeight: 600, display: "flex" }}>
            {t}
          </div>
        ))}
      </div>

      {/* Gold accent bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4,
        background: "#C8A45D", display: "flex" }} />
    </div>
  );
}
