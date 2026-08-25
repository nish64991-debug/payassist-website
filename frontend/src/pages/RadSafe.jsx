import RadHero from "@/components/radsafe/RadHero";
import RadTech from "@/components/radsafe/RadTech";
import RadBenefits from "@/components/radsafe/RadBenefits";
import RadHowItWorks from "@/components/radsafe/RadHowItWorks";
import RadCta from "@/components/radsafe/RadCta";

const RadSafe = () => (
    <main data-testid="radsafe-page">
        <RadHero />
        <RadTech />
        <RadBenefits />
        <RadHowItWorks />
        <RadCta />
    </main>
);

export default RadSafe;
