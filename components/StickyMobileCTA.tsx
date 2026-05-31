import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta">
      <Link href="/book-demo" className="btn-gold" style={{ flex: 1, textAlign: "center", justifyContent: "center", fontSize: "0.9rem" }}>
        Book a Demo
      </Link>
      <Link href="/demo" className="btn-outline-gold" style={{ flex: 1, textAlign: "center", justifyContent: "center", fontSize: "0.9rem" }}>
        See Demo
      </Link>
    </div>
  );
}
