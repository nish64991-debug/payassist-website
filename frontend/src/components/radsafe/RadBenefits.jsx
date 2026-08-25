import { Unplug, Pointer, ScanLine, Wifi, Smartphone, FlaskConical, Info } from "lucide-react";
import Reveal from "@/components/Reveal";

const BENEFITS = [
    {
        icon: Unplug,
        title: "No Charging or Batteries",
        body: "Works passively — no batteries, no charging, no apps, nothing to manage.",
    },
    {
        icon: Pointer,
        title: "Effortless Application",
        body: "Peel, place, done. The chip applies to the back of your smartphone in seconds.",
    },
    {
        icon: ScanLine,
        title: "Compact & Discreet",
        body: "A slim, lightweight form factor designed to complement modern smartphones.",
    },
    {
        icon: Wifi,
        title: "Everyday Connectivity",
        body: "Designed to coexist with your phone's normal network connectivity and usage.",
    },
    {
        icon: Smartphone,
        title: "Made for Daily Use",
        body: "Built around how people actually use their phones — at work, at home, on the move.",
    },
    {
        icon: FlaskConical,
        title: "Independently Tested",
        body: "Tested in an independent laboratory for RF-radiation reduction effectiveness. CE certified for safety.",
    },
];

const RadBenefits = () => (
    <section id="radsafe-benefits" data-testid="radsafe-benefits" className="bg-[#FAF8F2] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C2A15C]/40 bg-[#C2A15C]/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a6d33]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C2A15C]" />
                    Product Benefits
                </span>
                <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem]">
                    Small chip. Thoughtful protection.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
                    RadSafe is designed to help manage RF-radiation exposure associated with everyday mobile phone use.
                </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3" data-testid="radsafe-benefits-grid">
                {BENEFITS.map((b, i) => (
                    <Reveal key={b.title} delay={(i % 3) * 0.1}>
                        <div
                            data-testid={`radsafe-benefit-card-${i + 1}`}
                            className="group h-full rounded-2xl border border-[#e8e0cd] bg-white p-7 shadow-[0_4px_20px_-8px_rgba(60,48,20,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A15C]/50 hover:shadow-[0_16px_36px_-14px_rgba(194,161,92,0.35)]"
                        >
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#C2A15C]/12 text-[#8a6d33] transition-colors duration-300 group-hover:bg-[#C2A15C] group-hover:text-navy-950">
                                <b.icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
                            </div>
                            <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-slate-900">{b.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-500">{b.body}</p>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={0.15}>
                <div className="mt-10 flex items-start justify-center gap-3 rounded-2xl border border-[#e8e0cd] bg-white/70 px-6 py-4 text-center" data-testid="radsafe-disclaimer">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#8a6d33]" />
                    <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                        RadSafe is not a medical device and is not intended to diagnose, treat, cure or prevent any
                        disease. It is a responsible-usage accessory for everyday electronic devices.
                    </p>
                </div>
            </Reveal>
        </div>
    </section>
);

export default RadBenefits;
