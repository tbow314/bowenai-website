import Image from "next/image";

export default function PDFtoVideo() {
    return (
        <section id="pdf-video" style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="max-w-6xl mx-auto px-6 py-32">

                {/* Heading */}
                <div className="mb-16">
                    <p className="section-label">Polyglot PDF</p>
                    <h2 className="text-5xl lg:text-6xl font-black tracking-[-0.04em] text-white mb-6" style={{ maxWidth: 720 }}>
                        Turn Any Document<br />Into a Narrated Video
                    </h2>
                    <p className="text-xl text-zinc-500 leading-relaxed" style={{ maxWidth: 540 }}>
                        Upload a PDF — contract, proposal, training doc. Select the language. Get a professional narrated video back in minutes.
                        25+ languages. No studio required.
                    </p>
                </div>

                {/* Full-width mockup image */}
                <div className="rounded-2xl overflow-hidden mb-10"
                    style={{ border: "1px solid rgba(139,92,246,0.25)", boxShadow: "0 0 80px rgba(139,92,246,0.06)" }}>
                    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                        <Image
                            src="/pdf-to-video.png"
                            alt="Polyglot PDF Studio — PDF to narrated video conversion interface"
                            fill
                            className="object-cover object-top"
                            sizes="100vw"
                        />
                    </div>
                </div>

                {/* Feature pills */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        ["25+", "Languages supported", "#8b5cf6"],
                        ["< 5 min", "Average conversion time", "#06b6d4"],
                        ["AI Narrator", "Natural voice synthesis", "#10b981"],
                        ["Any Doc", "PDF, DOCX, PPT, contracts", "#d4af37"],
                    ].map(([v, l, c]) => (
                        <div key={l} className="p-5 rounded-2xl glass text-center">
                            <div className="text-2xl font-black mb-1" style={{ color: c as string }}>{v}</div>
                            <div className="text-sm text-zinc-500">{l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
