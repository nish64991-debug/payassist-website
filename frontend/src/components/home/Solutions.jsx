import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Smartphone, Waves } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const SOLUTIONS = [
    {
        id: "z-assist",
        icon: Smartphone,
        name: "Z Assist",
        accent: "zassist",
        badgeClass: "border-zassist/30 bg-zassist/10 text-emerald-600",
        dotClass: "bg-zassist",
        tag: "Device Protection & Extended Warranty",
        desc: "Comprehensive cover for accidental damage, breakdowns and wear — with instant claims and doorstep service.",
        points: ["Accidental & liquid damage cover", "48-hour average claim turnaround", "Doorstep pickup & certified repair"],
        stat: ["10k+", "devices under cover"],
        cta: "Explore Z Assist",
    },
    {
        id: "radsafe",
        icon: Waves,
        name: "RadSafe",
        accent: "radsafe",
        badgeClass: "border-radsafe/30 bg-radsafe/10 text-cyan-600",
        dotClass: "bg-radsafe",
        tag: "Responsible Tech & EMF Awareness",
        desc: "A consumer wellbeing programme built around responsible device usage and electromagnetic-exposure awareness.",
        points: ["Science-led exposure guidance", "Household-friendly usage habits", "Certified protection accessories"],
        stat: ["100%", "research-backed guidance"],
        cta: "Explore RadSafe",
    },
];

const Solutions = () => (
    <section id="solutions" data-testid="solutions-section" className="bg-mist py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <SectionHeading
                testId="solutions-heading"
                badge="Dual Solution Verticals"
                title="Two specialist brands. One standard of care."
                sub="Each PayAssist vertical owns a distinct protection problem — and each gets its own dedicated experience."
            />
            <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
                {SOLUTIONS.map((s, i) => (
                    <Reveal key={s.id} delay={i * 0.12}>
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            data-testid={`solution-card-${s.id}`}
                            className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60 sm:p-10"
                        >
                            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.id === "z-assist" ? "from-zassist to-teal-300" : "from-radsafe to-blue-400"}`} />
                            <span className={`inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${s.badgeClass}`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${s.dotClass}`} />
                                {s.tag}
                            </span>
                            <div className="mt-7 flex items-center gap-4">
                                <div className={`grid h-12 w-12 place-items-center rounded-xl ${s.id === "z-assist" ? "bg-zassist/10 text-emerald-600" : "bg-radsafe/10 text-cyan-600"}`}>
                                    <s.icon className="h-6 w-6" strokeWidth={1.8} />
                                </div>
                                <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                    {s.name}
                                </h3>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{s.desc}</p>
                            <ul className="mt-6 space-y-3">
                                {s.points.map((p) => (
                                    <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${s.id === "z-assist" ? "text-zassist" : "text-radsafe"}`} strokeWidth={2.5} />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto flex items-end justify-between gap-6 pt-9">
                                <div>
                                    <p className={`font-display text-3xl font-extrabold tracking-tight ${s.id === "z-assist" ? "text-emerald-600" : "text-cyan-600"}`}>
                                        {s.stat[0]}
                                    </p>
                                    <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.stat[1]}</p>
                                </div>
                                <Link
                                    to={`/${s.id}`}
                                    data-testid={`cta-explore-${s.id}`}
                                    className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04] ${
                                        s.id === "z-assist" ? "bg-emerald-500 shadow-lg shadow-emerald-500/30" : "bg-cyan-500 shadow-lg shadow-cyan-500/30"
                                    }`}
                                >
                                    {s.cta} <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Solutions;
