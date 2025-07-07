import React, { useState, useRef, useEffect } from 'react';

/**
 * Modern Home Hero Component - KLAQ 95.5 FM
 * Professional rock radio station landing page with live streaming
 */
const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const streamUrl = "https://live.amperwave.net/direct/townsquare-klaqfmaac-ibc3";

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
        setStreamError(true);
        window.open("https://klaq.com/listen-live/", "_blank", "noopener,noreferrer");
        setIsPlaying(true);
      });
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    const handlePlay = () => {
      setIsPlaying(true);
      setStreamError(false);
    };
    
    const handleError = () => {
      setStreamError(true);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('play', handlePlay);
      audioElement.addEventListener('error', handleError);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('play', handlePlay);
        audioElement.removeEventListener('error', handleError);
      }
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Background Video/Image */}
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Rock Concert Stage"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-main">
            {/* Station Branding */}
            <div className="brand-section fade-in-up">
              <h1 className="station-logo">KLAQ 95.5</h1>
              <p className="station-tagline">The Desert's Premier Rock Station</p>
              <div className="brand-accent"></div>
            </div>

            {/* Live Stream Controls */}
            <div className="stream-section fade-in-up">
              <div className="stream-controls">
                <button 
                  className={`play-button ${isPlaying ? 'playing' : ''}`}
                  onClick={togglePlayback}
                >
                  <span className="play-icon">
                    {isPlaying ? '⏹' : '▶'}
                  </span>
                  <span className="play-text">
                    {isPlaying ? 'Stop Live Stream' : 'Listen Live Now'}
                  </span>
                </button>

                {/* Hidden Audio Element */}
                <audio 
                  ref={audioRef} 
                  src={streamUrl}
                  preload="none"
                  style={{ display: 'none' }}
                />

                {/* Player Interface */}
                {isPlaying && (
                  <div className="player-interface slide-in-right">
                    <div className="now-playing-info">
                      <div className="equalizer-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                      <div className="stream-info">
                        <p className="stream-status">
                          {streamError ? "Streaming in external player" : "Live on KLAQ 95.5 FM"}
                        </p>
                        <p className="stream-quality">High Quality • Stereo</p>
                      </div>
                    </div>

                    {!streamError && (
                      <div className="volume-control">
                        <span className="volume-icon">🔊</span>
                        <input 
                          type="range" 
                          min="0" 
                          max="1" 
                          step="0.01" 
                          value={volume}
                          onChange={handleVolumeChange}
                          className="volume-slider"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Featured Content */}
            <div className="hero-features fade-in-up">
              <div className="feature-grid">
                <div className="feature-item">
                  <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Rock Music" />
                  <h3>Classic Rock</h3>
                  <p>The greatest rock hits of all time</p>
                </div>
                <div className="feature-item">
                  <img src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Live Shows" />
                  <h3>Live Shows</h3>
                  <p>Interactive DJ shows & talk radio</p>
                </div>
                <div className="feature-item">
                  <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Local Events" />
                  <h3>Desert Events</h3>
                  <p>Your local concert & event guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <p>Discover More</p>
      </div>
    </section>
  );
};

export default Home;