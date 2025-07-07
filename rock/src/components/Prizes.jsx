import React from 'react';

/**
 * Modern Prizes Component for KLAQ 95.5 FM
 * Features exciting giveaways and contests with professional design
 */
const Prizes = () => {
    const prizes = [
        {
            id: 1,
            name: 'VIP Concert Experience',
            description: 'Win front-row tickets, backstage access, and exclusive meet & greets with rock legends.',
            value: '$2,500',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'concerts',
            featured: true,
            deadline: 'July 31, 2025'
        },
        {
            id: 2,
            name: 'Premium Rock Merchandise Bundle',
            description: 'Exclusive signed guitars, limited edition vinyl, and rare band merchandise.',
            value: '$1,200',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'merchandise',
            deadline: 'August 15, 2025'
        },
        {
            id: 3,
            name: 'Festival Weekend Pass',
            description: '3-day all-access pass to the biggest rock festival of the year with camping included.',
            value: '$800',
            image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'festivals',
            deadline: 'September 1, 2025'
        },
        {
            id: 4,
            name: 'Recording Studio Experience',
            description: 'Record your own track in a professional studio with industry experts.',
            value: '$1,500',
            image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'experiences',
            deadline: 'October 15, 2025'
        },
        {
            id: 5,
            name: 'Rock Legends Memorabilia',
            description: 'Authentic signed items from rock icons including guitars, photos, and personal items.',
            value: '$3,000',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'collectibles',
            deadline: 'November 30, 2025'
        },
        {
            id: 6,
            name: 'Music Equipment Package',
            description: 'Professional guitar amp, effects pedals, and recording equipment for aspiring musicians.',
            value: '$2,200',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'equipment',
            deadline: 'December 20, 2025'
        }
    ];

    const featuredPrize = prizes.find(prize => prize.featured);

    return (
        <section className="prizes-section" id="prizes">
            <div className="container">
                {/* Section Header */}
                <div className="section-header fade-in-up">
                    <h2>Epic Rock Prizes</h2>
                    <p>Win incredible prizes and experiences that money can't buy. Join our contests and giveaways!</p>
                    <div className="section-divider"></div>
                </div>

                {/* Featured Prize */}
                {featuredPrize && (
                    <div className="featured-prize fade-in-up">
                        <div className="featured-prize-content">
                            <div className="featured-prize-image">
                                <img src={featuredPrize.image} alt={featuredPrize.name} />
                                <div className="featured-prize-overlay">
                                    <span className="featured-badge">Grand Prize</span>
                                    <span className="prize-value">{featuredPrize.value}</span>
                                </div>
                            </div>
                            <div className="featured-prize-info">
                                <h3>{featuredPrize.name}</h3>
                                <p>{featuredPrize.description}</p>
                                <div className="prize-details">
                                    <div className="detail-item">
                                        <span className="icon">💰</span>
                                        <span>Value: {featuredPrize.value}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="icon">⏰</span>
                                        <span>Deadline: {featuredPrize.deadline}</span>
                                    </div>
                                </div>
                                <div className="prize-actions">
                                    <button className="enter-btn">Enter Contest</button>
                                    <button className="rules-btn">Contest Rules</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Prizes Grid */}
                <div className="prizes-grid">
                    {prizes.filter(prize => !prize.featured).map((prize, index) => (
                        <div 
                            key={prize.id} 
                            className="prize-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="prize-image">
                                <img src={prize.image} alt={prize.name} />
                                <div className="prize-overlay">
                                    <span className="prize-value">{prize.value}</span>
                                </div>
                            </div>
                            <div className="prize-content">
                                <h3>{prize.name}</h3>
                                <p>{prize.description}</p>
                                <div className="prize-info">
                                    <div className="info-item">
                                        <span className="icon">📅</span>
                                        <span className="deadline">Ends: {prize.deadline}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="icon">🎯</span>
                                        <span className="category">{prize.category}</span>
                                    </div>
                                </div>
                                <div className="prize-actions">
                                    <button className="enter-btn-small">Enter Now</button>
                                    <button className="share-btn">Share</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* How to Enter Section */}
                <div className="how-to-enter fade-in-up">
                    <h3>How to Enter Our Contests</h3>
                    <div className="enter-steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h4>Listen to KLAQ 95.5</h4>
                            <p>Tune in daily for contest announcements and special keywords</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h4>Call or Text</h4>
                            <p>When you hear the keyword, call our contest line or text us</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h4>Win Amazing Prizes</h4>
                            <p>Be the lucky caller and claim your incredible rock prizes!</p>
                        </div>
                    </div>
                </div>

                {/* Contest CTA */}
                <div className="contest-cta fade-in-up">
                    <h3>Ready to Win Big?</h3>
                    <p>Join thousands of rock fans competing for amazing prizes</p>
                    <div className="cta-buttons">
                        <button className="cta-button primary">View All Contests</button>
                        <button className="cta-button secondary">Contest Rules</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prizes;