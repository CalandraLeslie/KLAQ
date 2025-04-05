import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Determine which section is currently in view
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand">
                <h2 className="station-name">KLAQ 95.5 FM</h2>
            </div>
            <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
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
                        <span className="nav-icon">🎁</span>
                        <span className="nav-text">Prizes</span>
                    </button>
                </li>
                <li className={activeSection === 'concerts' ? 'active' : ''}>
                    <button onClick={() => scrollToSection('concerts')}>
                        <span className="nav-icon">🎵</span>
                        <span className="nav-text">Concerts</span>
                    </button>
                </li>
                <li className={activeSection === 'requests' ? 'active' : ''}>
                    <button onClick={() => scrollToSection('requests')} data-target="requests">
                        <span className="nav-icon">🎤</span>
                        <span className="nav-text">Requests</span>
                    </button>
                </li>
            </ul>
            <button 
                className="mobile-menu-toggle"
                aria-label="Toggle menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <span className="nav-icon">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
        </nav>
    );
};

export default Navbar;