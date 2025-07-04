import React from 'react';

/**
 * Prizes component - Displays available prizes and giveaways
 * 
 * This component showcases the various prizes that listeners can win through
 * station contests and giveaways. Each prize includes an image, name, and description.
 * 
 * Features:
 * - Static array of prize data (could be enhanced to fetch from API)
 * - Responsive image display
 * - Dark theme styling with inline styles
 * - Prize categories: Concert tickets, merchandise, meet & greets
 * 
 * @returns {JSX.Element} Prizes showcase section
 */
const Prizes = () => {
    // Static prize data - could be moved to external data source or API
    const prizes = [
        {
            id: 1,
            name: 'Concert Tickets',
            description: 'Win tickets to the hottest concerts in town!',
            image: '/crowd.jpg' // Image of concert crowd
        },
        {
            id: 2,
            name: 'Merchandise',
            description: 'Get exclusive band merchandise!',
            image: '/merch.jpg' // Image of band merchandise
        },
        {
            id: 3,
            name: 'Meet & Greet',
            description: 'Meet your favorite artists in person!',
            image: '/meet.jpg' // Image representing meet & greet opportunity
        }
    ];

    return (
        <div 
            className="prizes-container" 
            id="prizes" 
            style={{ 
                backgroundColor: 'rgb(40, 44, 52)', // Dark background
                color: 'rgb(236, 240, 241)', // Light text
                padding: '20px' 
            }}
        >
            {/* Section title with purple accent color */}
            <h1 style={{ color: 'rgb(155, 89, 182)' }}>Prizes</h1>
            
            {/* Prize list container */}
            <div className="prizes-list">
                {/* Map through prizes array to render each prize card */}
                {prizes.map(prize => (
                    <div 
                        key={prize.id} 
                        style={{ 
                            margin: '20px', 
                            border: '1px solid rgb(189, 195, 199)', // Light border
                            borderRadius: '8px', 
                            padding: '10px', 
                            backgroundColor: 'rgb(21, 23, 28)' // Darker card background
                        }}
                    >
                        {/* Prize image with responsive sizing */}
                        <img 
                            src={prize.image} 
                            alt={prize.name} 
                            style={{ 
                                width: '100%', 
                                borderRadius: '8px' 
                            }}
                        />
                        
                        {/* Prize name with yellow accent color */}
                        <h2 style={{ color: 'rgb(241, 196, 15)' }}>
                            {prize.name}
                        </h2>
                        
                        {/* Prize description */}
                        <p>{prize.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prizes;