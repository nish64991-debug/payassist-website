import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

const EMAIL = "support.zassistcare@payassist.in";
const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const INTERESTS = ["Z Assist", "RadSafe", "Partnership", "General Enquiry", "Other"];

const INITIAL = { name: "", email: "", phone: "", company: "", interest: "Z Assist", message: "" };

const validate = (f) => {
    const e = {};
    if (!f.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
    if (!/^[+\d][\d\s()-]{7,17}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!f.company.trim()) e.company = "Please enter your company.";
    if (!f.message.trim()) e.message = "Please tell us how we can help.";
    return e;
};

const fieldClass = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-brand focus:ring-2 focus:ring-brand/15 ${
        hasError ? "border-red-400" : "border-slate-200"
    }`;

const Contact = () => {
    const [form, setForm] = useState(INITIAL);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    const set = (key) => (e) => {
        setForm({ ...form, [key]: e.target.value });
        if (errors[key]) setErrors({ ...errors, [key]: undefined });
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const errs = validate(form);
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setStatus("submitting");
        try {
            const fd = new FormData();
            fd.append("access_key", ACCESS_KEY || "");
            fd.append("subject", "New PayAssist Website Enquiry");
            fd.append("from_name", "PayAssist Website");
            fd.append("name", form.name.trim());
            fd.append("email", form.email.trim());
            fd.append("phone", form.phone.trim());
            fd.append("company", form.company.trim());
            fd.append("interest", form.interest);
            fd.append("message", form.message.trim());

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: fd,
            });
            const result = await res.json();
            if (!res.ok || !result.success) throw new Error(result.message || "Submission failed");

            setStatus("success");
            setForm(INITIAL);
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" data-testid="contact-section" className="relative overflow-hidden bg-[#14181F] py-20 lg:py-28">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute left-[-10%] top-0 h-[420px] w-[620px] rounded-[100%] bg-slate-500/10 blur-[130px]" />
                <div className="absolute bottom-0 right-[-8%] h-[360px] w-[560px] rounded-[100%] bg-brand/[0.12] blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
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
                            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
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
                                <span>
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

                    <Reveal delay={0.12}>
                        <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.5)] sm:p-8" data-testid="contact-form-card">
                            {status === "success" ? (
                                <div className="flex min-h-[420px] flex-col items-center justify-center text-center" data-testid="contact-success">
                                    <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-500">
                                        <CheckCircle2 className="h-8 w-8" strokeWidth={1.6} />
                                    </span>
                                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-slate-900">
                                        Message sent
                                    </h3>
                                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
                                        Thanks — your message has been sent. We'll get back to you soon.
                                    </p>
                                    <button
                                        data-testid="contact-send-another"
                                        onClick={() => setStatus("idle")}
                                        className="mt-7 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand hover:text-brand"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate data-testid="contact-form">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="contact-name" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
                                                Name
                                            </label>
                                            <input
                                                id="contact-name"
                                                data-testid="contact-input-name"
                                                type="text"
                                                autoComplete="name"
                                                placeholder="Your full name"
                                                value={form.name}
                                                onChange={set("name")}
                                                className={fieldClass(errors.name)}
                                            />
                                            {errors.name && <p className="mt-1.5 text-xs text-red-500" data-testid="contact-error-name">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="contact-email" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
                                                Email
                                            </label>
                                            <input
                                                id="contact-email"
                                                data-testid="contact-input-email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="you@company.com"
                                                value={form.email}
                                                onChange={set("email")}
                                                className={fieldClass(errors.email)}
                                            />
                                            {errors.email && <p className="mt-1.5 text-xs text-red-500" data-testid="contact-error-email">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="contact-phone" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
                                                Phone Number
                                            </label>
                                            <input
                                                id="contact-phone"
                                                data-testid="contact-input-phone"
                                                type="tel"
                                                autoComplete="tel"
                                                placeholder="+91 98765 43210"
                                                value={form.phone}
                                                onChange={set("phone")}
                                                className={fieldClass(errors.phone)}
                                            />
                                            {errors.phone && <p className="mt-1.5 text-xs text-red-500" data-testid="contact-error-phone">{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="contact-company" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
                                                Company
                                            </label>
                                            <input
                                                id="contact-company"
                                                data-testid="contact-input-company"
                                                type="text"
                                                autoComplete="organization"
                                                placeholder="Company name"
                                                value={form.company}
                                                onChange={set("company")}
                                                className={fieldClass(errors.company)}
                                            />
                                            {errors.company && <p className="mt-1.5 text-xs text-red-500" data-testid="contact-error-company">{errors.company}</p>}
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="contact-interest" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
                                            Interest
                                        </label>
                                        <select
                                            id="contact-interest"
                                            data-testid="contact-input-interest"
                                            value={form.interest}
                                            onChange={set("interest")}
                                            className={`${fieldClass(false)} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2364748b%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpath d=%22m6 9 6 6 6-6%22/%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
                                        >
                                            {INTERESTS.map((o) => (
                                                <option key={o} value={o}>
                                                    {o}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="contact-message" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            data-testid="contact-input-message"
                                            rows={4}
                                            placeholder="How can we help?"
                                            value={form.message}
                                            onChange={set("message")}
                                            className={`${fieldClass(errors.message)} resize-none`}
                                        />
                                        {errors.message && <p className="mt-1.5 text-xs text-red-500" data-testid="contact-error-message">{errors.message}</p>}
                                    </div>

                                    <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" style={{ display: "none" }} />

                                    <button
                                        type="submit"
                                        data-testid="contact-submit-button"
                                        disabled={status === "submitting"}
                                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>

                                    {status === "error" && (
                                        <p className="mt-4 flex items-start gap-2 text-sm text-red-500" data-testid="contact-error-banner" role="alert">
                                            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                                            <span>
                                                Something went wrong. Please try again or email us directly at{" "}
                                                <a href={`mailto:${EMAIL}`} className="font-semibold underline">
                                                    {EMAIL}
                                                </a>
                                                .
                                            </span>
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
