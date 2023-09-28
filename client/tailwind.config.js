/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkBlue: '#2d2d55',
      semiDarkBlue: '#3546e6',
      semiLightBlue: '#00a7e3',
      lightBlue: '#bbeeff',
      white: '#ffffff',
      black: '#000000',
      red: "#AE2A19"
    },
    fontFamily:{
      Roboto: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}