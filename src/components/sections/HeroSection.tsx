"use client";

import React, { useState } from 'react';

export default function HeroSection() {
    const [email, setEmail] = useState('');
    const [projectNeeds, setProjectNeeds] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Consult AI Requested:", { email, projectNeeds });
    };

    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
            {/* Radial glow background */}
            <div className="absolute inset-0 world-node-glow -z-10"></div>

            {/* Globe Visual */}
            <div className="relative w-full max-w-4xl aspect-square mb-12 flex items-center justify-center">
                {/* Pulsing orbit rings */}
                <div className="absolute w-[80%] aspect-square rounded-full border border-brand-cyan/20 animate-pulse"></div>
                <div className="absolute w-[95%] aspect-square rounded-full border border-white/5"></div>

                {/* Main globe */}
                <div className="relative w-3/4 aspect-square rounded-full overflow-hidden bg-background-dark border border-brand-cyan/40 shadow-[0_0_100px_rgba(43,205,238,0.1)] group" style={{ backgroundColor: '#101f22' }}>
                    <img
                        alt="Detailed 3D holographic digital world globe with neural network connections"
                        className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 hover:scale-100 transition-transform duration-[10s]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj3cAp4PzaQ6clVn4Z-CtGhFJeu6ivr05SKJXdy6nOFG0_NJyMDe68Bw1Yrh-VvwMtQ39JRqOGu2ib8G-ubmcbFs9L6cv7vecgv-GDGD8TKmBh2nTv3BY0NfJ67-KLlg2D4m0flto8MLjzeBURQ-nizgLtktQXAXOKvqyfr1LXtGl1bsrYhS8EvDJWTwipOClRohCsHlcbi2wTXfKHWXBaGiUL_QIG9ttSKA7pBzru5q6XFs_qPHkKKrjHIi8lR8-Vx06GaWLuwhOf"
                    />

                    {/* Robot Entrance Point */}
                    <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-24 h-40 bg-brand-cyan/20 backdrop-blur-md border-r border-brand-cyan/50 rounded-r-2xl flex items-center justify-center group-hover:left-0 transition-all duration-700">
                        <div className="w-16 h-16 bg-green-500/80 rounded-full blur-xl animate-pulse"></div>
                        <img
                            alt="Small green futuristic robot agent stepping out of a digital portal"
                            className="absolute size-16 object-contain"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhieouVbI8W15-8GH9DAWpn-M-w5JRc8nZBzUmh8j4uEWfTW2635y_M0LzJTmQbM2jZ4LuLAVishbX6VRKkI4pOVmkJhKUPY6qHRuf09-vi3k6JVYEvzK2CWrDxXfb4FvTNYouPvy-Pb-8-3tWv9Y5m-brh-bcvQOmLFWOo3ANLbLWQgCQJ-9EvR27P8LSWhcfpOWTV2aDSnRjL3csRShhh8P5h9qGudIB_j7AD-t2K9TBEhN-I3aopMzgJoKRtXK--48YMUEk2420"
                        />
                    </div>
                </div>

                {/* Floating status label */}
                <div className="absolute top-[20%] right-0 glass-panel p-4 rounded-xl border-l-2 border-l-brand-cyan max-w-[200px]">
                    <p className="text-[10px] text-brand-cyan font-bold uppercase tracking-widest mb-1">Status</p>
                    <p className="text-xs text-white">Neural Nodes: Synchronized</p>
                </div>
            </div>

            {/* Hero Text + CTA */}
            <div className="text-center max-w-4xl relative z-10">
                <h2 className="text-brand-cyan font-bold tracking-[0.4em] uppercase text-sm mb-4">
                    Bowen AI Strategy Group
                </h2>
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter italic">
                    The World Node <span className="text-brand-cyan neon-text">Interface</span>
                </h1>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
                    How can we help your business? Navigate the global digital landscape with integrated LLM intelligence.
                </p>

                {/* Holographic Lead Capture & Chat Interface */}
                <div className="glass-panel p-2 rounded-2xl max-w-3xl mx-auto border border-white/10 shadow-2xl">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
                        <div className="flex-1 flex items-center rounded-xl px-4 py-3 border border-white/5" style={{ backgroundColor: 'rgba(16,31,34,0.8)' }}>
                            <span className="material-symbols-outlined text-slate-500 mr-3" style={{ fontSize: '20px' }}>mail</span>
                            <input
                                className="bg-transparent border-none outline-none text-white placeholder-slate-600 w-full text-sm"
                                placeholder="Enter your business email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 flex items-center rounded-xl px-4 py-3 border border-white/5" style={{ backgroundColor: 'rgba(16,31,34,0.8)' }}>
                            <span className="material-symbols-outlined text-slate-500 mr-3" style={{ fontSize: '20px' }}>psychology</span>
                            <input
                                className="bg-transparent border-none outline-none text-white placeholder-slate-600 w-full text-sm"
                                placeholder="Describe your project needs..."
                                type="text"
                                value={projectNeeds}
                                onChange={(e) => setProjectNeeds(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-brand-cyan hover:bg-brand-cyan/80 font-bold px-8 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                            style={{ color: '#101f22' }}
                        >
                            <span>CONSULT AI</span>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>bolt</span>
                        </button>
                    </form>

                    {/* Quick AI Interaction Bar */}
                    <div className="mt-4 flex items-center gap-3 px-2 pb-2">
                        <div className="size-6 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                            <div className="size-2 bg-brand-cyan rounded-full animate-ping"></div>
                        </div>
                        <p className="text-xs text-slate-500">
                            Integrated LLM is ready. Try:{' '}
                            <span className="text-brand-cyan cursor-pointer hover:underline">&quot;Analyze my market vertical&quot;</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
