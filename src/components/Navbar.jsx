/**
 * @copyright 2024 Keerthi
 * @license Apache-2.0
 */

import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({navOpen, onNavClick}) => {
    const lastActiveLink = useRef(null);
    const activeBox = useRef();
    const navRefs = useRef({});
    const [isMobile, setIsMobile] = useState(false);

    const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
      
    },
  ];

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Update active link and move highlighting box (desktop only)
  const updateActiveLink = (clickedLink) => {
    if (isMobile) return; // Only for desktop

    // Remove active class from all links
    navItems.forEach(item => {
      const element = navRefs.current[item.link];
      if (element) {
        element.classList.remove('active');
      }
    });

    // Add active class to clicked link
    const clickedElement = navRefs.current[clickedLink];
    if (clickedElement) {
      clickedElement.classList.add('active');
      
      // Move highlighting box to active item
      if (activeBox.current) {
        const rect = clickedElement.getBoundingClientRect();
        const navRect = clickedElement.closest('.navbar-desktop')?.getBoundingClientRect();
        
        if (navRect) {
          activeBox.current.style.left = `${rect.left - navRect.left}px`;
          activeBox.current.style.width = `${rect.width}px`;
          activeBox.current.style.height = `${rect.height}px`;
        }
      }
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const targetSection = document.querySelector(link);
    if (targetSection) {
      // Account for the fixed header height (48px = h-12)
      const headerHeight = 48;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Update active link (desktop only)
    if (!isMobile) {
      updateActiveLink(link);
    }
    
    // Close the menu after clicking a navigation item (mobile only)
    if (isMobile && onNavClick) {
      onNavClick();
    }
  };

  // Initialize highlighting box position (desktop only)
  useEffect(() => {
    if (!isMobile && activeBox.current && navRefs.current['#home']) {
      const activeElement = navRefs.current['#home'];
      const rect = activeElement.getBoundingClientRect();
      const navRect = activeElement.closest('.navbar-desktop')?.getBoundingClientRect();
      
      if (navRect) {
        activeBox.current.style.left = `${rect.left - navRect.left}px`;
        activeBox.current.style.width = `${rect.width}px`;
        activeBox.current.style.height = `${rect.height}px`;
      }
    }
  }, [isMobile]);

  // Render mobile menu
  if (isMobile) {
    return (
      <div className={`menu-box ${navOpen ? 'active' : ''}`}>
        <div className="menu-container">
          <div className="menu-header">
            <span className="menu-title">Menu</span>
          </div>
          <nav className="menu-nav">
            <div className="nav-items">
              {navItems.map(({ label, link, className, ref}, key) => (
                <a 
                  href={link} 
                  className={className}
                  ref={ref}
                  key={key}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    );
  }

  // Render desktop navbar
  return (
    <nav className="navbar-desktop relative">
      <div className="flex items-center space-x-1">
        {navItems.map(({ label, link, className}, key) => (
          <a 
            href={link} 
            className={className}
            ref={(el) => { navRefs.current[link] = el; }}
            key={key}
            onClick={(e) => handleNavClick(e, link)}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    onNavClick: PropTypes.func
}

export default Navbar;