import { Star, BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const QUOTES = [
    {
        quote: "Cracked my phone on a Monday morning, had a certified replacement by Wednesday. Z Assist is the first warranty that actually felt effortless.",
        name: "Priya Sharma",
        meta: "Z Assist member · Smartphone cover",
    },
    {
        quote: "RadSafe changed how our family uses devices. The guidance is calm, scientific and genuinely practical — no fear-mongering.",
        name: "Daniel Okafor",
        meta: "RadSafe household · Family plan",
    },
    {
        quote: "We moved our entire retail device fleet under PayAssist. Claims turnaround and reporting quality are in a different league.",
        name: "Meera Krishnan",
        meta: "Operations Director · Retail partner",
    },
];

const Testimonials = () => (
    <section id="testimonials" data-testid="testimonials-section" className="relative overflow-hidden bg-navy-900 py-20 lg:py-32">
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-brand/15 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <SectionHeading
                dark
                testId="testimonials-heading"
                badge="Verified Trust"
                title="Protection people actually feel."
                sub="Real outcomes from members across both PayAssist verticals."
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {QUOTES.map((q, i) => (
                    <Reveal key={q.name} delay={i * 0.12}>
                        <figure
                            data-testid={`testimonial-card-${i + 1}`}
                            className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-800 p-8 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-brand/40"
                        >
                            <div className="flex gap-1 text-amber-400">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <Star key={s} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
                                “{q.quote}”
                            </blockquote>
                            <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/20 font-display text-sm font-bold text-blue-300">
                                    {q.name.split(" ").map((w) => w[0]).join("")}
                                </span>
                                <div>
                                    <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                                        {q.name} <BadgeCheck className="h-4 w-4 text-brand" />
                                    </p>
                                    <p className="text-xs text-slate-500">{q.meta}</p>
                                </div>
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
