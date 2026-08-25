import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Smartphone, Calculator, ClipboardCheck, ListChecks } from "lucide-react";
import Reveal from "@/components/Reveal";

const MODULES = [
    {
        icon: Calculator,
        n: "01",
        title: "Plan Calculator",
        note: "Interactive client-side plan & pricing module — exact inputs, logic and UI arrive with the next instruction set.",
        testId: "z-assist-module-calculator",
    },
    {
        icon: ClipboardCheck,
        n: "02",
        title: "Claim Journey",
        note: "A guided 3-step instant-dispatch claims experience — detailed design specification pending.",
        testId: "z-assist-module-claims",
    },
    {
        icon: ListChecks,
        n: "03",
        title: "Coverage & Eligibility",
        note: "Device eligibility matrix, plan tiers and FAQ accordion — content and layout to be specified.",
        testId: "z-assist-module-coverage",
    },
];

const ZAssist = () => (
    <main data-testid="z-assist-page" className="bg-navy-900">
        <section className="relative overflow-hidden pb-24 pt-40">
            <div className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[620px] rounded-full bg-zassist/15 blur-[140px]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
                <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 rounded-full border border-zassist/30 bg-zassist/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-zassist"
                    data-testid="z-assist-pill"
                >
                    <Smartphone className="h-3.5 w-3.5" /> Z Assist — Device protection &amp; extended warranty
                </motion.span>
                <h1 className="mt-8 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl" data-testid="z-assist-heading">
                    {["Your devices, protected", "beyond the box."].map((line, i) => (
                        <span key={line} className="block overflow-hidden pb-1">
                            <motion.span
                                initial={{ y: "115%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, delay: 0.15 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                                className={`block ${i === 1 ? "text-zassist" : ""}`}
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
                    Extended warranty, accidental-damage cover and concierge-grade claims — the Z Assist vertical of the
                    PayAssist ecosystem. This experience is being crafted section by section.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <a
                        href="mailto:hello@payassist.com?subject=Z%20Assist%20Cover"
                        data-testid="z-assist-cta-cover"
                        className="flex items-center gap-2 rounded-full bg-zassist px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-xl shadow-zassist/30 transition-all duration-300 hover:scale-[1.03]"
                    >
                        Get covered <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <Link
                        to="/"
                        data-testid="z-assist-back-home"
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
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
                        Experience modules — in progress
                    </p>
                    <h2 className="mt-5 max-w-2xl font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        The Z Assist page is structured and ready for its detailed design pass.
                    </h2>
                </Reveal>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {MODULES.map((m, i) => (
                        <Reveal key={m.n} delay={i * 0.1}>
                            <div
                                data-testid={m.testId}
                                className="flex h-full flex-col rounded-2xl border border-dashed border-emerald-300 bg-white p-8"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-zassist/10 text-emerald-600">
                                        <m.icon className="h-5 w-5" strokeWidth={1.8} />
                                    </div>
                                    <span className="font-mono text-xs text-slate-300">{m.n}</span>
                                </div>
                                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-slate-900">{m.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.note}</p>
                                <span className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-600/70">
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

export default ZAssist;
