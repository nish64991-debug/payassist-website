import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const PEOPLE = [
    {
        name: "Arjun Mehra",
        role: "Founder & Chief Executive",
        bio: "Two decades across consumer electronics and insurance technology. Founded PayAssist to make protection feel premium, not painful.",
        img: "https://images.pexels.com/photos/34461740/pexels-photo-34461740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Dr. Elena Voss",
        role: "Chief Safety Officer",
        bio: "Bioelectromagnetics researcher leading RadSafe's science programme and its responsible-usage standards.",
        img: "https://images.pexels.com/photos/26834968/pexels-photo-26834968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

const METRICS = [
    ["1.2M+", "Devices secured"],
    ["99.4%", "Claim satisfaction"],
    ["40+", "Partner brands"],
    ["24/7", "Human support"],
];

const About = () => (
    <section id="about" data-testid="about-section" className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <SectionHeading
                testId="about-heading"
                badge="The Minds Behind PayAssist"
                title="Built by operators, engineers and safety scientists."
                sub="A leadership team spanning insurance technology, consumer hardware and bioelectromagnetic research."
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-12">
                {PEOPLE.map((p, i) => (
                    <Reveal key={p.name} delay={i * 0.12}>
                        <div data-testid={`team-card-${i + 1}`} className="group grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/50 transition-all duration-300 hover:border-brand/30 sm:grid-cols-5">
                            <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    loading="lazy"
                                    className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col justify-center sm:col-span-3">
                                <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{p.name}</h3>
                                <p className="mt-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">{p.role}</p>
                                <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.bio}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
            <Reveal delay={0.15}>
                <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 lg:grid-cols-4" data-testid="about-metrics">
                    {METRICS.map(([v, l]) => (
                        <div key={l} className="bg-mist px-8 py-10 text-center">
                            <p className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{v}</p>
                            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{l}</p>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    </section>
);

export default About;
