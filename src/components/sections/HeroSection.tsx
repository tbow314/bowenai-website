"use client";

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Deployment Requested:", { fullName, email });
        // In future: wire to API route / webhook
    };

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-zinc-950">
            {/* Orbital Hub Graphics */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="relative w-[600px] h-[600px] animate-float">
                    {/* Main Sphere */}
                    <div className="absolute inset-0 rounded-full border border-brand-cyan/20 animate-slow-spin"></div>

                    <div className="absolute inset-10 rounded-full border border-brand-purple/10 animate-slow-spin flex items-center justify-center" style={{ animationDirection: 'reverse' }}>
                        <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-brand-cyan/20 via-transparent to-brand-purple/20 blur-3xl animate-pulse-slow"></div>
                    </div>

                    {/* Centerpiece (The Globe - Spline Integration) */}
                    <div className="absolute inset-0 flex items-center justify-center scale-75 opacity-80 z-10">
                        <Spline scene="https://prod.spline.design/h6x-7t-O0pIeI1XU/scene.splinecode" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 z-10 text-center relative mt-12">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                    THE FUTURE OF <br /> BUSINESS INTELLIGENCE
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    Leverage autonomous agents and predictive synthesis to dominate your market. Deploy intelligence at scale.
                </p>

                {/* Lead Capture Form */}
                <div className="max-w-xl mx-auto glass-panel p-8 rounded-2xl border-brand-cyan/20 shadow-2xl relative z-20">
                    <h3 className="text-left text-sm font-semibold uppercase tracking-widest text-brand-cyan mb-6">Initialize Your Strategy</h3>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                        <div className="col-span-1">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full glass-input rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <input
                                type="email"
                                placeholder="Work Email"
                                className="w-full glass-input rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2 mt-2">
                            <button
                                type="submit"
                                className="w-full bg-brand-cyan hover:bg-cyan-500 text-black font-bold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                            >
                                REQUEST DEPLOYMENT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
