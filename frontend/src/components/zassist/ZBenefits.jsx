import { Truck, Wrench, RefreshCw, ShieldCheck, FileX2, Wallet, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

const BENEFITS = [
    { icon: Truck, title: "Free Pick Up & Drop", body: "Doorstep collection and delivery for every approved service request." },
    { icon: Wrench, title: "Repair or Replacement Guarantee", body: "Every valid claim ends in a repair or a replacement — guaranteed." },
    { icon: RefreshCw, title: "Up to 2 Service Requests / 1 Replacement", body: "Generous claim allowance across the plan duration." },
    { icon: ShieldCheck, title: "Maximum Coverage", body: "Accidental and liquid damage covered under one plan." },
    { icon: FileX2, title: "No Paperwork Required", body: "Paperless claims — no forms, no hassles." },
    { icon: Wallet, title: "100% Cashless Service", body: "Repairs settle directly — you never pay at the service centre." },
    { icon: Clock, title: "Support Hours", body: "Monday to Friday, 10:00 AM – 7:00 PM IST. Closed on public holidays." },
];

const ZBenefits = () => (
    <section id="zassist-benefits" data-testid="zassist-benefits" className="relative overflow-hidden bg-[#070B09] py-20 lg:py-28">
        <div className="pointer-events-none absolute right-[-10%] top-0 h-[360px] w-[480px] rounded-[100%] bg-[#22B14C]/[0.07] blur-[130px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#22B14C]/30 bg-[#22B14C]/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ADE80]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22B14C]" />
                    Why ZAssist
                </span>
                <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                    Protection that covers real life.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                    Every ZAssist Care plan is built around what actually happens to devices — and what owners actually need.
                </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4" data-testid="zassist-benefits-grid">
                {BENEFITS.map((b, i) => (
                    <Reveal key={b.title} delay={(i % 4) * 0.08}>
                        <div
                            data-testid={`zassist-benefit-card-${i + 1}`}
                            className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#22B14C]/40 hover:bg-white/[0.06] sm:p-7"
                        >
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#22B14C]/12 text-[#4ADE80] transition-colors duration-300 group-hover:bg-[#22B14C] group-hover:text-white">
                                <b.icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
                            </div>
                            <h3 className="mt-5 font-display text-[17px] font-bold leading-snug tracking-tight text-white">{b.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.body}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default ZBenefits;
