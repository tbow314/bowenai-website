"use client";

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function FloatingAIAgent() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "How can I assist you with our custom solutions today?" }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const newMessages = [...messages, { role: 'user', text: input }];
        setMessages(newMessages);
        setInput('');

        // Simulate AI response (to be connected to real backend later)
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'assistant',
                text: "I am currently running in local deployment mode. Connecting me to your knowledge base requires the live backend."
            }]);
        }, 1000);
    };

    return (
        <aside
            className={`fixed bottom-0 right-4 md:right-8 z-[100] transform transition-transform duration-500 flex flex-col items-end gap-0 ${isOpen ? 'translate-y-0' : 'translate-y-4 hover:translate-y-0'}`}
            id="ai-agent"
        >

            {/* Chat Panel - Only visible when open */}
            <div
                className={`w-80 md:w-96 glass-panel rounded-2xl p-5 shadow-2xl border-brand-cyan/30 transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100 mb-4' : 'scale-75 opacity-0 pointer-events-none absolute bottom-24 right-0'}`}
                data-purpose="chat-panel"
            >
                <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-3">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
                        <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest">Gravity AI</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-zinc-500 hover:text-white transition-colors p-1"
                    >
                        <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Message Log */}
                <div className="h-64 overflow-y-auto mb-4 flex flex-col gap-3 pr-2 custom-scrollbar">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                            <span className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1 ml-1 mr-1">
                                {msg.role === 'user' ? 'You' : 'Agent'}
                            </span>
                            <div className={`p-3 rounded-xl text-sm leading-relaxed max-w-[85%] ${msg.role === 'user'
                                ? 'bg-brand-cyan text-black rounded-tr-sm font-medium'
                                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-tl-sm'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Voice Reactive Waveform Simulation */}
                <div className="flex items-center justify-center gap-1 h-8 mb-4 opacity-50">
                    {[0.1, 0.3, 0.2, 0.5, 0.4, 0.6].map((delay, i) => (
                        <div key={i} className="w-1 bg-brand-cyan rounded-full animate-wave" style={{ animationDelay: `${delay}s` }}></div>
                    ))}
                </div>

                {/* Input Form */}
                <form onSubmit={handleSend} className="relative mt-auto">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Message the agent..."
                        className="w-full bg-black border border-zinc-800 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all outline-none"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim()}
                        className="absolute right-2 top-2 bottom-2 aspect-square bg-brand-cyan/10 hover:bg-brand-cyan text-brand-cyan hover:text-black rounded-md flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
                            <line x1="22" x2="11" y1="2" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>

                {!isOpen && ( // Quick Action Buttons - Only show when chat history is short or as initial suggestions
                    <div className="flex flex-col gap-2 mt-4">
                        <button className="w-full text-left px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-brand-cyan text-xs font-medium transition-all group">
                            <span className="text-brand-cyan group-hover:text-white transition-colors mr-2">›</span> View Solutions
                        </button>
                        <button className="w-full text-left px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-brand-cyan text-xs font-medium transition-all group">
                            <span className="text-brand-cyan group-hover:text-white transition-colors mr-2">›</span> Book Call
                        </button>
                    </div>
                )}
            </div>

            {/* 3D Robot Head (Anchored Trigger) */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-24 h-24 bg-gradient-to-t from-zinc-800 to-transparent rounded-t-full flex items-center justify-center border-t border-brand-cyan/40 cursor-pointer hover:border-brand-cyan transition-colors group z-10"
            >
                <div className="absolute -top-2 right-2 flex space-x-1">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
                    </span>
                </div>

                {/* We wrap the Spline component in a slightly larger container that ignores pointer events, 
            letting the parent div handle the click. The real Spline alien from the Stitch design. */}
                <div className="absolute inset-[-20px] pointer-events-none flex items-center justify-center overflow-visible">
                    {/* Using a placeholder spline scene here, replacing the static img. 
                In a real build, we'd use the specific Spline scene link for the alien mascot. 
                Using the globe scene as a temporary interactive stand-in if the asset isn't ready, OR just rendering the image if Spline isn't provided.
                Since you asked for Spline integration for the mascot:
            */}
                    <Spline scene="https://prod.spline.design/h6x-7t-O0pIeI1XU/scene.splinecode" />
                </div>
            </div>
        </aside>
    );
}
