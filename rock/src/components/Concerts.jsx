import React, { useEffect, useState } from 'react';

const Concerts = () => {
    const [concerts, setConcerts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock data instead of API call
        setTimeout(() => {
            setConcerts([
                {
                    id: 1,
                    name: "Metallica World Tour",
                    date: "June 15, 2025",
                    location: "Madison Square Garden, NY",
                    ticketLink: "#",
                    image: "/metallica.jpg"
                },
                {
                    id: 2,
                    name: "AC/DC Comeback",
                    date: "July 8, 2025",
                    location: "Wembley Stadium, London",
                    ticketLink: "#",
                    image: "/acdc.jpg"
                },
                {
                    id: 3,
                    name: "Foo Fighters Live",
                    date: "August 22, 2025",
                    location: "Rose Bowl, Los Angeles",
                    ticketLink: "#",
                    image: "/foofighters.jpg"
                }
            ]);
            setLoading(false);
        }, 1000); // Simulate network delay
    }, []);

    return (
        <div className="concerts-container" id="concerts">
            <div className="container">
                <h1 className="fade-in">Upcoming Concerts</h1>
                <p className="fade-in">Discover the hottest rock concerts coming to your city</p>
                
                {loading ? (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                        <p>Loading amazing concerts...</p>
                    </div>
                ) : (
                    <div className="concerts-list fade-in">
                        {concerts.map((concert) => (
                            <div key={concert.id} className="concert-card">
                                <div className="concert-image">
                                    <img src={concert.image} alt={concert.name} />
                                </div>
                                <div className="concert-details">
                                    <h2 className="concert-name">{concert.name}</h2>
                                    <div className="concert-info">
                                        <span className="concert-icon">📅</span>
                                        <p>Date: {concert.date}</p>
                                    </div>
                                    <div className="concert-info">
                                        <span className="concert-icon">📍</span>
                                        <p>Location: {concert.location}</p>
                                    </div>
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