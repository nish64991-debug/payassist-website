import { useState } from "react";
import Reveal from "@/components/Reveal";

const BRANDS = [
    { name: "Voltas", wordmark: "VOLTAS", wordClass: "font-display text-lg font-extrabold italic tracking-tight text-[#1B6AC9] lg:text-xl" },
    { name: "Haier", logo: "/assets/brands/haier.svg", kind: "mark" },
    { name: "Oppo", logo: "/assets/brands/oppo.svg", kind: "mark" },
    { name: "Samsung", logo: "/assets/brands/samsung.svg", kind: "mark" },
    { name: "Apple", logo: "/assets/brands/apple.svg", kind: "glyph" },
    { name: "Mi", logo: "/assets/brands/xiaomi.svg", kind: "glyph" },
    { name: "OnePlus", logo: "/assets/brands/oneplus.svg", kind: "glyph" },
    { name: "Google", logo: "/assets/brands/google.svg", kind: "glyph" },
    { name: "Sony", logo: "/assets/brands/sony.svg", kind: "mark" },
    { name: "Dell", logo: "/assets/brands/dell.svg", kind: "glyph" },
    { name: "Lenovo", logo: "/assets/brands/lenovo.svg", kind: "mark" },
    { name: "HP", logo: "/assets/brands/hp.svg", kind: "glyph" },
    { name: "Asus", logo: "/assets/brands/asus.svg", kind: "mark" },
    { name: "Hitachi", logo: "/assets/brands/hitachi.svg", kind: "mark" },
    { name: "Havells", logo: "/assets/brands/havells.svg", kind: "mark" },
    { name: "Mitsubishi", logo: "/assets/brands/mitsubishi.svg", kind: "glyph" },
    { name: "O General", wordmark: "GENERAL", wordClass: "font-display text-lg font-extrabold tracking-tight text-[#D8232A] lg:text-xl" },
];

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const BrandCard = ({ brand }) => (
    <div
        data-testid={`brand-card-${slug(brand.name)}`}
        className="flex h-[72px] w-[148px] shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white px-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] sm:h-[84px] sm:w-[180px] lg:h-[96px] lg:w-[208px]"
    >
        {brand.logo ? (
            <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                loading="lazy"
                className={
                    brand.kind === "mark"
                        ? "h-auto w-[88px] object-contain sm:w-[104px] lg:w-[120px]"
                        : "h-8 w-auto object-contain sm:h-9 lg:h-10"
                }
            />
        ) : (
            <span className={brand.wordClass}>{brand.wordmark}</span>
        )}
    </div>
);

const Brands = () => {
    const [touchPaused, setTouchPaused] = useState(false);

    return (
        <section id="brands" data-testid="brands-section" className="bg-white py-16 sm:py-20 lg:py-24">
            <Reveal className="mx-auto max-w-7xl px-4 text-center sm:px-8 lg:px-16">
                <h2
                    data-testid="brands-heading"
                    className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem]"
                >
                    Protection Across 50+ Brands
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
                    Comprehensive protection for the devices you trust, from the brands you love.
                </p>
            </Reveal>

            <div
                className="relative mt-12 overflow-hidden sm:mt-14 lg:mt-16"
                data-testid="brands-marquee"
                onTouchStart={() => setTouchPaused(true)}
                onTouchEnd={() => setTouchPaused(false)}
            >
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 lg:w-32" />
                <div
                    className="animate-pa-marquee flex w-max items-center gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6"
                    style={touchPaused ? { animationPlayState: "paused" } : undefined}
                >
                    {[...BRANDS, ...BRANDS].map((brand, i) => (
                        <BrandCard key={`${brand.name}-${i}`} brand={brand} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
