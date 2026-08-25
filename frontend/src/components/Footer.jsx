import { Link, useLocation, useNavigate } from "react-router-dom";
import { BrandMark, scrollToId } from "@/components/Navbar";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const goSection = (id) => {
        if (location.pathname !== "/") navigate(`/#${id}`);
        else scrollToId(id);
    };

    return (
        <footer className="border-t border-white/10 bg-navy-950" data-testid="site-footer">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-16">
                <div className="grid gap-12 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <BrandMark dark />
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
                            The mother brand for total consumer technology protection — device cover through Z Assist,
                            responsible-technology wellbeing through RadSafe.
                        </p>
                        <div
                            data-testid="footer-status-pill"
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300">
                                All systems operational
                            </span>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Explore</p>
                        <ul className="mt-5 space-y-3 text-sm">
                            {[
                                ["why", "Why PayAssist"],
                                ["approach", "Our Approach"],
                                ["solutions", "Solutions"],
                                ["testimonials", "Trust"],
                                ["contact", "Contact"],
                            ].map(([id, label]) => (
                                <li key={id}>
                                    <button
                                        data-testid={`footer-link-${id}`}
                                        onClick={() => goSection(id)}
                                        className="text-slate-400 transition-colors hover:text-white"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Solutions</p>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <Link to="/z-assist" data-testid="footer-link-z-assist" className="text-slate-400 transition-colors hover:text-zassist">
                                    Z Assist
                                </Link>
                            </li>
                            <li>
                                <Link to="/radsafe" data-testid="footer-link-radsafe" className="text-slate-400 transition-colors hover:text-radsafe">
                                    RadSafe
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-3">
                        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Contact</p>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <a href="mailto:support.zassistcare@payassist.in" data-testid="footer-email-link" className="text-slate-400 transition-colors hover:text-white">
                                    support.zassistcare@payassist.in
                                </a>
                            </li>
                            <li className="text-slate-500">Privacy &amp; legal — coming with final copy</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
                    <p className="text-xs text-slate-500">© 2026 PayAssist. All rights reserved.</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-600">
                        Z Assist · RadSafe · One standard of care
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
