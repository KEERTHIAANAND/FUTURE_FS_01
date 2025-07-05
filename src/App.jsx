/**
 * @copyright 2024 Keerthi
 * @license Apache-2.0
 */


/**
 * 
 * Components
 */

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutAndTools from "./components/AboutAndTools";
import PortfolioHighlights from "./components/PortfolioHighlights";
import EducationSection from "./components/EducationSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutAndTools />
            <EducationSection />
            <PortfolioHighlights />
            <Contact />
            <Footer />
        </>
    )
}

export default App;