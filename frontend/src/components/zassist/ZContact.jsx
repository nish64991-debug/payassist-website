import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";

const CONTACT = {
    phone: { label: "90068 25043", href: "tel:9006825043" },
    email: { label: "support@zassist.co.in", href: "mailto:support@zassist.co.in" },
    hours: ["Monday to Friday", "10:00 AM – 7:00 PM IST", "Closed on public holidays"],
};

const HEAD_OFFICE = {
    label: "Registered Office",
    lines: [
        "PayAssist",
        "H.IN.KH.NO. 293, Western Marg Saidulajab,",
        "Near Kher Singh Estate,",
        "New Delhi – 110030, India",
    ],
};

const ZContact = () => (
    <section id="zassist-contact" data-testid="zassist-contact" className="relative overflow-hidden bg-[#050806] py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[360px] w-[720px] -translate-x-1/2 rounded-[100%] bg-[#22B14C]/[0.10] blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#22B14C]/30 bg-[#22B14C]/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ADE80]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22B14C]" />
                    Contact
                </span>
                <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                    Contact Us
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                    For support, protection plans or any other queries, get in touch with ZAssist Care.
                </p>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
                <Reveal>
                    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9" data-testid="zassist-contact-card">
                        <h3 className="font-display text-xl font-bold tracking-tight text-white">Get in touch</h3>
                        <div className="mt-6 space-y-3">
                            <a
                                href={CONTACT.phone.href}
                                data-testid="zassist-contact-phone"
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[#22B14C]/40"
                            >
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#22B14C]/15 text-[#4ADE80]">
                                    <Phone className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <span>
                                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Phone</span>
                                    <span className="block text-[15px] font-semibold text-white">{CONTACT.phone.label}</span>
                                </span>
                            </a>
                            <a
                                href={CONTACT.email.href}
                                data-testid="zassist-contact-email"
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[#22B14C]/40"
                            >
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#22B14C]/15 text-[#4ADE80]">
                                    <Mail className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <span>
                                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Email</span>
                                    <span className="block text-[15px] font-semibold text-white">{CONTACT.email.label}</span>
                                </span>
                            </a>
                            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4" data-testid="zassist-contact-hours">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#22B14C]/15 text-[#4ADE80]">
                                    <Clock className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <span>
                                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Support Hours</span>
                                    <span className="block text-[15px] font-semibold text-white">
                                        {CONTACT.hours[0]} · {CONTACT.hours[1]}
                                    </span>
                                    <span className="block text-xs text-slate-500">{CONTACT.hours[2]}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <div className="flex h-full flex-col rounded-3xl border border-[#22B14C]/25 bg-white/[0.03] p-7 sm:p-9" data-testid="zassist-office-card">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#22B14C]/30 bg-[#22B14C]/10 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4ADE80]">
                            <MapPin className="h-3.5 w-3.5" /> Head Office
                        </span>
                        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{HEAD_OFFICE.label}</p>
                        <address className="mt-3 font-display text-lg font-semibold not-italic leading-relaxed tracking-tight text-white sm:text-xl">
                            {HEAD_OFFICE.lines.map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </address>
                        <div className="mt-auto pt-8">
                            <Link
                                to="/"
                                data-testid="zassist-contact-back-home"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4ADE80] transition-colors hover:text-white"
                            >
                                <ArrowLeft className="h-4 w-4" /> Back to PayAssist home
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);

export default ZContact;
