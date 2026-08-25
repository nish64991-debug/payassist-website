import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

const RadCta = () => {
    const navigate = useNavigate();
    return (
        <section data-testid="radsafe-cta" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[#C2A15C]/[0.12] blur-[140px]" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-8">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8BC7F]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C2A15C]" />
                        Part of the PayAssist ecosystem
                    </span>
                    <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                        Questions about RadSafe?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Talk to the PayAssist team — we'll help you understand RadSafe, availability and how it fits
                        your everyday carry.
                    </p>
                </Reveal>
                <Reveal delay={0.12}>
                    <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                        <button
                            data-testid="radsafe-contact-cta"
                            onClick={() => navigate("/#contact")}
                            className="flex items-center gap-2 rounded-full bg-[#C2A15C] px-8 py-4 text-sm font-semibold text-navy-950 shadow-xl shadow-[#C2A15C]/25 transition-all duration-300 hover:scale-[1.03] hover:bg-[#D8BC7F]"
                        >
                            Contact PayAssist <ArrowUpRight className="h-4 w-4" />
                        </button>
                        <a
                            href="mailto:support.zassistcare@payassist.in?subject=RadSafe%20Enquiry"
                            data-testid="radsafe-email-link"
                            className="flex items-center gap-2 break-all rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                        >
                            <Mail className="h-4 w-4" /> support.zassistcare@payassist.in
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default RadCta;
