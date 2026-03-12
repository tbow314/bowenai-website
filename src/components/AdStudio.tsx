"use client";
import { useState } from "react";
import Image from "next/image";

const ADS = [
    {
        label: "Luxury Auto",
        product: "/ad-car.png",
        context: "/ad-car-context.png",
        caption: "Studio shot → Billboard + Instagram Story + Web banner",
        accent: "#06b6d4",
    },
    {
        label: "Fine Watches",
        product: "/ad-watch.png",
        context: "/ad-watch-context.png",
        caption: "Studio shot → Magazine spread + Retail lightbox + Social feed",
        accent: "#8b5cf6",
    },
    {
        label: "Gourmet Food",
        product: "/ad-food.png",
        context: "/ad-food-context.png",
        caption: "Studio shot → City billboard at night",
        accent: "#d4af37",
    },
];

export default function AdStudio() {
    const [active, setActive] = useState(0);
    const ad = ADS[active];

    return (
        <section id="ads" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="max-w-6xl mx-auto px-6 py-32">

                {/* Heading */}
                <div className="mb-16">
                    <p className="section-label">Cinematic Ad Lab</p>
                    <h2 className="text-5xl lg:text-6xl font-black tracking-[-0.04em] text-white mb-6" style={{ maxWidth: 680 }}>
                        AI-Generated Photo Ads<br />That Look Like $50k Shoots
                    </h2>
                    <p className="text-xl text-zinc-500 leading-relaxed" style={{ maxWidth: 540 }}>
                        Cars. Watches. Food. Architecture. One product shot becomes a full multi-channel campaign — billboards, social, print, web. Delivered in 24 hours.
                    </p>
                </div>

                {/* Category tabs */}
                <div className="flex gap-3 mb-10">
                    {ADS.map((a, i) => (
                        <button key={a.label} onClick={() => setActive(i)}
                            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                            style={{
                                background: active === i ? `${a.accent}18` : "rgba(255,255,255,0.04)",
                                border: `1px solid ${active === i ? a.accent + "50" : "rgba(255,255,255,0.08)"}`,
                                color: active === i ? a.accent : "#52525b",
                            }}>
                            {a.label}
                        </button>
                    ))}
                </div>

                {/* Product + Context grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* Product shot */}
                    <div className="rounded-2xl overflow-hidden relative" style={{ border: "1px solid rgba(255,255,255,0.08)", aspectRatio: "4/3" }}>
                        <Image src={ad.product} alt={`${ad.label} product photography`} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                        <div className="absolute bottom-0 left-0 right-0 px-5 py-4"
                            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                            <p className="text-sm font-semibold text-white">Studio Product Shot</p>
                            <p className="text-xs text-zinc-500">AI-directed. Photorealistic. Delivered in 24h.</p>
                        </div>
                    </div>

                    {/* In-context placement */}
                    <div className="rounded-2xl overflow-hidden relative" style={{ border: `1px solid ${ad.accent}30`, aspectRatio: "4/3" }}>
                        <Image src={ad.context} alt={`${ad.label} ad in real-world placement`} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                        <div className="absolute top-4 right-4">
                            <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                                style={{ background: `${ad.accent}20`, border: `1px solid ${ad.accent}40`, color: ad.accent }}>
                                In-context placement
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 px-5 py-4"
                            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                            <p className="text-sm text-zinc-400">{ad.caption}</p>
                        </div>
                    </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                    {[["10×", "Faster than traditional shoots"], ["25+", "Ad formats & placements"], ["24h", "Average delivery time"]].map(([v, l]) => (
                        <div key={l} className="rounded-2xl p-6 text-center glass">
                            <div className="text-3xl font-black text-white mb-2" style={{ color: ad.accent }}>{v}</div>
                            <div className="text-sm text-zinc-500">{l}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <a href="#consulting">
                        <button className="btn-primary">Get Sample Package →</button>
                    </a>
                </div>
            </div>
        </section>
    );
}
