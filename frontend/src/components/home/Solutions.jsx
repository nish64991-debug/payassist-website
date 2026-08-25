import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const CARDS = [
    {
        id: "z-assist",
        to: "/z-assist",
        logo: "/assets/zassist-logo-tight.png",
        logoAlt: "Z Assist Care logo",
        logoClass: "h-10 w-auto sm:h-11",
        category: "Device Protection",
        pillClass: "bg-[#22B14C] text-white",
        heading: (
            <>
                Protection for the devices
                <br />
                you depend on.
            </>
        ),
        desc: "Protection and extended-warranty solutions designed for consumer electronics and everyday gadgets.",
        cta: "Explore ZAssist",
        ctaClass: "bg-[#22B14C] text-white shadow-[0_10px_30px_-10px_rgba(34,177,76,0.6)]",
        cardBg: "linear-gradient(155deg,#0D1B33 0%,#0B132B 48%,#0B2420 100%)",
        glow: "radial-gradient(closest-side,rgba(34,177,76,0.28),transparent)",
        testId: "solution-card-z-assist",
    },
    {
        id: "radsafe",
        to: "/radsafe",
        logo: "/assets/radsafe-logo-tight.png",
        logoAlt: "RadSafe logo",
        logoClass: "h-11 w-auto sm:h-12",
        category: "Responsible Usage",
        pillClass: "bg-[#C2A15C] text-white",
        heading: (
            <>
                Technology protection with a
                <br />
                focus on responsible device
                <br />
                usage.
            </>
        ),
        desc: "A consumer-focused technology solution developed around concerns related to electromagnetic exposure from everyday electronic devices.",
        cta: "Explore RadSafe",
        ctaClass: "bg-[#C2A15C] text-white shadow-[0_10px_30px_-10px_rgba(194,161,92,0.6)]",
        cardBg: "linear-gradient(155deg,#0D1B33 0%,#0B132B 48%,#1D1810 100%)",
        glow: "radial-gradient(closest-side,rgba(194,161,92,0.28),transparent)",
        testId: "solution-card-radsafe",
    },
];

const Solutions = () => (
    <section id="solutions" data-testid="solutions-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
                <h2
                    data-testid="solutions-heading"
                    className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem]"
                >
                    Our Solutions
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
                    Two Verticals. One Purpose. Protection.
                </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:gap-8 lg:mt-16 lg:grid-cols-2">
                {CARDS.map((c, i) => (
                    <Reveal key={c.id} delay={i * 0.12} className="h-full">
                        <Link
                            to={c.to}
                            data-testid={c.testId}
                            className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-24px_rgba(7,12,27,0.55)] sm:min-h-[460px] sm:p-9 lg:p-10"
                            style={{ background: c.cardBg }}
                        >
                            <div
                                className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                                style={{ background: c.glow }}
                                aria-hidden="true"
                            />

                            <div className="relative flex items-start justify-between gap-4">
                                <div className="flex h-[72px] items-center rounded-2xl bg-white px-5 sm:h-[84px] sm:px-6">
                                    <img src={c.logo} alt={c.logoAlt} className={c.logoClass} />
                                </div>
                                <span
                                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] sm:text-[11px] ${c.pillClass}`}
                                >
                                    {c.category}
                                </span>
                            </div>

                            <div className="relative mt-auto pt-16 sm:pt-20">
                                <h3 className="font-display text-[1.7rem] font-bold leading-[1.18] tracking-tight text-white sm:text-3xl lg:text-[2.1rem]">
                                    {c.heading}
                                </h3>
                                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                                    {c.desc}
                                </p>
                                <span
                                    data-testid={`solution-cta-${c.id}`}
                                    className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-300 group-hover:gap-3 ${c.ctaClass}`}
                                >
                                    {c.cta}
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Solutions;
