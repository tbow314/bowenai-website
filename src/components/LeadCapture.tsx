"use client";
import { useState } from 'react';
import { ArrowRight, FileText, MonitorPlay, Zap, PhoneCall } from 'lucide-react';

export default function LeadCapture() {
    const [leadName, setLeadName] = useState('');
    const [leadInfo, setLeadInfo] = useState('');

    const handleIntakeSubmit = (e: React.FormEvent, type: string) => {
        e.preventDefault();
        const subject = `New Inquiry: ${type}`;
        const body = `Hi Bowen AI,\n\nI am interested in: ${type}.\n\nName/Company:\n${leadName || '[Not provided]'}\n\nProject Details / What I'm looking for:\n${leadInfo}\n\nPlease let me know the next steps!\n`;
        window.location.href = `mailto:bowenaistrategygroup@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="lead-capture" className="w-full max-w-7xl mx-auto mb-32 z-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">How Fast Can We Move?</h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Skip the generic contact forms. Tell us what you want to build right now, and see immediate proof of our capabilities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-[#39FF14]/50 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#39FF14]/10 rounded-full blur-[50px] -mr-16 -mt-16 transition-all group-hover:bg-[#39FF14]/20"></div>
                    <MonitorPlay className="w-10 h-10 text-[#39FF14] mb-6" />
                    <h3 className="text-2xl font-bold mb-3 text-white">1. The Vision Sketch</h3>
                    <p className="text-zinc-400 mb-8 flex-grow">A premium AI dashboard or website concept customized for your brand—free.</p>
                    <form className="flex flex-col gap-3 mt-auto" onSubmit={(e) => handleIntakeSubmit(e, 'Vision Sketch')}>
                        <input type="text" placeholder="Your Name / Company" className="bg-black/50 border border-zinc-800 focus:border-[#39FF14] rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm" value={leadName} onChange={(e) => setLeadName(e.target.value)} />
                        <textarea placeholder="Current website URL or brief idea..." className="bg-black/50 border border-zinc-800 focus:border-[#39FF14] rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm min-h-[80px]" value={leadInfo} onChange={(e) => setLeadInfo(e.target.value)} required />
                        <button type="submit" className="bg-white text-black font-bold py-3 rounded-xl hover:bg-[#39FF14] transition-colors flex items-center justify-center gap-2">Request Mockup <ArrowRight className="w-4 h-4" /></button>
                    </form>
                </div>
                <div className="flex flex-col bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-[#00D9FF]/50 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D9FF]/10 rounded-full blur-[50px] -mr-16 -mt-16 transition-all group-hover:bg-[#00D9FF]/20"></div>
                    <FileText className="w-10 h-10 text-[#00D9FF] mb-6" />
                    <h3 className="text-2xl font-bold mb-3 text-white">2. The Strategy Audit</h3>
                    <p className="text-zinc-400 mb-8 flex-grow">We'll run your static data through our ingestion engine and output a dynamic Video Strategy brief.</p>
                    <form className="flex flex-col gap-3 mt-auto" onSubmit={(e) => handleIntakeSubmit(e, 'Strategy Audit')}>
                        <input type="text" placeholder="Your Name / Company" className="bg-black/50 border border-zinc-800 focus:border-[#00D9FF] rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm" />
                        <textarea placeholder="Describe your data or what you want audited..." className="bg-black/50 border border-zinc-800 focus:border-[#00D9FF] rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm min-h-[80px]" required />
                        <button type="submit" className="bg-white text-black font-bold py-3 rounded-xl hover:bg-[#00D9FF] transition-colors flex items-center justify-center gap-2">Request Audit <ArrowRight className="w-4 h-4" /></button>
                    </form>
                </div>
                <div id="consulting" className="flex flex-col bg-gradient-to-br from-zinc-800 to-black backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden origin-bottom hover:-translate-y-2 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white mb-6" />
                    <h3 className="text-2xl font-bold mb-3 text-white">3. Enterprise Ops</h3>
                    <p className="text-zinc-300 mb-8 flex-grow">Ready to move past proof-of-concept? We handle full architecture deployments and system integrations for scale.</p>
                    <div className="mt-auto flex flex-col gap-3">
                        <form className="flex flex-col gap-3 mt-auto" onSubmit={(e) => handleIntakeSubmit(e, 'Enterprise Consulting')}>
                            <textarea placeholder="What is your primary goal and budget?" className="bg-black/50 border border-zinc-600 focus:border-[#fff] rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm min-h-[80px]" required />
                            <button type="submit" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-inner border border-zinc-600"><PhoneCall className="w-5 h-5" /> Send Inquiry</button>
                        </form>
                        <p className="text-xs text-center text-zinc-500 mt-2 font-mono uppercase tracking-widest">Serious inquiries only</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
