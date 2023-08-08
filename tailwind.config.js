/**/// @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nextDayCard': 'rgba(214, 214, 214, 0.40)',
        'sunriseSet': 'rgba(255, 255, 255, 0.25)',
        'countryInputBG': 'rgba(214, 214, 214, 0.1)'
      },
      backgroundImage: {
        'backgroundColor': 'linear-gradient(225deg, #9065BC 0%, rgba(255, 0, 108, 0.38) 100%)'
      },
      borderRadius: {
        '50px': '50px'
      },
      width: {
        '576px': '576px',
        '450px': '450px',
        
      },
  
    },
  },
  plugins: [],
}

