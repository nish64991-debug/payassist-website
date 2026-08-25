import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";

const LAYERS = [
    { n: "01", name: "Resin for Safety", note: "Sealed resin coating that protects the inner layers from daily wear and handling" },
    { n: "02", name: "Quantum Sheet", note: "The chip's proprietary functional layer, engineered for its protective role" },
    { n: "03", name: "5000 Power Neodymium", note: "A high-density neodymium magnetic layer at the heart of the chip" },
    { n: "04", name: "Acrylic", note: "A rigid acrylic substrate that gives the chip its slim, durable structure" },
    { n: "05", name: "Gumming", note: "A secure adhesive layer that bonds the chip firmly to your device" },
    { n: "06", name: "Paper Release", note: "A peel-away backing that keeps the adhesive protected until application" },
];

const PLATE_STYLES = [
    "bg-gradient-to-br from-white/25 to-white/5 border-white/40",
    "border-[#C2A15C]/50 [background:repeating-linear-gradient(45deg,rgba(194,161,92,0.28)_0_2px,transparent_2px_8px),linear-gradient(135deg,rgba(194,161,92,0.15),rgba(194,161,92,0.03))]",
    "bg-gradient-to-br from-slate-700 to-slate-950 border-slate-500/50",
    "bg-white/10 border-white/25 backdrop-blur-sm",
    "bg-[#C2A15C]/25 border-[#C2A15C]/40",
    "bg-[#F3EFE6] border-white/60",
];

const ExplodedChip = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const [hovered, setHovered] = useState(false);
    const spread = hovered ? 58 : 40;

    return (
    <div
        ref={ref}
        className="relative mx-auto aspect-square w-full max-w-[340px] cursor-pointer sm:max-w-[420px]"
        data-testid="radsafe-exploded-chip"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered((h) => !h)}
    >
        {/* RF field rings */}
        <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 400 400" aria-hidden="true">
            {[70, 110, 150, 190].map((r) => (
                <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#C2A15C" strokeWidth="0.8" strokeDasharray="3 6" />
            ))}
        </svg>
        <div className="absolute inset-0 [perspective:1100px]">
            <div className="absolute left-[54%] top-[47%] h-0 w-0" style={{ transformStyle: "preserve-3d" }}>
                {PLATE_STYLES.map((cls, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, transform: `translate(-50%,-50%) rotateX(58deg) rotateZ(-42deg) translateZ(${220 - i * 10}px)` }}
                        animate={
                            inView
                                ? {
                                      opacity: 1,
                                      transform: `translate(-50%,-50%) rotateX(58deg) rotateZ(-42deg) translateZ(${(5 - i) * spread - (spread * 2.5)}px)`,
                                  }
                                : {}
                        }
                        transition={{ duration: hovered ? 0.6 : 0.9, delay: hovered ? 0 : 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                        className={`absolute left-1/2 top-1/2 h-32 w-32 rounded-2xl border shadow-xl shadow-black/30 sm:h-44 sm:w-44 ${cls}`}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {i === 0 && (
                            <img
                                src="/assets/radsafe/chip-round.jpeg"
                                alt="RadSafe chip"
                                className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-lg"
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
        <p className="absolute inset-x-0 -bottom-2 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
            Exploded view · six engineered layers · {hovered ? "release to settle" : "hover to expand"}
        </p>
    </div>
    );
};

const RadTech = () => (
    <section id="radsafe-tech" data-testid="radsafe-tech" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-[-8%] top-[10%] h-[420px] w-[520px] rounded-[100%] bg-[#C2A15C]/10 blur-[140px]" />
            <svg className="absolute inset-0 h-full w-full opacity-[0.05]" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
                <path d="M-60,200 C300,120 620,280 920,190 C1220,100 1340,240 1520,160" fill="none" stroke="#C2A15C" strokeWidth="1" />
                <path d="M-60,240 C300,160 620,320 920,230 C1220,140 1340,280 1520,200" fill="none" stroke="#C2A15C" strokeWidth="0.8" />
            </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <Reveal className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C2A15C]/30 bg-[#C2A15C]/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8BC7F]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C2A15C]" />
                    Chip Technology
                </span>
                <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl" data-testid="radsafe-tech-heading">
                    Advanced 6-Layer Protection
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
                    Every layer of the RadSafe chip is engineered with intent — from the protective resin surface to
                    the paper-release backing.
                </p>
            </Reveal>

            <div className="mt-12 grid items-center gap-14 lg:mt-16 lg:grid-cols-2 lg:gap-20">
                <Reveal>
                    <ExplodedChip />
                </Reveal>

                <div>
                    {LAYERS.map((l, i) => (
                        <Reveal key={l.n} delay={0.08 + i * 0.07}>
                            <div
                                className="group flex items-baseline gap-4 border-b border-white/10 py-3.5 transition-colors duration-300 first:border-t hover:border-[#C2A15C]/40 sm:gap-5"
                                data-testid={`radsafe-layer-${l.n}`}
                            >
                                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#D8BC7F]">{l.n}</span>
                                <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4">
                                    <h3 className="font-display text-base font-bold tracking-tight text-white transition-colors group-hover:text-[#D8BC7F] sm:text-lg">
                                        {l.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 sm:text-sm">{l.note}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default RadTech;
