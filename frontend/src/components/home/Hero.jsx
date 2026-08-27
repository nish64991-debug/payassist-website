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
        <section id="hero" ref={sectionRef} data-testid="hero-section" className="relative overflow-hidden bg-[#F1F6FC] pt-[72px] pb-14 sm:pb-16 lg:pb-24">
            {/* Premium brand statement — clean light hero. Headline vertically centered in the
                white space between the navbar and the video via symmetric top padding / bottom margin. */}
            <div className="relative z-[1] px-6 pt-16 text-center sm:pt-20 lg:pt-24" data-testid="hero-tagline">
                <h1 className="mx-auto max-w-4xl font-display text-[1.9rem] font-bold leading-[1.12] tracking-tight xs:text-[2.15rem] sm:text-5xl lg:text-6xl">
                    <span className="block text-navy-900">Technology We Trust.</span>
                    <span className="block text-[#0C2A4E]">Protection We Need.</span>
                </h1>
            </div>

            {/*
                Hero video — the existing 16:9 brand film shown COMPLETE (object-contain, no
                crop, no distortion) on every breakpoint, inside a premium rounded/shadowed
                frame that sits on the clean light background. Responsive width only.
            */}
            <div className="relative z-[1] mx-auto mt-16 w-full max-w-[560px] px-4 sm:mt-20 sm:px-6 md:max-w-4xl lg:mt-24 lg:max-w-6xl lg:px-8">
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
        </section>
    );
};

export default Hero;
