import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const HERO_VIDEO_URL = "/assets/payassist-brand-film.mp4";

const Hero = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const autoScrolledRef = useRef(false);

    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;
        if (!video || !section) return;

        const onEnded = () => {
            if (autoScrolledRef.current) return;
            if (window.scrollY < window.innerHeight * 0.35) {
                autoScrolledRef.current = true;
                const lenis = window.__lenis;
                if (lenis) lenis.scrollTo("#brands", { offset: 0, duration: 1.4 });
                else document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" });
            }
        };
        video.addEventListener("ended", onEnded);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.5) {
                    autoScrolledRef.current = false;
                    if (video.paused || video.ended || video.currentTime > 0.25) {
                        video.currentTime = 0;
                        video.play().catch(() => {});
                    }
                }
            },
            { threshold: [0.5] }
        );
        observer.observe(section);

        return () => {
            video.removeEventListener("ended", onEnded);
            observer.disconnect();
        };
    }, []);

    return (
        <section id="hero" ref={sectionRef} data-testid="hero-section" className="relative overflow-hidden bg-navy-900 pt-[72px] pb-10 md:pb-0">
            {/* Ambient PayAssist-brand environment for the space around the 16:9 frame (primarily mobile) */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B132B_0%,#0E1730_50%,#0B132B_100%)]" />
                <div className="absolute left-1/2 top-0 h-[45%] w-[120%] -translate-x-1/2 rounded-[100%] bg-brand/10 blur-[110px]" />
                <div className="absolute bottom-0 left-1/2 h-[40%] w-[110%] -translate-x-1/2 rounded-[100%] bg-radsafe/[0.07] blur-[120px]" />
            </div>

            {/* Mobile-only (<768px) premium brand statement above the video. Hidden on tablet/desktop. */}
            <div className="relative z-[1] px-6 pb-6 pt-7 text-center md:hidden" data-testid="hero-mobile-tagline">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    PayAssist
                </span>
                <h1 className="mt-4 font-display text-[1.7rem] font-bold leading-[1.15] tracking-tight text-white xs:text-[1.9rem]">
                    Protection. Innovation.
                    <br />
                    Peace of Mind.
                </h1>
            </div>

            {/*
                Responsive hero media:
                - <768px (phones): NEW composition. The COMPLETE 16:9 video is shown in a
                  natural aspect-video frame (object-contain) below the brand tagline — no
                  crop, no distortion, no cover zoom. Subtle rounded/ringed inset frame.
                - 768–1023px (tablet): UNCHANGED — full-viewport cover cinematic
                  (.h-hero-mobile is scoped to this range in index.css).
                - >=1024px (laptop/desktop): UNCHANGED reference — natural full-width 16:9
                  (object-contain, height follows the video).
            */}
            <div className="relative z-[1] px-4 md:px-0">
                <div className="relative mx-auto aspect-video h-hero-mobile w-full max-w-[560px] overflow-hidden rounded-2xl ring-1 ring-white/10 md:mx-0 md:aspect-auto md:max-w-none md:rounded-none md:ring-0 lg:h-auto lg:overflow-visible">
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
                            className="h-full w-full object-contain object-center md:object-cover md:object-center lg:h-auto lg:object-contain lg:object-center"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
