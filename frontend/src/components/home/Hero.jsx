import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { scrollToId } from "@/components/Navbar";

const LINES = ["The future of total", "consumer technology", "protection."];

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const frameY = useTransform(scrollYProgress, [0, 1], [0, 110]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [3.5, -3.5]), { stiffness: 120, damping: 18 });
    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 18 });

    const onTilt = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const resetTilt = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <section id="hero" ref={ref} data-testid="hero-section" className="relative overflow-hidden bg-navy-900">
            <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
                <div className="absolute bottom-0 right-[-10%] h-[380px] w-[520px] rounded-full bg-radsafe/10 blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />
            </motion.div>

            <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-8 sm:pt-44 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur"
                    data-testid="hero-pill-tag"
                >
                    <span className="h-1.5 w-1.5 animate-pa-pulse rounded-full bg-brand" />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300">
                        PayAssist — Mother brand for device &amp; digital wellbeing
                    </span>
                </motion.div>

                <h1
                    data-testid="hero-heading"
                    className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
                >
                    {LINES.map((line, i) => (
                        <span key={line} className="block overflow-hidden pb-1">
                            <motion.span
                                initial={{ y: "115%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, delay: 0.15 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                                className={`block ${i === 2 ? "text-brand" : ""}`}
                            >
                                {line}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
                    data-testid="hero-subtitle"
                >
                    One brand, two specialist verticals — <span className="font-semibold text-zassist">Z Assist</span> for
                    device protection &amp; extended warranty, and <span className="font-semibold text-radsafe">RadSafe</span>{" "}
                    for responsible usage and electromagnetic-exposure awareness.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <button
                        data-testid="hero-cta-explore-solutions"
                        onClick={() => scrollToId("solutions")}
                        className="flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/40 transition-all duration-300 hover:scale-[1.03] hover:bg-brand-dark"
                    >
                        Explore Solutions <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                        data-testid="hero-cta-watch-reel"
                        onClick={() => scrollToId("hero-video")}
                        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                    >
                        <Play className="h-4 w-4" /> Watch Product Reel
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                    style={{ y: frameY }}
                    className="mt-16 [perspective:1200px]"
                >
                    <motion.div
                        id="hero-video"
                        data-testid="hero-video-frame"
                        onMouseMove={onTilt}
                        onMouseLeave={resetTilt}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative mx-auto aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-navy-800 shadow-2xl shadow-black/50"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,82,255,0.22),transparent_65%)]" />
                        <div
                            className="absolute inset-0 opacity-[0.07]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                backgroundSize: "56px 56px",
                            }}
                        />
                        <div className="absolute inset-0 grid place-items-center">
                            <div className="flex flex-col items-center gap-5">
                                <motion.button
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    data-testid="hero-video-play-button"
                                    className="grid h-20 w-20 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-brand"
                                >
                                    <Play className="ml-1 h-7 w-7 fill-current" />
                                </motion.button>
                                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400">
                                    Brand film · 16:9 master slot
                                </p>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-navy-950/60 px-6 py-3.5 backdrop-blur">
                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                payassist_brandfilm.mp4
                            </span>
                            <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                                Awaiting master file
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
