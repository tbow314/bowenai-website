"use client";

import React, { useState } from 'react';

const SERVICES = [
    { label: 'AI Consulting', badge: '→1' },
    { label: 'Custom Dashboards', badge: null },
    { label: 'PDF to Video', badge: null },
    { label: 'Custom Photo & Video Ads', badge: null },
];

export default function HeroSection() {
    const [activeService, setActiveService] = useState(0);
    const [name, setName] = useState('');
    const [needs, setNeeds] = useState('');
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "How can we help your business today?" },
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages(prev => [...prev, { role: 'user', text: input }]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'assistant', text: "Great! Let me connect you with the right solution." }]);
        }, 800);
    };

    return (
        <section className="relative min-h-screen pt-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #020812 0%, #050d1a 50%, #020812 100%)' }}>
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #1a4bff 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
                <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #8b2be2 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[320px_1fr_260px] gap-4 min-h-[calc(100vh-64px)] items-start">

                {/* LEFT PANEL — Branding + Form + Chat */}
                <div className="flex flex-col gap-4 pt-6">
                    {/* Brand heading */}
                    <div>
                        <h1 className="text-4xl font-black leading-tight text-white uppercase">
                            BOWEN AI<br />
                            <span style={{ color: '#2bcdee' }}>STRATEGY</span> GROUP
                        </h1>
                        <p className="text-slate-400 text-sm mt-2">How can we help your business?</p>
                    </div>

                    {/* Lead form */}
                    <div className="flex flex-col gap-2">
                        <input
                            className="w-full rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-1"
                            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                            placeholder="Name | Gen AI Project"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className="w-full rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 outline-none"
                            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                            placeholder="Describe your project needs..."
                            value={needs}
                            onChange={e => setNeeds(e.target.value)}
                        />
                        <button
                            className="w-full py-2.5 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
                            style={{ background: '#2bcdee', color: '#020812' }}
                        >
                            CONSULT AI
                        </button>
                    </div>

                    {/* Chat messages */}
                    <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className="rounded-xl px-3 py-2 text-xs max-w-[85%] leading-relaxed"
                                    style={msg.role === 'user'
                                        ? { background: '#2bcdee', color: '#020812', fontWeight: 600 }
                                        : { background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1' }
                                    }
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick send bar */}
                    <form onSubmit={handleSend} className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <input
                            className="flex-1 bg-transparent text-xs text-white placeholder-slate-600 outline-none"
                            placeholder="Google suggests your next move..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <button type="submit" style={{ color: '#2bcdee' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </form>
                </div>

                {/* CENTER — Brain / Globe Visual */}
                <div className="relative flex flex-col items-center justify-center min-h-[500px]">
                    {/* Main brain image */}
                    <div className="relative w-full max-w-xl">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj3cAp4PzaQ6clVn4Z-CtGhFJeu6ivr05SKJXdy6nOFG0_NJyMDe68Bw1Yrh-VvwMtQ39JRqOGu2ib8G-ubmcbFs9L6cv7vecgv-GDGD8TKmBh2nTv3BY0NfJ67-KLlg2D4m0flto8MLjzeBURQ-nizgLtktQXAXOKvqyfr1LXtGl1bsrYhS8EvDJWTwipOClRohCsHlcbi2wTXfKHWXBaGiUL_QIG9ttSKA7pBzru5q6XFs_qPHkKKrjHIi8lR8-Vx06GaWLuwhOf"
                            alt="3D neural brain network visualization"
                            className="w-full object-contain drop-shadow-2xl"
                            style={{ filter: 'drop-shadow(0 0 60px rgba(43,205,238,0.3))' }}
                        />

                        {/* "...possible" overlay text */}
                        <div className="absolute bottom-16 left-6 text-white font-black text-5xl opacity-80 leading-none pointer-events-none select-none">
                            ...possible
                        </div>
                        <div className="absolute bottom-8 left-6 text-slate-400 text-xs pointer-events-none select-none">
                            AI-powered neural network visualization
                        </div>
                    </div>

                    {/* Green alien mascot */}
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhieouVbI8W15-8GH9DAWpn-M-w5JRc8nZBzUmh8j4uEWfTW2635y_M0LzJTmQbM2jZ4LuLAVishbX6VRKkI4pOVmkJhKUPY6qHRuf09-vi3k6JVYEvzK2CWrDxXfb4FvTNYouPvy-Pb-8-3tWv9Y5m-brh-bcvQOmLFWOo3ANLbLWQgCQJ-9EvR27P8LSWhcfpOWTV2aDSnRjL3csRShhh8P5h9qGudIB_j7AD-t2K9TBEhN-I3aopMzgJoKRtXK--48YMUEk2420"
                        alt="Green AI robot mascot"
                        className="absolute bottom-0 right-0 w-32 object-contain"
                        style={{ filter: 'drop-shadow(0 0 20px rgba(0,255,100,0.3))' }}
                    />
                </div>

                {/* RIGHT PANEL — Service Menu */}
                <div className="pt-6 flex flex-col gap-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Our Solutions</p>
                    {SERVICES.map((svc, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveService(i)}
                            className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between"
                            style={activeService === i
                                ? { background: 'rgba(43,205,238,0.15)', border: '1px solid rgba(43,205,238,0.4)', color: '#2bcdee' }
                                : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#94a3b8' }
                            }
                        >
                            <span>{svc.label}</span>
                            {svc.badge && (
                                <span className="text-xs font-bold" style={{ color: '#2bcdee' }}>{svc.badge}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
