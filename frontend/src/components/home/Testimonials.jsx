import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

const TESTIMONIALS = [
    {
        quote: "Cracked my phone on a Monday morning, had a certified replacement by Wednesday. Z Assist is the first warranty that actually felt effortless.",
        name: "Priya Sharma",
        meta: "Smartphone protection",
        product: "Z Assist",
        tone: "zassist",
    },
    {
        quote: "RadSafe helped our family understand everyday device exposure without any alarmism. The guidance is practical and genuinely easy to follow.",
        name: "Ramesh Sharma",
        meta: "Responsible usage programme",
        product: "RadSafe",
        tone: "radsafe",
    },
    {
        quote: "We moved our entire retail device fleet under PayAssist. Claims turnaround and service quality are simply in a different league.",
        name: "Meera Krishnan",
        meta: "Operations Director · Retail partner",
        product: "Z Assist",
        tone: "zassist",
    },
    {
        quote: "Our AC stopped cooling in peak summer. One call to Z Assist, a certified technician the next day, and the repair fully covered — the service experience genuinely impressed us.",
        name: "Pramod Kumar Singh",
        meta: "Home appliance protection",
        product: "Z Assist",
        tone: "zassist",
    },
    {
        quote: "As a new parent I wanted clarity, not fear. RadSafe gave our home simple, sensible habits around the devices we use every day.",
        name: "Ananya Iyer",
        meta: "Household wellbeing",
        product: "RadSafe",
        tone: "radsafe",
    },
    {
        quote: "My laptop hinge failed days before a client deadline. Z Assist approved the claim the same morning and had it repaired within 48 hours.",
        name: "Vikram Malhotra",
        meta: "Laptop cover",
        product: "Z Assist",
        tone: "zassist",
    },
];

const initials = (name) =>
    name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("");

const Testimonials = () => (
    <section id="testimonials" data-testid="testimonials-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
                <span
                    data-testid="testimonials-label"
                    className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-brand"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    Trust
                </span>
                <h2
                    data-testid="testimonials-heading"
                    className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem]"
                >
                    Trusted by People. Built for Real Life.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
                    Real experiences will live here as PayAssist grows with its community.
                </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3" data-testid="testimonials-grid">
                {TESTIMONIALS.map((t, i) => (
                    <Reveal key={t.name} delay={(i % 3) * 0.1}>
                        <figure
                            data-testid={`testimonial-card-${i + 1}`}
                            className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_16px_36px_-14px_rgba(0,82,255,0.18)]"
                        >
                            <Quote className="h-6 w-6 text-brand/25" strokeWidth={1.6} />
                            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                                “{t.quote}”
                            </blockquote>
                            <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                                <div className="flex min-w-0 items-center gap-3">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft font-display text-sm font-bold text-brand">
                                        {initials(t.name)}
                                    </span>
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold text-slate-900">{t.name}</p>
                                        <p className="text-xs leading-snug text-slate-500">{t.meta}</p>
                                    </div>
                                </div>
                                <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                                    <span
                                        className={`h-1.5 w-1.5 rounded-full ${
                                            t.tone === "zassist" ? "bg-zassist" : "bg-[#C2A15C]"
                                        }`}
                                    />
                                    {t.product}
                                </span>
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={0.2}>
                <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Illustrative placeholder profiles — genuine customer stories arrive with approved content
                </p>
            </Reveal>
        </div>
    </section>
);

export default Testimonials;
