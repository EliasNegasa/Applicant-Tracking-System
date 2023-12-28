/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#02E079',
        'brand-dark': '#013243',
        'brand-gray-dark': '#c7d1d8',
        'brand-gray-medium': '#c7d1d8',
        'brand-gray-light': '#f4f6f8'
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif;"
      }
    }
  },
  plugins: []
}
