import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ paddingTop: "68px", minHeight: "100vh", background: "#0F2A1D", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", padding: "2rem" }}>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "6rem", fontWeight: 600, color: "rgba(200,169,106,0.15)", lineHeight: 1 }}>404</p>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 600, color: "#F7F1E5", marginTop: "-1rem", marginBottom: "1rem" }}>Page not found</h1>
      <p style={{ color: "rgba(247,241,229,0.55)", fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "2rem" }}>The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="btn-primary">Return to Homepage →</Link>
    </div>
  );
}
