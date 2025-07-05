/**
 * @copyright 2024 Keerthi
 * @license Apache-2.0
 */

/**
 * Components
 */

import Navbar from "./Navbar";

import { useState, useEffect, useRef } from "react";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const menuRef = useRef(null);
    
    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setNavOpen(false);
            }
        };

        if (navOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navOpen]);

    // Close menu when pressing Escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setNavOpen(false);
            }
        };

        if (navOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [navOpen]);
    
  return (
    <header className="fixed top-6 left-0 w-full h-12 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
            <h1>
                <a href="/" className="logo">
                    <img src="/images/logo.svg" width={50} height={50} alt="Keerthi" />
                </a>
            </h1>

            {/* Desktop: Show horizontal navbar */}
            <div className="hidden md:flex md:justify-self-center">
                <Navbar navOpen={false} onNavClick={() => {}} />
            </div>

            {/* Mobile: Show menu button and dropdown */}
            <div className="relative md:hidden" ref={menuRef}>
                <button className="menu-btn" onClick={toggleNav}>
                    <div className="hamburger-icon">
                        <span className={`hamburger-line ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`hamburger-line ${navOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`hamburger-line ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                </button>

                <Navbar navOpen={navOpen} onNavClick={() => setNavOpen(false)}/>
            </div>

            <a
              href="#contact"
              className="btn btn-secondary max-md:hidden md:justify-self-end"
              onClick={e => {
                e.preventDefault();
                const targetSection = document.querySelector('#contact');
                if (targetSection) {
                  const headerHeight = 48 + 24; // h-12 + top-6
                  const targetPosition = targetSection.offsetTop - headerHeight;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Contact Me
            </a>

        </div>
    </header>
  )
}

export default Header