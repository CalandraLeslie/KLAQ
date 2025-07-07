import React, { useState, useEffect } from 'react';

/**
 * Modern Professional Navbar for KLAQ 95.5 FM
 * Features glass morphism design and smooth animations
 */
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            const sections = ['home', 'features', 'prizes', 'concerts', 'requests'];
            for (const id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove body scroll lock
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('mobile-menu-open');
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
            // Remove body scroll lock when closing mobile menu
            document.body.classList.remove('mobile-menu-open');
        }
    };

    const toggleMobileMenu = () => {
        const newState = !mobileMenuOpen;
        setMobileMenuOpen(newState);
        
        // Prevent body scroll when mobile menu is open
        if (newState) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');
        }
    };

    return (
        <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Brand Logo */}
                <div className="navbar-brand" onClick={() => scrollToSection('home')}>
                    <h2 className="brand-logo">KLAQ 95.5</h2>
                    <span className="brand-subtitle">The Desert's Rock</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="navbar-nav desktop-nav">
                    <li className={activeSection === 'home' ? 'active' : ''}>
                        <button onClick={() => scrollToSection('home')}>
                            <span className="nav-icon">🏠</span>
                            <span className="nav-text">Home</span>
                        </button>
                    </li>
                    <li className={activeSection === 'features' ? 'active' : ''}>
                        <button onClick={() => scrollToSection('features')}>
                            <span className="nav-icon">⭐</span>
                            <span className="nav-text">Features</span>
                        </button>
                    </li>
                    <li className={activeSection === 'prizes' ? 'active' : ''}>
                        <button onClick={() => scrollToSection('prizes')}>
                            <span className="nav-icon">🏆</span>
                            <span className="nav-text">Prizes</span>
                        </button>
                    </li>
                    <li className={activeSection === 'concerts' ? 'active' : ''}>
                        <button onClick={() => scrollToSection('concerts')}>
                            <span className="nav-icon">🎸</span>
                            <span className="nav-text">Concerts</span>
                        </button>
                    </li>
                    <li className={activeSection === 'requests' ? 'active' : ''}>
                        <button onClick={() => scrollToSection('requests')}>
                            <span className="nav-icon">🎵</span>
                            <span className="nav-text">Requests</span>
                        </button>
                    </li>
                </ul>

                {/* Live Stream Button */}
                <div className="navbar-actions">
                    <button className="live-indicator">
                        <span className="live-dot"></span>
                        LIVE
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-list">
                    <li>
                        <button onClick={() => scrollToSection('home')}>
                            <span className="nav-icon">🏠</span>
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('features')}>
                            <span className="nav-icon">⭐</span>
                            Features
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('prizes')}>
                            <span className="nav-icon">🏆</span>
                            Prizes
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('concerts')}>
                            <span className="nav-icon">🎸</span>
                            Concerts
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('requests')}>
                            <span className="nav-icon">🎵</span>
                            Requests
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;