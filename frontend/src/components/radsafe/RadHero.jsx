import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { scrollToId } from "@/components/Navbar";

const RadHero = () => (
    <section data-testid="radsafe-hero" className="relative overflow-hidden bg-navy-950 pt-[72px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[620px] rounded-[100%] bg-[#C2A15C]/[0.13] blur-[140px]" />
            <div className="absolute bottom-[-20%] left-[-8%] h-[380px] w-[480px] rounded-[100%] bg-brand/10 blur-[130px]" />
            <svg className="absolute inset-0 h-full w-full opacity-[0.06]" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
                <path d="M-60,620 C320,520 620,700 900,600 C1180,500 1300,640 1520,560" fill="none" stroke="#C2A15C" strokeWidth="1.2" />
                <path d="M-60,660 C320,560 620,740 900,640 C1180,540 1300,680 1520,600" fill="none" stroke="#C2A15C" strokeWidth="1" />
                <path d="M-60,580 C320,480 620,660 900,560 C1180,460 1300,600 1520,520" fill="none" stroke="#C2A15C" strokeWidth="0.8" />
            </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-8 lg:min-h-[calc(100svh-72px)] lg:grid-cols-2 lg:gap-16 lg:py-0 lg:px-16">
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4"
                >
                    <span className="flex h-16 items-center rounded-2xl bg-white px-5 shadow-xl shadow-black/30">
                        <img src="/assets/radsafe-logo.png" alt="RadSafe logo" className="h-10 w-auto" />
                    </span>
                    <span className="rounded-full border border-[#C2A15C]/30 bg-[#C2A15C]/10 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D8BC7F]">
                        A PayAssist Solution Vertical
                    </span>
                </motion.div>

                <h1 className="mt-9 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" data-testid="radsafe-heading">
                    {["RadSafe", "Anti-Radiation Chip"].map((line, i) => (
                        <span key={line} className="block overflow-hidden pb-1">
                            <motion.span
                                initial={{ y: "112%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                                className={`block ${i === 1 ? "text-[#D8BC7F]" : ""}`}
                            >
                                {line}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg"
                >
                    Smart protection for your everyday smartphone use — a compact, elegant chip designed around
                    responsible, connected living.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-9 flex flex-wrap items-center gap-4"
                >
                    <button
                        data-testid="radsafe-cta-explore-benefits"
                        onClick={() => scrollToId("radsafe-benefits")}
                        className="flex items-center gap-2 rounded-full bg-[#C2A15C] px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-xl shadow-[#C2A15C]/25 transition-all duration-300 hover:scale-[1.03] hover:bg-[#D8BC7F]"
                    >
                        Explore Benefits <ArrowDown className="h-4 w-4" />
                    </button>
                    <Link
                        to="/"
                        data-testid="radsafe-back-home"
                        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to PayAssist
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 36, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
            >
                <div className="absolute -inset-6 rounded-[36px] bg-[#C2A15C]/10 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[28px] border border-[#C2A15C]/25 shadow-2xl shadow-black/50">
                    <img
                        src="/assets/radsafe/phone-chip.jpeg"
                        alt="RadSafe anti-radiation chip applied to a smartphone, with premium RadSafe packaging"
                        data-testid="radsafe-hero-image"
                        className="h-[340px] w-full object-cover object-center sm:h-[440px] lg:h-[520px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/70 to-transparent" aria-hidden="true" />
                </div>
            </motion.div>
        </div>
    </section>
);

export default RadHero;
