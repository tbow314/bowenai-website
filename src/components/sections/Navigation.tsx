import React from 'react';

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-brand-cyan rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(43,205,238,0.4)]">
                        <span className="material-symbols-outlined font-bold" style={{ fontSize: '18px', color: '#101f22' }}>hub</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-white uppercase italic">Bowen AI Strategy</h1>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-medium text-slate-300 hover:text-brand-cyan transition-colors" href="#solutions">Solutions</a>
                    <a className="text-sm font-medium text-slate-300 hover:text-brand-cyan transition-colors" href="#showcase">Showcase</a>
                    <a className="text-sm font-medium text-slate-300 hover:text-brand-cyan transition-colors" href="#dashboards">Dashboards</a>
                    <a className="text-sm font-medium text-slate-300 hover:text-brand-cyan transition-colors" href="#adlab">Ad Lab</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-brand-cyan/10 border border-brand-cyan/30 p-2 rounded-lg hover:bg-brand-cyan/20 transition-all">
                        <span className="material-symbols-outlined text-brand-cyan" style={{ fontSize: '20px' }}>language</span>
                    </button>
                    <button
                        className="bg-brand-cyan px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:scale-105 transition-transform active:scale-95"
                        style={{ color: '#101f22' }}
                    >
                        GET STARTED
                    </button>
                </div>
            </div>
        </nav>
    );
}
