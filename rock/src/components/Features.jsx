import React from 'react';

const Features = () => {
    return (
        <div style={{ backgroundColor: 'rgb(40, 44, 52)', color: 'rgb(236, 240, 241)', padding: '20px' }}>
            <h1 style={{ color: 'rgb(155, 89, 182)' }}>Features of Our Radio Station</h1>
            <ul>
                <li style={{ margin: '10px 0' }}>
                    <h2 style={{ color: 'rgb(241, 196, 15)' }}>Live Streaming</h2>
                    <p>Enjoy uninterrupted live streaming of your favorite rock music 24/7.</p>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <h2 style={{ color: 'rgb(52, 152, 219)' }}>Request Your Favorite Songs</h2>
                    <p>Submit your song requests and hear them played live on air!</p>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <h2 style={{ color: 'rgb(211, 84, 0)' }}>Win Exciting Prizes</h2>
                    <p>Participate in our contests and stand a chance to win amazing prizes!</p>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <h2 style={{ color: 'rgb(192, 57, 43)' }}>Latest Concert Information</h2>
                    <p>Stay updated with the latest concert dates and locations for your favorite bands.</p>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <h2 style={{ color: 'rgb(46, 204, 113)' }}>User-Friendly Navigation</h2>
                    <p>Navigate easily through our website with a clean and intuitive interface.</p>
                </li>
            </ul>
        </div>
    );
};

export default Features;