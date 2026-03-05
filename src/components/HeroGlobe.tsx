"use client";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline/next";

export default function HeroGlobe() {
    return (
        <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center globe-container">
            {/* Holographic rotating glow */}
            <div className="absolute inset-0 holographic-glow animate-rotate-slow pointer-events-none" />

            {/* Spline 3D Globe with Framer Motion levitation */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border border-[#2bcdee]/20 overflow-hidden"
            >
                <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
            </motion.div>

            {/* Hero text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    The Future of <br />Business Intelligence
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-xl">
                    Optimize your enterprise with high-fidelity AI strategies and autonomous workflows.
                </p>
            </div>
        </div>
    );
}
