"use client";
import { useState } from "react";
import Image from "next/image";

type Site = {
    name: string;
    niche: string;
    accent: string;
    tag: string;
    url: string;
    image: string;
    metrics: { l: string; v: string }[];
    bullets: string[];
};

const SITES: Site[] = [
    {
        name: "Epicurean",
        niche: "Gourmet Food & Hospitality",
        accent: "#d4af37",
        tag: "Restaurant",
        url: "epicurean.ai",
        image: "/site-epicurean.png",
        metrics: [
            { l: "Reservations", v: "+340%" },
            { l: "Avg Session", v: "4m 20s" },
            { l: "Table Turn", v: "+28%" },
        ],
        bullets: [
            "Custom booking engine + AI menu recommendations",
            "Multi-language menus with auto-translate",
            "Instagram feed integration + events calendar",
        ],
    },
    {
        name: "Mario Rudolph",
        niche: "Luxury Real Estate",
        accent: "#06b6d4",
        tag: "Real Estate",
        url: "mariorudolph.io",
        image: "/site-mario-rudolph.png",
        metrics: [
            { l: "Listings Viewed", v: "+520%" },
            { l: "Lead Qual Rate", v: "86%" },
            { l: "Days on Market", v: "-40%" },
        ],
        bullets: [
            "AI listing advisor that qualifies buyers in real-time",
            "Interactive map + Zillow data sync",
            "Branded property video tours with AI narration",
        ],
    },
    {
        name: "Apex Roofing",
        niche: "Home Services & Construction",
        accent: "#10b981",
        tag: "Trades",
        url: "apexroofingpro.com",
        image: "/site-apex-roofing.png",
        metrics: [
            { l: "Quote Requests", v: "+280%" },
            { l: "Close Rate", v: "67%" },
            { l: "Avg Job Value", v: "+$4,200" },
        ],
        bullets: [
            "Instant damage assessment form with photo upload",
            "AI-powered quote engine — replies in 60 seconds",
            "SEO-optimized landing pages for every zip code",
        ],
    },
];

export default function PortfolioShowcase() {
    const [active, setActive] = useState(0);
    const site = SITES[active];

    return (
        <section id="showcase" className="py-24 px-6 lg:px-10 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 mb-5">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase">
                            Battle-Tested Solutions
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
                        Performance-Driven Architecture
                    </h2>
                    <p className="text-zinc-500 text-sm max-w-md mx-auto">
                        Real-world systems we've architected to reduce friction and accelerate growth.
                    </p>
                </div>

                {/* Tab switcher */}
                <div className="flex justify-center gap-2.5 mb-10 flex-wrap">
                    {SITES.map((s, i) => (
                        <button
                            key={s.name}
                            onClick={() => setActive(i)}
                            className="px-5 py-2.5 rounded-[10px] text-[13px] font-bold transition-all"
                            style={{
                                background: active === i ? `${s.accent}18` : "transparent",
                                border: `1px solid ${active === i ? s.accent + "55" : "rgba(255,255,255,0.08)"}`,
                                color: active === i ? s.accent : "#71717a",
                            }}
                        >
                            {s.name}
                        </button>
                    ))}
                </div>

                {/* Main showcase */}
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Real browser frame with actual screenshot */}
                    <article className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${site.accent}30`, boxShadow: `0 0 40px ${site.accent}10` }}>
                        {/* Browser chrome */}
                        <div className="bg-[#0f0f0f] px-4 py-2.5 flex items-center gap-2 border-b border-white/5">
                            <div className="flex gap-1.5">
                                {["#ef444455", "#eab30855", "#22c55e55"].map((c) => (
                                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                                ))}
                            </div>
                            <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-[9px] text-zinc-500 flex items-center gap-1.5">
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={site.accent} strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                                </svg>
                                {site.url}
                            </div>
                            <span className="text-[9px] text-zinc-600">← → ↻</span>
                        </div>
                        {/* Real website screenshot */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                            <Image
                                src={site.image}
                                alt={`${site.name} website screenshot`}
                                fill
                                className="object-cover object-top transition-transform duration-700 hover:object-bottom"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority={active === 0}
                            />
                            {/* Scroll hint overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                        </div>
                    </article>

                    {/* Info + metrics */}
                    <div>
                        <div className="flex items-center gap-3 mb-5 flex-wrap">
                            <div className="text-lg font-bold text-white">{site.name}</div>
                            <span className="text-xs text-zinc-500">{site.niche}</span>
                            <span
                                className="ml-auto px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.12em]"
                                style={{ background: `${site.accent}15`, border: `1px solid ${site.accent}35`, color: site.accent }}
                            >
                                {site.tag}
                            </span>
                        </div>

                        {/* KPIs */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {site.metrics.map((m) => (
                                <div key={m.l} className="rounded-xl p-4 border border-white/[0.06]"
                                    style={{ background: 'rgba(0,0,0,0.5)' }}>
                                    <div className="text-xl font-bold mb-1" style={{ color: site.accent }}>{m.v}</div>
                                    <div className="text-[9px] text-zinc-600 uppercase tracking-[0.08em]">{m.l}</div>
                                </div>
                            ))}
                        </div>

                        {/* What we built */}
                        <div className="rounded-xl p-5 border border-white/5 mb-5"
                            style={{ background: 'rgba(0,0,0,0.4)' }}>
                            <div className="text-[10px] text-zinc-700 uppercase tracking-[0.12em] mb-3">What we built</div>
                            {site.bullets.map((b) => (
                                <div key={b} className="flex items-start gap-2 text-xs text-zinc-400 mb-2.5">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={site.accent} strokeWidth="2.5" className="shrink-0 mt-0.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {b}
                                </div>
                            ))}
                        </div>

                        <button
                            className="w-full py-3 rounded-[10px] text-[13px] font-bold transition-all"
                            style={{ background: `${site.accent}15`, border: `1px solid ${site.accent}40`, color: site.accent }}
                        >
                            Build My Version →
                        </button>
                    </div>
                </div>

                {/* Mini card row */}
                <div className="grid grid-cols-3 gap-4 mt-10">
                    {SITES.map((s, i) => (
                        <button
                            key={s.name}
                            onClick={() => setActive(i)}
                            className="rounded-xl overflow-hidden text-left transition-all hover:scale-[1.02]"
                            style={{
                                border: `1px solid ${active === i ? s.accent + "45" : "rgba(255,255,255,0.06)"}`,
                                boxShadow: active === i ? `0 0 20px ${s.accent}15` : "none",
                            }}
                        >
                            <div className="relative h-[110px] w-full bg-[#0a0a0a] overflow-hidden">
                                <Image
                                    src={s.image}
                                    alt={`${s.name} preview`}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 33vw, 25vw"
                                />
                            </div>
                            <div className="px-3 py-2.5 flex justify-between items-center bg-[#0a0a0a]">
                                <span className="text-xs font-semibold text-white">{s.name}</span>
                                <span className="text-[9px] font-bold uppercase tracking-[0.1em]" style={{ color: s.accent }}>
                                    {s.tag}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
