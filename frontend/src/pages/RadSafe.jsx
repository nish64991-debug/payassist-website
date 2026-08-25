import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Waves, Gauge, FlaskConical, HeartHandshake } from "lucide-react";
import Reveal from "@/components/Reveal";

const MODULES = [
    {
        icon: Gauge,
        n: "01",
        title: "Exposure Awareness",
        note: "An interactive awareness module around everyday electromagnetic exposure — experience design to be specified.",
        testId: "radsafe-module-awareness",
    },
    {
        icon: FlaskConical,
        n: "02",
        title: "Science & Certifications",
        note: "Lab research, standards alignment and certification overview — content structure pending final copy.",
        testId: "radsafe-module-science",
    },
    {
        icon: HeartHandshake,
        n: "03",
        title: "Responsible Habits Guide",
        note: "Household-friendly technology habits and protection gear guidance — layout to be defined.",
        testId: "radsafe-module-habits",
    },
];

const RadSafe = () => (
    <main data-testid="radsafe-page" className="bg-navy-900">
        <section className="relative overflow-hidden pb-24 pt-40">
            <div className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[620px] rounded-full bg-radsafe/15 blur-[140px]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
                <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 rounded-full border border-radsafe/30 bg-radsafe/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-radsafe"
                    data-testid="radsafe-pill"
                >
                    <Waves className="h-3.5 w-3.5" /> RadSafe — Responsible tech &amp; EMF awareness
                </motion.span>
                <h1 className="mt-8 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl" data-testid="radsafe-heading">
                    {["Technology, enjoyed", "responsibly."].map((line, i) => (
                        <span key={line} className="block overflow-hidden pb-1">
                            <motion.span
                                initial={{ y: "115%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, delay: 0.15 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                                className={`block ${i === 1 ? "text-radsafe" : ""}`}
                            >
                                {line}
                            </motion.span>
                        </span>
                    ))}
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
                >
                    A consumer wellbeing programme built around responsible device usage and electromagnetic-exposure
                    awareness — the RadSafe vertical of the PayAssist ecosystem.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <a
                        href="mailto:hello@payassist.com?subject=RadSafe"
                        data-testid="radsafe-cta-learn"
                        className="flex items-center gap-2 rounded-full bg-radsafe px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-xl shadow-radsafe/30 transition-all duration-300 hover:scale-[1.03]"
                    >
                        Learn more <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <Link
                        to="/"
                        data-testid="radsafe-back-home"
                        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                    >
                        <ArrowLeft className="h-4 w-4" /> PayAssist home
                    </Link>
                </motion.div>
            </div>
        </section>

        <section className="bg-mist py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
                <Reveal>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-600">
                        Experience modules — in progress
                    </p>
                    <h2 className="mt-5 max-w-2xl font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        The RadSafe page is structured and ready for its detailed design pass.
                    </h2>
                </Reveal>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {MODULES.map((m, i) => (
                        <Reveal key={m.n} delay={i * 0.1}>
                            <div
                                data-testid={m.testId}
                                className="flex h-full flex-col rounded-2xl border border-dashed border-cyan-300 bg-white p-8"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-radsafe/10 text-cyan-600">
                                        <m.icon className="h-5 w-5" strokeWidth={1.8} />
                                    </div>
                                    <span className="font-mono text-xs text-slate-300">{m.n}</span>
                                </div>
                                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-slate-900">{m.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.note}</p>
                                <span className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-600/70">
                                    Module reserved — awaiting spec
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    </main>
);

export default RadSafe;
