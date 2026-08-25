import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ZAssist from "@/pages/ZAssist";
import RadSafe from "@/pages/RadSafe";

const ScrollManager = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        const lenis = window.__lenis;
        if (hash) {
            const t = setTimeout(() => {
                if (lenis) lenis.scrollTo(hash, { offset: -84, duration: 1.2 });
                else document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
            }, 350);
            return () => clearTimeout(t);
        }
        if (lenis) lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
    }, [pathname, hash]);
    return null;
};

function App() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        window.__lenis = lenis;
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <ScrollManager />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/z-assist" element={<ZAssist />} />
                    <Route path="/radsafe" element={<RadSafe />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
