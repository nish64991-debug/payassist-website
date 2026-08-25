import { ShieldCheck, Waves, Activity } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const CARDS = [
    {
        icon: ShieldCheck,
        title: "Hardware & Financial Cover",
        body: "Extended warranty and accidental-damage protection for the devices your life runs on — structured, transparent and claim-friendly.",
    },
    {
        icon: Waves,
        title: "Biological Safety Awareness",
        body: "Science-led guidance on responsible usage and electromagnetic exposure, designed for every household that lives with technology.",
    },
    {
        icon: Activity,
        title: "Continuous Care Intelligence",
        body: "A diagnostics-first philosophy that keeps devices healthier for longer — not just repaired when broken, but actively maintained.",
    },
];

const WhyPayAssist = () => (
    <section id="why" data-testid="why-section" className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <SectionHeading
                testId="why-heading"
                badge="The PayAssist Difference"
                title="Modern devices require modern, multi-layered safeguarding."
                sub="PayAssist exists because protection today is no longer just about broken screens — it is about finance, health and longevity, under one trusted mother brand."
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {CARDS.map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.12}>
                        <div
                            data-testid={`why-card-${i + 1}`}
                            className="group relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-md shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
                        >
                            <span className="absolute right-7 top-7 font-mono text-xs text-slate-300">
                                0{i + 1}
                            </span>
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                                <c.icon className="h-6 w-6" strokeWidth={1.8} />
                            </div>
                            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                                {c.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{c.body}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default WhyPayAssist;
