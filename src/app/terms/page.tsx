import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Lightbox Studios",
  description: "Terms of Service and End User License Agreement for Lightbox Studios apps, including Rez AI.",
};

const wrap: React.CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "96px 24px 120px",
  fontFamily: "var(--body)",
  color: "var(--fg)",
  lineHeight: 1.7,
};
const h1: React.CSSProperties = { fontFamily: "var(--display)", fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", margin: 0 };
const h2: React.CSSProperties = { fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, marginTop: 44, marginBottom: 12 };
const muted: React.CSSProperties = { color: "var(--fg-dim)" };
const link: React.CSSProperties = { color: "var(--fg)", textDecoration: "underline" };

export default function TermsOfService() {
  return (
    <main style={wrap}>
      <p style={{ ...muted, fontFamily: "var(--mono)", fontSize: 13, marginBottom: 24 }}>
        <a href="/" style={link}>← Lightbox Studios</a>
      </p>

      <h1 style={h1}>Terms of Service &amp; EULA</h1>
      <p style={muted}>Last updated: May 26, 2026</p>

      <p style={{ marginTop: 24 }}>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Lightbox Studios&rsquo; applications,
        including <strong>Rez AI</strong> and other products we may release, such as our forthcoming video
        enhancement app (together, the &ldquo;Apps&rdquo;). By downloading or using the Apps, you agree to these
        Terms. If you do not agree, do not use the Apps.
      </p>

      <h2 style={h2}>1. The service</h2>
      <p style={muted}>
        The Apps use artificial intelligence to enhance, upscale, restore, and edit images and video that you submit.
        Features and models may change over time.
      </p>

      <h2 style={h2}>2. License (Apple Standard EULA)</h2>
      <p style={muted}>
        Your license to use the Apps is granted under Apple&rsquo;s standard{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" style={link}>
          Licensed Application End User License Agreement
        </a>{" "}
        (the &ldquo;Apple EULA&rdquo;), as supplemented by these Terms. Where these Terms and the Apple EULA conflict,
        these Terms control to the extent permitted.
      </p>

      <h2 style={h2}>3. Subscriptions and billing</h2>
      <ul style={muted}>
        <li>The Apps offer auto-renewing subscriptions and/or consumable credits, billed through your Apple account.</li>
        <li>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the period.</li>
        <li>Manage or cancel your subscription anytime in the App Store account settings.</li>
        <li>Except where required by law, payments are handled by Apple and refunds are subject to Apple&rsquo;s policies.</li>
      </ul>

      <h2 style={h2}>4. Your content</h2>
      <p style={muted}>
        You retain ownership of the photos and videos you submit. You grant us a limited license to store and process
        that content solely to provide the service. You represent that you have the rights to any content you upload
        and that it does not infringe others&rsquo; rights or violate the law.
      </p>

      <h2 style={h2}>5. Acceptable use</h2>
      <p style={muted}>You agree not to use the Apps to create, upload, or distribute content that:</p>
      <ul style={muted}>
        <li>is unlawful, infringing, or violates another person&rsquo;s privacy or likeness without consent;</li>
        <li>depicts the sexual abuse or exploitation of minors;</li>
        <li>is intended to deceive, defraud, impersonate, or harass; or</li>
        <li>attempts to disrupt, reverse engineer, or abuse the service or its usage limits.</li>
      </ul>

      <h2 style={h2}>6. AI-generated results</h2>
      <p style={muted}>
        Enhancement and &ldquo;generative&rdquo; features may add, reconstruct, or alter detail that was not present in
        the original file. Results are produced by automated models, may be imperfect, and should not be relied upon
        as an accurate record of real events or for forensic, legal, medical, or identification purposes.
      </p>

      <h2 style={h2}>7. Intellectual property</h2>
      <p style={muted}>
        The Apps, including their software, design, and branding, are owned by Lightbox Studios and protected by
        applicable law. These Terms do not grant you any rights in our intellectual property except as needed to use
        the Apps.
      </p>

      <h2 style={h2}>8. Disclaimers</h2>
      <p style={muted}>
        The Apps are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind to the
        fullest extent permitted by law. We do not warrant that the Apps will be uninterrupted, error-free, or that
        results will meet your expectations.
      </p>

      <h2 style={h2}>9. Limitation of liability</h2>
      <p style={muted}>
        To the maximum extent permitted by law, Lightbox Studios will not be liable for any indirect, incidental, or
        consequential damages, or for any loss of data, arising from your use of the Apps.
      </p>

      <h2 style={h2}>10. Termination</h2>
      <p style={muted}>
        You may stop using the Apps at any time and delete your account in-app (in Rez AI: Settings → Delete Account).
        We may suspend or terminate access if you violate these Terms.
      </p>

      <h2 style={h2}>11. Changes to these Terms</h2>
      <p style={muted}>
        We may update these Terms from time to time. Material changes will be reflected by the &ldquo;Last
        updated&rdquo; date above; continued use of the Apps constitutes acceptance.
      </p>

      <h2 style={h2}>12. Governing law</h2>
      <p style={muted}>
        These Terms are governed by the laws of the jurisdiction in which Lightbox Studios operates, without regard to
        conflict-of-law rules.
      </p>

      <h2 style={h2}>13. Contact</h2>
      <p style={muted}>
        Questions about these Terms? Email{" "}
        <a href="mailto:hello@lightboxstudios.org" style={link}>hello@lightboxstudios.org</a>.
      </p>
    </main>
  );
}
