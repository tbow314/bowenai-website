"use client";

import dynamic from "next/dynamic";
import RobotAgent from "@/components/RobotAgent";
import OfferCards from "@/components/OfferCards";
import LeadForm from "@/components/LeadForm";
import PDFVideoEngine from "@/components/PDFVideoEngine";

// recharts uses browser APIs — must be client-only
const RevenueDashboard = dynamic(() => import("@/components/RevenueDashboard"), { ssr: false });
// Spline also uses browser APIs
const HeroGlobe = dynamic(() => import("@/components/HeroGlobe"), { ssr: false });

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">

      {/* NAV */}
      <header className="fixed top-0 w-full z-50 border-b border-[#2bcdee]/10 bg-[#080c0d]/80 backdrop-blur-md px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#2bcdee] text-2xl">🚀</span>
            <h2 className="text-xl font-bold tracking-tight">
              Bowen AI <span className="text-[#2bcdee]/80 font-light">Strategy</span>
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {["Solutions", "Workflow", "Strategy", "About"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium hover:text-[#2bcdee] transition-colors">{item}</a>
            ))}
          </nav>
          <a href="#lead-form" className="bg-[#2bcdee] hover:bg-[#2bcdee]/90 text-[#080c0d] px-6 py-2 rounded-lg text-sm font-bold transition-all">
            Get Started
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative grow pt-24 flex flex-col items-center">
        <HeroGlobe />
        <RevenueDashboard />
        <PDFVideoEngine />
        <div className="w-full max-w-7xl mx-auto px-6 pb-12">
          <OfferCards />
        </div>
      </main>

      {/* LEAD FORM */}
      <div id="lead-form"><LeadForm /></div>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-[#2bcdee]/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-[#2bcdee]/50">
            <span className="text-lg">🚀</span>
            <span className="font-bold tracking-tight">Bowen AI Strategy Group</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            {["Privacy", "Terms", "LinkedIn", "Twitter"].map((link) => (
              <a key={link} href="#" className="hover:text-[#2bcdee] transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-xs text-slate-600">&copy; 2025 Bowen AI Strategy Group. All rights reserved.</p>
        </div>
      </footer>

      {/* ROBOT AGENT */}
      <RobotAgent />
    </div>
  );
}
