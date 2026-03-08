import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bowen AI Strategy Group | Premium Business Intelligence",
  description: "Optimize your enterprise with high-fidelity AI strategies and autonomous workflows. AI Built for Impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display antialiased bg-[#080c0d] text-slate-100 overflow-x-hidden" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
