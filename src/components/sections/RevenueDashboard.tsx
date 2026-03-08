"use client";

import React, { useState } from 'react';

const TABS = ['Prospecting', 'Lead Pipeline', 'Customer Intel'];

export default function RevenueDashboard() {
    const [activeTab, setActiveTab] = useState('Prospecting');

    return (
        <div className="flex flex-col gap-6" data-purpose="revenue-dashboard">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3v18h18"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                </div>
                <h2 className="text-3xl font-bold">Revenue Command</h2>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-zinc-800 shadow-2xl h-[500px] flex flex-col">
                {/* Browser Header */}
                <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-800 transition-all">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 cursor-pointer transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 cursor-pointer transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 cursor-pointer transition-colors"></div>
                    </div>

                    <div className="flex bg-black/40 px-3 py-1 rounded-md gap-4 text-[10px] font-bold tracking-widest uppercase">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`transition-all duration-300 ${activeTab === tab ? 'text-brand-cyan border-b border-brand-cyan mb-[-4px] pb-1' : 'text-zinc-500 hover:text-zinc-300'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 overflow-y-auto flex-1 bg-zinc-950/50 relative">

                    {/* Dynamic Content based on Tab State */}
                    <div className={`transition-opacity duration-300 ${activeTab === 'Prospecting' ? 'opacity-100' : 'opacity-0 absolute inset-6 pointer-events-none'}`}>
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-brand-cyan/50 transition-colors cursor-default">
                                <div className="text-[10px] text-zinc-500 uppercase">Accounts Scanned</div>
                                <div className="text-2xl font-bold text-white">12,402</div>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-brand-emerald/50 transition-colors cursor-default relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-8 h-8 bg-brand-cyan/10 blur-xl rounded-full"></div>
                                <div className="text-[10px] text-zinc-500 uppercase">High-Intent</div>
                                <div className="text-2xl font-bold text-brand-cyan">842</div>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-brand-emerald/50 transition-colors cursor-default">
                                <div className="text-[10px] text-zinc-500 uppercase">Auto-Outreach</div>
                                <div className="text-2xl font-bold text-brand-emerald">94%</div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-tighter">Intent Spikes by Industry</span>
                            </div>
                            <div className="flex items-end gap-2 h-32 group">
                                {/* CSS Bar Graph with hover effects */}
                                {[40, 60, 90, 50, 75].map((height, i) => (
                                    <div key={i} className="w-full bg-brand-cyan/20 group-hover:bg-brand-cyan/10 hover:!bg-brand-cyan/80 rounded-t-sm transition-all duration-300 cursor-pointer relative" style={{ height: `${height}%` }}>
                                        <div className="opacity-0 hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-xs px-2 py-1 rounded text-white whitespace-nowrap">
                                            {height}% Intent
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="text-[10px] text-zinc-500 uppercase mb-2">Live Data Feed</div>
                            <div className="text-[11px] font-mono p-2 bg-black rounded border border-zinc-800 flex justify-between items-center hover:bg-zinc-900 transition-colors cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></div>
                                    <span className="text-brand-emerald">[SIGNAL] TechCorp Inc. exploring Series B</span>
                                </div>
                                <span className="text-zinc-600">2s ago</span>
                            </div>
                            <div className="text-[11px] font-mono p-2 bg-black rounded border border-zinc-800 flex justify-between opacity-50 hover:opacity-100 transition-all cursor-pointer">
                                <span className="text-zinc-300">[ACTION] Generated personalized deck for GlobalLogistics</span>
                                <span className="text-zinc-600">14s ago</span>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for other tabs */}
                    {activeTab !== 'Prospecting' && (
                        <div className="flex items-center justify-center h-full text-zinc-500 text-sm font-mono border border-dashed border-zinc-800 rounded-lg">
                            [ {activeTab} Module Loading... ]
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
