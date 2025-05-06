/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'droid-sans': ['Droid Sans', 'sans-serif'],
      },
      colors: {
        'custom-gray': 'rgb(101, 101, 101)',
        'custom-dark': 'rgb(39, 39, 39)',
      },
    },
  },
  plugins: [],
} 