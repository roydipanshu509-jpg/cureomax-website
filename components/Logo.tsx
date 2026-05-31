import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export default function Logo({ variant = "dark", size = "md", showWordmark = true }: LogoProps) {
  const markColor = variant === "dark" ? "#C8A45D" : "#0D1B2A";
  const textPrimary = variant === "dark" ? "#FAFAF7" : "#0D1B2A";
  const textAccent = "#C8A45D";

  const sizes = { sm: 28, md: 34, lg: 44 };
  const markSize = sizes[size];
  const fontSize = size === "sm" ? "1.15rem" : size === "md" ? "1.4rem" : "1.8rem";

  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
      {/* ── Pulse Ring Mark ── */}
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer ring */}
        <circle cx="20" cy="20" r="17.5" stroke={markColor} strokeWidth="1.6" />

        {/* ECG / pulse line — peaks at center forming a subtle cross */}
        <path
          d="M4 20 H9 L12 26.5 L16.5 12 L19 20 L21 16.5 L23.5 20 H36"
          stroke={markColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small cross dot at pulse peak — reinforces medical mark */}
        <circle cx="19" cy="20" r="1.2" fill={markColor} />
      </svg>

      {/* ── Wordmark ── */}
      {showWordmark && (
        <div style={{ display: "flex", alignItems: "baseline", gap: "0" }}>
          <span
            style={{
              fontFamily: "var(--serif)",
              fontSize,
              fontWeight: 600,
              color: textPrimary,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Cureo
          </span>
          <span
            style={{
              fontFamily: "var(--serif)",
              fontSize,
              fontWeight: 600,
              color: textAccent,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            max
          </span>
        </div>
      )}
    </Link>
  );
}
