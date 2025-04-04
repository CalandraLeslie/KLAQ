import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    // This allows JSX to be used in .js files
    include: '**/*.{jsx,js}',
  })],
});