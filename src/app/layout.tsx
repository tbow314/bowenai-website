import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

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
      <body className={`${spaceGrotesk.variable} font-display antialiased bg-[#080c0d] text-slate-100 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
