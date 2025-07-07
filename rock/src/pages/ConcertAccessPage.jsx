import React from 'react';

const ConcertAccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-black to-charcoal text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Concert Access"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl font-bebas text-white drop-shadow-2xl">
              VIP ACCESS
            </h1>
            <p className="text-xl md:text-2xl text-rock-gold font-medium tracking-wide">
              Exclusive Concert Tickets • Early Access • VIP Experiences
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* Benefits Section */}
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-bebas text-electric-red">
              YOUR BACKSTAGE PASS TO ROCK
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
              Being a KLAQ listener means you're part of our rock family. We hook you up with 
              exclusive access to the hottest concerts before tickets go on sale to the general public.
            </p>
          </div>

          {/* VIP Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-electric-red/20 to-neon-orange/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center space-y-6 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl">🎟️</div>
              <h3 className="text-2xl font-bebas text-rock-gold">PRESALE ACCESS</h3>
              <p className="text-light-gray">Get your tickets 24-48 hours before the general public. Never miss out on sold-out shows again.</p>
            </div>

            <div className="bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center space-y-6 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl">👑</div>
              <h3 className="text-2xl font-bebas text-rock-gold">VIP UPGRADES</h3>
              <p className="text-light-gray">Exclusive chances to win VIP packages including meet & greets, premium seating, and backstage tours.</p>
            </div>

            <div className="bg-gradient-to-br from-rock-gold/20 to-electric-red/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center space-y-6 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl">💸</div>
              <h3 className="text-2xl font-bebas text-rock-gold">SPECIAL PRICING</h3>
              <p className="text-light-gray">Listener-only discounts and exclusive pricing on select shows. Save money while seeing more live music.</p>
            </div>
          </div>

          {/* Upcoming Concerts */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bebas text-center text-white">
              UPCOMING PRESALES
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-electric-red/50 transition-colors duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Iron Maiden Concert"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bebas text-white">IRON MAIDEN</h3>
                      <p className="text-rock-gold">The Future Past World Tour</p>
                    </div>
                    <span className="bg-electric-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      PRESALE LIVE
                    </span>
                  </div>
                  <div className="space-y-2 text-silver">
                    <p>📅 August 15, 2025</p>
                    <p>📍 El Paso County Coliseum</p>
                    <p>⏰ Presale ends in 2 days</p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-electric-red to-neon-orange text-white font-bold py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                    Get Presale Code
                  </button>
                </div>
              </div>

              <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-electric-red/50 transition-colors duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Foo Fighters Concert"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bebas text-white">FOO FIGHTERS</h3>
                      <p className="text-rock-gold">Everything or Nothing Tour</p>
                    </div>
                    <span className="bg-rock-gold text-deep-black px-3 py-1 rounded-full text-sm font-semibold">
                      COMING SOON
                    </span>
                  </div>
                  <div className="space-y-2 text-silver">
                    <p>📅 September 3, 2025</p>
                    <p>📍 Don Haskins Center</p>
                    <p>⏰ Presale starts July 12</p>
                  </div>
                  <button className="w-full bg-transparent border-2 border-rock-gold text-rock-gold font-bold py-3 rounded-xl hover:bg-rock-gold hover:text-deep-black transition-all duration-300">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-r from-deep-purple/20 to-electric-blue/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bebas text-center text-rock-gold mb-8">
              HOW VIP ACCESS WORKS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-4xl">📻</div>
                <h3 className="text-xl font-bebas text-white">1. LISTEN</h3>
                <p className="text-silver">Stay tuned to KLAQ 95.5 for presale announcements and exclusive codes.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl">🔑</div>
                <h3 className="text-xl font-bebas text-white">2. GET THE CODE</h3>
                <p className="text-silver">We'll announce presale codes on-air and through our social media channels.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl">🎫</div>
                <h3 className="text-xl font-bebas text-white">3. SECURE YOUR SEATS</h3>
                <p className="text-silver">Use your code during the exclusive presale window to get the best seats first.</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bebas text-white">
              NEVER MISS A SHOW AGAIN
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-electric-red to-neon-orange hover:from-electric-red hover:to-rock-gold text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1">
                🏠 Back to Home
              </button>
              <button className="bg-transparent border-2 border-rock-gold text-rock-gold hover:bg-rock-gold hover:text-deep-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105">
                🔔 Concert Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertAccessPage;
