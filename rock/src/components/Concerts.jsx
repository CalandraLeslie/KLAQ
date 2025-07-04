import React, { useEffect, useState } from 'react';

/**
 * Concerts component - Displays upcoming rock concerts and events
 * 
 * This component simulates fetching and displaying upcoming concert information.
 * Features:
 * - Loading state with animated spinner
 * - Mock concert data (ready for API integration)
 * - Concert cards with images, dates, venues, and ticket links
 * - Responsive design with fade-in animations
 * 
 * Future enhancements could include:
 * - Real API integration for live concert data
 * - Filter/search functionality
 * - Integration with ticketing platforms
 * 
 * @returns {JSX.Element} Concerts listing section
 */
const Concerts = () => {
    // State to hold concert data array
    const [concerts, setConcerts] = useState([]);
    
    // State to track loading status for UI feedback
    const [loading, setLoading] = useState(true);

    /**
     * Effect hook to simulate fetching concert data
     * In production, this would be replaced with actual API calls
     */
    useEffect(() => {
        // Simulate API call with setTimeout (replace with actual API in production)
        setTimeout(() => {
            // Mock concert data - in production this would come from an API
            setConcerts([
                {
                    id: 1,
                    name: "Metallica World Tour",
                    date: "June 15, 2025",
                    location: "Madison Square Garden, NY",
                    ticketLink: "#", // Placeholder - should link to actual ticketing platform
                    image: "/metallica.jpg"
                },
                {
                    id: 2,
                    name: "AC/DC Comeback",
                    date: "July 8, 2025",
                    location: "Wembley Stadium, London",
                    ticketLink: "#", // Placeholder - should link to actual ticketing platform
                    image: "/acdc.jpg"
                },
                {
                    id: 3,
                    name: "Foo Fighters Live",
                    date: "August 22, 2025",
                    location: "Rose Bowl, Los Angeles",
                    ticketLink: "#", // Placeholder - should link to actual ticketing platform
                    image: "/foofighters.jpg"
                }
            ]);
            
            // Set loading to false after data is "fetched"
            setLoading(false);
        }, 1000); // 1 second delay to simulate network latency
    }, []); // Empty dependency array means this runs once on component mount

    return (
        <div className="concerts-container" id="concerts">
            <div className="container">
                {/* Section header with animations */}
                <h1 className="fade-in">Upcoming Concerts</h1>
                <p className="fade-in">Discover the hottest rock concerts coming to your city</p>
                
                {/* Conditional rendering based on loading state */}
                {loading ? (
                    /* Loading state with spinner and message */
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                        <p>Loading amazing concerts...</p>
                    </div>
                ) : (
                    /* Concert listings once data is loaded */
                    <div className="concerts-list fade-in">
                        {/* Map through concerts array to render each concert card */}
                        {concerts.map((concert) => (
                            <div key={concert.id} className="concert-card">
                                
                                {/* Concert promotional image */}
                                <div className="concert-image">
                                    <img src={concert.image} alt={concert.name} />
                                </div>
                                
                                {/* Concert information section */}
                                <div className="concert-details">
                                    
                                    {/* Concert name/title */}
                                    <h2 className="concert-name">{concert.name}</h2>
                                    
                                    {/* Concert date with calendar icon */}
                                    <div className="concert-info">
                                        <span className="concert-icon">📅</span>
                                        <p>Date: {concert.date}</p>
                                    </div>
                                    
                                    {/* Concert venue with location icon */}
                                    <div className="concert-info">
                                        <span className="concert-icon">📍</span>
                                        <p>Location: {concert.location}</p>
                                    </div>
                                    
                                    {/* Ticket purchase link */}
                                    <div className="concert-ticket">
                                        <a href={concert.ticketLink} className="ticket-button">
                                            Buy Tickets
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Concerts;