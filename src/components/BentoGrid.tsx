import { PlayCircle, Layers, MousePointerClick, Cpu } from 'lucide-react';

export default function BentoGrid() {
    return (
        <section id="build" className="w-full max-w-7xl mx-auto z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">The Arsenal</h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">A look inside the engine. Pure performance, premium execution.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-zinc-800 p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#39FF14]/5 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
                    <div className="h-full flex flex-col z-10 relative">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md border border-white/5">
                            <Layers className="text-zinc-200" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">High-End Web Properties</h3>
                        <p className="text-zinc-400 mb-6">Interactive dashboards and landing pages built with React/Next.js. The Vibe Design aesthetic that turns visitors into clients.</p>
                        <div className="mt-auto w-full h-48 bg-black border border-zinc-800 rounded-t-xl overflow-hidden relative shadow-2xl pt-6">
                            <div className="absolute top-0 left-0 w-full h-6 bg-zinc-900 flex items-center px-3 gap-1.5 border-b border-zinc-800">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                            </div>
                            <div className="p-4 grid grid-cols-3 gap-3">
                                <div className="col-span-2 h-16 bg-zinc-800/50 rounded-lg animate-pulse"></div>
                                <div className="col-span-1 h-16 bg-zinc-800/50 rounded-lg animate-pulse"></div>
                                <div className="col-span-1 h-16 bg-[#39FF14]/10 rounded-lg animate-pulse border border-[#39FF14]/20"></div>
                                <div className="col-span-2 h-16 bg-zinc-800/50 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 row-span-1 bg-zinc-900 rounded-3xl border border-zinc-800 p-8 relative overflow-hidden group hover:border-[#00D9FF]/50 transition-colors">
                    <div className="z-10 relative flex justify-between items-start">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-md">
                                <PlayCircle className="text-[#00D9FF] w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">AI Ad Creatives</h3>
                            <p className="text-zinc-400 text-sm max-w-sm">High-converting video and photo ads optimized for social media, tradeshows, and scaling inbound pipelines.</p>
                        </div>
                        <div className="w-24 h-24 rounded-2xl md:w-32 md:h-24 bg-zinc-800 shadow-inner flex items-center justify-center border border-zinc-700 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00D9FF]/20 to-purple-500/20 blur-xl"></div>
                            <MousePointerClick className="text-white/50 w-6 h-6 z-10" />
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1 row-span-1 bg-zinc-900 rounded-3xl border border-zinc-800 p-6 relative overflow-hidden">
                    <div className="h-full flex flex-col">
                        <Cpu className="text-yellow-500 w-8 h-8 mb-4 opacity-80" />
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">Data Ingestion</h3>
                        <p className="text-zinc-400 text-sm">Automated PDF-to-Video briefings.</p>
                        <div className="mt-auto flex gap-2 pt-4">
                            <div className="h-2 flex-1 bg-yellow-500/20 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500 w-[85%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1 row-span-1 bg-[#39FF14] text-black rounded-3xl p-6 relative overflow-hidden hover:scale-[1.02] transform transition-transform">
                    <div className="h-full flex flex-col z-10 relative">
                        <h3 className="text-2xl font-black mb-1">10x</h3>
                        <p className="text-black/80 text-sm font-bold uppercase tracking-wider mb-auto">Velocity</p>
                        <p className="text-sm font-medium pt-8 leading-snug text-black/90">
                            Stop building from scratch. We deploy validated AI architectures instantly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
