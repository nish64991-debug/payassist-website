import Reveal from "@/components/Reveal";

const STEPS = [
    {
        n: "01",
        title: "Peel",
        body: "Remove the thin protective strip from the back of the RadSafe chip.",
    },
    {
        n: "02",
        title: "Place",
        body: "Fix the chip just above the centre of the back of your smartphone.",
    },
    {
        n: "03",
        title: "Go",
        body: "Use your phone exactly as you always do — no charging, no settings, no apps.",
    },
];

const RadHowItWorks = () => (
    <section id="radsafe-how" data-testid="radsafe-how" className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
        <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[420px] w-[520px] rounded-[100%] bg-[#C2A15C]/10 blur-[130px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
            <Reveal className="relative order-1">
                <div className="absolute -inset-5 rounded-[32px] bg-[#C2A15C]/10 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[28px] border border-[#C2A15C]/25 shadow-2xl shadow-black/40">
                    <img
                        src="/assets/radsafe/box-front.jpeg"
                        alt="RadSafe anti-radiation chip premium packaging"
                        data-testid="radsafe-how-image"
                        className="aspect-square w-full object-cover"
                    />
                </div>
                <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-[#D8BC7F]">
                    Stick it. Forget it.
                </p>
            </Reveal>

            <div className="order-2">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#C2A15C]/30 bg-[#C2A15C]/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8BC7F]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C2A15C]" />
                        How It Works
                    </span>
                    <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
                        Three seconds. Zero effort.
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
                        RadSafe is a passive chip — there is nothing to install, charge or configure.
                    </p>
                </Reveal>

                <div className="mt-10 space-y-0">
                    {STEPS.map((s, i) => (
                        <Reveal key={s.n} delay={0.1 + i * 0.12}>
                            <div className="relative flex gap-5 pb-9 last:pb-0" data-testid={`radsafe-step-${i + 1}`}>
                                {i < STEPS.length - 1 && (
                                    <span className="absolute left-[21px] top-12 h-full w-px bg-gradient-to-b from-[#C2A15C]/50 to-transparent" aria-hidden="true" />
                                )}
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#C2A15C]/40 bg-[#C2A15C]/10 font-mono text-xs font-bold tracking-wider text-[#D8BC7F]">
                                    {s.n}
                                </span>
                                <div className="pt-1.5">
                                    <h3 className="font-display text-xl font-bold tracking-tight text-white">{s.title}</h3>
                                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-slate-400">{s.body}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default RadHowItWorks;
