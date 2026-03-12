"use client";
import Image from "next/image";
import Link from "next/link";

const showcases = [
    {
        title: "Gourmet AI Showcase",
        subtitle: "Michelin-star dining experience",
        image: "/scraped-eleven-madison.png",
        href: "/websites",
        stat: "+340% reservations",
    },
    {
        title: "Industrial Portfolio Showcase",
        subtitle: "Premium residential & commercial",
        image: "/scraped-golany-architecture.png",
        href: "/websites",
        stat: "1,200+ units delivered",
    },
    {
        title: "Real Estate Showcase",
        subtitle: "Curated luxury living",
        image: "/scraped-porsche-ad.png", // Using Porsche as a "High-End Lifestyle" asset here
        href: "/websites",
        stat: "$12M avg listing",
    },
];

export default function ShowcaseRow() {
    return (
        <section className="px-6 py-16 max-w-6xl mx-auto">
            {/* Section header */}
            <div className="mb-10">
                <p className="section-label mb-3">Real Examples in Action</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Real Examples in Action
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {showcases.map((s, i) => (
                    <Link
                        key={i}
                        href={s.href}
                        className="group relative glass-card neon-border overflow-hidden cursor-pointer"
                        style={{ minHeight: "280px" }}
                    >
                        {/* Full bleed image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={s.image}
                                alt={s.title}
                                fill
                                className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#070710] via-[#070710]/60 to-transparent" />
                        </div>

                        {/* Stat badge (top left) & Branding tag */}
                        <div className="relative z-10 p-4 flex justify-between items-start">
                            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/70">
                                {s.stat}
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400/60 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-cyan-400/80 animate-pulse" />
                                Bowen AI Case
                            </span>
                        </div>

                        {/* Text at bottom */}
                        <div className="relative z-10 mt-auto p-5">
                            <p className="text-xs text-zinc-400 mb-1">{s.subtitle}</p>
                            <p className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{s.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
