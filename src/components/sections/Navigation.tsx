import React from 'react';

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5" style={{ background: 'rgba(5,10,20,0.85)', backdropFilter: 'blur(12px)' }}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-white font-black text-lg tracking-tight">BOWEN <span style={{ color: '#2bcdee' }}>AI</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-slate-400">
                    <a href="#specifications" className="hover:text-white transition-colors">Specifications</a>
                    <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
                    <a href="#security" className="hover:text-white transition-colors">Security</a>
                    <a href="#preorder" style={{ color: '#2bcdee' }} className="hover:opacity-80 transition-opacity">Pre-Order</a>
                </div>
            </div>
        </nav>
    );
}
