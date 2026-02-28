/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hp': {
          blue: '#007DBA',
          'blue-light': '#E6F4FA',
          'blue-dark': '#005691',
          white: '#FFFFFF',
          'gray-light': '#F2F2F2',
          'gray-medium': '#D1D1D1',
          'gray-dark': '#333333'
        },
        'binance': {
          gold: '#F0B90B',
          'gold-light': '#F8D33A',
          dark: '#0C0C0C',
          'gray-dark': '#1E2026',
          'gray-medium': '#2B2F36',
          'gray-light': '#474D57'
        }
      }
    },
  },
  plugins: [],
};