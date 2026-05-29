import CompareSlider from "./CompareSlider";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/rez-ai-photo-enhancer/id6755569045";

const features: { name: string; copy: string }[] = [
  { name: "Upscale", copy: "Bring photos up to 4× without the mush." },
  { name: "Enhance", copy: "One tap. Sharper detail, truer color." },
  { name: "Creative Upscale", copy: "Generative detail where there was none." },
  { name: "Restore", copy: "Heal scratches, fade, and JPEG damage." },
  { name: "Colorize", copy: "Hand-painted color on black-and-white shots." },
  { name: "Face Retouch", copy: "On-device skin work that still looks like you." },
  { name: "Lighting", copy: "Fix exposure and white balance like a pro." },
  { name: "Sharpen", copy: "Recover focus on slightly soft shots." },
  { name: "Denoise", copy: "Kill grain without killing texture." },
  { name: "Smart Retouch", copy: "Erase distractions with a tap." },
  { name: "Text Refine", copy: "Make tiny text legible again." },
  { name: "Crop & Straighten", copy: "Pixel-perfect framing." },
  { name: "Enhance Faces", copy: "Targeted face fixes for group shots." },
];

const reviews: { stars: number; quote: string; name: string }[] = [
  { stars: 5, quote: "Essential for everyone on social media!!!!", name: "jungkookie🐰" },
  { stars: 5, quote: "Finally an AI app that doesn't melt my face.", name: "App Store reviewer" },
  { stars: 5, quote: "I use this on every photo before I post.", name: "App Store reviewer" },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Does Rez keep my original quality?",
    a: "Yes. Rez never overwrites your originals. Your master file is preserved with full metadata, and every edit is saved as a new version you can revert at any time.",
  },
  {
    q: "Is my photo private?",
    a: "Images are uploaded over an encrypted connection, processed by our partner models, and removed from temporary storage after delivery. We don't train on your photos.",
  },
  {
    q: "Which models power Rez?",
    a: "Rez routes to best-in-class models from Topaz Labs and Fal.ai — the same engines used by professional retouchers — chosen per task for the right balance of quality and speed.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Subscriptions are managed through your Apple ID and can be canceled in Settings → Apple ID → Subscriptions. You keep access through the end of the period.",
  },
  {
    q: "Does it work offline?",
    a: "On-device tools like Face Retouch and Crop work offline. AI enhancements need a connection because they run on dedicated GPU servers.",
  },
];

export default function RezLanding() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="top">
        <div className="brand">
          <span className="mark" aria-hidden="true" />
          <span className="crumb">
            <a href="/">Lightbox Studios</a>
            <span className="sep">/</span>
            <span style={{ color: "var(--fg)" }}>Rez AI</span>
          </span>
        </div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            App Store ↗
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="shell stage">
          <div className="meta-row">
            <span className="eyebrow fade-up delay-1">
              Rez AI · Photo Enhancer
            </span>
            <span className="eyebrow fade-up delay-1">iOS — Available now</span>
          </div>

          <div>
            <h1 className="fade-up delay-2">
              Photos, restored
              <br />
              to their <em>true original</em>
              <br />
              quality.
            </h1>
            <p className="sub fade-up delay-3">
              AI upscale, enhance, restore, and retouch — built for creators who
              care about every pixel. Powered by Topaz Labs and Fal.ai.
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
              <a
                className="cta primary"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on the App Store <span className="arr">→</span>
              </a>
              <a className="cta" href="#features">
                See what it does
              </a>
            </div>
          </div>

          <div className="foot-row fade-up delay-5">
            <span className="eyebrow">Thirteen ways to fix a photo</span>
            <span className="eyebrow">Scroll ↓</span>
          </div>
        </div>

        <div className="shell">
          <CompareSlider before="/rez/before.png" after="/rez/after.png" />
        </div>
      </section>

      <div className="lightbar" />

      {/* ── FEATURES ── */}
      <section className="products" id="features">
        <div className="shell">
          <div className="section-header">
            <div>
              <span className="eyebrow">◉ Capabilities — 13 / 13</span>
              <h2>
                Every fix a
                <br />
                photo could need.
              </h2>
            </div>
            <p className="desc">
              One app, thirteen specialized models. Rez routes your photo to the
              right engine for the job — pro-grade restoration in the time it
              takes to pick a filter.
            </p>
          </div>

          <div className="feature-list">
            {features.map((f, i) => (
              <div className="feature-cell" key={f.name}>
                <span className="num">
                  {String(i + 1).padStart(2, "0")} / 13
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
              <span className="eyebrow">◉ The Rez promise</span>
              <h2>
                Your original —
                <br />
                only better.
              </h2>
            </div>
            <div className="body">
              <p>
                Most AI photo apps overwrite your file, strip the metadata, and
                hand you back something that doesn&apos;t quite feel like
                yours. <strong>Rez keeps every original</strong>, preserves
                EXIF, and saves every edit as a version you can revert.
              </p>
              <p>
                Because a great enhancement isn&apos;t one you can&apos;t undo —
                it&apos;s one you&apos;d choose to keep, every time.
              </p>
            </div>
          </div>

          <div className="principles">
            <div className="principle">
              <span className="num">01</span>
              <span className="title">Originals preserved</span>
              <span className="copy">
                Your master file is never overwritten. Full metadata stays
                intact. Every edit is a non-destructive version.
              </span>
            </div>
            <div className="principle">
              <span className="num">02</span>
              <span className="title">Pro-grade models</span>
              <span className="copy">
                Routed to Topaz Labs and Fal.ai — the same engines pros pay
                hundreds for, chosen per task automatically.
              </span>
            </div>
            <div className="principle">
              <span className="num">03</span>
              <span className="title">Identity respected</span>
              <span className="copy">
                Face and detail models tuned to preserve who&apos;s in the
                photo. No hallucinated faces. No plastic skin.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="lightbar" />

      {/* ── REVIEWS ── */}
      <section className="products">
        <div className="shell">
          <div className="section-header">
            <div>
              <span className="eyebrow">◉ Said by users</span>
              <h2>
                Loved by
                <br />
                creators.
              </h2>
            </div>
            <p className="desc">
              From App Store reviewers using Rez every day. Real photos, real
              quotes.
            </p>
          </div>

          <div className="review-grid">
            {reviews.map((r, i) => (
              <div className="review" key={i}>
                <span className="stars">{"★".repeat(r.stars)}</span>
                <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
                <cite>— {r.name}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="lightbar" />

      {/* ── PRICING ── */}
      <section className="products" id="pricing">
        <div className="shell">
          <div className="section-header">
            <div>
              <span className="eyebrow">◉ Pricing</span>
              <h2>
                Try Rez free.
                <br />
                Upgrade when ready.
              </h2>
            </div>
            <p className="desc">
              Free to start with five enhancements. Pro unlocks unlimited
              processing, priority queue, and every future feature.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Free */}
            <div className="price">
              <span className="tier">Free</span>
              <div className="amount">
                $0 <small>/ forever</small>
              </div>
              <span className="note">5 enhancements to start</span>
              <ul>
                <li>Full feature access</li>
                <li>Originals always preserved</li>
                <li>Standard processing speed</li>
              </ul>
              <a
                className="cta"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download free <span className="arr">→</span>
              </a>
            </div>

            {/* Weekly */}
            <div className="price">
              <span className="tier">Pro · Weekly</span>
              <div className="amount">
                $14.99 <small>/ week</small>
              </div>
              <span className="note">Try Rez. Cancel anytime.</span>
              <ul>
                <li>Unlimited enhancements</li>
                <li>Priority processing</li>
                <li>Batch editing</li>
                <li>All future features</li>
              </ul>
              <a
                className="cta"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start weekly <span className="arr">→</span>
              </a>
            </div>

            {/* Yearly — featured */}
            <div className="price featured">
              <span className="badge">Best value</span>
              <span className="tier">Pro · Yearly</span>
              <div className="amount">
                $129.99 <small>/ year</small>
              </div>
              <span className="save">$10.83 / mo · save 83%</span>
              <ul>
                <li>Unlimited enhancements</li>
                <li>Priority processing</li>
                <li>Batch editing</li>
                <li>All future features</li>
              </ul>
              <a
                className="cta primary"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start yearly <span className="arr">→</span>
              </a>
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
          <span className="eyebrow">◉ Ready when you are</span>
          <h2>
            Restore your photos
            <br />
            to <em>true original</em> quality.
          </h2>
          <a
            className="cta primary"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on the App Store <span className="arr">→</span>
          </a>
          <div className="note">Free to start · iPhone · No credit card</div>
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
