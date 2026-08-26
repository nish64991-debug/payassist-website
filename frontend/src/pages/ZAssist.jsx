import ZHero from "@/components/zassist/ZHero";
import ZBenefits from "@/components/zassist/ZBenefits";
import ZCalculator from "@/components/zassist/ZCalculator";
import ZPlanInfo from "@/components/zassist/ZPlanInfo";
import ZDepreciation from "@/components/zassist/ZDepreciation";
import ZServiceRequest from "@/components/zassist/ZServiceRequest";
import ZContact from "@/components/zassist/ZContact";

const ZAssist = () => (
    <main data-testid="zassist-page">
        <ZHero />
        <ZBenefits />
        <ZCalculator />
        <ZPlanInfo />
        <ZDepreciation />
        <ZServiceRequest />
        <ZContact />
    </main>
);

export default ZAssist;
