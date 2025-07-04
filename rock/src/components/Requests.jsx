import React, { useState } from 'react';

/**
 * Requests component - Song request form for listener interaction
 * 
 * This component allows listeners to submit song requests to the radio station.
 * Features:
 * - Text input for song requests
 * - Form submission handling
 * - Display of submitted requests
 * - Client-side request storage (could be enhanced with backend persistence)
 * - Dark theme styling with inline styles
 * 
 * Future enhancements could include:
 * - Backend API integration for request persistence
 * - Request moderation system
 * - Vote/like system for popular requests
 * - Auto-suggestions for song titles
 * 
 * @returns {JSX.Element} Song request form and submitted requests list
 */
const Requests = () => {
    // State for the current input value in the request form
    const [request, setRequest] = useState('');
    
    // State array to store all submitted requests (local storage)
    const [submittedRequests, setSubmittedRequests] = useState([]);

    /**
     * Handles form submission for song requests
     * @param {Event} e - Form submission event
     */
    const handleSubmit = (e) => {
        // Prevent default form submission behavior (page refresh)
        e.preventDefault();
        
        // Only proceed if there's actual content in the request
        if (request) {
            // Add new request to the submitted requests array
            setSubmittedRequests([...submittedRequests, request]);
            
            // Clear the input field for next request
            setRequest('');
        }
    };

    return (
        <div 
            className="requests-container" 
            id="requests" 
            style={{ 
                padding: '20px', 
                backgroundColor: 'rgb(40, 44, 52)', // Dark background
                color: 'rgb(236, 240, 241)' // Light text
            }}
        >
            {/* Section heading */}
            <h2>Song Requests</h2>
            
            {/* Song request submission form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                
                {/* Text input for song request */}
                <input
                    type="text"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)} // Update state on input change
                    placeholder="Enter your song request"
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid rgb(74, 79, 89)', // Subtle border
                        width: '300px',
                        marginRight: '10px',
                        backgroundColor: 'rgb(21, 23, 28)', // Dark input background
                        color: 'rgb(236, 240, 241)' // Light input text
                    }}
                />
                
                {/* Submit button */}
                <button
                    type="submit"
                    style={{
                        padding: '10px 15px',
                        backgroundColor: 'rgb(155, 89, 182)', // Purple accent color
                        color: 'rgb(255, 255, 255)', // White text
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Submit
                </button>
                
            </form>
            
            {/* Section for displaying submitted requests */}
            <h3>Submitted Requests:</h3>
            
            {/* List of all submitted requests */}
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {/* Map through submitted requests to display each one */}
                {submittedRequests.map((req, index) => (
                    <li 
                        key={index} 
                        style={{ 
                            margin: '5px 0', 
                            color: 'rgb(189, 195, 199)' // Slightly muted text color
                        }}
                    >
                        {req}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Requests;