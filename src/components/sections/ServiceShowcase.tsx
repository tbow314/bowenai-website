import React from 'react';

const ALIEN = "https://lh3.googleusercontent.com/aida-public/AB6AXuAhieouVbI8W15-8GH9DAWpn-M-w5JRc8nZBzUmh8j4uEWfTW2635y_M0LzJTmQbM2jZ4LuLAVishbX6VRKkI4pOVmkJhKUPY6qHRuf09-vi3k6JVYEvzK2CWrDxXfb4FvTNYouPvy-Pb-8-3tWv9Y5m-brh-bcvQOmLFWOo3ANLbLWQgCQJ-9EvR27P8LSWhcfpOWTV2aDSnRjL3csRShhh8P5h9qGudIB_j7AD-t2K9TBEhN-I3aopMzgJoKRtXK--48YMUEk2420";

function SectionDivider() {
    return <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(43,205,238,0.3), transparent)' }} />;
}

function LearnMoreBtn() {
    return (
        <button
            className="mt-6 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all hover:opacity-80"
            style={{ background: 'rgba(43,205,238,0.12)', border: '1px solid rgba(43,205,238,0.3)', color: '#2bcdee' }}
        >
            Learn More
        </button>
    );
}

export default function ServiceShowcase() {
    return (
        <div style={{ background: '#020812' }}>

            <SectionDivider />

            {/* ROW 1 — 3D Digital Showcase */}
            <section id="specifications" className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl font-black text-white mb-4">3D Digital Showcase</h2>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            Interactive immersive 3D scene cards that showcase what Bowen AI can build for niche verticals — Gourmet Food, Roofing, Real Estate, and more.
                        </p>
                        <p className="text-slate-500 text-sm">Hover elements rotate and interact in real-time.</p>
                        <LearnMoreBtn />
                    </div>

                    {/* Right: Niche image cards + alien */}
                    <div className="relative flex items-end gap-3 justify-center">
                        {/* Niche cards */}
                        <div className="flex gap-3 flex-1">
                            {[
                                { label: 'Food', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80' },
                                { label: 'Roofing', img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&q=80' },
                                { label: 'Real Estate', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80' },
                            ].map(({ label, img }) => (
                                <div key={label} className="flex-1 rounded-xl overflow-hidden border border-white/10 hover:border-[#2bcdee]/40 transition-all group cursor-pointer">
                                    <img src={img} alt={label} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="px-3 py-2" style={{ background: 'rgba(5,10,20,0.9)' }}>
                                        <p className="text-xs font-bold text-white">{label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Alien mascot */}
                        <img src={ALIEN} alt="Bowen AI agent" className="w-28 object-contain flex-shrink-0 self-end" style={{ filter: 'drop-shadow(0 0 20px rgba(0,255,100,0.25))' }} />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* ROW 2 — Neural Analytics */}
            <section id="architecture" className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl font-black text-white mb-4">Neural Analytics</h2>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            Interactive real-time 3D neural analytics dashboard. Our AI agent monitors and reports on live revenue data flow — predictive, prescriptive, and always on.
                        </p>
                        <p className="text-slate-500 text-sm">Integrates with 200+ data sources out of the box.</p>
                        <LearnMoreBtn />
                    </div>

                    {/* Right: Chart visual + alien */}
                    <div className="relative flex items-end gap-4">
                        <div className="flex-1 rounded-2xl p-5 border border-white/10" style={{ background: 'rgba(5,10,20,0.8)' }}>
                            {/* Simulated 3D bar chart */}
                            <div className="flex items-end gap-2 h-36 mb-4">
                                {[55, 80, 45, 95, 70, 60, 85].map((h, i) => (
                                    <div key={i} className="flex-1 rounded-t-sm relative group/bar" style={{ height: `${h}%`, background: `linear-gradient(180deg, #2bcdee ${100 - h}%, rgba(43,205,238,0.3) 100%)` }}>
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">{h}%</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] text-slate-500 font-mono">REVENUE VELOCITY</span>
                                <span className="text-xs font-bold" style={{ color: '#2bcdee' }}>+84% YoY</span>
                            </div>
                            {/* World map placeholder */}
                            <div className="mt-3 h-16 rounded-lg border border-white/5 flex items-center justify-center" style={{ background: 'rgba(43,205,238,0.04)' }}>
                                <span className="text-[10px] text-slate-600 font-mono">[ GLOBAL DATA NODES ACTIVE ]</span>
                            </div>
                        </div>
                        <img src={ALIEN} alt="Bowen AI agent" className="w-28 object-contain flex-shrink-0 self-end" style={{ filter: 'drop-shadow(0 0 20px rgba(0,255,100,0.25))' }} />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* ROW 3 — Polyglot PDF */}
            <section id="security" className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl font-black text-white mb-4">Polyglot PDF</h2>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            Get real-time contract analysis and generation. Upload any document — legal, financial, or strategic — and our LLM synthesizes it into cinematic video, localized across languages.
                        </p>
                        <p className="text-slate-500 text-sm">Legal, contract, reporting, and summarization workflows.</p>
                        <LearnMoreBtn />
                    </div>

                    {/* Right: Contract + Video + Language toggle */}
                    <div className="relative flex items-center gap-4">
                        {/* Contract doc preview */}
                        <div className="w-40 rounded-xl border border-white/10 p-4 flex-shrink-0" style={{ background: 'rgba(5,10,20,0.8)' }}>
                            <p className="text-[9px] font-bold text-slate-500 uppercase mb-3">Contract.pdf</p>
                            {[100, 80, 100, 65, 90, 70, 100].map((w, i) => (
                                <div key={i} className="h-1 rounded-full mb-1.5 last:mb-0" style={{ width: `${w}%`, background: 'rgba(255,255,255,0.12)' }}></div>
                            ))}
                            <div className="mt-3 h-10 rounded border border-white/5" style={{ background: 'rgba(43,205,238,0.06)' }}></div>
                        </div>

                        <div className="text-slate-500">→</div>

                        {/* Video output + language */}
                        <div className="flex-1">
                            <div className="rounded-xl overflow-hidden border border-white/10 relative mb-3" style={{ background: '#0a0f1a' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                                    alt="Video output"
                                    className="w-full h-36 object-cover opacity-60"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="size-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(43,205,238,0.8)' }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                    </div>
                                </div>
                            </div>
                            {/* Language tabs */}
                            <div className="flex gap-2">
                                {['English', 'Spanish', 'Mandarin'].map((lang, i) => (
                                    <button
                                        key={lang}
                                        className="flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all"
                                        style={i === 0
                                            ? { background: 'rgba(43,205,238,0.2)', border: '1px solid rgba(43,205,238,0.4)', color: '#2bcdee' }
                                            : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b' }
                                        }
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <img src={ALIEN} alt="Bowen AI agent" className="w-24 object-contain flex-shrink-0 self-end hidden xl:block" style={{ filter: 'drop-shadow(0 0 20px rgba(0,255,100,0.25))' }} />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* ROW 4 — Cinematic Ad Lab */}
            <section id="preorder" className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl font-black text-white mb-4">Cinematic Ad Lab</h2>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            Hyper-realistic mock-up gallery featuring luxury, automotive, real estate, and premium brand campaigns. AI-generated tradeshow imagery and video ads.
                        </p>
                        <p className="text-slate-500 text-sm">Custom photo &amp; video ad production at scale.</p>
                        <LearnMoreBtn />
                    </div>

                    {/* Right: Image gallery + alien */}
                    <div className="relative flex items-end gap-4">
                        <div className="flex-1 grid grid-cols-3 gap-2">
                            {[
                                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80',
                                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
                                'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
                            ].map((img, i) => (
                                <div key={i} className="relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
                                    <img src={img} alt="Ad" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(0,0,0,0.4)' }}>
                                        <div className="size-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(43,205,238,0.9)' }}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <img src={ALIEN} alt="Bowen AI agent" className="w-28 object-contain flex-shrink-0 self-end" style={{ filter: 'drop-shadow(0 0 20px rgba(0,255,100,0.25))' }} />
                    </div>
                </div>
            </section>

            <SectionDivider />
        </div>
    );
}
