import React from 'react';

const Features = () => {
  return (
    <div className="features-container" id="features">
      <div className="container">
        <h1 className="fade-in">Station Features</h1>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎸</div>
            <h3>24/7 Rock</h3>
            <p>Non-stop rock music from classic to modern, keeping the energy high all day and night.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎟️</div>
            <p>Get exclusive tickets to the hottest concerts before they go on sale to the general public.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3>Artist Interviews</h3>
            <p>Hear from your favorite musicians with our exclusive backstage interviews and studio sessions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile App</h3>
            <p>Take us anywhere with our dedicated mobile app. Available for iOS and Android devices.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎵</div>
            <h3>Song Requests</h3>
            <p>Influence our playlist by requesting your favorite rock tracks through our website or app.</p>
          </div>

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