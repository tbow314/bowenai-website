"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
    { label: "Consulting", href: "/consulting" },
    { label: "Masterclasses", href: "/masterclasses" },
    { label: "Websites", href: "/websites" },
    { label: "Ads", href: "/ads" },
];

export default function Nav() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/5 shadow-2xl">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
                    <div className="w-8 h-8 bg-cyan-500 text-black flex items-center justify-center font-black rounded-lg text-sm shadow-[0_0_20px_rgba(6,182,212,0.5)]">B</div>
                    <span className="text-white font-bold tracking-tight uppercase text-sm">Bowen <span className="text-cyan-400">Ai</span></span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link href="/consulting" className="px-6 py-2 rounded-lg bg-cyan-500 text-black font-extrabold text-xs uppercase tracking-widest hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-lg">
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? "[X]" : "[=]"}
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden absolute top-24 left-6 right-6 p-8 bg-zinc-950/95 border border-white/10 rounded-3xl backdrop-blur-3xl animate-in fade-in slide-in-from-top-4">
                    <div className="flex flex-col gap-6">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-xl font-bold text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/consulting" className="mt-4 px-6 py-4 rounded-xl bg-cyan-500 text-black font-black text-center uppercase tracking-widest shadow-xl">
                            Book a Call
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
