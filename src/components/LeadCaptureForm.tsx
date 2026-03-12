"use client";
import React, { useState } from "react";

export default function LeadCaptureForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("success"), 1500);
    };

    if (status === "success") {
        return (
            <div className="max-w-2xl mx-auto my-20 p-12 glass-hud neon-border-cyan text-center rounded-[3rem] animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-cyan-500 text-black rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-[0_0_40px_rgba(6,182,212,0.6)]">✓</div>
                <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Request Initialized</h2>
                <p className="text-zinc-400 text-lg">Your signal has been received. Our lead strategist will establish contact within 24 hours.</p>
            </div>
        );
    }

    return (
        <section id="contact" className="px-6 py-20 relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">

                {/* Strategy HUD Card */}
                <div className="glass-hud p-1 rounded-[3rem] neon-border-cyan overflow-hidden">
                    <div className="bg-zinc-950/40 p-8 md:p-12">
                        <div className="mb-10 text-center">
                            <p className="section-label justify-center">Input Module 042</p>
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Strategy HUD</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="group relative">
                                <input required className="hud-input" placeholder="Full Name *" type="text" />
                            </div>

                            <div className="group relative">
                                <input required className="hud-input" placeholder="Work Email *" type="email" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group relative">
                                    <input required className="hud-input" placeholder="Industry (e.g. B2B SaaS)" type="text" />
                                </div>
                                <div className="group relative">
                                    <input required className="hud-input" placeholder="Monthly Revenue" type="text" />
                                </div>
                            </div>

                            <div className="group relative">
                                <textarea
                                    required
                                    className="hud-input min-h-[120px] resize-none"
                                    placeholder="What is your biggest bottleneck right now?"
                                />
                            </div>

                            <button
                                disabled={status === "sending"}
                                className="w-full mt-6 py-5 rounded-2xl bg-cyan-500 text-black font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:neon-border-cyan-intense hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {status === "sending" ? "Processing Signal..." : "Submit Strategy Request"}
                            </button>
                        </form>

                        <p className="mt-10 text-[10px] text-zinc-500 text-center uppercase font-bold tracking-[0.2em] opacity-50">
                            SECURE UP-LINK ENCRYPTED // NO SPAM POLICY
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
