// React library and DOM rendering utilities
import React from 'react';
import { createRoot } from 'react-dom/client';

// Global CSS styles for the entire application
import './styles.css'; // Single CSS file for all components

// Main application component
import App from './App.jsx';

/**
 * Application entry point
 * 
 * This file initializes the React application and mounts it to the DOM.
 * It uses React 18's createRoot API for concurrent rendering features.
 * The app is wrapped in StrictMode for development warnings and checks.
 */

// Find the root DOM element where React will mount the application
const root = createRoot(document.getElementById('app'));

// Render the application with React StrictMode for enhanced development experience
// StrictMode helps identify unsafe lifecycles, legacy API usage, and other issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
