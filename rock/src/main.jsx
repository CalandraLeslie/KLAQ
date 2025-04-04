import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; // Single CSS file for all components
import App from './App.jsx';

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
