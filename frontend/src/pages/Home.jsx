import Hero from "@/components/home/Hero";
import Ecosystem from "@/components/home/Ecosystem";
import WhyPayAssist from "@/components/home/WhyPayAssist";
import Approach from "@/components/home/Approach";
import Solutions from "@/components/home/Solutions";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

const Home = () => (
    <main data-testid="home-page">
        <Hero />
        <Ecosystem />
        <WhyPayAssist />
        <Approach />
        <Solutions />
        <About />
        <Testimonials />
        <Contact />
    </main>
);

export default Home;
