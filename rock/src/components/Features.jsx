import React from 'react';

/**
 * Mo    {
      id: 5,
      title: "Interactive Requests",
      description: "Shape our playlist by requesting your favorite rock tracks through our website or mobile app.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🎵",
      link: "/song-requests"
    },atures Component for KLAQ 95.5 FM
 * Showcases station features with professional design and online imagery
 */
const Features = () => {
  const features = [
    {
      id: 1,
      title: "24/7 Rock Music",
      description: "Non-stop rock music from classic to modern, keeping the energy high all day and night.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🎸",
      link: "/rock-music"
    },
    {
      id: 2,
      title: "Exclusive Concert Access",
      description: "Get VIP access to the hottest concerts and events before they go on sale to the general public.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🎟️",
      link: "/concert-access"
    },
    {
      id: 3,
      title: "Artist Interviews",
      description: "Exclusive backstage interviews and studio sessions with your favorite rock musicians.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🎤",
      link: "/interviews"
    },
    {
      id: 4,
      title: "Mobile Experience",
      description: "Stream KLAQ anywhere with our cutting-edge mobile app for iOS and Android devices.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "📱",
      link: "/mobile-app"
    },
    {
      id: 5,
      title: "Interactive Requests",
      description: "Shape our playlist by requesting your favorite rock tracks through our website or mobile app.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "�"
    },
    {
      id: 6,
      title: "Epic Rock Legends",
      description: "Dive deep into rock history with legendary bands like Iron Maiden, Metallica, and Black Sabbath.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🏆",
      link: "/rock-legends"
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in-up">
          <h2>Why Choose KLAQ 95.5?</h2>
          <p>Experience the ultimate rock radio destination with features designed for true rock enthusiasts</p>
          <div className="section-divider"></div>
        </div>
        
        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
                <div className="feature-overlay">
                  <span className="feature-icon">{feature.icon}</span>
                </div>
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href={feature.link || "#"} className="feature-link">
                  <span>Learn More</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="features-cta fade-in-up">
          <h3>Ready to Rock with KLAQ?</h3>
          <p>Join thousands of rock fans who make KLAQ their go-to station</p>
          <button className="cta-button">Start Listening Now</button>
        </div>
      </div>
    </section>
  );
};

export default Features;