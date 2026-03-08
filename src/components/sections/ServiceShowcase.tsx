import React from 'react';

export default function ServiceShowcase() {
    return (
        <section id="showcase" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-3">Service Ecosystem</h2>
                    <h3 className="text-4xl font-bold text-white leading-tight">
                        Precision Intelligence <br />Across Every Dimension
                    </h3>
                </div>
                <div className="flex gap-4">
                    <button className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-brand-cyan/50 transition-all">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span>
                    </button>
                    <button className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-brand-cyan/50 transition-all">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 3D Digital Showcase */}
                <div className="glass-panel group p-6 rounded-2xl border-t-2 border-t-brand-cyan/20 hover:border-t-brand-cyan transition-all flex flex-col h-full" id="solutions">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-3 bg-brand-cyan/10 rounded-xl">
                            <span className="material-symbols-outlined text-brand-cyan">view_in_ar</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">01_VISUALIZER</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">3D Digital Showcase</h4>
                    <p className="text-sm text-slate-400 mb-6 flex-grow">Interactive tour of niche-specific deployments.</p>
                    <div className="space-y-2">
                        {['Gourmet Food', 'Roofing', 'Real Estate'].map((item) => (
                            <button key={item} className="w-full text-left px-4 py-2 rounded-lg bg-white/5 text-xs font-medium text-slate-300 hover:bg-brand-cyan/20 hover:text-brand-cyan transition-all flex justify-between items-center group/btn">
                                {item}
                                <span className="material-symbols-outlined opacity-0 group-hover/btn:opacity-100 transition-opacity" style={{ fontSize: '16px' }}>open_in_new</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Custom Dashboards */}
                <div className="glass-panel group p-6 rounded-2xl border-t-2 border-t-brand-cyan/20 hover:border-t-brand-cyan transition-all flex flex-col h-full overflow-hidden relative" id="dashboards">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-3 bg-brand-cyan/10 rounded-xl">
                            <span className="material-symbols-outlined text-brand-cyan">monitoring</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">02_ANALYTICS</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Custom Dashboards</h4>
                    <p className="text-sm text-slate-400 mb-6">Sales &amp; Revenue Intelligence with 3D metrics.</p>
                    <div className="relative rounded-xl p-4 border border-white/5 mb-4" style={{ backgroundColor: 'rgba(16,31,34,0.5)' }}>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold text-brand-cyan tracking-widest">REAL-TIME</span>
                            <span className="text-[10px] text-green-400">+12.4%</span>
                        </div>
                        <div className="flex items-end gap-1 h-20 mb-4">
                            <div className="flex-1 bg-brand-cyan/40 rounded-t-sm" style={{ height: '40%' }}></div>
                            <div className="flex-1 bg-brand-cyan/60 rounded-t-sm" style={{ height: '70%' }}></div>
                            <div className="flex-1 bg-brand-cyan/30 rounded-t-sm" style={{ height: '50%' }}></div>
                            <div className="flex-1 bg-brand-cyan rounded-t-sm neon-border" style={{ height: '90%' }}></div>
                            <div className="flex-1 bg-brand-cyan/50 rounded-t-sm" style={{ height: '60%' }}></div>
                        </div>
                        <div className="text-center">
                            <span className="text-2xl font-bold text-white tracking-tighter">84%</span>
                            <p className="text-[10px] text-slate-500 uppercase">Time Saved</p>
                        </div>
                    </div>
                </div>

                {/* Multilingual PDF */}
                <div className="glass-panel group p-6 rounded-2xl border-t-2 border-t-brand-cyan/20 hover:border-t-brand-cyan transition-all flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-3 bg-brand-cyan/10 rounded-xl">
                            <span className="material-symbols-outlined text-brand-cyan">translate</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">03_LINGUA</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Multilingual PDF</h4>
                    <p className="text-sm text-slate-400 mb-6">Annual strategy documents to cinematic video output.</p>
                    <div className="flex gap-2 mb-6">
                        <div className="flex-1 aspect-[3/4] rounded bg-white/10 border border-white/10 flex flex-col p-2 overflow-hidden">
                            <div className="w-full h-1 bg-white/20 mb-1 rounded"></div>
                            <div className="w-2/3 h-1 bg-white/20 mb-1 rounded"></div>
                            <div className="w-full h-1 bg-white/20 mb-3 rounded"></div>
                            <div className="w-full h-12 bg-brand-cyan/10 rounded-sm"></div>
                        </div>
                        <div className="flex items-center text-brand-cyan">
                            <span className="material-symbols-outlined">trending_flat</span>
                        </div>
                        <div className="flex-1 aspect-[3/4] rounded border border-brand-cyan/30 relative flex items-center justify-center" style={{ backgroundColor: '#101f22' }}>
                            <span className="material-symbols-outlined text-brand-cyan">play_circle</span>
                            <div className="absolute bottom-1 right-1 px-1 rounded bg-brand-cyan text-[6px] font-bold" style={{ color: '#101f22' }}>4K</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-2">
                        <span className="text-[10px] font-bold text-slate-400">EN</span>
                        <div className="w-8 h-4 bg-brand-cyan/20 rounded-full relative flex items-center px-1">
                            <div className="size-2 bg-brand-cyan rounded-full translate-x-4"></div>
                        </div>
                        <span className="text-[10px] font-bold text-brand-cyan">ES</span>
                    </div>
                </div>

                {/* Cinematic Ad Lab */}
                <div className="glass-panel group p-6 rounded-2xl border-t-2 border-t-brand-cyan/20 hover:border-t-brand-cyan transition-all flex flex-col h-full" id="adlab">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-3 bg-brand-cyan/10 rounded-xl">
                            <span className="material-symbols-outlined text-brand-cyan">movie_edit</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">04_CREATIVE</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Cinematic Ad Lab</h4>
                    <p className="text-sm text-slate-400 mb-6">Gallery of branding assets and tradeshow mockups.</p>
                    <div className="grid grid-cols-2 gap-2">
                        <div
                            className="aspect-square rounded-lg bg-cover bg-center grayscale group-hover:grayscale-0 transition-all border border-white/5"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCt-ZLRC6rA_6wnKeuF6lCHQF68B-AWYA0XEbQOtrMsM5HbTftugwz2BhDRIY1XT9pWYId1JfSZv-mUM_cn-SYYyz9rMer78BUlxpEmT6Q_Q5LrzVzECiuu-qzv5bM037FvBGxgMXMzd6ZtdCX-Hm8lwralA9ibvTNT0w1LFdUdZXEP2hgXLMFvBXI1YEhAGvONh3gvtThNamkIIC73Q5LI7LW-It5VH31VciphAFCGs0HlhC_SiIVF72WUVzSJ7VQcQBBKqLseAw8m')" }}
                        ></div>
                        <div
                            className="aspect-square rounded-lg bg-cover bg-center grayscale group-hover:grayscale-0 transition-all border border-white/5"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWNrpN54pQ88DIvUodQYMEKej38YFKM2BDXucYSbqmCn-IV4liovTBKIqUALPviBM1K8__2bDZWrGCe47rTTawGNoD7LeqtyGYc8EhquDWOBVfqtI_h2hXBfawHC_8sEuEY7dn1ZS8B_tx2QxrW2TvkV5ZEmbcrjYiVTFpEUjXJvAeHn9Qi53QZe5FnQdaeZkVhKDrsPBpd3gOghREt4xSe4LzxqZSxSUjBEE5_BIq9CYqIteGUEBZ8vjg46Af2KnH92KN6gDRVsp6')" }}
                        ></div>
                    </div>
                    <button className="mt-4 text-xs font-bold text-brand-cyan flex items-center gap-2 hover:translate-x-1 transition-transform">
                        EXPLORE LAB <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>east</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
