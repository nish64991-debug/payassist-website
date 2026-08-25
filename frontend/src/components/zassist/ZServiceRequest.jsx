import { Phone, Mail, FileText, AlertCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

const DOCS = [
    "Aadhaar and PAN card copy",
    "Mobile purchase invoice",
    "Mobile damage images",
];

const ZServiceRequest = () => (
    <section id="zassist-service" data-testid="zassist-service" className="bg-[#070B09] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-16">
            <Reveal className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#22B14C]/30 bg-[#22B14C]/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ADE80]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22B14C]" />
                    Service Request
                </span>
                <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
                    Raising a request is simple.
                </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
                <Reveal>
                    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9" data-testid="zassist-service-card">
                        <h3 className="font-display text-xl font-bold tracking-tight text-white">How to raise a service request</h3>
                        <div className="mt-6 space-y-3">
                            <a
                                href="tel:9006825043"
                                data-testid="zassist-call-link"
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[#22B14C]/40"
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#22B14C]/15 text-[#4ADE80]">
                                    <Phone className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <span>
                                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Call us</span>
                                    <span className="block text-[15px] font-semibold text-white">90068 25043</span>
                                </span>
                            </a>
                            <a
                                href="mailto:support@zassist.co.in"
                                data-testid="zassist-email-link"
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[#22B14C]/40"
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#22B14C]/15 text-[#4ADE80]">
                                    <Mail className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <span>
                                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Email us</span>
                                    <span className="block text-[15px] font-semibold text-white">support@zassist.co.in</span>
                                </span>
                            </a>
                        </div>
                        <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                            <p className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-500">
                                <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                                Your retailer bears no responsibility for claim servicing.
                            </p>
                            <p className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-500">
                                <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                                No reimbursement is provided for repair or replacement.
                            </p>
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9" data-testid="zassist-docs-card">
                        <h3 className="font-display text-xl font-bold tracking-tight text-white">Required documents</h3>
                        <p className="mt-2 text-sm text-slate-400">Keep these ready for all claims.</p>
                        <ul className="mt-6 space-y-3">
                            {DOCS.map((d, i) => (
                                <li
                                    key={d}
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                                    data-testid={`zassist-doc-${i + 1}`}
                                >
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#22B14C]/15 text-[#4ADE80]">
                                        <FileText className="h-5 w-5" strokeWidth={1.8} />
                                    </span>
                                    <span className="text-sm font-medium text-slate-200">{d}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);

export default ZServiceRequest;
