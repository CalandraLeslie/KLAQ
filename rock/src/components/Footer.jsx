import React from 'react';

/**
 * Modern Footer Component for KLAQ 95.5 FM
 * Professional footer with contact info, social links and branding
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="modern-footer">
            <div className="footer-background">
                <img 
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Rock Concert Background"
                />
                <div className="footer-overlay"></div>
            </div>

            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <h3>KLAQ 95.5 FM</h3>
                        <p>The Desert's Premier Rock Station</p>
                        <div className="station-info">
                            <p>📻 95.5 FM • El Paso, Texas</p>
                            <p>📞 (915) 544-KLAQ</p>
                            <p>📧 info@klaq.com</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Listen Live</a></li>
                            <li><a href="#concerts">Concerts</a></li>
                            <li><a href="#prizes">Contests</a></li>
                            <li><a href="#requests">Song Requests</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="https://facebook.com/klaq955" target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">📘</span>
                                Facebook
                            </a>
                            <a href="https://twitter.com/klaq955" target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">🐦</span>
                                Twitter
                            </a>
                            <a href="https://instagram.com/klaq955" target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">📷</span>
                                Instagram
                            </a>
                            <a href="https://youtube.com/klaq955" target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">📺</span>
                                YouTube
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <h4>Stay Connected</h4>
                        <p>Get the latest rock news and concert alerts</p>
                        <div className="newsletter-form">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="newsletter-input"
                            />
                            <button className="newsletter-btn">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-legal">
                        <p>&copy; {currentYear} KLAQ 95.5 FM. All rights reserved.</p>
                        <div className="legal-links">
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Service</a>
                            <a href="/contest-rules">Contest Rules</a>
                        </div>
                    </div>
                    <div className="footer-credits">
                        <p>🎸 Powered by Rock & Roll • Built with passion for music</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;