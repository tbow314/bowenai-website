import React from 'react';

export default function DataHub() {
    return (
        <div className="flex flex-col gap-6" data-purpose="data-hub">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                </div>
                <h2 className="text-3xl font-bold">Synthesized Data Hub</h2>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-zinc-800 shadow-2xl h-[500px] flex flex-col hover:border-brand-purple/30 transition-colors duration-500">
                {/* Browser Header */}
                <div className="bg-zinc-900 px-4 py-3 flex items-center justify-start border-b border-zinc-800 gap-2">
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    <div className="w-48 h-2 bg-zinc-800 rounded overflow-hidden">
                        <div className="w-1/3 h-full bg-brand-purple/50 animate-pulse"></div>
                    </div>
                </div>

                {/* Content: PDF-to-Video */}
                <div className="p-6 grid grid-cols-2 gap-4 border-b border-zinc-800/50">
                    <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 flex flex-col items-center justify-center gap-2 aspect-video group cursor-pointer hover:border-brand-cyan/50 transition-colors">
                        <svg className="text-brand-cyan group-hover:scale-110 transition-transform" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <span className="text-xs font-medium group-hover:text-brand-cyan transition-colors">Annual Strategy 2024.pdf</span>
                    </div>

                    <div className="relative bg-black rounded-lg border border-brand-purple/30 overflow-hidden group aspect-video cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop"
                            alt="AI Generated Video Placeholder"
                            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-brand-purple/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-purple transition-all shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                            <span className="px-1.5 py-0.5 bg-black/80 rounded text-[8px] border border-white/20 text-brand-cyan">EN</span>
                            <span className="px-1.5 py-0.5 bg-black/80 rounded text-[8px] border border-white/20 opacity-40 hover:opacity-100 transition-opacity">ES</span>
                            <span className="px-1.5 py-0.5 bg-black/80 rounded text-[8px] border border-white/20 opacity-40 hover:opacity-100 transition-opacity">ZH</span>
                        </div>
                    </div>
                </div>

                {/* Omnichannel Projections */}
                <div className="p-6 flex-1 bg-zinc-950/30">
                    <div className="text-[10px] text-zinc-500 uppercase mb-4 tracking-widest flex items-center justify-between">
                        <span>Omnichannel Data Projections</span>
                        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                    </div>

                    <div className="flex gap-4">
                        {/* Feed Engagement (Mobile) */}
                        <div className="w-1/4 h-24 glass-panel border-zinc-800 rounded-lg p-2 flex flex-col gap-1 hover:border-zinc-700 transition-colors cursor-default group">
                            <div className="w-full h-1 bg-brand-cyan/40 group-hover:bg-brand-cyan/60 rounded-full transition-colors"></div>
                            <div className="w-2/3 h-1 bg-zinc-800 rounded-full"></div>
                            <div className="flex-1 flex items-end gap-1 mt-1">
                                <div className="w-full h-[60%] bg-zinc-800 group-hover:bg-zinc-700 rounded-t-sm transition-colors"></div>
                                <div className="w-full h-[80%] bg-zinc-800 group-hover:bg-zinc-700 rounded-t-sm transition-colors"></div>
                                <div className="w-full h-[40%] bg-zinc-800 group-hover:bg-zinc-700 rounded-t-sm transition-colors"></div>
                            </div>
                            <div className="text-[8px] text-center text-zinc-500 group-hover:text-zinc-400">Feed Engagement</div>
                        </div>

                        {/* Atmospheric Loop (Large) */}
                        <div className="flex-1 h-24 glass-panel border-brand-cyan/20 rounded-lg overflow-hidden flex items-center justify-center relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 to-brand-purple/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                            {/* Synthetic Waveform Animation */}
                            <div className="absolute inset-0 flex items-center justify-center gap-[2px] px-4 opacity-40 group-hover:opacity-80 transition-opacity">
                                {[...Array(20)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1 bg-brand-cyan rounded-full animate-wave"
                                        style={{
                                            height: `${Math.max(10, Math.random() * 100)}%`,
                                            animationDelay: `${i * 0.1}s`
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Unified Assets */}
                        <div className="w-1/4 h-24 glass-panel border-zinc-800 rounded-lg p-2 grid grid-cols-2 gap-1 group">
                            <div className="bg-zinc-900 group-hover:bg-brand-cyan/10 rounded-sm transition-colors cursor-pointer"></div>
                            <div className="bg-zinc-900 group-hover:bg-brand-purple/10 rounded-sm transition-colors cursor-pointer"></div>
                            <div className="bg-zinc-900 group-hover:bg-brand-emerald/10 rounded-sm transition-colors cursor-pointer"></div>
                            <div className="bg-zinc-900 group-hover:bg-white/10 rounded-sm transition-colors cursor-pointer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
