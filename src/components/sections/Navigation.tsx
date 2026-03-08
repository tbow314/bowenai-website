import React from 'react';

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-panel border-b border-zinc-800/50">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-cyan to-brand-purple rounded-lg flex items-center justify-center font-bold text-black">B</div>
                <span className="text-xl font-bold tracking-tight">BOWEN <span className="text-brand-cyan">AI</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                <a href="#solutions" className="hover:text-brand-cyan transition-colors">Solutions</a>
                <a href="#workflow" className="hover:text-brand-cyan transition-colors">Workflow</a>
                <a href="#strategy" className="hover:text-brand-cyan transition-colors">Strategy</a>
                <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
            </div>

            <button className="px-5 py-2 bg-zinc-100 text-black text-sm font-bold rounded-full hover:bg-brand-cyan hover:text-white transition-all transform hover:scale-105">
                Get Started
            </button>
        </nav>
    );
}
