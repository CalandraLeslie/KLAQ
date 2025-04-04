import React from 'react';

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="home-hero">
        <div className="home-content fade-in">
          <h1 className="home-title">
            <span className="station-brand">KLAQ 105.5</span>
            <span className="tagline">The hottest rock music in the desert</span>
          </h1>
          
          <div className="cta-buttons">
            <button className="play-button">
              <span className="play-icon">▶</span> Listen Live
            </button>
            <button className="button" onClick={() => {
              document.getElementById('requests').scrollIntoView({ behavior: 'smooth' });
            }}>Request a Song</button>
          </div>
        </div>
      </div>
      
      {/* Features Section - Now integrated into Home */}
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Station Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3>24/7 Rock Music</h3>
              <p>Enjoy non-stop rock hits from classic to contemporary, carefully curated by our expert DJs.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h3>Live Shows</h3>
              <p>Tune in for exclusive interviews with rock legends and emerging artists in the rock scene.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎸</div>
              <h3>Local Bands</h3>
              <p>We support local talent with dedicated airtime and spotlights on homegrown rock bands.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h3>Interactive App</h3>
              <p>Download our app to request songs, participate in contests, and enjoy exclusive content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;