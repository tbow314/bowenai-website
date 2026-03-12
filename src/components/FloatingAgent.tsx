"use client";
import { useState } from "react";
import Image from "next/image";

export default function FloatingAgent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] group">
            {/* 100k Classy Alien Mascot */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-24 h-24 cursor-pointer transition-all duration-500 hover:scale-110 active:scale-95 filter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
                <Image
                    src="/mascot.png"
                    alt="Classy Alien Agent"
                    fill
                    className="object-contain"
                    priority
                />
                {/* Active Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-ping opacity-75" />
            </div>

            {/* Action Menu */}
            {isOpen && (
                <div className="absolute bottom-full right-0 mb-6 w-72 bg-zinc-900/95 border border-white/10 p-6 rounded-3xl backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-500">
                    <p className="section-label mb-2">Concierge AI</p>
                    <h4 className="text-xl font-bold text-white mb-4">How can I assist your mission?</h4>

                    <div className="space-y-3">
                        {[
                            ["Deploy Website", "/websites"],
                            ["Analyze Data", "/dashboards"],
                            ["Scale Ads", "/ads"],
                            ["Book Strategist", "/consulting"]
                        ].map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                className="block w-full text-left px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all font-medium"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    <p className="mt-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold border-t border-white/5 pt-4">
                        Response Time: <span className="text-cyan-400">Instanst (AI)</span>
                    </p>
                </div>
            )}
        </div>
    );
}
