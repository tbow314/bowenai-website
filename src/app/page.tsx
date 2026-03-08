import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import RevenueDashboard from '@/components/sections/RevenueDashboard';
import DataHub from '@/components/sections/DataHub';
import FloatingAIAgent from '@/components/sections/FloatingAIAgent';

export default function Home() {
  return (
    <div className="bg-black text-zinc-100 font-sans selection:bg-brand-cyan/30">
      <Navigation />

      <HeroSection />

      {/* Interactive Showcase Section */}
      <section id="solutions" className="py-24 bg-black relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RevenueDashboard />
            <DataHub />
          </div>
        </div>
      </section>

      {/* Additional Bento Features from Screenshot (stubs for the complete look) */}
      <section className="py-12 bg-black relative z-20 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 3D Digital Showcase */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-[300px] border-zinc-800 hover:border-brand-cyan/50 transition-colors group">
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-cyan transition-colors">3D Digital Showcase</h3>
                <p className="text-zinc-400 text-sm">Interactive immersive 3D scene cards. Hover elements rotate and interact.</p>
              </div>
              <button className="self-start px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-xs font-bold hover:bg-white hover:text-black transition-all">Learn more</button>
            </div>

            {/* Neural Analytics */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-[300px] border-zinc-800 hover:border-brand-emerald/50 transition-colors group">
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-emerald transition-colors">Neural Analytics</h3>
                <p className="text-zinc-400 text-sm">Interactive real-time 3D neural analytics. AI agent reports on live revenue data flow.</p>
              </div>
              <button className="self-start px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-xs font-bold hover:bg-white hover:text-black transition-all">Learn more</button>
            </div>

            {/* Polyglot PDF */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-[300px] border-zinc-800 hover:border-brand-purple/50 transition-colors group">
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-purple transition-colors">Polyglot PDF</h3>
                <p className="text-zinc-400 text-sm">Get real-time contract analysis and generation. Legal, contract, reporting, and summarization.</p>
              </div>
              <button className="self-start px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-xs font-bold hover:bg-white hover:text-black transition-all">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <FloatingAIAgent />

      <footer className="py-12 bg-zinc-950 border-t border-zinc-900 relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-cyan rounded flex items-center justify-center font-bold text-black text-xs">B</div>
            <span className="text-sm font-bold tracking-widest text-zinc-500">© 2026 BOWEN AI STRATEGY GROUP</span>
          </div>
          <div className="flex gap-8 text-xs font-medium text-zinc-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
