"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WAVEFORM_DELAYS = [0, 0.2, 0.4, 0.1, 0.3, 0.5, 0.2, 0.0];

export default function RobotAgent() {
    const [open, setOpen] = useState(true);

    return (
        <div className="fixed bottom-0 right-8 z-50 flex items-end gap-4">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-6 bg-[#080c0d]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 max-w-xs shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-[#2bcdee] tracking-widest uppercase">AI Strategy Agent</span>
                                <div className="w-1.5 h-1.5 bg-[#2bcdee] rounded-full animate-pulse-live" />
                            </div>
                            <button onClick={() => setOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                                <X size={12} />
                            </button>
                        </div>

                        <p className="text-sm text-slate-200 leading-relaxed">
                            How can I assist you with our custom solutions today?
                        </p>

                        {/* Voice waveform */}
                        <div className="flex items-center justify-center gap-1 h-5 my-3">
                            {WAVEFORM_DELAYS.map((delay, i) => (
                                <div
                                    key={i}
                                    className="waveform-bar"
                                    style={{ animationDelay: `${delay}s` }}
                                />
                            ))}
                        </div>

                        {/* Quick actions */}
                        <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-2">
                            <span className="text-[9px] px-2 py-1 bg-[#2bcdee]/10 rounded-full text-[#2bcdee] border border-[#2bcdee]/20 cursor-pointer hover:bg-[#2bcdee]/20 transition-colors">
                                View Solutions
                            </span>
                            <span className="text-[9px] px-2 py-1 bg-white/5 rounded-full text-slate-400 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                                Book Call
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Robot Bust */}
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center"
            >
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-b from-zinc-800 to-[#080c0d] border-x border-t border-[#2bcdee]/30 rounded-t-full flex items-center justify-center overflow-hidden shadow-[0_-10px_30px_rgba(43,205,238,0.2)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,205,238,0.1)_0%,transparent_70%)]" />

                    {/* Robot face using SVG */}
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="14" width="36" height="28" rx="6" fill="#2bcdee" fillOpacity="0.15" stroke="#2bcdee" strokeOpacity="0.4" strokeWidth="1.5" />
                        <circle cx="20" cy="26" r="4" fill="#2bcdee" className="animate-pulse" />
                        <circle cx="36" cy="26" r="4" fill="#2bcdee" className="animate-pulse" />
                        <rect x="18" y="34" width="20" height="3" rx="1.5" fill="#2bcdee" fillOpacity="0.6" />
                        <rect x="24" y="8" width="8" height="6" rx="2" fill="#2bcdee" fillOpacity="0.3" stroke="#2bcdee" strokeOpacity="0.4" strokeWidth="1" />
                        <circle cx="28" cy="11" r="1.5" fill="#2bcdee" />
                    </svg>

                    {/* Glowing eyes overlay */}
                    <div className="absolute top-1/2 -translate-y-2 flex gap-6">
                        <div className="w-1 h-1 bg-[#2bcdee] rounded-full shadow-[0_0_8px_#2bcdee] animate-pulse" />
                        <div className="w-1 h-1 bg-[#2bcdee] rounded-full shadow-[0_0_8px_#2bcdee] animate-pulse" />
                    </div>
                </div>

                {/* Reopen button when closed */}
                {!open && (
                    <button
                        onClick={() => setOpen(true)}
                        className="absolute -top-3 -right-3 w-6 h-6 bg-[#2bcdee] rounded-full flex items-center justify-center shadow-glow-accent"
                    >
                        <MessageCircle size={12} className="text-black" />
                    </button>
                )}
            </motion.div>
        </div>
    );
}
