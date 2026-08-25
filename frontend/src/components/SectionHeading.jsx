import Reveal from "@/components/Reveal";

const SectionHeading = ({ badge, title, sub, dark = false, align = "left", testId }) => (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
        <div data-testid={testId}>
            <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] ${
                    dark ? "border-white/15 bg-white/5 text-blue-400" : "border-brand/20 bg-brand-soft text-brand"
                }`}
            >
                <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-blue-400" : "bg-brand"}`} />
                {badge}
            </span>
            <h2
                className={`mt-6 font-display text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl lg:text-4xl ${
                    dark ? "text-white" : "text-slate-900"
                }`}
            >
                {title}
            </h2>
            {sub && (
                <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-slate-400" : "text-slate-600"}`}>
                    {sub}
                </p>
            )}
        </div>
    </Reveal>
);

export default SectionHeading;
