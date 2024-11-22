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
        'hardGreen':"#2c742f"

      }
    },
  },
  plugins: [],
}