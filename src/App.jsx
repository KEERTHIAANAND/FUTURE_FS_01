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

const App = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutAndTools />
            <PortfolioHighlights />
        </>
    )
}

export default App;