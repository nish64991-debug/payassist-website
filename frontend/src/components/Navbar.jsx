import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Menu, X, ArrowUpRight } from "lucide-react";

export const scrollToId = (id) => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(`#${id}`, { offset: -84, duration: 1.2 });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const SECTION_LINKS = [
    { id: "why", label: "Why PayAssist" },
    { id: "approach", label: "Approach" },
    { id: "solutions", label: "Solutions" },
    { id: "about", label: "Team" },
    { id: "testimonials", label: "Trust" },
];

export const BrandMark = ({ dark = false }) => (
    <Link to="/" data-testid="brand-logo" className="flex items-center gap-2.5 group">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30 transition-transform duration-300 group-hover:scale-105">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <span className={`font-display text-lg font-extrabold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>
            Pay<span className="text-brand">Assist</span>
        </span>
    </Link>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const onDarkPage = location.pathname !== "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [location.pathname]);

    const goSection = (id) => {
        setOpen(false);
        if (location.pathname !== "/") navigate(`/#${id}`);
        else scrollToId(id);
    };

    const dark = onDarkPage || !scrolled;

    return (
        <header
            data-testid="site-navbar"
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
                scrolled
                    ? "border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl"
                    : onDarkPage
                      ? "border-b border-white/10 bg-navy-900/80 backdrop-blur-xl"
                      : "border-b border-transparent bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-16">
                <BrandMark dark={dark} />

                <nav className="hidden items-center gap-1 lg:flex" data-testid="nav-desktop-links">
                    {SECTION_LINKS.map((l) => (
                        <button
                            key={l.id}
                            data-testid={`nav-link-${l.id}`}
                            onClick={() => goSection(l.id)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                                dark ? "text-slate-300 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                        >
                            {l.label}
                        </button>
                    ))}
                    <span className={`mx-2 h-5 w-px ${dark ? "bg-white/15" : "bg-slate-200"}`} />
                    <Link
                        to="/z-assist"
                        data-testid="nav-link-z-assist"
                        className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            dark ? "text-zassist hover:bg-white/10" : "text-emerald-600 hover:bg-emerald-50"
                        }`}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-zassist" /> Z Assist
                    </Link>
                    <Link
                        to="/radsafe"
                        data-testid="nav-link-radsafe"
                        className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            dark ? "text-radsafe hover:bg-white/10" : "text-cyan-600 hover:bg-cyan-50"
                        }`}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-radsafe" /> RadSafe
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        data-testid="nav-cta-get-protected"
                        onClick={() => goSection("contact")}
                        className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:scale-[1.03] hover:bg-brand-dark sm:flex"
                    >
                        Get Protected <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                        data-testid="nav-mobile-toggle"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        className={`grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ${
                            dark ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-100"
                        }`}
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="border-t border-white/10 bg-navy-900/95 backdrop-blur-xl lg:hidden"
                        data-testid="nav-mobile-menu"
                    >
                        <div className="space-y-1 px-6 py-6">
                            {SECTION_LINKS.map((l, i) => (
                                <motion.button
                                    key={l.id}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                    data-testid={`nav-mobile-link-${l.id}`}
                                    onClick={() => goSection(l.id)}
                                    className="block w-full rounded-xl px-4 py-3 text-left font-display text-xl font-bold text-white hover:bg-white/10"
                                >
                                    {l.label}
                                </motion.button>
                            ))}
                            <div className="flex gap-3 pt-4">
                                <Link
                                    to="/z-assist"
                                    data-testid="nav-mobile-link-z-assist"
                                    className="flex-1 rounded-xl border border-zassist/30 px-4 py-3 text-center text-sm font-semibold text-zassist"
                                >
                                    Z Assist
                                </Link>
                                <Link
                                    to="/radsafe"
                                    data-testid="nav-mobile-link-radsafe"
                                    className="flex-1 rounded-xl border border-radsafe/30 px-4 py-3 text-center text-sm font-semibold text-radsafe"
                                >
                                    RadSafe
                                </Link>
                            </div>
                            <button
                                data-testid="nav-mobile-cta"
                                onClick={() => goSection("contact")}
                                className="mt-3 w-full rounded-xl bg-brand px-4 py-3.5 text-sm font-semibold text-white"
                            >
                                Get Protected
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
