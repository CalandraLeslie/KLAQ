import React, { useState, useRef, useEffect } from 'react';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const audioRef = useRef(null);

  // Stream URL - this might need to be updated if it changes
  const streamUrl = "https://live.amperwave.net/direct/townsquare-klaqfmaac-ibc3";

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
        setStreamError(true);
        // Fallback to opening in new window
        window.open("https://klaq.com/listen-live/", "_blank", "noopener,noreferrer");
        setIsPlaying(true);
      });
    }
  };

  // Handle successful play event
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
    <div className="home-container" id="home">
      <div className="home-hero">
        <div className="container">
          <div className="home-title">
            <h1 className="station-brand">KLAQ 95.5 FM</h1>
            <p className="tagline">The Desert's Rock Station</p>
          </div>
          
          {/* Cactus image */}
          <div className="cactus-container">
            <img 
              src="/cactus.jpg" 
              alt="Desert Cactus" 
              className="cactus-gif"
              width="400"  // Doubled the width
            />
          </div>
          
          <div className="home-cta">
            <button 
              className={`listen-btn ${isPlaying ? 'playing' : ''}`}
              onClick={togglePlayback}
            >
              {isPlaying ? 'Stop Listening' : 'Listen Live'}
            </button>

            {/* Hidden audio element */}
            <audio 
              ref={audioRef} 
              src={streamUrl}
              preload="none"
              style={{ display: 'none' }}
            />

            {/* Visual indication of playing */}
            {isPlaying && (
              <div className="audio-player-container">
                <div className="now-playing">
                  <div className="equalizer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p>
                    {streamError 
                      ? "95.5 FM Live Stream is playing in a new window" 
                      : "Now Playing: 95.5 FM Live"}
                  </p>
                </div>

                {!streamError && (
                  <div className="player-controls">
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.01" 
                      defaultValue="1"
                      onChange={(e) => {
                        if (audioRef.current) {
                          audioRef.current.volume = e.target.value;
                        }
                      }}
                    />
                  </div>
                )}

                {streamError && (
                  <div className="player-options">
                    <a 
                      href="https://klaq.com/listen-live/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      Reopen Stream
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;