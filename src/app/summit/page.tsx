const CONTACT_URL = "mailto:hello@lightboxstudios.org";

const features: { name: string; copy: string }[] = [
  { name: "Real Elevation", copy: "Distance gets you across the flats. Vertical gain gets you up the headwalls. No partial credit." },
  { name: "Storm Forecast", copy: "Watch a front roll in three days out. Reach camp in time, or get pushed back — never past your last checkpoint." },
  { name: "Shared Mountain", copy: "Climb with friends on the same trail, the same weather, the same camps. Your effort is yours alone." },
  { name: "Read-Only & Private", copy: "Your health data moves your marker up the mountain and never leaves your phone." },
  { name: "Offline First", copy: "No account, no signal required. Summits count in airplane mode." },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need an account?",
    a: "No. Summit works completely offline, in airplane mode, from the very first launch. An account is only needed if you choose to add friends.",
  },
  {
    q: "What happens if a storm catches me?",
    a: "You're pushed back to the last camp you reached — never further, never past the trailhead. Loss is always bounded and always recoverable.",
  },
  {
    q: "Is my health data shared with anyone?",
    a: "No. Steps, walking distance, and flights climbed are read on your phone to move your marker up the mountain, and never leave it.",
  },
  {
    q: "Is it free?",
    a: "Yes, free to play. Nothing that affects your climb — steps, progress, or joining a friend's mountain — is ever paywalled.",
  },
  {
    q: "When can I download it?",
    a: "Summit is currently in testing ahead of an App Store release. Get in touch if you'd like early access.",
  },
];

export default function SummitLanding() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="top">
        <div className="brand">
          <span className="mark" aria-hidden="true" />
          <span className="crumb">
            <a href="/">Lightbox Studios</a>
            <span className="sep">/</span>
            <span style={{ color: "var(--fg)" }}>Summit</span>
          </span>
        </div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href={CONTACT_URL}>Get in touch</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="shell stage">
          <div className="meta-row">
            <span className="eyebrow fade-up delay-1">Summit · Elevation Game</span>
            <span className="eyebrow fade-up delay-1">iOS — In testing</span>
          </div>

          <div>
            <h1 className="fade-up delay-2">
              Your real steps
              <br />
              climb a <em>real</em>
              <br />
              mountain.
            </h1>
            <p className="sub fade-up delay-3">
              Real steps and stair-climbs move you up real mountain trails. Race a
              storm you can see coming three days out. Free to play, no account,
              works offline — summit exactly, or not at all.
            </p>
            <div
              className="fade-up delay-4"
              style={{
                marginTop: 36,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a className="cta primary" href={CONTACT_URL}>
                Get in touch <span className="arr">→</span>
              </a>
              <a className="cta" href="#features">
                See how it works
              </a>
            </div>
          </div>

          <div className="foot-row fade-up delay-5">
            <span className="eyebrow">Reach camp before the storm does</span>
            <span className="eyebrow">Scroll ↓</span>
          </div>
        </div>
      </section>

      <div className="lightbar" />

      {/* ── FEATURES ── */}
      <section className="products" id="features">
        <div className="shell">
          <div className="section-header">
            <div>
              <span className="eyebrow">◉ Capabilities — 05 / 05</span>
              <h2>
                Every step counts.
                <br />
                Literally.
              </h2>
            </div>
            <p className="desc">
              This is a stair-and-hill climbing game that uses your real activity
              as pacing — not a step counter with a theme.
            </p>
          </div>

          <div className="feature-list">
            {features.map((f, i) => (
              <div className="feature-cell" key={f.name}>
                <span className="num">
                  {String(i + 1).padStart(2, "0")} / 05
                </span>
                <span className="name">{f.name}</span>
                <span className="copy">{f.copy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="lightbar" />

      {/* ── THE PROMISE ── */}
      <section className="about">
        <div className="shell">
          <div className="about-grid">
            <div>
              <span className="eyebrow">◉ The Summit promise</span>
              <h2>
                Real mountains.
                <br />
                Real stakes.
              </h2>
            </div>
            <div className="body">
              <p>
                A trail has a real distance and a real total ascent, and{" "}
                <strong>you&apos;ve summited only when you&apos;ve covered both</strong>.
                One metre short of either doesn&apos;t count — the mountain
                doesn&apos;t grade on a curve.
              </p>
              <p>
                Everyone on a mountain climbs it individually, but shares the same
                camps, the same weather, and the same real elevation profile.
              </p>
            </div>
          </div>

          <div className="principles">
            <div className="principle">
              <span className="num">01</span>
              <span className="title">No partial credit</span>
              <span className="copy">
                Two states: In Progress, Summited. There is no third state where
                close enough counts.
              </span>
            </div>
            <div className="principle">
              <span className="num">02</span>
              <span className="title">The mountain never blames you</span>
              <span className="copy">
                A storm setback puts you back at your last camp, never further.
                No guilt copy, no streak anxiety, no ranking.
              </span>
            </div>
            <div className="principle">
              <span className="num">03</span>
              <span className="title">Your data stays yours</span>
              <span className="copy">
                Steps, distance, and flights climbed are read once, on-device, to
                move your marker. Never sold, never shared.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="lightbar" />

      {/* ── FAQ ── */}
      <section className="products" id="faq">
        <div className="shell">
          <div className="section-header">
            <div>
              <span className="eyebrow">◉ Frequently asked</span>
              <h2>
                Good
                <br />
                questions.
              </h2>
            </div>
            <p className="desc">
              The things people ask before they download. Anything else, drop us
              a line.
            </p>
          </div>

          <div className="faq">
            {faqs.map((f, i) => (
              <details className="faq-item" key={i}>
                <summary>{f.q}</summary>
                <p className="answer">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <div className="shell">
          <span className="eyebrow">◉ Currently in testing</span>
          <h2>
            Reach camp
            <br />
            before the <em>storm</em> does.
          </h2>
          <a className="cta primary" href={CONTACT_URL}>
            Get in touch <span className="arr">→</span>
          </a>
          <div className="note">iPhone · Free to play · No account needed</div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="shell foot-grid">
          <div className="foot-left">
            Lightbox Studios LLC — Indep. Software Studio
          </div>
          <div className="foot-center">
            <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>
              Terms
            </a>
            {" · "}
            <a href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy
            </a>
          </div>
          <div className="foot-right">© 2026 — All rights reserved</div>
        </div>
      </footer>
    </>
  );
}
