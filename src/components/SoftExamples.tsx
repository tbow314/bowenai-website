import { ArrowUpRight, PlayCircle, ShieldCheck, Database } from 'lucide-react';

export default function SoftExamples() {
    return (
        <section className="w-full max-w-7xl mx-auto mb-32 z-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Full Architectures</h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">See exactly what we build. High-fidelity dashboards and media engines driving ROI.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="group bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#39FF14]/50 transition-all duration-300 shadow-2xl flex flex-col">
                    <div className="p-8 border-b border-zinc-800 flex justify-between items-center bg-black">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 bg-zinc-800 rounded-full text-[10px] font-mono text-zinc-300 tracking-widest">LOGISTICS SECTOR</span>
                                <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></div>
                            </div>
                            <h4 className="font-black text-white text-2xl tracking-tight">Kuehne + Nagel Compliance</h4>
                            <p className="text-sm text-zinc-500 max-w-sm mt-1">Full dashboard replacing manual spreadsheets to calculate real-time CBAM liabilities and route emissions.</p>
                        </div>
                        <ShieldCheck className="w-12 h-12 text-[#39FF14] opacity-20" />
                    </div>
                    <div className="bg-zinc-900 p-6 flex-grow relative overflow-hidden">
                        <div className="w-full h-full bg-black border border-zinc-800 rounded-xl p-4 shadow-inner grid grid-cols-3 gap-4">
                            <div className="col-span-1 border-r border-zinc-800 pr-4 flex flex-col gap-3">
                                <div className="h-8 bg-zinc-900 rounded-md w-full mb-4"></div>
                                <div className="h-4 bg-[#39FF14]/20 rounded w-3/4"></div>
                                <div className="h-4 bg-zinc-800 rounded w-full"></div>
                                <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
                                <div className="mt-auto h-24 bg-zinc-900 rounded-xl p-3 border border-zinc-800">
                                    <div className="text-[#39FF14] text-xs font-mono mb-1">Risk Alert</div>
                                    <div className="h-2 w-full bg-zinc-800 rounded-full mt-2"><div className="h-full bg-red-500 w-1/3 rounded-full"></div></div>
                                </div>
                            </div>
                            <div className="col-span-2 flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-zinc-900 h-20 rounded-xl border border-zinc-800 p-3">
                                        <div className="text-[10px] text-zinc-500 font-mono">TOTAL ROUTES</div>
                                        <div className="text-xl font-bold text-white mt-1">428</div>
                                    </div>
                                    <div className="bg-zinc-900 h-20 rounded-xl border border-[#39FF14]/30 p-3">
                                        <div className="text-[10px] text-[#39FF14] font-mono">CARBON TARGET</div>
                                        <div className="text-xl font-bold text-white mt-1">94.2%</div>
                                    </div>
                                </div>
                                <div className="flex-grow bg-zinc-900 rounded-xl border border-zinc-800 p-4 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full flex items-end gap-1 px-4 h-full opacity-60 pb-4">
                                        {[40, 60, 45, 80, 50, 90, 65, 100].map((h, i) => (
                                            <div key={i} style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-[#39FF14] to-transparent rounded-t-sm opacity-50"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-8">
                    <div className="group bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#00D9FF]/50 transition-all duration-300 shadow-2xl flex flex-col relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 to-transparent pointer-events-none"></div>
                        <div className="p-6 md:p-8 flex items-start gap-6 z-10 relative">
                            <div className="w-20 h-20 rounded-2xl bg-[#00D9FF]/10 flex items-center justify-center border border-[#00D9FF]/20 flex-shrink-0">
                                <PlayCircle className="w-10 h-10 text-[#00D9FF]" />
                            </div>
                            <div>
                                <h4 className="font-black text-white text-xl tracking-tight mb-2">PDF-to-Video Synthesis</h4>
                                <p className="text-sm text-zinc-400">Our proprietary ingestion architecture parses 50-page PDFs and outputs dynamic, stylized explainer videos with Framer Motion charts for C-Suite executives.</p>
                                <div className="mt-4 flex items-center gap-3">
                                    <span className="text-[10px] font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-300">REACT</span>
                                    <span className="text-[10px] font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-300">REMOTION</span>
                                    <span className="text-[10px] font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-300">OPENAI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-2xl flex relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                        <div className="p-6 md:p-8 mt-auto z-10 w-full">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Database className="w-4 h-4 text-purple-400" />
                                        <span className="text-[10px] font-mono text-purple-400 tracking-widest uppercase">Growth Engine</span>
                                    </div>
                                    <h4 className="font-black text-white text-2xl tracking-tight mb-1">Pulse Financial App</h4>
                                    <p className="text-sm text-zinc-400 max-w-sm">Replaced 5 disjointed SaaS platforms with one master dashboard customized for a $10M/yr DTC brand.</p>
                                </div>
                                <div className="hidden md:flex w-12 h-12 bg-white text-black rounded-full items-center justify-center font-bold hover:scale-110 transition-transform cursor-pointer">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
