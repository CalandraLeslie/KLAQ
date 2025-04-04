import React from 'react';

const Prizes = () => {
    const prizes = [
        {
            id: 1,
            name: 'Concert Tickets',
            description: 'Win tickets to the hottest concerts in town!',
            image: '/crowd.jpg'
        },
        {
            id: 2,
            name: 'Merchandise',
            description: 'Get exclusive band merchandise!',
            image: '/merch.jpg'
        },
        {
            id: 3,
            name: 'Meet & Greet',
            description: 'Meet your favorite artists in person!',
            image: '/meet.jpg'
        }
    ];

    return (
        <div className="prizes-container" id="prizes" style={{ backgroundColor: 'rgb(40, 44, 52)', color: 'rgb(236, 240, 241)', padding: '20px' }}>
            <h1 style={{ color: 'rgb(155, 89, 182)' }}>Prizes</h1>
            <div className="prizes-list">
                {prizes.map(prize => (
                    <div key={prize.id} style={{ margin: '20px', border: '1px solid rgb(189, 195, 199)', borderRadius: '8px', padding: '10px', backgroundColor: 'rgb(21, 23, 28)' }}>
                        <img 
                            src={prize.image} 
                            alt={prize.name} 
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <h2 style={{ color: 'rgb(241, 196, 15)' }}>{prize.name}</h2>
                        <p>{prize.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prizes;