"use client";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="aurora-bg pt-20 pb-16 text-center">
            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Top label */}
                <p className="section-label mb-8">Bowen AI Offers & Case Studies</p>

                {/* Hero headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-8">
                    Architecting<br />
                    High-Yield <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300">AI Systems</span>
                </h1>
                
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    1-1 AI Consulting, Masterclasses, and Custom Production. 
                    We build and deploy ROI-focused systems in days, not months.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25">
                        Book Strategy Call
                    </button>
                    <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                        View Masterclasses
                    </button>
                </div>

                {/* Holographic Globe */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mt-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-purple-500/5 blur-2xl" />
                    <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden bg-gradient-to-b from-slate-800/40 to-slate-900/60">
                        {/* Continental outlines simulation */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.15)_0%,transparent_50%)]" />
                        <div className="absolute top-[25%] left-[20%] w-[35%] h-[25%] bg-cyan-500/10 rounded-full blur-sm" />
                        <div className="absolute top-[40%] right-[15%] w-[30%] h-[20%] bg-cyan-400/8 rounded-full blur-sm" />
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
                        <div className="absolute inset-[20%] border border-white/3 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
