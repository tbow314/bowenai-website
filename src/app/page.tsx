import { ArrowRight } from 'lucide-react';
import LeadCapture from '@/components/LeadCapture';
import BentoGrid from '@/components/BentoGrid';
import SoftExamples from '@/components/SoftExamples';
import SplineScene from '@/components/SplineScene';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 lg:p-24 bg-black text-white overflow-hidden relative selection:bg-[#39FF14]/30 selection:text-black">
      <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-[#39FF14]/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00D9FF]/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <header className="z-50 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between font-mono text-sm mb-24 gap-6 md:gap-0">
        <div className="flex items-center gap-3 backdrop-blur-xl bg-white/5 border border-white/10 px-6 py-3 rounded-2xl shadow-xl">
          <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></div>
          <span className="font-bold tracking-wider">BOWEN AI</span>
          <span className="text-zinc-500">|</span>
          <span className="text-zinc-300">Strategy Group</span>
        </div>
        <a href="#consulting" className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-2xl transition-all duration-300 hover:border-[#39FF14]/30 hover:text-[#39FF14]">
          Book Advisory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </header>

      <section className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 flex items-center text-left mb-32 z-10 gap-12">
        <div className="flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 text-zinc-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping opacity-75 absolute"></span>
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] relative"></span>
            Now accepting new deployments
          </div>
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl">
            <span className="text-zinc-100">AI BUILT FOR</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] via-[#00D9FF] to-[#0055FF] pb-4">
              IMPACT.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-light leading-relaxed">
            Stop drowning in static PDFs and clunky legacy software.<br className="hidden md:block" />
            We architect <strong className="text-zinc-200 font-semibold">interactive dashboards</strong>, <strong className="text-zinc-200 font-semibold">high-converting ad creatives</strong>, and <strong className="text-zinc-200 font-semibold">automated video audits</strong> that run your business on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-start">
            <a href="#lead-capture" className="bg-[#39FF14] text-black font-black px-10 py-5 rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              REQUEST A MOCKUP
            </a>
          </div>
        </div>
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative rounded-3xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 pointer-events-none"></div>
          <SplineScene />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-xs font-mono text-zinc-500 max-w-xs text-center border border-zinc-800 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md group-hover:border-[#39FF14]/30 transition-colors">DRAG TO INTERACT WITH THE AI</div>
        </div>
      </section>

      <LeadCapture />
      <BentoGrid />
      <SoftExamples />

      <footer className="w-full max-w-7xl mt-32 border-t border-zinc-900 pt-12 pb-8 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-sm z-20">
        <p>&copy; {new Date().getFullYear()} Bowen AI Strategy Group. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-mono">
          <a href="https://www.linkedin.com/company/108901899/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </main>
  )
}
