/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

