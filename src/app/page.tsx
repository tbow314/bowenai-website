import LeadAgent from '@/components/LeadAgent';
import { ArrowRight, BarChart3, Globe, PlaySquare } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">

      {/* SECTION 1: The Magnet (1-1 Consulting) */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="z-10 max-w-5xl w-full">
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-5 py-2 rounded-full text-xs uppercase tracking-widest text-zinc-400 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Bowen AI Strategy Group
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
            AI BUILT FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-emerald-200">IMPACT.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop guessing where you are losing money. We diagnose operational leaks and architect the autonomous systems that run your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
              Apply for 1-1 Audit <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-900 transition-colors">
              View Arsenal
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Arsenal Showcases */}
      <section className="py-32 px-6 md:px-12 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Arsenal.</h2>
            <p className="text-zinc-500 text-lg max-w-2xl">Direct clicks to the interactive assets we deploy to stop lead leaks and scale operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Offer 2: Websites / Sales Floors */}
            <div className="group bg-black border border-zinc-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <Globe size={48} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Autonomous <br />Sales Floors</h3>
              <p className="text-zinc-500 mb-8 leading-relaxed text-sm">3D interactive web properties embedded with diagnostic agents that capture leads 24/7.</p>
              <div className="h-48 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden relative group-hover:border-blue-500/30 transition-colors">
                <span className="text-blue-400 font-mono text-xs z-10 flex items-center gap-2 hover:underline">Launch 3D Preview <ArrowRight size={14} /></span>
              </div>
            </div>

            {/* Offer 3: Dashboards */}
            <div className="group bg-black border border-zinc-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <BarChart3 size={48} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Central <br />Nervous System</h3>
              <p className="text-zinc-500 mb-8 leading-relaxed text-sm">High-fidelity React dashboards replacing fragmented spreadsheets with live, actionable data.</p>
              <div className="h-48 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden relative group-hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 font-mono text-xs z-10 flex items-center gap-2 hover:underline">Open Live Sandbox <ArrowRight size={14} /></span>
              </div>
            </div>

            {/* Offer 4: Media Engine */}
            <div className="group bg-black border border-zinc-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <PlaySquare size={48} className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Media <br />Engine</h3>
              <p className="text-zinc-500 mb-8 leading-relaxed text-sm">Proprietary pipeline turning 50-page technical PDFs into localized, flashy video ad creatives.</p>
              <div className="h-48 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden relative group-hover:border-purple-500/30 transition-colors">
                <span className="text-purple-400 font-mono text-xs z-10 flex items-center gap-2 hover:underline">Test PDF Upload <ArrowRight size={14} /></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <LeadAgent />

    </main>
  );
}
