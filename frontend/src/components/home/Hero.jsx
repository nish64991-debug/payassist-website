import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const HERO_VIDEO_URL = "/assets/payassist-brand-film.mp4";
export const HERO_VIDEO_MOBILE_URL = "/assets/payassist-hero-mobile.mp4";

const Hero = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const mobileVideoRef = useRef(null);
    const autoScrolledRef = useRef(false);

    useEffect(() => {
        const section = sectionRef.current;
        const videos = [videoRef.current, mobileVideoRef.current].filter(Boolean);
        if (!section || videos.length === 0) return;

        const onEnded = () => {
            if (autoScrolledRef.current) return;
            if (window.scrollY < window.innerHeight * 0.35) {
                autoScrolledRef.current = true;
                const lenis = window.__lenis;
                if (lenis) lenis.scrollTo("#brands", { offset: 0, duration: 1.4 });
                else document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" });
            }
        };
        videos.forEach((v) => v.addEventListener("ended", onEnded));

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.5) {
                    autoScrolledRef.current = false;
                    videos.forEach((v) => {
                        // only the currently-visible video (the other is display:none)
                        if (v.offsetParent === null) return;
                        if (v.paused || v.ended || v.currentTime > 0.25) {
                            v.currentTime = 0;
                            v.play().catch(() => {});
                        }
                    });
                }
            },
            { threshold: [0.5] }
        );
        observer.observe(section);

        return () => {
            videos.forEach((v) => v.removeEventListener("ended", onEnded));
            observer.disconnect();
        };
    }, []);

    return (
        <section id="hero" ref={sectionRef} data-testid="hero-section" className="relative overflow-hidden bg-[#F1F6FC]">
            {/*
                MOBILE / PHONE (< md) — full-bleed cinematic 9:16 vertical video ONLY.
                No headline, no PayAssist pill, no extra copy. Video shown COMPLETE at its
                natural 9:16 aspect (object-contain, edge-to-edge width, no crop / no distortion).
            */}
            <div className="md:hidden pt-[72px]">
                <div className="aspect-[9/16] w-full overflow-hidden bg-[#F1F6FC]">
                    <video
                        ref={mobileVideoRef}
                        data-testid="hero-video-mobile"
                        src={HERO_VIDEO_MOBILE_URL}
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        className="block h-full w-full object-cover"
                    />
                </div>
            </div>

            {/*
                TABLET + DESKTOP (>= md) — UNCHANGED existing composition:
                premium tagline + COMPLETE 16:9 brand film in a rounded/shadowed frame.
            */}
            <div className="hidden md:block pb-16 lg:pb-24">
                <div className="relative z-[1] px-6 pt-24 text-center" data-testid="hero-tagline">
                    <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.12] tracking-tight lg:text-6xl">
                        <span className="block text-navy-900">Technology We Trust.</span>
                        <span className="block text-[#0C2A4E]">Protection We Need.</span>
                    </h1>
                </div>

                <div className="relative z-[1] mx-auto mt-20 w-full max-w-4xl px-6 lg:mt-24 lg:max-w-6xl lg:px-8">
                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-white ring-1 ring-slate-900/5 shadow-[0_30px_70px_-24px_rgba(11,19,43,0.28)] lg:rounded-3xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.985 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full w-full"
                        >
                            <video
                                ref={videoRef}
                                data-testid="hero-video"
                                src={HERO_VIDEO_URL}
                                poster="/assets/hero-poster.jpg"
                                autoPlay
                                muted
                                playsInline
                                preload="auto"
                                className="h-full w-full object-contain object-center"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
