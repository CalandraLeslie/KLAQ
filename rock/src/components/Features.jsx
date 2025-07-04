import React from 'react';

/**
 * Features component - Showcases KLAQ 95.5 FM station features
 * 
 * This component displays a grid of feature cards highlighting what the radio station offers:
 * - 24/7 rock music programming
 * - Exclusive concert ticket access
 * - Artist interviews and backstage content
 * - Mobile app availability
 * - Interactive song request system
 * - Contests and giveaways
 * 
 * Each feature includes an emoji icon and descriptive text
 * 
 * @returns {JSX.Element} Features showcase section with grid layout
 */
const Features = () => {
  return (
    <div className="features-container" id="features">
      <div className="container">
        {/* Section heading with fade-in animation */}
        <h1 className="fade-in">Station Features</h1>
        
        {/* Grid layout containing all feature cards */}
        <div className="features-grid">
          
          {/* 24/7 Rock Music Feature */}
          <div className="feature-card">
            <div className="feature-icon">🎸</div>
            <h3>24/7 Rock</h3>
            <p>Non-stop rock music from classic to modern, keeping the energy high all day and night.</p>
          </div>

          {/* Concert Tickets Feature */}
          <div className="feature-card">
            <div className="feature-icon">🎟️</div>
            {/* Note: Missing h3 title for this card - should be added for consistency */}
            <p>Get exclusive tickets to the hottest concerts before they go on sale to the general public.</p>
          </div>

          {/* Artist Interviews Feature */}
          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3>Artist Interviews</h3>
            <p>Hear from your favorite musicians with our exclusive backstage interviews and studio sessions.</p>
          </div>

          {/* Mobile App Feature */}
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile App</h3>
            <p>Take us anywhere with our dedicated mobile app. Available for iOS and Android devices.</p>
          </div>

          {/* Song Requests Feature */}
          <div className="feature-card">
            <div className="feature-icon">🎵</div>
            <h3>Song Requests</h3>
            <p>Influence our playlist by requesting your favorite rock tracks through our website or app.</p>
          </div>

          {/* Giveaways and Contests Feature */}
          <div className="feature-card">
            <div className="feature-icon">🎁</div>
            <h3>Giveaways</h3>
            <p>Win amazing prizes including concert tickets, band merchandise, and meet & greets.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Features;