import React, { useState } from 'react';

/**
 * Modern Song Requests Component for KLAQ 95.5 FM
 * Interactive form for listeners to request their favorite rock songs
 */
const Requests = () => {
    const [formData, setFormData] = useState({
        songTitle: '',
        artist: '',
        requesterName: '',
        message: ''
    });
    const [submittedRequests, setSubmittedRequests] = useState([
        {
            id: 1,
            songTitle: "Bohemian Rhapsody",
            artist: "Queen",
            requesterName: "Sarah M.",
            timestamp: "5 minutes ago",
            status: "playing-next"
        },
        {
            id: 2,
            songTitle: "Stairway to Heaven",
            artist: "Led Zeppelin",
            requesterName: "Mike R.",
            timestamp: "12 minutes ago",
            status: "in-queue"
        },
        {
            id: 3,
            songTitle: "Enter Sandman",
            artist: "Metallica",
            requesterName: "Alex K.",
            timestamp: "18 minutes ago",
            status: "in-queue"
        }
    ]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            const newRequest = {
                id: submittedRequests.length + 1,
                ...formData,
                timestamp: "Just now",
                status: "pending"
            };
            
            setSubmittedRequests([newRequest, ...submittedRequests]);
            setFormData({
                songTitle: '',
                artist: '',
                requesterName: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'playing-next': return '🎵';
            case 'in-queue': return '⏳';
            case 'pending': return '📋';
            default: return '🎶';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'playing-next': return 'Playing Next';
            case 'in-queue': return 'In Queue';
            case 'pending': return 'Under Review';
            default: return 'Submitted';
        }
    };

    return (
        <section className="requests-section" id="requests">
            <div className="container">
                {/* Section Header */}
                <div className="section-header fade-in-up">
                    <h2>Request Your Favorite Rock Songs</h2>
                    <p>Shape our playlist! Tell us what you want to hear and we'll make it happen.</p>
                    <div className="section-divider"></div>
                </div>

                <div className="requests-content">
                    {/* Request Form */}
                    <div className="request-form-container fade-in-up">
                        <div className="form-header">
                            <h3>Submit a Song Request</h3>
                            <p>Fill out the form below and hear your request on KLAQ 95.5!</p>
                        </div>

                        <form onSubmit={handleSubmit} className="request-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="songTitle">Song Title *</label>
                                    <input
                                        type="text"
                                        id="songTitle"
                                        name="songTitle"
                                        value={formData.songTitle}
                                        onChange={handleInputChange}
                                        placeholder="Enter the song title"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="artist">Artist/Band *</label>
                                    <input
                                        type="text"
                                        id="artist"
                                        name="artist"
                                        value={formData.artist}
                                        onChange={handleInputChange}
                                        placeholder="Enter the artist or band name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="requesterName">Your Name</label>
                                <input
                                    type="text"
                                    id="requesterName"
                                    name="requesterName"
                                    value={formData.requesterName}
                                    onChange={handleInputChange}
                                    placeholder="Tell us your name (optional)"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Special Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Any special message or dedication? (optional)"
                                    rows="4"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner-small"></span>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <span className="icon">🎸</span>
                                        Submit Request
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Recent Requests */}
                    <div className="recent-requests fade-in-up">
                        <h3>Recent Song Requests</h3>
                        <p>See what other rock fans are requesting</p>
                        
                        <div className="requests-list">
                            {submittedRequests.map(request => (
                                <div key={request.id} className="request-item">
                                    <div className="request-info">
                                        <div className="song-details">
                                            <h4>{request.songTitle}</h4>
                                            <p className="artist">by {request.artist}</p>
                                        </div>
                                        <div className="request-meta">
                                            <span className="requester">
                                                Requested by {request.requesterName}
                                            </span>
                                            <span className="timestamp">{request.timestamp}</span>
                                        </div>
                                    </div>
                                    <div className="request-status">
                                        <span className={`status-badge ${request.status}`}>
                                            <span className="status-icon">
                                                {getStatusIcon(request.status)}
                                            </span>
                                            {getStatusText(request.status)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="requests-footer">
                            <p>Want to see your request here? Submit your favorite rock song above!</p>
                            <button className="view-all-btn">View All Requests</button>
                        </div>
                    </div>
                </div>

                {/* Request Guidelines */}
                <div className="request-guidelines fade-in-up">
                    <h3>Request Guidelines</h3>
                    <div className="guidelines-grid">
                        <div className="guideline-item">
                            <span className="guideline-icon">🎸</span>
                            <h4>Rock Music Only</h4>
                            <p>We play classic rock, metal, alternative, and everything in between</p>
                        </div>
                        <div className="guideline-item">
                            <span className="guideline-icon">⏰</span>
                            <h4>Response Time</h4>
                            <p>Most requests are reviewed within 15-30 minutes during live shows</p>
                        </div>
                        <div className="guideline-item">
                            <span className="guideline-icon">🚫</span>
                            <h4>Keep it Clean</h4>
                            <p>All requests and messages must be appropriate for radio broadcast</p>
                        </div>
                        <div className="guideline-item">
                            <span className="guideline-icon">🔄</span>
                            <h4>Popular Songs</h4>
                            <p>Recently played songs may have a longer wait time before replay</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Requests;
