import { Info } from "lucide-react";
import Reveal from "@/components/Reveal";

const ROWS = [
    ["Up to 90 days", "15%"],
    ["91 to 180 days", "30%"],
    ["181 to 365 days", "50%"],
    ["366 to 545 days", "60%"],
    ["546 to 730 days", "75%"],
];

const ZDepreciation = () => (
    <section id="zassist-depreciation" data-testid="zassist-depreciation" className="relative overflow-hidden bg-[#0A0F0C] py-20 lg:py-28">
        <div className="pointer-events-none absolute right-[-8%] top-[10%] h-[320px] w-[440px] rounded-[100%] bg-[#22B14C]/[0.07] blur-[130px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#22B14C]/30 bg-[#22B14C]/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ADE80]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22B14C]" />
                    Device Age &amp; Depreciation
                </span>
                <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
                    Depreciation by device age.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
                    Applied as a percentage of the original product price at the time of claim.
                </p>
            </Reveal>

            <Reveal delay={0.1}>
                <div className="mt-12 overflow-hidden rounded-3xl border border-white/10" data-testid="zassist-depreciation-table">
                    <div className="grid grid-cols-2 bg-[#22B14C]/15 px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#4ADE80] sm:px-8">
                        <span>Age of the registered device</span>
                        <span className="text-right">Depreciation</span>
                    </div>
                    {ROWS.map(([age, pct], i) => (
                        <div
                            key={age}
                            className={`grid grid-cols-2 items-center px-6 py-4 sm:px-8 ${i % 2 ? "bg-white/[0.02]" : "bg-white/[0.05]"} ${i ? "border-t border-white/5" : ""}`}
                            data-testid={`zassist-depreciation-row-${i + 1}`}
                        >
                            <span className="py-1 text-sm font-semibold text-white sm:text-[15px]">{age}</span>
                            <span className="py-1 text-right text-sm text-slate-300 sm:text-[15px]">
                                <span className="font-bold text-[#4ADE80]">{pct}</span> of original product price
                            </span>
                        </div>
                    ))}
                </div>
            </Reveal>

            <Reveal delay={0.15}>
                <div className="mt-6 space-y-3">
                    <p className="flex items-start gap-2.5 rounded-2xl border border-[#22B14C]/25 bg-[#22B14C]/[0.08] px-5 py-4 text-sm leading-relaxed text-slate-300" data-testid="zassist-copay-note">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#4ADE80]" />
                        The plan includes a copayment amount of ₹599 or 5% of device cost, whichever is higher.
                    </p>
                    <p className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-relaxed text-slate-400">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                        Plans can be cancelled within 15 days from the date of purchase.
                    </p>
                </div>
            </Reveal>
        </div>
    </section>
);

export default ZDepreciation;
