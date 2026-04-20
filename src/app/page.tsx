export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="top">
        <div className="brand">
          <span className="mark" aria-hidden="true" />
          <span>Lightbox Studios</span>
        </div>
        <div className="links">
          <a href="#products">Products</a>
          <a href="#about">Studio</a>
          <a href="mailto:hello@lightboxstudios.org">Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="shell stage">
          <div className="meta-row">
            <span className="eyebrow fade-up delay-1">
              Lightbox Studios — Est. 2026
            </span>
            <span className="eyebrow fade-up delay-1">
              Independent Software Studio
            </span>
          </div>

          <div>
            <h1 className="fade-up delay-2">
              Building software
              <br />
              to <em>empower</em> the
              <br />
              people who work
              <br />
              independently.
            </h1>
            <p className="sub fade-up delay-3">
              We design and build quiet, precise tools for trainers, crews, and
              everyone running a business from their phone. The best tool
              disappears — so the work can show.
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
              <a className="cta primary" href="#products">
                View products <span className="arr">→</span>
              </a>
              <a className="cta" href="mailto:hello@lightboxstudios.org">
                Get in touch
              </a>
            </div>
          </div>

          <div className="foot-row fade-up delay-5">
            <span className="eyebrow">Two products, live &amp; in motion</span>
            <span className="eyebrow">Scroll ↓</span>
          </div>
        </div>
      </section>

      <div className="lightbar" />

      {/* ── PRODUCTS ── */}
      <section className="products" id="products">
        <div className="shell">
          <div className="section-header">
            <div>
              <span className="eyebrow">◉ Index — 01/02</span>
              <h2>
                Two products,
                <br />
                one discipline.
              </h2>
            </div>
            <p className="desc">
              Each one starts with a real person running their work from a phone.
              Every feature earns its place, or it doesn&apos;t ship.
            </p>
          </div>

          <div className="product-grid">
            {/* Forge */}
            <a
              className="product live forge"
              href="https://trainwithforge.fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="status">
                <span className="dot" />
                Live
              </span>
              <div className="panel" aria-hidden="true">
                <div className="glow-blob" />
                <div className="chrome">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="url">trainwithforge.fit</span>
                </div>
                <div className="preview">
                  <div className="favicon">
                    <img src="/forge-logo.png" alt="Forge" />
                  </div>
                  <div className="wordmark">Forge</div>
                  <div className="tagline">Coach · by voice</div>
                </div>
                <div className="scan" />
              </div>
              <div className="kicker">Fitness Coaching</div>
              <h3>Forge</h3>
              <p className="pitch">
                Run your entire training business from your phone — entirely by
                voice.
              </p>
              <div className="foot">
                <span className="platform">iOS</span>
                <span className="visit">
                  Visit <span className="arr">↗</span>
                </span>
              </div>
            </a>

            {/* CrewTap */}
            <a
              className="product live crewtap"
              href="https://crewtap.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="status">
                <span className="dot" />
                Live
              </span>
              <div className="panel" aria-hidden="true">
                <div className="glow-blob" />
                <div className="chrome">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="url">crewtap.app</span>
                </div>
                <div className="preview">
                  <div className="favicon">
                    <img src="/crewtap-logo.jpg" alt="CrewTap" />
                  </div>
                  <div className="wordmark">CrewTap</div>
                  <div className="tagline">Tap in · your crew</div>
                </div>
                <div className="scan" />
              </div>
              <div className="kicker">Crew Management</div>
              <h3>CrewTap</h3>
              <p className="pitch">
                Tap in your crew. Coordinate jobs, track hours, get paid.
              </p>
              <div className="foot">
                <span className="platform">Web · Mobile</span>
                <span className="visit">
                  Visit <span className="arr">↗</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT / PRINCIPLES ── */}
      <section className="about" id="about">
        <div className="shell">
          <div className="about-grid">
            <div>
              <span className="eyebrow">◉ About the studio</span>
              <h2>
                Small studio.
                <br />
                Considered work.
              </h2>
            </div>
            <div className="body">
              <p>
                Lightbox Studios is an independent software studio. We build
                products that help people do their best work —{" "}
                <strong>the kind of tools that disappear</strong>, leaving only
                the thing that matters.
              </p>
              <p>
                From personal trainers to construction crews, we build for the
                people who run their business from their phone. Every product
                starts the same way: with a real problem and a single question —
                how do we make this effortless?
              </p>
            </div>
          </div>

          <div className="principles">
            <div className="principle">
              <span className="num">01</span>
              <span className="title">Make it disappear</span>
              <span className="copy">
                A good tool gets out of the way. The work is the point — we're
                the lights on the stage, not the stage.
              </span>
            </div>
            <div className="principle">
              <span className="num">02</span>
              <span className="title">Start with a real problem</span>
              <span className="copy">
                Every product begins with someone's actual day. If we can't name
                the friction, we're not ready to build.
              </span>
            </div>
            <div className="principle">
              <span className="num">03</span>
              <span className="title">Ship precise, not loud</span>
              <span className="copy">
                We'd rather one feature that earns its keep than ten that don't.
                Everything in the product has to defend itself.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="shell">
          <span className="eyebrow">◉ Start a conversation</span>
          <h2>Got something to build?</h2>
          <a className="email" href="mailto:hello@lightboxstudios.org">
            hello@lightboxstudios.org
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="shell foot-grid">
          <div className="foot-left">
            Lightbox Studios LLC — Indep. Software Studio
          </div>
          <div className="foot-center">Lightbox</div>
          <div className="foot-right">© 2026 — All rights reserved</div>
        </div>
      </footer>
    </>
  );
}
