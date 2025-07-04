// React library for building user interfaces
import React from 'react';

// Import all component modules for the radio station website
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Prizes from './components/Prizes';
import Concerts from './components/Concerts';
import Requests from './components/Requests';
import Footer from './components/Footer';

/**
 * Main App component for KLAQ 95.5 FM Radio Station website
 * 
 * This is the root component that renders the entire single-page application.
 * It structures the layout with a navigation bar, main content sections,
 * and footer. The sections are arranged in a scrollable single-page layout.
 * 
 * @returns {JSX.Element} The complete website structure
 */
function App() {
  return (
    <>
      {/* Navigation bar - fixed at top, visible on all screens */}
      <Navbar />
      
      {/* Main content area containing all page sections */}
      <main>
        {/* Hero section with live stream and station branding */}
        <Home />
        
        {/* Station features showcase - what the station offers */}
        <Features id="features" />
        
        {/* Prizes and giveaways section */}
        <Prizes id="prizes" />
        
        {/* Upcoming concerts and events listings */}
        <Concerts id="concerts" />
        
        {/* Song request form for listener interaction */}
        <Requests id="requests" />
      </main>
      
      {/* Footer with copyright and additional information */}
      <Footer />
    </>
  );
}

export default App;