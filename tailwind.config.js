/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#222327',
        'light-gray': '#2E2F34',
        'pencil-gray': '#979797',
        'brown': '#BD836D',
      },
      backgroundImage: {
        heroBg: 'url(./assets/hero.png)',
        left: 'url(./assets/left.png)',
        right: 'url(./assets/right.png)',
        col1: 'url(./assets/col1.png)',
        col2: 'url(./assets/col2.png)',
        col3: 'url(./assets/col3.png)',
        col4: 'url(./assets/col4.png)',

      },
      screens: {
        's-600': "600px",
      }
    },
  },
  plugins: [],
}

