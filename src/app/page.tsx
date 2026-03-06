"use client";

import { useState, useEffect, useRef } from "react";

// ── HERO GLOBE ──────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-zinc-950">
      {/* Orbital hub */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="relative w-[600px] h-[600px]" style={{ animation: "float 6s ease-in-out infinite" }}>
          <div className="absolute inset-0 rounded-full border border-cyan-400/20" style={{ animation: "slow-spin 120s linear infinite" }} />
          <div className="absolute inset-10 rounded-full border border-purple-400/10" style={{ animation: "slow-spin 120s linear infinite reverse" }}>
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-400/20 blur-3xl" style={{ animation: "pulse-slow 4s ease infinite" }} />
          </div>
          {/* Globe placeholder image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-600/20 to-purple-600/30 blur-sm" style={{ animation: "pulse-slow 4s ease infinite" }} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          THE FUTURE OF <br /> BUSINESS INTELLIGENCE
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Leverage autonomous agents and predictive synthesis to dominate your market. Deploy intelligence at scale.
        </p>
        {/* Lead capture */}
        <div className="max-w-xl mx-auto glass-panel p-8 rounded-2xl border border-cyan-400/20 shadow-2xl">
          <h3 className="text-left text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-6">Initialize Your Strategy</h3>
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}

function LeadCaptureForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="text-cyan-400 text-2xl mb-2">✓</div>
        <p className="text-white font-bold">Strategy Request Received</p>
        <p className="text-zinc-400 text-sm mt-1">We'll deploy your briefing within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (name && email) setSubmitted(true); }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <input className="glass-input rounded-lg px-4 py-3 text-white placeholder-zinc-500" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
      <input className="glass-input rounded-lg px-4 py-3 text-white placeholder-zinc-500" placeholder="Work Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <div className="col-span-1 md:col-span-2">
        <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          REQUEST DEPLOYMENT
        </button>
      </div>
    </form>
  );
}

// ── REVENUE COMMAND DASHBOARD ────────────────────────────────────────────────
const DASHBOARD_TABS = ["Prospecting", "Lead Pipeline", "Customer Intel"] as const;
type DashTab = typeof DASHBOARD_TABS[number];

const DASH_DATA: Record<DashTab, { accounts: string; highIntent: string; autoOutreach: string; feed: { signal: string; time: string; opacity?: boolean }[] }> = {
  Prospecting: {
    accounts: "12,402", highIntent: "842", autoOutreach: "94%",
    feed: [
      { signal: "[SIGNAL] TechCorp Inc. exploring Series B", time: "2s ago" },
      { signal: "[ACTION] Generated personalized deck for GlobalLogistics", time: "14s ago", opacity: true },
    ],
  },
  "Lead Pipeline": {
    accounts: "3,814", highIntent: "291", autoOutreach: "87%",
    feed: [
      { signal: "[SIGNAL] MedTech startup budgeting Q1 expansion", time: "5s ago" },
      { signal: "[ACTION] Sequenced follow-up for RetailCo", time: "22s ago", opacity: true },
    ],
  },
  "Customer Intel": {
    accounts: "648", highIntent: "112", autoOutreach: "99%",
    feed: [
      { signal: "[INSIGHT] FinCorp renewal probability: 91%", time: "1s ago" },
      { signal: "[ACTION] Renewal deck sent to FinCorp VP", time: "8s ago", opacity: true },
    ],
  },
};

function RevenueCommandDashboard() {
  const [tab, setTab] = useState<DashTab>("Prospecting");
  const d = DASH_DATA[tab];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        </div>
        <h2 className="text-3xl font-bold">Revenue Command</h2>
      </div>

      <div className="glass-panel rounded-xl overflow-hidden border border-zinc-800 shadow-2xl h-[500px] flex flex-col">
        {/* Browser bar */}
        <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex bg-black/40 px-3 py-1 rounded-md gap-4 text-[10px] font-bold tracking-widest uppercase">
            {DASHBOARD_TABS.map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`transition-colors ${ t === tab ? "text-cyan-400 border-b border-cyan-400" : "text-zinc-500 hover:text-white" }`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-zinc-950/50">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              ["Accounts Scanned", d.accounts, "text-white"],
              ["High-Intent", d.highIntent, "text-cyan-400"],
              ["Auto-Outreach", d.autoOutreach, "text-emerald-400"],
            ].map(([label, val, color]) => (
              <div key={label} className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-500 uppercase mb-1">{label}</div>
                <div className={`text-2xl font-bold ${color}`}>{val}</div>
              </div>
            ))}
          </div>

          {/* Bar chart visual */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-tighter mb-4">Intent Spikes by Industry</div>
            <div className="flex items-end gap-2 h-32">
              {[40, 60, 90, 50, 75].map((h, i) => (
                <div key={i} className="w-full rounded-t-sm transition-all" style={{ height: `${h}%`, background: `rgba(6,182,212,${0.2 + i * 0.15})` }} />
              ))}
            </div>
          </div>

          {/* Live feed */}
          <div className="space-y-2">
            <div className="text-[10px] text-zinc-500 uppercase mb-2">Live Data Feed</div>
            {d.feed.map((f, i) => (
              <div key={i} className={`text-[11px] font-mono p-2 bg-black rounded border border-zinc-800 flex justify-between ${f.opacity ? "opacity-50" : ""}`}>
                <span className={i === 0 ? "text-emerald-400" : "text-zinc-300"}>{f.signal}</span>
                <span className="text-zinc-600">{f.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SYNTHESIZED DATA HUB ─────────────────────────────────────────────────────
function SynthesizedDataHub() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-400/10 flex items-center justify-center text-purple-400">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
        </div>
        <h2 className="text-3xl font-bold">Synthesized Data Hub</h2>
      </div>

      <div className="glass-panel rounded-xl overflow-hidden border border-zinc-800 shadow-2xl h-[500px] flex flex-col">
        {/* Browser bar */}
        <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
          <div className="w-48 h-2 bg-zinc-800 rounded" />
        </div>

        {/* PDF → Video */}
        <div className="p-6 grid grid-cols-2 gap-4 border-b border-zinc-800/50">
          {/* PDF source */}
          <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 flex flex-col items-center justify-center gap-2 aspect-video">
            <svg className="text-cyan-400" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span className="text-xs font-medium">Annual Strategy 2024.pdf</span>
          </div>
          {/* Video output */}
          <div className="relative bg-black rounded-lg border border-purple-400/30 overflow-hidden group aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-zinc-900/80" />
            <div className="relative w-10 h-10 rounded-full bg-purple-600/80 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
            </div>
            <div className="absolute bottom-2 right-2 flex gap-1">
              {["EN", "ES", "ZH"].map((l, i) => (
                <span key={l} className={`px-1.5 py-0.5 bg-black/80 rounded text-[8px] border border-white/20 ${i > 0 ? "opacity-40" : ""}`}>{l}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Omnichannel projections */}
        <div className="p-6 flex-1 bg-zinc-950/30">
          <div className="text-[10px] text-zinc-500 uppercase mb-4 tracking-widest">Omnichannel Data Projections</div>
          <div className="flex gap-4">
            <div className="w-1/4 h-24 glass-panel border border-zinc-800 rounded-lg p-2 flex flex-col gap-1">
              <div className="w-full h-1 bg-cyan-400/40 rounded-full" />
              <div className="w-2/3 h-1 bg-zinc-800 rounded-full" />
              <div className="flex-1 flex items-end gap-1 mt-1">
                {[60, 80, 40].map((h, i) => <div key={i} className="w-full bg-zinc-800 rounded-t-sm" style={{ height: `${h}%` }} />)}
              </div>
              <div className="text-[8px] text-center text-zinc-500">Feed Engagement</div>
            </div>
            <div className="flex-1 h-24 glass-panel border border-cyan-400/20 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent" />
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path d="M0 30 Q 25 10 50 30 T 100 30" fill="none" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>
            </div>
            <div className="w-1/4 h-24 glass-panel border border-zinc-800 rounded-lg p-2 grid grid-cols-2 gap-1">
              {[0,1,2,3].map(i => <div key={i} className="bg-zinc-900 rounded-sm" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FLOATING ROBOT AGENT ─────────────────────────────────────────────────────
function RobotAgent() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="fixed bottom-0 right-8 z-[100]" style={{ animation: "slide-up 0.6s ease 0.5s both" }}>
      <div className="flex flex-col items-end gap-4 pb-4">
        {open && (
          <div className="w-80 glass-panel rounded-2xl p-5 shadow-2xl border border-cyan-400/30" style={{ animation: "float 6s ease-in-out infinite" }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ animation: "pulse-slow 2s infinite" }} />
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Live</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <p className="text-sm font-medium mb-6 leading-relaxed text-zinc-300">
              How can I assist you with our custom solutions today?
            </p>
            {/* Voice waveform */}
            <div className="flex items-center justify-center gap-1 h-8 mb-6">
              {[0.1, 0.3, 0.2, 0.5, 0.4, 0.6].map((delay, i) => (
                <div key={i} className="wave-bar" style={{ animationDelay: `${delay}s` }} />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <button className="w-full text-left px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-xs font-medium transition-all">View Solutions</button>
              <button className="w-full text-left px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-xs font-medium transition-all">Book Call</button>
            </div>
          </div>
        )}
        {/* Robot head anchor */}
        <div
          onClick={() => setOpen(o => !o)}
          className="relative w-24 h-24 bg-gradient-to-t from-zinc-800 to-transparent rounded-t-full flex items-center justify-center border-t border-cyan-400/40 cursor-pointer hover:border-cyan-400/70 transition-colors"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-600/20 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <svg width="32" height="32" fill="none" stroke="rgba(6,182,212,0.9)" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="8" width="18" height="12" rx="2"/>
              <path d="M8 8V6a4 4 0 0 1 8 0v2"/>
              <circle cx="9" cy="14" r="1.5" fill="rgba(6,182,212,0.9)"/>
              <circle cx="15" cy="14" r="1.5" fill="rgba(6,182,212,0.9)"/>
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ── OFFER CARDS ──────────────────────────────────────────────────────────────
const CARDS = [
  { icon: "🖥️", title: "Website Design & Automation", desc: "Generative UI systems for scale.", color: "border-cyan-400/30 hover:border-cyan-400/60" },
  { icon: "⚙️", title: "Custom Enterprise Dashboards", desc: "Custom LLM agents for your ops.", color: "border-emerald-400/30 hover:border-emerald-400/60" },
  { icon: "🎬", title: "Multilingual PDF-to-Video", desc: "AI-driven outbound automation.", color: "border-purple-400/30 hover:border-purple-400/60" },
  { icon: "🎯", title: "1-1 Custom Consultations", desc: "Executive advisory for AI transition.", color: "border-blue-400/30 hover:border-blue-400/60" },
];

function OfferCards() {
  return (
    <section className="py-24 bg-black" id="solutions">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map(c => (
            <div key={c.title} className={`glass-panel rounded-xl p-6 border ${c.color} transition-all hover:scale-[1.02] cursor-pointer`}>
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-white font-bold mb-2">{c.title}</h3>
              <p className="text-zinc-400 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PAGE ASSEMBLY ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-100">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-panel border-b border-zinc-800/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-black text-sm">B</div>
          <span className="text-xl font-bold tracking-tight">BOWEN <span className="text-cyan-400">AI</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {["Solutions", "Workflow", "Strategy", "About"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">{item}</a>
          ))}
        </div>
        <button className="px-5 py-2 bg-zinc-100 text-black text-sm font-bold rounded-full hover:bg-cyan-400 hover:text-white transition-all">
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <HeroSection />

      {/* INTERACTIVE SHOWCASE */}
      <section className="py-24 bg-black" id="workflow">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RevenueCommandDashboard />
            <SynthesizedDataHub />
          </div>
        </div>
      </section>

      {/* OFFER CARDS */}
      <OfferCards />

      {/* FOOTER */}
      <footer className="py-12 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-cyan-400 rounded flex items-center justify-center font-bold text-black text-xs">B</div>
            <span className="text-sm font-bold tracking-widest text-zinc-500">© 2025 BOWEN AI STRATEGY GROUP</span>
          </div>
          <div className="flex gap-8 text-xs font-medium text-zinc-600 uppercase tracking-widest">
            {["Privacy", "Terms", "API", "Status"].map(l => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* ROBOT AGENT */}
      <RobotAgent />
    </div>
  );
}
