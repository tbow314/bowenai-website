"use client";

const offers = [
    {
        icon: "🖥️",
        title: "Website Design & Automation",
        desc: "Generative UI systems for scale.",
        accent: "cyan-400",
        shadow: "rgba(34,211,238,0.1)",
    },
    {
        icon: "⚙️",
        title: "Custom Enterprise Dashboards",
        desc: "Custom LLM agents for your ops.",
        accent: "emerald-400",
        shadow: "rgba(52,211,153,0.1)",
    },
    {
        icon: "🎬",
        title: "Multilingual PDF-to-Video",
        desc: "AI-driven outbound automation.",
        accent: "purple-400",
        shadow: "rgba(192,132,252,0.1)",
    },
    {
        icon: "🎯",
        title: "1-1 Custom Consultations",
        desc: "Executive advisory for AI transition.",
        accent: "blue-400",
        shadow: "rgba(96,165,250,0.1)",
    },
];

const accentMap: Record<string, string> = {
    "cyan-400": "border-t-cyan-400 shadow-[0_4px_20px_rgba(34,211,238,0.1)]",
    "emerald-400": "border-t-emerald-400 shadow-[0_4px_20px_rgba(52,211,153,0.1)]",
    "purple-400": "border-t-purple-400 shadow-[0_4px_20px_rgba(192,132,252,0.1)]",
    "blue-400": "border-t-blue-400 shadow-[0_4px_20px_rgba(96,165,250,0.1)]",
};

export default function OfferCards() {
    return (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {offers.map((offer) => (
                <div
                    key={offer.title}
                    className={`bg-white/5 backdrop-blur-xl p-5 rounded-xl border-t-2 border-x border-b border-white/10 hover:bg-white/10 transition-all cursor-pointer group ${accentMap[offer.accent]}`}
                >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
                        {offer.icon}
                    </div>
                    <h3 className="text-white font-bold mb-1">{offer.title}</h3>
                    <p className="text-xs text-slate-400">{offer.desc}</p>
                </div>
            ))}
        </div>
    );
}
