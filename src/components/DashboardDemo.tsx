"use client";
import { useState } from "react";
import Image from "next/image";

const TABS = ["Revenue", "Leads", "Traffic"] as const;
const BARS = {
    Revenue: [62, 80, 56, 90, 76, 95, 72],
    Leads: [42, 66, 80, 55, 70, 85, 60],
    Traffic: [32, 52, 70, 46, 62, 80, 56],
};
const KPIS = {
    Revenue: [{ l: "MRR", v: "$47.2k", d: "+22%", c: "#06b6d4" }, { l: "Churn", v: "1.2%", d: "-0.4%", c: "#10b981" }, { l: "Avg Deal", v: "$12.1k", d: "+8%", c: "#8b5cf6" }],
    Leads: [{ l: "New Leads", v: "94", d: "+58%", c: "#8b5cf6" }, { l: "Qualified", v: "61", d: "+33%", c: "#06b6d4" }, { l: "Booked", v: "14", d: "+12%", c: "#10b981" }],
    Traffic: [{ l: "Sessions", v: "18.2k", d: "+31%", c: "#06b6d4" }, { l: "Bounce", v: "24%", d: "-6%", c: "#10b981" }, { l: "Pages/V", v: "4.1", d: "+0.8", c: "#8b5cf6" }],
};
const FEED = [
    { ev: "Lead captured", detail: "Austin TX — Consultation booked", t: "2s" },
    { ev: "Payment received", detail: "$8,500 — Mario Rudolph Estates", t: "14s" },
    { ev: "Contract signed", detail: "Dubai — Custom dashboard project", t: "45s" },
];

export default function DashboardDemo() {
    const [tab, setTab] = useState<"Revenue" | "Leads" | "Traffic">("Revenue");
    const kpi = KPIS[tab];
    const bars = BARS[tab];

    return (
        <section id="dashboards" style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="max-w-6xl mx-auto px-6 py-32">

                {/* Heading */}
                <div className="mb-16">
                    <p className="section-label">Neural Analytics</p>
                    <h2 className="text-5xl lg:text-6xl font-black tracking-[-0.04em] text-white mb-6" style={{ maxWidth: 700 }}>
                        Custom Dashboards<br />That Think
                    </h2>
                    <p className="text-xl text-zinc-500 leading-relaxed" style={{ maxWidth: 560 }}>
                        Real-time revenue tracking, AI-powered forecasting, and CRM integrations — all in one command center built precisely for your workflow.
                    </p>
                </div>

                {/* Full-width dashboard screenshot */}
                <div className="rounded-2xl overflow-hidden mb-8"
                    style={{ border: "1px solid rgba(6,182,212,0.2)", boxShadow: "0 0 80px rgba(6,182,212,0.08)" }}>
                    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                        <Image
                            src="/dashboard-preview.png"
                            alt="Bowen AI Command Center — live analytics dashboard"
                            fill
                            className="object-cover object-top"
                            sizes="100vw"
                            priority
                        />
                        {/* Live badge */}
                        <div className="absolute top-4 right-4">
                            <div className="badge-live">Live</div>
                        </div>
                    </div>
                </div>

                {/* Interactive live metrics strip */}
                <div className="rounded-2xl overflow-hidden glass">
                    <div className="px-6 py-3 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.5)" }}>
                        <div className="flex gap-1.5">
                            {["#ef444450", "#eab30850", "#22c55e50"].map(c => (
                                <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                            ))}
                        </div>
                        <span className="text-sm text-zinc-600 flex-1 mono">app.bowenai.io/dashboard</span>
                        {/* Tab switcher */}
                        <div className="flex gap-1">
                            {TABS.map(t => (
                                <button key={t} onClick={() => setTab(t)}
                                    className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
                                    style={{
                                        background: tab === t ? "rgba(139,92,246,0.15)" : "transparent",
                                        border: `1px solid ${tab === t ? "rgba(139,92,246,0.4)" : "transparent"}`,
                                        color: tab === t ? "#8b5cf6" : "#52525b",
                                    }}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6" style={{ background: "#050505" }}>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {kpi.map(k => (
                                <div key={k.l} className="rounded-xl p-5" style={{ background: "#0a0a0a", border: `1px solid ${k.c}20` }}>
                                    <div className="text-sm text-zinc-600 uppercase tracking-wider mb-2">{k.l}</div>
                                    <div className="text-3xl font-bold text-white mb-1">{k.v}</div>
                                    <div className="text-sm font-semibold" style={{ color: k.c }}>{k.d} ↑</div>
                                </div>
                            ))}
                        </div>

                        {/* Bar chart */}
                        <div className="flex items-end gap-2 mb-5" style={{ height: 80 }}>
                            {bars.map((h, i) => (
                                <div key={i} className="flex-1 rounded-t transition-all duration-500"
                                    style={{ height: `${h}%`, background: "linear-gradient(to top, rgba(139,92,246,0.6), rgba(6,182,212,0.3))" }} />
                            ))}
                        </div>

                        {/* Feed */}
                        <div className="flex flex-col gap-2">
                            {FEED.map(f => (
                                <div key={f.ev} className="flex justify-between items-center px-4 py-3 rounded-xl text-sm"
                                    style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <div>
                                        <span className="font-semibold" style={{ color: "#06b6d4" }}>{f.ev}</span>
                                        <span className="text-zinc-600 ml-3">{f.detail}</span>
                                    </div>
                                    <span className="mono text-xs text-zinc-700">{f.t} ago</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
