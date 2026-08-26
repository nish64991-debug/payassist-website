import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const LOGO_URL = "/assets/payassist-logo.png";

export const scrollToId = (id) => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(`#${id}`, { offset: -72, duration: 1.2 });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const BrandMark = ({ dark = false }) => (
    <Link to="/" data-testid="brand-logo" className="flex items-center">
        <span className={dark ? "rounded-xl bg-white px-3.5 py-2" : ""}>
            <img src={LOGO_URL} alt="PayAssist" className="h-8 w-auto sm:h-9" />
        </span>
    </Link>
);

const NAV_LINKS = [
    { id: "home", label: "Home" },
    { id: "why", label: "Why PayAssist" },
    { id: "solutions", label: "Solutions" },
    { id: "testimonials", label: "Trust" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const lastY = useRef(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handler = (y) => {
            setScrolled(y > 16);
            if (open) {
                setHidden(false);
            } else if (y < 96) {
                setHidden(false);
            } else if (y > lastY.current + 6) {
                setHidden(true);
            } else if (y < lastY.current - 6) {
                setHidden(false);
            }
            lastY.current = y;
        };
        const onScroll = () => handler(window.scrollY);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        const lenis = window.__lenis;
        const onLenis = (e) => handler(e.scroll);
        if (lenis) lenis.on("scroll", onLenis);
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (lenis) lenis.off("scroll", onLenis);
        };
    }, [open]);

    useEffect(() => {
        const raf = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    useEffect(() => setOpen(false), [location.pathname]);

    if (location.pathname !== "/") return null;

    const go = (id) => {
        setOpen(false);
        if (id === "home") {
            if (location.pathname !== "/") navigate("/");
            else {
                const lenis = window.__lenis;
                if (lenis) lenis.scrollTo(0, { duration: 1.2 });
                else window.scrollTo({ top: 0, behavior: "smooth" });
            }
            return;
        }
        if (location.pathname !== "/") navigate(`/#${id}`);
        else scrollToId(id);
    };

    return (
        <header
            data-testid="site-navbar"
            className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur-md transition-all duration-500 ease-out ${
                !mounted || (hidden && !open) ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
            } ${
                scrolled ? "shadow-[0_10px_30px_-12px_rgba(7,12,27,0.6)]" : ""
            }`}
        >
            {/* Dark premium PayAssist brand texture (reused from the former Hero background) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B132B_0%,#121E36_52%,#0B132B_100%)]" />
                <div className="absolute left-[22%] top-1/2 h-[320%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-brand/20 blur-[80px]" />
                <div className="absolute right-[20%] top-1/2 h-[300%] w-[32%] translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-radsafe/10 blur-[90px]" />
            </div>

            <div className="relative z-10 mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12">
                <BrandMark dark />

                <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex" data-testid="nav-desktop-links">
                    {NAV_LINKS.map((l) => (
                        <button
                            key={l.id}
                            data-testid={`nav-link-${l.id}`}
                            onClick={() => go(l.id)}
                            className="rounded-full px-4 py-2 text-[15px] font-medium text-slate-300 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-2.5 sm:gap-3">
                    <button
                        data-testid="nav-cta-contact-us"
                        onClick={() => go("contact")}
                        className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-navy-900 shadow-[0_4px_14px_-4px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-[1.03] hover:bg-slate-100 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                        Contact Us <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                    <button
                        data-testid="nav-mobile-toggle"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        className="grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 overflow-hidden border-t border-white/10 bg-navy-900 lg:hidden"
                        data-testid="nav-mobile-menu"
                    >
                        <div className="space-y-1 px-6 py-6">
                            {NAV_LINKS.map((l, i) => (
                                <motion.button
                                    key={l.id}
                                    initial={{ opacity: 0, x: -14 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.04 * i }}
                                    data-testid={`nav-mobile-link-${l.id}`}
                                    onClick={() => go(l.id)}
                                    className="block w-full rounded-xl px-4 py-3.5 text-left font-display text-2xl font-bold tracking-tight text-white transition-colors hover:bg-white/5"
                                >
                                    {l.label}
                                </motion.button>
                            ))}
                            <div className="flex gap-3 px-4 pt-4">
                                <Link
                                    to="/z-assist"
                                    data-testid="nav-mobile-link-z-assist"
                                    className="flex-1 rounded-full border border-emerald-400/40 px-4 py-3 text-center text-sm font-semibold text-emerald-300"
                                >
                                    Z Assist
                                </Link>
                                <Link
                                    to="/radsafe"
                                    data-testid="nav-mobile-link-radsafe"
                                    className="flex-1 rounded-full border border-cyan-400/40 px-4 py-3 text-center text-sm font-semibold text-cyan-300"
                                >
                                    RadSafe
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
