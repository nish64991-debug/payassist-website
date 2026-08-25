import { useNavigate, Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";

const ZCta = () => {
    const navigate = useNavigate();
    return (
        <section data-testid="zassist-cta" className="relative overflow-hidden bg-[#050806] py-20 lg:py-28">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[#22B14C]/[0.12] blur-[140px]" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-8">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ADE80]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#22B14C]" />
                        Part of the PayAssist ecosystem
                    </span>
                    <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                        Ready to protect your device?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Talk to the PayAssist team to activate your ZAssist Care plan or ask anything about coverage.
                    </p>
                </Reveal>
                <Reveal delay={0.12}>
                    <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                        <button
                            data-testid="zassist-contact-cta"
                            onClick={() => navigate("/#contact")}
                            className="flex items-center gap-2 rounded-full bg-[#22B14C] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#22B14C]/25 transition-all duration-300 hover:scale-[1.03] hover:bg-[#1d9e43]"
                        >
                            Contact PayAssist <ArrowUpRight className="h-4 w-4" />
                        </button>
                        <Link
                            to="/"
                            data-testid="zassist-cta-back-home"
                            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                        >
                            <ArrowLeft className="h-4 w-4" /> PayAssist home
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ZCta;
