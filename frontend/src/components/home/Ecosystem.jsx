import Reveal from "@/components/Reveal";

const PARTNERS = ["Apple", "Samsung", "LG", "Sony", "Dyson", "Oura", "Garmin", "WHO Guidelines", "Lenovo", "Bose"];

const Ecosystem = () => (
    <section id="ecosystem" data-testid="ecosystem-section" className="border-y border-slate-200 bg-mist py-14">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                Trusted across leading device ecosystems &amp; health standards
            </p>
        </Reveal>
        <div className="relative mt-10 overflow-hidden" data-testid="ecosystem-marquee">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mist to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mist to-transparent" />
            <div className="animate-pa-marquee flex w-max items-center gap-16 pr-16">
                {[...PARTNERS, ...PARTNERS].map((name, i) => (
                    <span key={`${name}-${i}`} className="flex items-center gap-16 whitespace-nowrap">
                        <span className="font-display text-xl font-bold tracking-tight text-slate-400 transition-colors hover:text-slate-700 sm:text-2xl">
                            {name}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-brand/30" />
                    </span>
                ))}
            </div>
        </div>
    </section>
);

export default Ecosystem;
