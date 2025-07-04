import React, { useState, useRef, useEffect } from 'react';

/**
 * Home component - Hero section with live radio streaming
 * 
 * This component provides:
 * - Station branding and tagline
 * - Live audio streaming functionality
 * - Visual feedback for audio playback state
 * - Volume controls and fallback options
 * - Desert-themed imagery (cactus)
 * 
 * Features graceful fallback to external streaming page if direct audio fails
 * 
 * @returns {JSX.Element} Hero section with live streaming capabilities
 */
const Home = () => {
  // State to track if audio is currently playing
  const [isPlaying, setIsPlaying] = useState(false);
  
  // State to track if there's an error with the audio stream
  const [streamError, setStreamError] = useState(false);
  
  // Reference to the hidden audio element for controlling playback
  const audioRef = useRef(null);

  // Live stream URL for KLAQ 95.5 FM - update if stream URL changes
  const streamUrl = "https://live.amperwave.net/direct/townsquare-klaqfmaac-ibc3";

  /**
   * Toggles audio playback between play and pause states
   * Handles stream errors by falling back to external player
   */
  const togglePlayback = () => {
    if (isPlaying) {
      // Stop playback
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Start playback with error handling
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
        setStreamError(true);
        // Fallback: Open external stream in new window if direct playback fails
        window.open("https://klaq.com/listen-live/", "_blank", "noopener,noreferrer");
        setIsPlaying(true);
      });
    }
  };

  /**
   * Effect hook to handle audio element events
   * Sets up event listeners for successful playback and errors
   */
  useEffect(() => {
    // Handler for successful audio play event
    const handlePlay = () => {
      setIsPlaying(true);
      setStreamError(false);
    };
    
    // Handler for audio errors
    const handleError = () => {
      setStreamError(true);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      // Attach event listeners
      audioElement.addEventListener('play', handlePlay);
      audioElement.addEventListener('error', handleError);
    }

    // Cleanup function to remove event listeners
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
          {/* Station branding section */}
          <div className="home-title">
            <h1 className="station-brand">KLAQ 95.5 FM</h1>
            <p className="tagline">The Desert's Rock Station</p>
          </div>
          
          {/* Desert-themed decorative image */}
          <div className="cactus-container">
            <img 
              src="/cactus.jpg" 
              alt="Desert Cactus" 
              className="cactus-gif"
              width="400"  // Doubled the width for better visual impact
            />
          </div>
          
          {/* Live streaming controls section */}
          <div className="home-cta">
            {/* Main play/stop button */}
            <button 
              className={`listen-btn ${isPlaying ? 'playing' : ''}`}
              onClick={togglePlayback}
            >
              {isPlaying ? 'Stop Listening' : 'Listen Live'}
            </button>

            {/* Hidden audio element for streaming - not visible to user */}
            <audio 
              ref={audioRef} 
              src={streamUrl}
              preload="none" // Don't preload to save bandwidth
              style={{ display: 'none' }}
            />

            {/* Audio player UI - only shown when playing */}
            {isPlaying && (
              <div className="audio-player-container">
                {/* Now playing indicator with animated equalizer */}
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

                {/* Volume control - only shown for direct audio playback */}
                {!streamError && (
                  <div className="player-controls">
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.01" 
                      defaultValue="1"
                      onChange={(e) => {
                        // Update audio volume when slider changes
                        if (audioRef.current) {
                          audioRef.current.volume = e.target.value;
                        }
                      }}
                    />
                  </div>
                )}

                {/* Fallback options when using external player */}
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