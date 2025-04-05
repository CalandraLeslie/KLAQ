import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Prizes from './components/Prizes';
import Concerts from './components/Concerts';
import Requests from './components/Requests';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Features id="features" />
        <Prizes id="prizes" />
        <Concerts id="concerts" />
        <Requests id="requests" />
      </main>
      <Footer />
    </>
  );
}

export default App;