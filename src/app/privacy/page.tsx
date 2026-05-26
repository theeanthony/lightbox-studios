import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Lightbox Studios",
  description: "How Lightbox Studios handles your data across our apps, including Rez AI.",
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

export default function PrivacyPolicy() {
  return (
    <main style={wrap}>
      <p style={{ ...muted, fontFamily: "var(--mono)", fontSize: 13, marginBottom: 24 }}>
        <a href="/" style={link}>← Lightbox Studios</a>
      </p>

      <h1 style={h1}>Privacy Policy</h1>
      <p style={muted}>Last updated: May 26, 2026</p>

      <p style={{ marginTop: 24 }}>
        This Privacy Policy explains how Lightbox Studios (&ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, and
        shares information across our applications, including <strong>Rez AI</strong> and other products we may
        release, such as our forthcoming video enhancement app (together, the &ldquo;Apps&rdquo;). By using the
        Apps you agree to this policy.
      </p>

      <h2 style={h2}>Information we collect</h2>
      <ul style={muted}>
        <li>
          <strong>Account information.</strong> By default you use the Apps with an anonymous account. If you create
          an account, we collect your email address (email sign-up) or an Apple-provided identifier and, if you share
          it, your email (Sign in with Apple).
        </li>
        <li>
          <strong>Photos and content you submit.</strong> When you enhance a photo (or, in future, a video), that
          file is uploaded to our cloud storage and sent to third-party AI processing providers to perform the
          enhancement. We process this content only to provide the service.
        </li>
        <li>
          <strong>Purchase information.</strong> Subscriptions and in-app purchases are processed by Apple. We receive
          subscription status and transaction identifiers through our billing providers; we never receive your full
          payment card details.
        </li>
        <li>
          <strong>Device and usage data.</strong> We collect a device identifier (used to manage free credits and
          prevent abuse), app interaction and analytics data, and diagnostic/crash information.
        </li>
        <li>
          <strong>Notifications.</strong> If you enable push notifications, we store a device push token to notify you
          when processing is complete.
        </li>
      </ul>

      <h2 style={h2}>How we use information</h2>
      <ul style={muted}>
        <li>To provide and operate the enhancement features you request.</li>
        <li>To manage your account, credits, and subscriptions.</li>
        <li>To prevent fraud and abuse (for example, limiting one free-credit grant per device).</li>
        <li>To send you notifications you have enabled.</li>
        <li>To analyze, maintain, and improve the Apps.</li>
        <li>To provide customer support.</li>
      </ul>

      <h2 style={h2}>Third-party services</h2>
      <p style={muted}>
        We rely on the following providers to operate the Apps. Each processes data under its own privacy policy:
      </p>
      <ul style={muted}>
        <li>Apple — Sign in with Apple and App Store payments.</li>
        <li>Google Firebase — authentication, cloud storage, database, and push messaging.</li>
        <li>AI processing providers (including Fal.ai and Topaz Labs) — to enhance the images and video you submit.</li>
        <li>RevenueCat and Superwall — subscription management.</li>
        <li>UXCam — product analytics and usage insights.</li>
      </ul>

      <h2 style={h2}>Storage and retention of your content</h2>
      <p style={muted}>
        Photos and videos you submit are stored to process your request and to provide your edit history. We do not
        claim ownership of your content. You can delete individual projects in the App, and deleting your account
        removes your account and associated cloud-stored content.
      </p>

      <h2 style={h2}>How we share information</h2>
      <p style={muted}>
        We do not sell your personal information. We share information only with the service providers listed above,
        to the extent needed to operate the Apps, and where required by law.
      </p>

      <h2 style={h2}>Your choices and rights</h2>
      <ul style={muted}>
        <li>
          <strong>Delete your account.</strong> In Rez AI, go to Settings → Delete Account. This permanently removes
          your account and associated cloud data.
        </li>
        <li>
          <strong>Location data.</strong> You can enable &ldquo;Remove GPS Data&rdquo; in Settings to strip location
          metadata from saved photos.
        </li>
        <li>
          Depending on your region (for example, under GDPR or CCPA), you may have rights to access, correct, or
          delete your personal information. Contact us to exercise these rights.
        </li>
      </ul>

      <h2 style={h2}>Children</h2>
      <p style={muted}>
        The Apps are not directed to children under 13 (or the minimum age required in your country), and we do not
        knowingly collect their personal information.
      </p>

      <h2 style={h2}>Security and international transfers</h2>
      <p style={muted}>
        We use reasonable technical and organizational measures to protect your information. Our providers may process
        and store data in countries other than your own.
      </p>

      <h2 style={h2}>Changes to this policy</h2>
      <p style={muted}>
        We may update this policy from time to time. Material changes will be reflected by the &ldquo;Last
        updated&rdquo; date above.
      </p>

      <h2 style={h2}>Contact</h2>
      <p style={muted}>
        Questions? Email us at{" "}
        <a href="mailto:hello@lightboxstudios.org" style={link}>hello@lightboxstudios.org</a>.
      </p>
    </main>
  );
}
