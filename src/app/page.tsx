import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import DashboardSection from '@/components/sections/DashboardSection';
import FloatingAIAgent from '@/components/sections/FloatingAIAgent';

export default function Home() {
  return (
    <div className="bg-black text-slate-100">
      <Navigation />
      <HeroSection />
      <ServiceShowcase />
      <DashboardSection />

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-6 bg-brand-cyan rounded flex items-center justify-center">
                <span className="material-symbols-outlined font-bold" style={{ fontSize: '14px', color: '#101f22' }}>hub</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white uppercase italic">Bowen AI Strategy</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Global leaders in 3D digital transformation and neural business strategy. Synchronized with the future.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h5 className="text-white font-bold text-sm uppercase">Navigation</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-brand-cyan transition-colors" href="#">Interface</a></li>
                <li><a className="hover:text-brand-cyan transition-colors" href="#showcase">Showcase</a></li>
                <li><a className="hover:text-brand-cyan transition-colors" href="#adlab">Lab</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold text-sm uppercase">Connect</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-brand-cyan transition-colors" href="#">LinkedIn</a></li>
                <li><a className="hover:text-brand-cyan transition-colors" href="#">X / Twitter</a></li>
                <li><a className="hover:text-brand-cyan transition-colors" href="#">Email</a></li>
              </ul>
            </div>
            <div className="space-y-4 hidden sm:block">
              <h5 className="text-white font-bold text-sm uppercase">Legal</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-brand-cyan transition-colors" href="#">Privacy</a></li>
                <li><a className="hover:text-brand-cyan transition-colors" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-slate-600">
          © 2024 Bowen AI Strategy Group. All neural nodes reserved.
        </div>
      </footer>

      <FloatingAIAgent />
    </div>
  );
}
