"use client";
import { useState } from "react";

export default function StrategyFooter() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <section className="px-6 py-20 max-w-6xl mx-auto">
            <div className="glass-card neon-border p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: CTA copy */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">⚡</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                        Give your business superpowers
                    </h2>
                    <p className="text-zinc-400 text-base leading-relaxed">
                        Give your business superpowers with lead capture form &amp; real bottleneck-to-improve your business.
                    </p>
                </div>

                {/* Right: Strategy HUD form */}
                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Strategy HUD</h3>

                    {status === "success" ? (
                        <div className="py-8 text-center">
                            <div className="w-14 h-14 bg-cyan-400 text-black rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 shadow-[0_0_30px_rgba(34,211,238,0.4)]">✓</div>
                            <p className="text-white font-bold">Signal Received</p>
                            <p className="text-zinc-400 text-sm mt-1">We&apos;ll be in touch within 24h.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input required className="hud-input" placeholder="Email" type="email" />
                            <input required className="hud-input" placeholder="Company" type="text" />
                            <textarea required className="hud-input min-h-[80px] resize-none" placeholder="Message" />
                            <button
                                disabled={status === "sending"}
                                className="w-full py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)] active:scale-95 disabled:opacity-50"
                            >
                                {status === "sending" ? "Processing..." : "Initiate Strategy Session"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
