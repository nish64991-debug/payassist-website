import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { scrollToId } from "@/components/Navbar";

const Contact = () => (
    <section id="contact" data-testid="contact-section" className="relative overflow-hidden bg-navy-950 py-24 lg:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[160px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-8">
            <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Contact
                </span>
            </Reveal>
            <Reveal delay={0.1}>
                <h2 className="mt-7 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Ready to safeguard
                    <br />
                    your <span className="text-brand">digital life?</span>
                </h2>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                    Talk to the PayAssist team about device protection, RadSafe programmes, or partnership opportunities.
                </p>
            </Reveal>
            <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="mailto:hello@payassist.com"
                        data-testid="contact-email-cta"
                        className="flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-brand/40 transition-all duration-300 hover:scale-[1.03] hover:bg-brand-dark"
                    >
                        <Mail className="h-4 w-4" /> Talk to our team
                    </a>
                    <button
                        data-testid="contact-explore-cta"
                        onClick={() => scrollToId("solutions")}
                        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                    >
                        Explore solutions <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </Reveal>
            <Reveal delay={0.4}>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
                    Average response time — under one business day
                </p>
            </Reveal>
        </div>
    </section>
);

export default Contact;
