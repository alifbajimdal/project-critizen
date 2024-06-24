/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9ECF2",
        secondary: "#F46A79",
        third: "#529299",
        fourth: "#A0D8DF",
        fifth: "#FED3D3"
       
      },
    },
  },
  plugins: [],
}

