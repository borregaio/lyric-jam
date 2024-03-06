/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': '#303030',
      },
      colors: {
        'custom-red': '#F06767',
        'custom-pink': '#F08686',
        'custom-gray': '#303030',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        'height0' : '550px',
        'height1' : '700px',
      }
    },
  },
  plugins: [],
}

