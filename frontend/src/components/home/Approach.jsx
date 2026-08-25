import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const CHAPTERS = [
    { n: "01", title: "Proactive Protection", body: "We secure devices before damage happens — cover, diagnostics and care plans that start on day one." },
    { n: "02", title: "Science-Backed Shielding", body: "Every RadSafe recommendation is grounded in published research and international exposure guidelines." },
    { n: "03", title: "Frictionless Claims", body: "A claim should feel like a concierge request, not an insurance battle. Fast approval, instant dispatch." },
    { n: "04", title: "Lifetime Longevity", body: "We measure success in years of healthy device life — for your wallet and for the planet." },
];

const Approach = () => (
    <section id="approach" data-testid="approach-section" className="relative overflow-hidden bg-navy-900 py-20 lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-brand/15 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <SectionHeading
                dark
                testId="approach-heading"
                badge="Our Manifesto"
                title="Four principles. One promise."
                sub="The PayAssist approach is deliberately simple — a small set of convictions that shape every product across Z Assist and RadSafe."
            />
            <div className="mt-16">
                {CHAPTERS.map((c, i) => (
                    <Reveal key={c.n} delay={i * 0.08}>
                        <div
                            data-testid={`manifesto-chapter-${c.n}`}
                            className="group grid items-start gap-4 border-t border-white/10 py-9 transition-colors duration-300 last:border-b hover:bg-white/[0.03] md:grid-cols-12 md:items-center md:gap-8 md:px-4"
                        >
                            <span className="font-mono text-sm font-medium tracking-[0.3em] text-blue-400 md:col-span-2">
                                CH·{c.n}
                            </span>
                            <h3 className="font-display text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-3xl lg:text-4xl md:col-span-6">
                                {c.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-400 md:col-span-4">{c.body}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Approach;
