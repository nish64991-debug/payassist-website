import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { scrollToId } from "@/components/Navbar";

const ZHero = () => (
    <section data-testid="zassist-hero" className="relative overflow-hidden bg-[#070B09] pt-[72px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-[100%] bg-[#22B14C]/[0.10] blur-[140px]" />
            <div className="absolute bottom-[-10%] right-[-8%] h-[340px] w-[480px] rounded-[100%] bg-[#22B14C]/[0.06] blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 text-center sm:px-8 sm:pt-20 lg:px-16">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <span className="flex h-16 items-center rounded-2xl bg-white px-5 shadow-xl shadow-black/40">
                    <img src="/assets/zassist-logo.png" alt="ZAssist Care logo" className="h-10 w-auto" />
                </span>
                <span className="rounded-full border border-[#22B14C]/30 bg-[#22B14C]/10 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4ADE80]">
                    A PayAssist Solution Vertical
                </span>
            </motion.div>

            <h1 className="mx-auto mt-9 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]" data-testid="zassist-heading">
                {["Protection for the devices", "you depend on."].map((line, i) => (
                    <span key={line} className="block overflow-hidden pb-1">
                        <motion.span
                            initial={{ y: "112%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                            className={`block ${i === 1 ? "text-[#4ADE80]" : ""}`}
                        >
                            {line}
                        </motion.span>
                    </span>
                ))}
            </h1>

            <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
                Protection and extended-warranty solutions designed for consumer electronics and everyday gadgets.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-9 flex flex-wrap items-center justify-center gap-4"
            >
                <button
                    data-testid="zassist-cta-explore-plans"
                    onClick={() => scrollToId("zassist-calculator")}
                    className="flex items-center gap-2 rounded-full bg-[#22B14C] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#22B14C]/30 transition-all duration-300 hover:scale-[1.03] hover:bg-[#1d9e43]"
                >
                    Explore Protection Plans <ArrowDown className="h-4 w-4" />
                </button>
                <Link
                    to="/"
                    data-testid="zassist-back-home"
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                    <ArrowLeft className="h-4 w-4" /> Back to PayAssist
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 36, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto mt-14 max-w-6xl"
            >
                <div className="absolute -inset-5 rounded-[36px] bg-[#22B14C]/10 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-2xl border border-[#22B14C]/25 shadow-2xl shadow-black/60 sm:rounded-[28px]">
                    <video
                        src="/assets/zassist-hero.mp4"
                        poster="/assets/zassist-hero-poster.jpg"
                        data-testid="zassist-hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="block aspect-video w-full object-contain"
                    />
                </div>
            </motion.div>
        </div>
    </section>
);

export default ZHero;
