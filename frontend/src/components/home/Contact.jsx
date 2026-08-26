import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

const EMAIL = "support.zassistcare@payassist.in";

const Contact = () => {
    return (
        <section id="contact" data-testid="contact-section" className="relative overflow-hidden bg-[#14181F] py-20 lg:py-28">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute left-[-10%] top-0 h-[420px] w-[620px] rounded-[100%] bg-slate-500/10 blur-[130px]" />
                <div className="absolute bottom-0 right-[-8%] h-[360px] w-[560px] rounded-[100%] bg-brand/[0.12] blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-8">
                <Reveal>
                    <div>
                        <span
                            data-testid="contact-label"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                            Contact
                        </span>
                        <h2
                            data-testid="contact-heading"
                            className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]"
                        >
                            Let's Build a More
                            <br />
                            Protected Future.
                        </h2>
                        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
                            Whether you're looking for a protection solution, a partnership opportunity, or simply
                            want to know more about PayAssist, we'd love to hear from you.
                        </p>
                        <a
                            href={`mailto:${EMAIL}`}
                            data-testid="contact-email-link"
                            className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors duration-300 hover:border-brand/50 hover:bg-white/10"
                        >
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-blue-400 transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                                <Mail className="h-5 w-5" strokeWidth={1.8} />
                            </span>
                            <span className="text-left">
                                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                    Email us directly
                                </span>
                                <span className="block text-[15px] font-semibold text-white">{EMAIL}</span>
                            </span>
                        </a>
                        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
                            Average response time — under one business day
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
