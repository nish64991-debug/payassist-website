import { Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";

const COVERED = [
    "Any accidental and liquid damage is covered.",
    "Maximum 2 claims or 1 replacement.",
    "Extra warranty available in the 2-year plan.",
    "One-time Screen Replacement covers front display breakage.",
    "Battery is not covered under Extended Warranty.",
    "Authorized Service Centre repair.",
    "Free pick up and delivery.",
    "Paperless, cashless claims.",
    "Repair or Replacement Guarantee.",
    "Assured buyback up to 40%.",
];

const EXCLUDED = [
    "Damage due to negligence, gross misconduct or normal wear and tear is not covered.",
    "Only natural damage is covered; no misrepresentation.",
    "Cosmetic damages — dents, outer-body damage or stripping of colours — are not covered.",
    "Unauthorized repair is not covered.",
    "Devices bought from outside India are not covered.",
    "Devices must have a minimum 1-year manufacturer warranty in India.",
];

const ZPlanInfo = () => (
    <section id="zassist-plan-info" data-testid="zassist-plan-info" className="bg-[#070B09] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#22B14C]/30 bg-[#22B14C]/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ADE80]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22B14C]" />
                    Plan Details
                </span>
                <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
                    Clear cover. Clear limits.
                </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
                <Reveal>
                    <div className="h-full rounded-3xl border border-[#22B14C]/25 bg-white/[0.03] p-7 sm:p-9" data-testid="zassist-why-card">
                        <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                            Why go for the ZAssist Protection Plan
                        </h3>
                        <ul className="mt-6 space-y-3.5">
                            {COVERED.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#22B14C]/15">
                                        <Check className="h-3 w-3 text-[#4ADE80]" strokeWidth={3} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9" data-testid="zassist-exclusions-card">
                        <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                            What should you keep in mind?
                        </h3>
                        <ul className="mt-6 space-y-3.5">
                            {EXCLUDED.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10">
                                        <X className="h-3 w-3 text-slate-400" strokeWidth={3} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);

export default ZPlanInfo;
