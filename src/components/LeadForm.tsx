"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function LeadForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-24 px-6 bg-zinc-950/50">
            <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Initialize Your Strategy</h2>
                    <p className="text-slate-400">Schedule a consultation with our senior AI architects.</p>
                </div>

                {submitted ? (
                    <div className="text-center py-12">
                        <div className="text-5xl mb-4">✅</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                        <p className="text-slate-400">Our AI architects will contact you within 24 hours.</p>
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#2bcdee]/70">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="bg-[#080c0d]/50 border border-[#2bcdee]/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#2bcdee] focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#2bcdee]/70">Work Email</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="john@company.ai"
                                    className="bg-[#080c0d]/50 border border-[#2bcdee]/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#2bcdee] focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#2bcdee]/70">Strategy Focus</label>
                            <select className="bg-[#080c0d]/50 border border-[#2bcdee]/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#2bcdee] focus:border-transparent outline-none transition-all appearance-none">
                                <option>Workflow Automation</option>
                                <option>Generative UI/UX</option>
                                <option>Lead Gen Systems</option>
                                <option>Full Digital Transformation</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#2bcdee] hover:bg-[#2bcdee]/90 text-[#080c0d] font-bold py-4 rounded-lg transition-all glow-accent flex items-center justify-center gap-2"
                        >
                            Request Deployment
                            <ArrowRight size={18} />
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
