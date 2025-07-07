/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // KLAQ Brand Colors
        'deep-black': '#141414',
        'charcoal': '#2d2d2d',
        'dark-steel': '#374b5b',
        'electric-red': '#dc322f',
        'neon-orange': '#ff5f1f',
        'rock-gold': '#ffc107',
        'silver': '#b4b4b4',
        'deep-purple': '#8e44ad',
        'electric-blue': '#3498db',
        'pure-white': '#ffffff',
        'light-gray': '#c8c8c8',
        'dark-gray': '#646464',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'equalizer': 'equalizer 1.5s ease-in-out infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(220, 50, 47, 0.3)',
        'glow-lg': '0 0 40px rgba(220, 50, 47, 0.4)',
        'rock': '0 8px 30px rgba(0, 0, 0, 0.3)',
        'rock-lg': '0 15px 40px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
