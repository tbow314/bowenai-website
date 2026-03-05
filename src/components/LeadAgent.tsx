"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ChevronRight, Loader2, Calendar } from 'lucide-react';

export default function LeadAgent() {
    const [step, setStep] = useState(0);
    const [responses, setResponses] = useState({ usage: '', loss: '', inefficiency: '' });
    const [isOpen, setIsOpen] = useState(false);

    const handleNext = (field: string, value: string) => {
        setResponses({ ...responses, [field]: value });
        setStep(step + 1);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-80 lg:w-96 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl p-6 text-white mb-4"
                    >
                        <div className="flex items-center mb-6 border-b border-zinc-800/50 pb-4">
                            <div className="relative flex h-3 w-3 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </div>
                            <h3 className="font-bold tracking-wide text-sm flex items-center gap-2">
                                <Bot size={16} className="text-blue-400" /> Discovery Agent
                            </h3>
                        </div>

                        {step === 0 && (
                            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">How is your team currently using AI in daily operations?</p>
                                <div className="space-y-2">
                                    {['Not at all', 'Basic isolated tools (e.g., ChatGPT)', 'Integrated API Workflows'].map((option, i) => (
                                        <button key={i} onClick={() => handleNext('usage', option)} className="w-full text-left p-3 hover:bg-zinc-900 rounded-lg border border-zinc-800 hover:border-blue-500/50 transition-all text-sm group flex justify-between items-center">
                                            {option} <ChevronRight size={14} className="text-zinc-600 group-hover:text-blue-400" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">Where do you suspect you are losing the most money right now?</p>
                                <div className="space-y-2">
                                    {['Missed Leads / Slow Follow-ups', 'Manual Data & Reporting', 'Slow Media & Content Production'].map((option, i) => (
                                        <button key={i} onClick={() => handleNext('loss', option)} className="w-full text-left p-3 hover:bg-zinc-900 rounded-lg border border-zinc-800 hover:border-emerald-500/50 transition-all text-sm group flex justify-between items-center">
                                            {option} <ChevronRight size={14} className="text-zinc-600 group-hover:text-emerald-400" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                                <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                                    Based on your answers, this is a structural architecture issue. Your systems are fragmented, causing <span className="text-emerald-400 font-semibold">{responses.loss.toLowerCase()}</span>. I recommend a <strong>1-1 Strategy Audit</strong> to map out an automated infrastructure.
                                </p>
                                <button onClick={() => setStep(3)} className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    <Calendar size={16} /> Book 1-1 Advisory
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                                <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-4" />
                                <p className="text-sm text-zinc-400">Loading secure calendar portal...</p>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white p-4 rounded-full shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all flex items-center gap-3"
            >
                <Bot size={24} className={isOpen ? "text-zinc-400" : "text-blue-400"} />
                {!isOpen && <span className="text-sm font-medium pr-2 hidden md:block">Run Diagnostic</span>}
            </button>
        </div>
    );
}
