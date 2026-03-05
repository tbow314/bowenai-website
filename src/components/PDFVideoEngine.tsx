"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Play, RotateCcw, Upload } from "lucide-react";

type Stage = "idle" | "processing" | "complete";

const LANGUAGES = ["English", "Spanish", "French", "German", "Japanese"];

export default function PDFVideoEngine() {
  const [stage, setStage] = useState<Stage>("idle");
  const [language, setLanguage] = useState("English");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (stage !== "processing") return;
    setProgress(0);
    const start = Date.now();
    const duration = 3000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => setStage("complete"), 300);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [stage]);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">PDF-to-Video Synthesis</h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Our proprietary ingestion architecture parses 50-page PDFs and outputs dynamic, stylized explainer videos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#2bcdee]/70 mb-2">Output Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={stage !== "idle"}
                className="w-full bg-[#080c0d]/60 border border-[#2bcdee]/20 focus:border-[#2bcdee] rounded-lg px-4 py-3 text-white text-sm outline-none transition-all disabled:opacity-50 appearance-none"
              >
                {LANGUAGES.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#2bcdee]/70 mb-2">Source Document</label>
              <button
                onClick={() => stage === "idle" && setStage("processing")}
                disabled={stage !== "idle"}
                className="w-full border-2 border-dashed border-[#2bcdee]/30 hover:border-[#2bcdee]/60 rounded-xl p-8 flex flex-col items-center gap-3 transition-all disabled:opacity-50 group"
              >
                <Upload size={28} className="text-[#2bcdee]/50 group-hover:text-[#2bcdee] transition-colors" />
                <span className="text-slate-400 text-sm">{stage === "idle" ? "Drop your PDF here or click to upload" : "Processing..."}</span>
                <span className="text-xs text-slate-600">Supports .pdf up to 200 pages</span>
              </button>
            </div>
            <AnimatePresence>
              {(stage === "processing" || stage === "complete") && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{stage === "complete" ? "Complete" : "Ingesting PDF\u2026"}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#2bcdee] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              {stage !== "complete" ? (
                <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="w-full aspect-video rounded-xl bg-zinc-900 border border-white/10 flex flex-col items-center justify-center gap-3">
                  <FileText size={40} className="text-slate-600" />
                  <span className="text-slate-500 text-sm">Output preview will appear here</span>
                </motion.div>
              ) : (
                <motion.div key="output" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="w-full aspect-video rounded-xl bg-gradient-to-br from-zinc-900 to-[#0d1f24] border border-[#2bcdee]/30 relative overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(43,205,238,0.1)]">
                  <div className="w-14 h-14 rounded-full bg-[#2bcdee]/20 border border-[#2bcdee]/40 flex items-center justify-center">
                    <Play size={24} className="text-[#2bcdee] fill-[#2bcdee]" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm mb-1">Multilingual explainer ready</p>
                    <p className="text-[#2bcdee] text-xs">3 languages generated \u00b7 {language} selected</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {stage === "complete" && (
          <div className="mt-6 flex justify-end">
            <button onClick={() => { setStage("idle"); setProgress(0); }} className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
              <RotateCcw size={12} /> Reset
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
