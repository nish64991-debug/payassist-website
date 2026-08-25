import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const STAGES = [
    {
        n: "01",
        title: "Understand",
        body: "We identify real challenges emerging around everyday technology.",
    },
    {
        n: "02",
        title: "Build",
        body: "We develop focused products and services around those needs.",
    },
    {
        n: "03",
        title: "Support",
        body: "We remain connected beyond the purchase through service and support.",
    },
];

const EASE = [0.16, 1, 0.3, 1];
const NODE_DELAY = [0.25, 0.85, 1.45];

const StageContent = ({ s, i }) => (
    <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: NODE_DELAY[i], ease: EASE }}
        className="text-center"
        data-testid={`approach-stage-${s.n}`}
    >
        <span className="font-mono text-xs font-semibold tracking-[0.3em] text-blue-400">{s.n}</span>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]">
            {s.title}
        </h3>
        <p className="mx-auto mt-3 max-w-[280px] text-sm leading-relaxed text-slate-400">{s.body}</p>
    </motion.div>
);

const Node = ({ i }) => (
    <span className="relative grid h-8 w-8 place-items-center">
        <span className="h-3 w-3 rounded-full border border-white/25 bg-navy-900" />
        <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: NODE_DELAY[i], ease: EASE }}
            className="absolute h-3 w-3 rounded-full bg-brand shadow-[0_0_16px_4px_rgba(0,82,255,0.45)]"
        />
    </span>
);

const MobileConnector = ({ i }) => (
    <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: NODE_DELAY[i] + 0.3, ease: EASE }}
        className="mx-auto h-10 w-px origin-top bg-gradient-to-b from-brand to-radsafe lg:hidden"
        aria-hidden="true"
    />
);

const Approach = () => (
    <section
        id="approach"
        data-testid="approach-section"
        className="relative overflow-hidden bg-navy-950 py-20 lg:py-24"
    >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-brand/[0.09] blur-[130px]" />
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
                <span
                    data-testid="approach-label"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Our Approach
                </span>
                <h2
                    data-testid="approach-heading"
                    className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]"
                >
                    Our Approach
                </h2>
                <p className="mt-4 font-mono text-sm tracking-[0.12em] text-slate-400 sm:text-base">
                    Understand <span className="text-blue-400">→</span> Build{" "}
                    <span className="text-blue-400">→</span> Support
                </p>
            </Reveal>

            <div className="relative mt-14 lg:mt-20">
                {/* Desktop beam connecting the three nodes */}
                <div
                    className="absolute left-[16.66%] right-[16.66%] top-[15px] hidden h-px bg-white/10 lg:block"
                    aria-hidden="true"
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.6, delay: 0.4, ease: EASE }}
                        className="h-full w-full origin-left bg-gradient-to-r from-brand via-brand to-radsafe shadow-[0_0_12px_1px_rgba(0,82,255,0.5)]"
                    />
                </div>

                <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-8">
                    {STAGES.map((s, i) => (
                        <div key={s.n} className="contents lg:block">
                            <div className="lg:flex lg:flex-col">
                                <div className="hidden justify-center lg:flex">
                                    <Node i={i} />
                                </div>
                                <div className="lg:mt-6">
                                    <StageContent s={s} i={i} />
                                </div>
                            </div>
                            {i < STAGES.length - 1 && <MobileConnector i={i} />}
                        </div>
                    ))}
                </div>

                <Reveal delay={1.7} className="mt-14 flex flex-wrap items-center justify-center gap-3 lg:mt-16">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                        From real needs, two verticals —
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-zassist" /> Z Assist · Device Protection
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C2A15C]" /> RadSafe · Responsible Usage
                    </span>
                </Reveal>
            </div>
        </div>
    </section>
);

export default Approach;
