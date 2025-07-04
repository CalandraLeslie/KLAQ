// Vite build tool configuration
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration for KLAQ 95.5 FM website
 * 
 * This configuration sets up Vite for React development with:
 * - React plugin for JSX transformation and Fast Refresh
 * - Support for JSX syntax in both .jsx and .js files
 * - Optimized development server with hot module replacement
 * 
 * Vite provides fast development builds and optimized production bundles
 */
export default defineConfig({
  plugins: [react({
    // Enable JSX processing in both .jsx and .js files
    // This allows flexibility in file naming conventions
    include: '**/*.{jsx,js}',
  })],
});