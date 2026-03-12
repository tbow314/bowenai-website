"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "1:1 AI Strategy Consulting",
        subtitle: "Enterprise Roadmapping",
        description: "Custom AI scaling blueprints for founders. We architect the system, you keep the ROI.",
        tag: "Premium",
        image: "/bento-consulting.png",
        href: "/consulting",
        accent: "from-cyan-500/20 to-transparent",
        tagColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    },
    {
        title: "AI Implementation Masterclass",
        subtitle: "Knowledge Transfer",
        description: "Intensive deep-dives into LLM orchestration, automated workflows, and AI toolchains.",
        tag: "Education",
        image: "/scraped-eleven-madison.png",
        href: "/masterclasses",
        accent: "from-purple-500/20 to-transparent",
        tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    {
        title: "Custom AI-Powered Websites",
        subtitle: "Conversion Architecture",
        description: 'High-end "Vibe Design" for Real Estate, Trades, and Luxury brands. SEO-optimized and live in days.',
        tag: "Production",
        image: "/scraped-linear-dashboard.png",
        href: "/websites",
        accent: "from-blue-500/20 to-transparent",
        tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    {
        title: "AI Content & Ad Studio",
        subtitle: "Visual Excellence",
        description: "Cinematic social ads and website visual assets. High-converting creative delivered in 24h.",
        tag: "Creative",
        image: "/scraped-porsche-ad.png",
        href: "/ads",
        accent: "from-orange-500/20 to-transparent",
        tagColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    },
];

export default function BentoGrid() {
    return (
        <section className="px-6 py-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((s, i) => (
                    <Link
                        key={i}
                        href={s.href}
                        className="group relative glass-card neon-border overflow-hidden cursor-pointer flex flex-col"
                        style={{ minHeight: "380px" }}
                    >
                        {/* Full-bleed background image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={s.image}
                                alt={s.title}
                                fill
                                className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                            />
                            {/* Dark overlay — gradient from bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#070710] via-[#070710]/80 to-transparent" />
                            {/* Accent color overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        </div>

                        {/* Tag pill (top right) */}
                        <div className="relative z-10 flex justify-end p-4">
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${s.tagColor}`}>
                                {s.tag}
                            </span>
                        </div>

                        {/* Text content (bottom) */}
                        <div className="relative z-10 mt-auto p-6">
                            {s.subtitle && (
                                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">{s.subtitle}</p>
                            )}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors leading-tight">
                                {s.title}
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">{s.description}</p>

                            {/* Arrow CTA */}
                            <div className="mt-4 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <span>Explore</span>
                                <span>→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
