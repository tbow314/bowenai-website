const COL_LINKS = [
    {
        title: "Services",
        links: ["1-1 Consulting", "AI Websites", "Dashboards", "PDF to Video", "Custom Ads"],
    },
    {
        title: "Company",
        links: ["About", "Case Studies", "Blog", "Contact"],
    },
    {
        title: "Legal",
        links: ["Privacy", "Terms", "Cookies"],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#030303] border-t border-[#0a0a0a] pt-14 pb-8 px-6 lg:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand col */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-3.5">
                            <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center font-extrabold text-[13px] text-black">
                                B
                            </div>
                            <span className="text-sm font-bold">
                                BOWEN <span className="text-brand-cyan">AI</span>
                            </span>
                        </div>
                        <p className="text-zinc-600 text-xs leading-relaxed max-w-[220px]">
                            Autonomous AI systems for founders building at scale. Strategy deployed at machine speed.
                        </p>
                    </div>

                    {/* Link columns */}
                    {COL_LINKS.map((col) => (
                        <div key={col.title}>
                            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-700 mb-3.5">
                                {col.title}
                            </div>
                            <div className="flex flex-col gap-2.5">
                                {col.links.map((l) => (
                                    <a
                                        key={l}
                                        href="#"
                                        className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
                                    >
                                        {l}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#0a0a0a] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <span className="text-[10px] text-zinc-700">
                        © {new Date().getFullYear()} Bowen AI Strategy Group. All rights reserved.
                    </span>
                    <div className="badge-live">Systems Online</div>
                </div>
            </div>
        </footer>
    );
}
