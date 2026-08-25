import { useMemo, useState } from "react";
import { ShieldCheck, Info } from "lucide-react";
import Reveal from "@/components/Reveal";

const PLANS = [
    { id: "adld", label: "ADLD", hint: "Accidental & liquid damage", rate: "10–15%" },
    { id: "screen", label: "One-Time Screen Replacement", hint: "Front display breakage", rate: "9%" },
    { id: "extended", label: "Extended Warranty", hint: "Beyond manufacturer warranty", rate: "5%" },
];

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

const ZCalculator = () => {
    const [value, setValue] = useState("");
    const [plan, setPlan] = useState("adld");
    const [duration, setDuration] = useState(1);

    const deviceValue = useMemo(() => {
        const n = Number(value);
        return Number.isFinite(n) && n > 0 ? Math.round(n) : 0;
    }, [value]);

    const result = useMemo(() => {
        if (!deviceValue) return null;
        let rate;
        if (plan === "adld") {
            if (deviceValue > 250000) return { ineligible: true };
            rate = duration === 1 ? (deviceValue <= 50000 ? 0.1 : 0.12) : 0.15;
        } else if (plan === "screen") {
            rate = 0.09;
        } else {
            rate = 0.05;
        }
        const price = Math.round(deviceValue * rate);
        const copay = Math.max(599, Math.round(deviceValue * 0.05));
        return { rate, price, copay };
    }, [deviceValue, plan, duration]);

    const selectedPlan = PLANS.find((p) => p.id === plan);

    return (
        <section id="zassist-calculator" data-testid="zassist-calculator" className="relative overflow-hidden bg-[#0A0F0C] py-20 lg:py-28">
            <div className="pointer-events-none absolute left-[-8%] top-[20%] h-[400px] w-[520px] rounded-[100%] bg-[#22B14C]/[0.08] blur-[140px]" aria-hidden="true" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-16">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#22B14C]/30 bg-[#22B14C]/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ADE80]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#22B14C]" />
                        Plan Calculator
                    </span>
                    <h2 className="mt-7 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                        Configure your protection.
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Enter your device's invoice value, choose a plan and see your price instantly.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-12 grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:mt-16 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <label htmlFor="zassist-device-value" className="block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                Device Value
                            </label>
                            <div className="relative mt-3">
                                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-slate-500">₹</span>
                                <input
                                    id="zassist-device-value"
                                    data-testid="zassist-input-value"
                                    type="number"
                                    min="0"
                                    inputMode="numeric"
                                    placeholder="e.g. 45,000"
                                    value={value}
                                    onChange={(e) => {
                                        const v = e.target.value;
                                        if (v === "" || Number(v) >= 0) setValue(v);
                                    }}
                                    className="w-full rounded-2xl border border-white/15 bg-[#070B09] py-4 pl-10 pr-4 text-lg font-semibold text-white placeholder:text-slate-600 outline-none transition-colors focus:border-[#22B14C] focus:ring-2 focus:ring-[#22B14C]/20"
                                />
                            </div>

                            <p className="mt-8 block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                Select Protection
                            </p>
                            <div className="mt-3 space-y-3" role="radiogroup" aria-label="Protection plan">
                                {PLANS.map((p) => (
                                    <button
                                        key={p.id}
                                        type="button"
                                        role="radio"
                                        aria-checked={plan === p.id}
                                        data-testid={`zassist-plan-${p.id}`}
                                        onClick={() => setPlan(p.id)}
                                        className={`flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                                            plan === p.id
                                                ? "border-[#22B14C] bg-[#22B14C]/10 shadow-[0_0_0_1px_#22B14C]"
                                                : "border-white/10 bg-white/[0.03] hover:border-white/25"
                                        }`}
                                    >
                                        <span>
                                            <span className="block text-[15px] font-semibold text-white">{p.label}</span>
                                            <span className="mt-0.5 block text-xs text-slate-500">{p.hint}</span>
                                        </span>
                                        <span className={`rounded-full px-3 py-1 font-mono text-[11px] font-bold ${plan === p.id ? "bg-[#22B14C] text-white" : "bg-white/5 text-slate-400"}`}>
                                            {p.rate}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {plan === "adld" && (
                                <div className="mt-6">
                                    <p className="block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                        Duration
                                    </p>
                                    <div className="mt-3 grid grid-cols-2 gap-3">
                                        {[1, 2].map((y) => (
                                            <button
                                                key={y}
                                                type="button"
                                                data-testid={`zassist-duration-${y}`}
                                                onClick={() => setDuration(y)}
                                                className={`rounded-2xl border px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                                                    duration === y
                                                        ? "border-[#22B14C] bg-[#22B14C]/10 text-white shadow-[0_0_0_1px_#22B14C]"
                                                        : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25"
                                                }`}
                                            >
                                                {y} Year{y > 1 ? "s" : ""}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col rounded-3xl border border-[#22B14C]/25 bg-gradient-to-b from-[#22B14C]/[0.10] to-transparent p-7 sm:p-9" data-testid="zassist-result-panel">
                            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ADE80]">
                                Estimated Plan Price
                            </p>
                            <p className="mt-4 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl" data-testid="zassist-price">
                                {result && !result.ineligible ? inr.format(result.price) : "—"}
                            </p>

                            {result?.ineligible ? (
                                <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-amber-400" data-testid="zassist-ineligible">
                                    <Info className="mt-0.5 h-4 w-4 shrink-0" />
                                    ADLD plans are available for devices up to ₹2,50,000 invoice value. Screen
                                    Replacement and Extended Warranty remain available across all price bands.
                                </p>
                            ) : (
                                <div className="mt-6 space-y-3 text-sm" data-testid="zassist-summary">
                                    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                                        <span className="text-slate-400">Plan</span>
                                        <span className="text-right font-semibold text-white">{selectedPlan.label}</span>
                                    </div>
                                    {plan === "adld" && (
                                        <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                                            <span className="text-slate-400">Duration</span>
                                            <span className="font-semibold text-white">{duration} Year{duration > 1 ? "s" : ""}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                                        <span className="text-slate-400">Rate</span>
                                        <span className="font-semibold text-white">{result ? `${(result.rate * 100).toFixed(0)}% of invoice value` : "—"}</span>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <span className="text-slate-400">Applicable copayment</span>
                                        <span className="font-semibold text-[#4ADE80]" data-testid="zassist-copay">
                                            {result ? inr.format(result.copay) : "—"}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <a
                                href={`mailto:support.zassistcare@payassist.in?subject=${encodeURIComponent("ZAssist Plan Enquiry")}&body=${encodeURIComponent(
                                    result && !result.ineligible
                                        ? `Hi PayAssist team,\n\nI'd like to protect my device with ZAssist Care.\n\nDevice value: ${inr.format(deviceValue)}\nPlan: ${selectedPlan.label}${plan === "adld" ? ` (${duration} year${duration > 1 ? "s" : ""})` : ""}\nEstimated plan price: ${inr.format(result.price)}\n\nPlease help me get started.`
                                        : "Hi PayAssist team,\n\nI'd like to know more about ZAssist Care protection plans."
                                )}`}
                                data-testid="zassist-get-protected"
                                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#22B14C] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#22B14C]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#1d9e43]"
                            >
                                <ShieldCheck className="h-4 w-4" /> Get Protected
                            </a>
                            <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                                A copayment of ₹599 or 5% of the device cost — whichever is higher — applies at the
                                time of claim.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ZCalculator;
