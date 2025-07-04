import React, { useState, useEffect } from 'react';

/**
 * Navigation component for KLAQ 95.5 FM website
 * 
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Scroll-based styling changes (background transparency)
 * - Active section highlighting based on scroll position
 * - Smooth scrolling navigation to page sections
 * - Accessibility support with proper ARIA labels
 * 
 * @returns {JSX.Element} Navigation bar with responsive menu
 */
const Navbar = () => {
    // State for tracking if page has been scrolled (affects navbar styling)
    const [scrolled, setScrolled] = useState(false);
    
    // State for mobile menu visibility toggle
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    // State for tracking which section is currently in view
    const [activeSection, setActiveSection] = useState('home');

    /**
     * Effect hook to handle scroll events and update navbar state
     * Tracks scroll position to change navbar appearance and highlight active sections
     */
    useEffect(() => {
        const handleScroll = () => {
            // Update scrolled state when page is scrolled beyond 50px
            setScrolled(window.scrollY > 50);
            
            // Determine which section is currently in view for active highlighting
            const sections = ['home', 'features', 'prizes', 'concerts', 'requests'];
            for (const id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Check if section is in the middle viewport area (around 150px from top)
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
     * Smooth scroll navigation to a specific section
     * @param {string} id - The ID of the target section to scroll to
     */
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            // Smooth scroll to section with offset for fixed navbar height
            window.scrollTo({
                top: section.offsetTop - 80, // 80px offset for navbar height
                behavior: 'smooth'
            });
            // Close mobile menu after navigation
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            {/* Station branding/logo area */}
            <div className="navbar-brand">
                <h2 className="station-name">KLAQ 95.5 FM</h2>
            </div>
            
            {/* Navigation menu - responsive with mobile toggle */}
            <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                {/* Home navigation link */}
                <li className={activeSection === 'home' ? 'active' : ''}>
                    <button onClick={() => scrollToSection('home')}>
                        <span className="nav-icon">🏠</span>
                        <span className="nav-text">Home</span>
                    </button>
                </li>
                
                {/* Features navigation link */}
                <li className={activeSection === 'features' ? 'active' : ''}>
                    <button onClick={() => scrollToSection('features')}>
                        <span className="nav-icon">⭐</span>
                        <span className="nav-text">Features</span>
                    </button>
                </li>
                
                {/* Prizes navigation link */}
                <li className={activeSection === 'prizes' ? 'active' : ''}>
                    <button onClick={() => scrollToSection('prizes')}>
                        <span className="nav-icon">🎁</span>
                        <span className="nav-text">Prizes</span>
                    </button>
                </li>
                
                {/* Concerts navigation link */}
                <li className={activeSection === 'concerts' ? 'active' : ''}>
                    <button onClick={() => scrollToSection('concerts')}>
                        <span className="nav-icon">🎵</span>
                        <span className="nav-text">Concerts</span>
                    </button>
                </li>
                
                {/* Song requests navigation link */}
                <li className={activeSection === 'requests' ? 'active' : ''}>
                    <button onClick={() => scrollToSection('requests')} data-target="requests">
                        <span className="nav-icon">🎤</span>
                        <span className="nav-text">Requests</span>
                    </button>
                </li>
            </ul>
            
            {/* Mobile hamburger menu toggle button */}
            <button 
                className="mobile-menu-toggle"
                aria-label="Toggle menu" // Accessibility label for screen readers
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <span className="nav-icon">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
        </nav>
    );
};

export default Navbar;