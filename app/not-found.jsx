import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div
      className="container"
      style={{ padding: "100px 20px", textAlign: "center" }}
    >
      <h1 style={{ fontSize: 72, fontWeight: 800 }} className="gradient-text">
        404
      </h1>
      <p style={{ fontSize: 20, margin: "12px 0 28px", color: "rgba(255,255,255,0.7)" }}>
        We couldn’t find that page.
      </p>
      <Link
        href="/"
        style={{
          background: "var(--gradient)",
          padding: "12px 26px",
          borderRadius: 10,
          fontWeight: 700,
        }}
      >
        Go back home
      </Link>
    </div>
  );
}
