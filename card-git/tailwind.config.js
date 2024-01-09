/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors:{
    //   'background': '#f5f7ff',
    //   'card': '#ffffff',
    //   'primary': '#0277ff',
    //   'lightgrey': '#91a5d4',
    //   'grey': '#4a6a9b',
    //   'dark':' #000000',
    // },
    fontFamily: {
      mono: ['"PT Mono"', 'monospace'],
    },
    extend: {
      colors:{
        'background':'rgb(var(--background))',
        'card':'rgb(var(--card))',
        'primary':'rgb(var(--primary))',
        'lightgrey':'rgb(var(--lightgrey))',
        'grey':'rgb(var(--grey))',
        'dark':'rgb(var(--dark))',
      },
      backgroundColor:{
        'background':'rgb(var(--background))',
        'card':'rgb(var(--card))',
        'primary':'rgb(var(--primary))',
        'lightgrey':'rgb(var(--lightgrey))',
        'grey':'rgb(var(--grey))',
        'dark':'rgb(var(--dark))',
      }
    },
  },
  plugins: [],
}

