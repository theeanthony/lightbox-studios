"use client";

import { useEffect, useRef } from "react";

const products = [
  {
    name: "Forge",
    tag: "Fitness Coaching",
    description:
      "Run your entire training business from your phone, entirely by voice.",
    color: "var(--forge-color)",
    status: "Live",
    platform: "iOS",
    href: "https://trainwithforge.fit",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
        />
      </svg>
    ),
  },
  {
    name: "Elevate",
    tag: "Social Fitness",
    description:
      "Lift together. Track workouts, share progress, push each other.",
    color: "var(--elevate-color)",
    status: "Coming Soon",
    platform: "iOS",
    href: null,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>
    ),
  },
  {
    name: "CrewTap",
    tag: "Crew Management",
    description:
      "Tap in your crew. Coordinate jobs, track hours, get paid.",
    color: "var(--crew-color)",
    status: "Live",
    platform: "Web + Mobile",
    href: "https://crewtap.app",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    card.addEventListener("mousemove", handleMouse);
    return () => card.removeEventListener("mousemove", handleMouse);
  }, []);

  const inner = (
    <div
      ref={cardRef}
      className={`product-card rounded-2xl p-8 md:p-10 h-full animate-fade-up delay-${index + 3}`}
    >
      {/* Top row: icon + status */}
      <div className="flex items-start justify-between mb-8">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: `color-mix(in srgb, ${product.color} 12%, transparent)`,
            color: product.color,
          }}
        >
          {product.icon}
        </div>
        <div className="flex items-center gap-2">
          <span
            className="status-dot w-1.5 h-1.5 rounded-full"
            style={{
              background: product.status === "Live" ? product.color : "var(--text-3)",
              color: product.status === "Live" ? product.color : "var(--text-3)",
            }}
          />
          <span
            className="font-mono text-xs tracking-wider uppercase"
            style={{ color: "var(--text-3)" }}
          >
            {product.status}
          </span>
        </div>
      </div>

      {/* Name + tag */}
      <div className="mb-4">
        <h3
          className="text-2xl font-semibold tracking-tight mb-1"
          style={{ color: "var(--text-1)" }}
        >
          {product.name}
        </h3>
        <span
          className="font-mono text-xs tracking-wider uppercase"
          style={{ color: product.color }}
        >
          {product.tag}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-base leading-relaxed mb-8"
        style={{ color: "var(--text-2)" }}
      >
        {product.description}
      </p>

      {/* Bottom */}
      <div className="mt-auto flex items-center justify-between">
        <span
          className="font-mono text-xs"
          style={{ color: "var(--text-3)" }}
        >
          {product.platform}
        </span>
        {product.href ? (
          <span
            className="text-sm font-medium flex items-center gap-1.5 transition-colors"
            style={{ color: product.color }}
          >
            Visit
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13L13 3M13 3H5M13 3v8"
              />
            </svg>
          </span>
        ) : (
          <span className="text-sm" style={{ color: "var(--text-3)" }}>
            Stay tuned
          </span>
        )}
      </div>
    </div>
  );

  if (product.href) {
    return (
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {inner}
      </a>
    );
  }

  return inner;
}

export default function Home() {
  return (
    <div className="grain grid-bg relative min-h-screen">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
          className="container-main flex items-center justify-between"
          style={{
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-center gap-3">
            {/* Abstract logo mark */}
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), rgba(99, 102, 241, 0.4))",
              }}
            >
              <div
                className="w-3 h-3 rounded-sm"
                style={{ background: "white" }}
              />
            </div>
            <span className="font-display text-base font-bold tracking-tight">
              Lightbox Studios
            </span>
          </div>
          <a
            href="mailto:hello@lightboxstudios.org"
            className="link-hover font-mono text-xs tracking-wider"
            style={{ color: "var(--text-2)" }}
          >
            hello@lightboxstudios.org
          </a>
        </div>
        <div className="separator" />
      </nav>

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center" style={{ minHeight: "85vh", padding: "0 1.5rem" }}>
        <div className="hero-mesh" />
        <div className="relative z-10 text-center" style={{ maxWidth: "56rem", margin: "0 auto" }}>
          {/* Overline */}
          <div
            className="animate-fade-up delay-1 font-mono text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: "var(--text-3)" }}
          >
            Software Studio
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up delay-2 font-display text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.95]">
            Building
            <br />
            Software to{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-glow), var(--accent), #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Empower
            </span>
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-up delay-3 leading-relaxed"
            style={{ marginTop: "2rem", fontSize: "1.125rem", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto", color: "var(--text-2)" }}
          >
            We design and build tools for people who work independently — trainers, crews, and everyone in between.
          </p>

          {/* CTA */}
          <div className="animate-fade-up delay-4 mt-10 flex items-center justify-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--accent)",
                color: "white",
                boxShadow: "0 0 24px rgba(99, 102, 241, 0.3)",
              }}
            >
              View our products
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-3.5 h-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 3v10M8 13l4-4M8 13L4 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-6"
          style={{ color: "var(--text-3)" }}
        >
          <div className="w-5 h-8 rounded-full border border-current flex justify-center pt-1.5">
            <div
              className="w-0.5 h-2 rounded-full"
              style={{
                background: "var(--text-3)",
                animation: "fadeUp 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="relative" style={{ padding: "6rem 0" }}>
        <div className="container-main">
          {/* Section header */}
          <div className="mb-16 md:mb-20">
            <span
              className="font-mono text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--text-3)" }}
            >
              What we build
            </span>
            <h2
              className="font-display text-3xl md:text-5xl font-bold tracking-tight mt-4"
              style={{ color: "var(--text-1)" }}
            >
              Products
            </h2>
          </div>

          {/* Grid */}
          <div className="products-grid">
            {products.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="separator container-main" />

      {/* ── ABOUT ── */}
      <section className="relative" style={{ padding: "6rem 0" }}>
        <div className="container-main about-grid">

          <div>
            <span
              className="font-mono text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--text-3)" }}
            >
              About
            </span>
            <h2
              className="font-display text-3xl md:text-5xl font-bold tracking-tight mt-4"
              style={{ color: "var(--text-1)" }}
            >
              Small studio,{" "}
              <span style={{ color: "var(--accent-glow)" }}>big reach.</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              Lightbox Studios is an independent software studio focused on building
              products that help people do their best work. We believe the best tools
              are the ones that disappear — letting you focus on the thing that matters.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              From personal trainers to construction crews, we build for the people
              who run their business from their phone. Every product starts with a
              real problem and a question:{" "}
              <span style={{ color: "var(--text-1)" }}>
                how do we make this effortless?
              </span>
            </p>
            <div className="pt-4">
              <a
                href="mailto:hello@lightboxstudios.org"
                className="inline-flex items-center gap-2 text-sm font-medium link-hover"
                style={{ color: "var(--accent-glow)" }}
              >
                Get in touch
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13L13 3M13 3H5M13 3v8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="separator container-main" />

      {/* ── FOOTER ── */}
      <footer className="relative" style={{ padding: "4rem 0" }}>
        <div className="container-main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), rgba(99, 102, 241, 0.4))",
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-sm"
                style={{ background: "white" }}
              />
            </div>
            <span className="font-display text-sm font-bold tracking-tight">
              Lightbox Studios
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="mailto:hello@lightboxstudios.org"
              className="link-hover font-mono text-xs"
              style={{ color: "var(--text-3)" }}
            >
              hello@lightboxstudios.org
            </a>
          </div>

          <span className="font-mono text-xs" style={{ color: "var(--text-3)" }}>
            &copy; {new Date().getFullYear()} Lightbox Studios LLC
          </span>
        </div>
      </footer>
    </div>
  );
}
