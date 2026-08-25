import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { scrollToId } from "@/components/Navbar";

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
                scrollToId("brands");
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

            <div className="relative flex min-h-[calc(100svh-72px)] items-center justify-center px-3 py-6 sm:px-5 lg:block lg:min-h-0 lg:p-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
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
                        className="aspect-video w-full rounded-xl object-contain shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:rounded-2xl lg:rounded-none lg:shadow-none lg:ring-0"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
