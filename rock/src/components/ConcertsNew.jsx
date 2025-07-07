import React, { useEffect, useState } from 'react';

/**
 * Modern Concerts Component for KLAQ 95.5 FM
 * Features upcoming rock concerts with professional design and online imagery
 */
const Concerts = () => {
    const [concerts, setConcerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState('all');

    useEffect(() => {
        setTimeout(() => {
            setConcerts([
                {
                    id: 1,
                    name: "Metallica: M72 World Tour",
                    artist: "Metallica",
                    date: "July 15, 2025",
                    time: "8:00 PM",
                    location: "Madison Square Garden",
                    city: "New York, NY",
                    ticketLink: "https://www.ticketmaster.com",
                    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    price: "From $89",
                    category: "metal",
                    featured: true
                },
                {
                    id: 2,
                    name: "AC/DC: Power Up Tour",
                    artist: "AC/DC",
                    date: "August 22, 2025",
                    time: "7:30 PM",
                    location: "Wembley Stadium",
                    city: "London, UK",
                    ticketLink: "https://www.ticketmaster.com",
                    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    price: "From $125",
                    category: "classic-rock"
                },
                {
                    id: 3,
                    name: "Foo Fighters: Everything or Nothing Tour",
                    artist: "Foo Fighters",
                    date: "September 10, 2025",
                    time: "8:00 PM",
                    location: "Rose Bowl",
                    city: "Los Angeles, CA",
                    ticketLink: "https://www.ticketmaster.com",
                    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    price: "From $95",
                    category: "alternative"
                },
                {
                    id: 4,
                    name: "Iron Maiden: Future Past World Tour",
                    artist: "Iron Maiden",
                    date: "October 5, 2025",
                    time: "7:45 PM",
                    location: "O2 Arena",
                    city: "London, UK",
                    ticketLink: "https://www.ticketmaster.com",
                    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    price: "From $79",
                    category: "metal"
                },
                {
                    id: 5,
                    name: "Pearl Jam: Dark Matter Tour",
                    artist: "Pearl Jam",
                    date: "November 18, 2025",
                    time: "8:30 PM",
                    location: "United Center",
                    city: "Chicago, IL",
                    ticketLink: "https://www.ticketmaster.com",
                    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    price: "From $110",
                    category: "grunge"
                },
                {
                    id: 6,
                    name: "Green Day: Saviors World Tour",
                    artist: "Green Day",
                    date: "December 3, 2025",
                    time: "7:00 PM",
                    location: "Staples Center",
                    city: "Los Angeles, CA",
                    ticketLink: "https://www.ticketmaster.com",
                    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    price: "From $85",
                    category: "punk"
                }
            ]);
            setLoading(false);
        }, 1500);
    }, []);

    const filteredConcerts = selectedFilter === 'all' 
        ? concerts 
        : concerts.filter(concert => concert.category === selectedFilter);

    const filterOptions = [
        { value: 'all', label: 'All Genres' },
        { value: 'metal', label: 'Metal' },
        { value: 'classic-rock', label: 'Classic Rock' },
        { value: 'alternative', label: 'Alternative' },
        { value: 'grunge', label: 'Grunge' },
        { value: 'punk', label: 'Punk' }
    ];

    return (
        <section className="concerts-section" id="concerts">
            <div className="container">
                {/* Section Header */}
                <div className="section-header fade-in-up">
                    <h2>Epic Rock Concerts</h2>
                    <p>Don't miss the biggest rock shows coming to your city. Get your tickets through KLAQ!</p>
                    <div className="section-divider"></div>
                </div>

                {/* Filter Buttons */}
                <div className="concert-filters fade-in-up">
                    {filterOptions.map(option => (
                        <button
                            key={option.value}
                            className={`filter-btn ${selectedFilter === option.value ? 'active' : ''}`}
                            onClick={() => setSelectedFilter(option.value)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="loading-container">
                        <div className="loading-spinner">
                            <div className="spinner"></div>
                        </div>
                        <h3>Loading Epic Concerts...</h3>
                        <p>Finding the best rock shows for you</p>
                    </div>
                ) : (
                    <>
                        {/* Featured Concert */}
                        {concerts.find(c => c.featured) && (
                            <div className="featured-concert fade-in-up">
                                {(() => {
                                    const featured = concerts.find(c => c.featured);
                                    return (
                                        <div className="featured-content">
                                            <div className="featured-image">
                                                <img src={featured.image} alt={featured.name} />
                                                <div className="featured-overlay">
                                                    <span className="featured-badge">Featured Show</span>
                                                </div>
                                            </div>
                                            <div className="featured-info">
                                                <h3>{featured.name}</h3>
                                                <div className="featured-details">
                                                    <p className="featured-date">
                                                        <span className="icon">📅</span>
                                                        {featured.date} at {featured.time}
                                                    </p>
                                                    <p className="featured-location">
                                                        <span className="icon">📍</span>
                                                        {featured.location}, {featured.city}
                                                    </p>
                                                    <p className="featured-price">
                                                        <span className="icon">🎫</span>
                                                        {featured.price}
                                                    </p>
                                                </div>
                                                <button className="featured-btn">Get Tickets Now</button>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        )}

                        {/* Concerts Grid */}
                        <div className="concerts-grid">
                            {filteredConcerts.map((concert, index) => (
                                <div 
                                    key={concert.id} 
                                    className="concert-card fade-in-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="concert-image">
                                        <img src={concert.image} alt={concert.name} />
                                        <div className="concert-overlay">
                                            <div className="concert-price">{concert.price}</div>
                                        </div>
                                    </div>
                                    <div className="concert-content">
                                        <h3>{concert.artist}</h3>
                                        <h4>{concert.name}</h4>
                                        <div className="concert-info">
                                            <p className="concert-date">
                                                <span className="icon">📅</span>
                                                {concert.date}
                                            </p>
                                            <p className="concert-location">
                                                <span className="icon">📍</span>
                                                {concert.location}
                                            </p>
                                            <p className="concert-city">{concert.city}</p>
                                        </div>
                                        <div className="concert-actions">
                                            <a 
                                                href={concert.ticketLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="ticket-btn"
                                            >
                                                Get Tickets
                                            </a>
                                            <button className="info-btn">More Info</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="concerts-cta fade-in-up">
                            <h3>Stay Updated on New Shows</h3>
                            <p>Get notified when your favorite artists announce tour dates</p>
                            <button className="cta-button">Join Concert Alerts</button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Concerts;
