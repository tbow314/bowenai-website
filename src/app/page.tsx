import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import FloatingAIAgent from '@/components/sections/FloatingAIAgent';

export default function Home() {
  return (
    <div style={{ background: '#020812', color: '#f1f5f9', fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navigation />
      <HeroSection />
      <ServiceShowcase />

      {/* Footer */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#020812' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-white font-black text-lg tracking-tight">
              BOWEN <span style={{ color: '#2bcdee' }}>AI</span>
            </p>
            <p className="text-xs text-slate-600 mt-1">© 2026 Bowen AI Strategy Group</p>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest" style={{ color: '#475569' }}>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <FloatingAIAgent />
    </div>
  );
}
