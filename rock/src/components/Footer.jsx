import React from 'react';

/**
 * Footer component - Simple website footer
 * 
 * This component renders the website footer with basic copyright information.
 * It's kept minimal and could be enhanced with additional content such as:
 * - Contact information
 * - Social media links
 * - Additional navigation links
 * - Legal/privacy policy links
 * - Station frequency and contact details
 * 
 * @returns {JSX.Element} Website footer with copyright information
 */
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Copyright notice for the radio station website */}
                <div className="copyright">
                    &copy; 2025 KLAQ.com
                </div>
            </div>
        </footer>
    );
};

export default Footer;