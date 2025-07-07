import React from 'react';

const RockMusicPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-black to-charcoal text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Rock Music"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl font-bebas text-white drop-shadow-2xl">
              24/7 ROCK MUSIC
            </h1>
            <p className="text-xl md:text-2xl text-rock-gold font-medium tracking-wide">
              Non-Stop Energy • Classic to Modern • Pure Rock Power
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bebas text-electric-red">
                THE ULTIMATE ROCK EXPERIENCE
              </h2>
              <p className="text-lg text-light-gray leading-relaxed">
                KLAQ 95.5 FM delivers the most comprehensive rock music experience in the desert. 
                From legendary classics that defined generations to cutting-edge modern rock that's 
                shaping the future, we've got your soundtrack covered 24 hours a day, 7 days a week.
              </p>
            </div>

            <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bebas text-rock-gold mb-6">WHAT YOU'LL HEAR</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Classic Rock</h4>
                  <ul className="space-y-2 text-silver">
                    <li>• Led Zeppelin</li>
                    <li>• Pink Floyd</li>
                    <li>• The Rolling Stones</li>
                    <li>• Queen</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Modern Rock</h4>
                  <ul className="space-y-2 text-silver">
                    <li>• Foo Fighters</li>
                    <li>• Imagine Dragons</li>
                    <li>• Arctic Monkeys</li>
                    <li>• Royal Blood</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Metal</h4>
                  <ul className="space-y-2 text-silver">
                    <li>• Metallica</li>
                    <li>• Iron Maiden</li>
                    <li>• Black Sabbath</li>
                    <li>• Tool</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Alternative</h4>
                  <ul className="space-y-2 text-silver">
                    <li>• Nirvana</li>
                    <li>• Pearl Jam</li>
                    <li>• Radiohead</li>
                    <li>• The White Stripes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-electric-red to-neon-orange rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bebas mb-4">LIVE STREAMING</h3>
              <p className="mb-6">Listen live anywhere, anytime with crystal clear HD audio quality.</p>
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 font-semibold transition-all duration-300 hover:scale-105">
                🎵 Start Listening Now
              </button>
            </div>

            <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bebas text-rock-gold mb-4">PROGRAMMING HIGHLIGHTS</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white font-medium">Morning Rock Rush</span>
                  <span className="text-silver text-sm">6-10 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white font-medium">Lunch Break Legends</span>
                  <span className="text-silver text-sm">12-1 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white font-medium">Drive Time Rock</span>
                  <span className="text-silver text-sm">5-7 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white font-medium">Midnight Metal</span>
                  <span className="text-silver text-sm">12-2 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-8">
          <h2 className="text-4xl font-bebas text-white">
            READY TO ROCK WITH KLAQ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-electric-red to-neon-orange hover:from-electric-red hover:to-rock-gold text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1">
              🏠 Back to Home
            </button>
            <button className="bg-transparent border-2 border-rock-gold text-rock-gold hover:bg-rock-gold hover:text-deep-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105">
              📱 Download Our App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RockMusicPage;
