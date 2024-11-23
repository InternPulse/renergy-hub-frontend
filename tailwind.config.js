/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'hardYellow':"#f9d262",
        'hardGreen':"#2c742f",
        'softGreen':"#84d187"

      },
      screens: {
        ipad: { max: '820px' }, // iPad Air
        ipadMini: { max: '768px' }, // iPad Mini
      },
    },
  },
  plugins: [],
}
