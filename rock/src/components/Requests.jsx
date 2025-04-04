import React, { useState } from 'react';

const Requests = () => {
    const [request, setRequest] = useState('');
    const [submittedRequests, setSubmittedRequests] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (request) {
            setSubmittedRequests([...submittedRequests, request]);
            setRequest('');
        }
    };

    return (
        <div className="requests-container" id="requests" style={{ padding: '20px', backgroundColor: 'rgb(40, 44, 52)', color: 'rgb(236, 240, 241)' }}>
            <h2>Song Requests</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    placeholder="Enter your song request"
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid rgb(74, 79, 89)',
                        width: '300px',
                        marginRight: '10px',
                        backgroundColor: 'rgb(21, 23, 28)',
                        color: 'rgb(236, 240, 241)'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 15px',
                        backgroundColor: 'rgb(155, 89, 182)',
                        color: 'rgb(255, 255, 255)',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Submit
                </button>
            </form>
            <h3>Submitted Requests:</h3>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {submittedRequests.map((req, index) => (
                    <li key={index} style={{ margin: '5px 0', color: 'rgb(189, 195, 199)' }}>
                        {req}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Requests;