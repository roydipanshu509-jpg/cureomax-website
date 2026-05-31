import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export default function Logo({ variant = "dark", size = "md", showWordmark = true }: LogoProps) {
  const markStroke = "#C8A45D";
  const wordmarkColor = variant === "dark" ? "#FAFAF8" : "#0D1B2A";

  const markSizes = { sm: 26, md: 32, lg: 42 };
  const fontSizes = { sm: "1.1rem", md: "1.35rem", lg: "1.75rem" };
  const markSize = markSizes[size];

  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", userSelect: "none" }}>

      {/* ── Pulse Ring Mark ── */}
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Outer ring — slightly thicker */}
        <circle cx="20" cy="20" r="17.5" stroke={markStroke} strokeWidth="1.5" opacity="0.9" />
        {/* ECG pulse line */}
        <path
          d="M4 20 H9.5 L12.5 26 L16.5 12.5 L19 20 L21 16.5 L23.5 20 H36"
          stroke={markStroke}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* ── Wordmark — single unified weight, no split color ── */}
      {showWordmark && (
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: fontSizes[size],
            fontWeight: 600,
            color: wordmarkColor,
            letterSpacing: "-0.015em",
            lineHeight: 1,
          }}
        >
          Cureomax
        </span>
      )}
    </Link>
  );
}
