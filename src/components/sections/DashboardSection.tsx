import React from 'react';

export default function DashboardSection() {
    return (
        <section className="border-y border-white/5 py-24 relative overflow-hidden" style={{ backgroundColor: 'rgba(16,31,34,0.5)' }} id="dashboards">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Dashboard UI Panel */}
                <div className="order-2 md:order-1 relative">
                    <div className="glass-panel p-6 rounded-3xl border border-brand-cyan/20 shadow-[0_0_50px_rgba(43,205,238,0.05)] relative z-10">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="size-3 bg-red-500 rounded-full"></div>
                                <div className="size-3 bg-yellow-500 rounded-full"></div>
                                <div className="size-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="px-4 py-1 bg-white/5 rounded-full text-[10px] font-mono text-slate-400">
                                SESSION_LIVE // BOWEN_CORE
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-1 glass-panel p-4 rounded-xl">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Total Revenue</p>
                                    <p className="text-2xl font-bold text-white">$1.24M</p>
                                </div>
                                <div className="flex-1 glass-panel p-4 rounded-xl border-l-2 border-l-brand-cyan">
                                    <p className="text-[10px] text-brand-cyan uppercase tracking-widest mb-1">AI Efficiency</p>
                                    <p className="text-2xl font-bold text-white">+84%</p>
                                </div>
                            </div>

                            <img
                                alt="Complex data visualization dashboard with 3D charts and real-time graphs"
                                className="w-full rounded-xl border border-white/5 brightness-75 hover:brightness-100 transition-all"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhpa7PFHO-clngiNVPzK27GGSlJNNIHpr2P8C198PheYq2fE_QkCytVn4-yvPpb-3nY5jO7ApSpv2lJEFrDW2J3H-wkTHSyqyqx6nlGUwkjuI6KtqiZTKL7J5Zi4Z7kPs3h0BNmfzzlc4oeFFSvKUPSnZs-RWYcWUxcxB1x96FEv2P69-rwamfDXdJbsC-oDWoeW-mfesLHFJNs77Wdv6hOQwR42a52B-h9L5HOWm_SgbB53MZsInZxCWHCPwFBv8h_EHh0cdVdfBL"
                            />
                        </div>
                    </div>

                    {/* Decorative glows */}
                    <div className="absolute -top-10 -left-10 size-40 bg-brand-cyan/10 blur-[100px]"></div>
                    <div className="absolute -bottom-10 -right-10 size-60 bg-brand-cyan/5 blur-[120px]"></div>
                </div>

                {/* Text Content */}
                <div className="order-1 md:order-2">
                    <h2 className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-3">Dashboard Intelligence</h2>
                    <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                        Your Entire Business, <br />
                        <span className="italic text-brand-cyan">Decoded in Real-Time.</span>
                    </h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Our Custom Dashboards go beyond simple analytics. We integrate neural intelligence that predicts revenue shifts before they happen, saving your team up to 84% on manual reporting and data synthesis.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {[
                            '3D Volumetric Data Projections',
                            'Predictive Sales Velocity Modeling',
                            'Multi-Source API Synthesis (200+ Integrations)',
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-brand-cyan">check_circle</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="flex items-center gap-3 text-white font-bold group">
                        <span className="underline underline-offset-8 decoration-brand-cyan decoration-2 group-hover:decoration-4 transition-all">
                            VIEW DASHBOARD DEMO
                        </span>
                        <span className="material-symbols-outlined translate-y-0.5 group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
