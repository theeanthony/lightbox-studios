import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lightbox Studios — Building software to empower",
  description:
    "Independent software studio building tools for trainers, crews, and everyone running a business from their phone.",
  openGraph: {
    title: "Lightbox Studios",
    description: "Building software to empower",
    url: "https://lightboxstudios.org",
    siteName: "Lightbox Studios",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
