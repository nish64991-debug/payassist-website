import { Smartphone, ShieldCheck, MessageCircleQuestion, BadgeCheck, Users, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";

const CARDS = [
    {
        icon: Smartphone,
        title: "We Depend on Technology",
        body: "Technology has become an essential part of everyday life.",
    },
    {
        icon: ShieldCheck,
        title: "What We Own Deserves Protection",
        body: "The devices we invest in deserve protection and support.",
    },
    {
        icon: MessageCircleQuestion,
        title: "Technology Brings New Concerns",
        body: "As our dependence on electronic devices grows, new questions around safety and responsible usage emerge.",
    },
    {
        icon: BadgeCheck,
        title: "Protection Should Be Simple",
        body: "Protection should be easy to understand, accessible and practical.",
    },
    {
        icon: Users,
        title: "Built Around Real-Life Needs",
        body: "Our solutions are designed around how people actually use technology.",
    },
    {
        icon: Layers,
        title: "One Brand. Multiple Dimensions of Protection.",
        body: "PayAssist brings specialized protection solutions together under one ecosystem.",
    },
];

const WaveTexture = () => (
    <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
    >
        <defs>
            <linearGradient id="why-wave" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0052FF" stopOpacity="0.10" />
                <stop offset="55%" stopColor="#00E5FF" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#0052FF" stopOpacity="0" />
            </linearGradient>
        </defs>
        <path
            d="M-80,180 C240,60 420,300 720,220 C1020,140 1180,320 1520,200 L1520,0 L-80,0 Z"
            fill="url(#why-wave)"
        />
        <path
            d="M-80,760 C260,640 520,860 820,760 C1120,660 1260,820 1520,720 L1520,900 L-80,900 Z"
            fill="url(#why-wave)"
        />
        <path
            d="M-80,460 C300,380 560,540 860,460 C1160,380 1300,520 1520,440"
            fill="none"
            stroke="#4D84FF"
            strokeOpacity="0.08"
            strokeWidth="1.2"
        />
        <path
            d="M-80,520 C300,440 560,600 860,520 C1160,440 1300,580 1520,500"
            fill="none"
            stroke="#00E5FF"
            strokeOpacity="0.05"
            strokeWidth="1.2"
        />
    </svg>
);

const WhyPayAssist = () => (
    <section id="why" data-testid="why-section" className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-[420px] w-[860px] -translate-x-1/2 rounded-[100%] bg-brand/10 blur-[130px]" />
            <div className="absolute bottom-0 right-[-8%] h-[320px] w-[520px] rounded-[100%] bg-radsafe/[0.06] blur-[120px]" />
        </div>
        <WaveTexture />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
            <Reveal className="mx-auto max-w-2xl text-center">
                <span
                    data-testid="why-label"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Why PayAssist
                </span>
                <h2
                    data-testid="why-heading"
                    className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]"
                >
                    Technology is everywhere.
                    <br />
                    Protection should be too.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                    PayAssist exists because the technology we trust has become essential — and essential things deserve
                    thoughtful protection.
                </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:mt-16" data-testid="why-cards-grid">
                {CARDS.map((c, i) => (
                    <Reveal key={c.title} delay={(i % 2) * 0.1 + Math.floor(i / 2) * 0.06}>
                        <div
                            data-testid={`why-card-${i + 1}`}
                            className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(7,12,27,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_-14px_rgba(0,82,255,0.35)] sm:gap-5 sm:p-7"
                        >
                            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white sm:h-[52px] sm:w-[52px]">
                                <c.icon className="h-[22px] w-[22px] sm:h-6 sm:w-6" strokeWidth={1.8} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-display text-[17px] font-bold leading-snug tracking-tight text-slate-900 sm:text-lg">
                                    {c.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.body}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default WhyPayAssist;
