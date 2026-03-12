import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Bowen AI Strategy Group | Custom AI Websites, Dashboards & Consulting",
    template: "%s | Bowen AI Strategy Group",
  },
  description:
    "Bowen AI Strategy Group architects high-yield AI systems. 1-1 consulting, implementation masterclasses, and custom AI production for websites and ad creative. Built in days.",
  keywords: [
    "AI strategy consulting",
    "AI implementation masterclass",
    "custom AI websites",
    "AI ad creative",
    "business AI automation",
    "Bowen AI Strategy Group",
    "ROI focused AI",
    "AI for founders",
  ],
  authors: [{ name: "Bowen AI Strategy Group" }],
  creator: "Bowen AI Strategy Group",
  metadataBase: new URL("https://bowenai.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bowenai.io",
    siteName: "Bowen AI Strategy Group",
    title: "Bowen AI Strategy Group | Custom AI Websites, Dashboards & Consulting",
    description:
      "Custom AI-powered websites, dashboards, PDF-to-video, and ad creative. Built in days, not months.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bowen AI Strategy Group",
    description:
      "Custom AI-powered websites, dashboards, PDF-to-video, and ad creative. Built in days, not months.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bowen AI Strategy Group",
  url: "https://bowenai.io",
  description:
    "Custom AI-powered websites, real-time dashboards, multilingual video, and ad creative for growth-focused businesses.",
  contactPoint: { "@type": "ContactPoint", contactType: "sales", availableLanguage: "English" },
  sameAs: [],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#050505" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-display antialiased bg-[#050505] text-slate-100 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
