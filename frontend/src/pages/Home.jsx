import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import WhyPayAssist from "@/components/home/WhyPayAssist";
import Approach from "@/components/home/Approach";
import Solutions from "@/components/home/Solutions";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

const Home = () => (
    <main data-testid="home-page">
        <Hero />
        <Brands />
        <WhyPayAssist />
        <Solutions />
        <Approach />
        <Testimonials />
        <Contact />
    </main>
);

export default Home;
