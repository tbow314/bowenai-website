"use client";

import React, { useState } from 'react';

export default function FloatingAIAgent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] group">
            {/* Message Popup — visible on hover */}
            <div
                className={`absolute bottom-full right-0 mb-6 w-64 glass-panel p-4 rounded-2xl transition-all duration-500 pointer-events-none ${
                    isOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}
            >
                <div className="flex items-center gap-2 mb-2">
                    <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-slate-300 uppercase">Agent Bowen Online</span>
                </div>
                <p className="text-sm text-white mb-4">How can I help you navigate the World Node today?</p>

                {/* Voice Waveform Animation */}
                <div className="flex items-end gap-0.5 h-6 mb-4">
                    {[
                        { h: '20%', delay: '0s' },
                        { h: '60%', delay: '0.2s' },
                        { h: '100%', delay: '0.1s' },
                        { h: '50%', delay: '0.3s' },
                        { h: '30%', delay: '0.15s' },
                    ].map((bar, i) => (
                        <div
                            key={i}
                            className="flex-1 bg-brand-cyan/60 rounded-full animate-bounce"
                            style={{ height: bar.h, animationDelay: bar.delay }}
                        ></div>
                    ))}
                </div>

                <button
                    className="w-full bg-brand-cyan py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
                    style={{ color: '#101f22' }}
                >
                    Start Voice Chat
                </button>
            </div>

            {/* Agent Avatar */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative size-16 md:size-20 rounded-full border-2 border-brand-cyan shadow-[0_0_30px_rgba(43,205,238,0.3)] cursor-pointer hover:scale-110 transition-transform overflow-hidden group/agent"
                style={{ backgroundColor: '#101f22' }}
                aria-label="Open AI Agent"
            >
                <img
                    alt="Anchored 3D robot AI assistant avatar"
                    className="w-full h-full object-cover brightness-110 group-hover/agent:brightness-125 transition-all"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxmGb5_qajhzZ71zoXBtesFHcGDjWaeR3Ws60X5e23xHWPjdLzJ_q7Lc5AFU5oWCt8EGsiCnModz090aiRzi6C-5sxPoLMLR747abvG86O6hhKIQdaDAMJsflbHNcz_rEFIlLLUacNuPpaMSsgFJ40YCPlG0qmQZkHbPzOi3717-bpHmIZlfM9v0haN-NrDHSv5s08XG9H4OrWGSBlMvUKK6OaDqJQpw4KgIH4z-w7RY4f5fOBRTDR8Y33ek-Y4Q9YAsxtnBq8gkpj"
                />
                <div className="absolute inset-0 bg-brand-cyan/10 group-hover/agent:bg-transparent transition-colors"></div>

                {/* Online indicator */}
                <div className="absolute top-0 right-0 size-3 bg-green-500 rounded-full border-2 border-black"></div>
            </button>
        </div>
    );
}
