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
        <section id="hero" ref={sectionRef} data-testid="hero-section" className="relative overflow-hidden bg-navy-900 pt-[72px]">
            {/* Ambient PayAssist-brand environment for the space around the 16:9 frame (primarily mobile) */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B132B_0%,#0E1730_50%,#0B132B_100%)]" />
                <div className="absolute left-1/2 top-0 h-[45%] w-[120%] -translate-x-1/2 rounded-[100%] bg-brand/10 blur-[110px]" />
                <div className="absolute bottom-0 left-1/2 h-[40%] w-[110%] -translate-x-1/2 rounded-[100%] bg-radsafe/[0.07] blur-[120px]" />
            </div>

            {/*
                Responsive hero media:
                - <1024px (phones/tablets): true full-bleed cinematic. Fills the exact
                  viewport height (dvh, with svh/vh fallbacks) minus the 72px fixed header.
                  object-cover keeps a single continuous video edge-to-edge (no side
                  strips / letterbox). A small breakpoint-scaled zoom pulls the dome +
                  device row forward so the subject reads clearly on portrait screens
                  instead of sitting tiny inside a wide 16:9 frame. Focal point is kept
                  slightly above centre so the dome apex and device row stay in view while
                  trimming excess sky/foreground.
                - >=1024px (laptop/desktop): unchanged reference — natural full-width
                  16:9 (object-contain, height follows the video), no crop, no zoom.
            */}
            <div className="relative h-hero-mobile w-full overflow-hidden lg:h-auto lg:overflow-visible">
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
                        className="h-full w-full origin-center scale-[1.15] object-cover object-[50%_46%] will-change-transform xs:scale-[1.1] sm:scale-[1.05] md:scale-100 md:object-center lg:h-auto lg:scale-100 lg:object-contain lg:object-center"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
