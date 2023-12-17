/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: '#f5f7ff',
      card: '#ffffff',
      primary: '#0277ff',
      lightgrey: '#91a5d4',
      grey: '#4a6a9b',
      dark: '#000000',
    },
    fontFamily: {
      mono: ['"PT Mono"', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}

