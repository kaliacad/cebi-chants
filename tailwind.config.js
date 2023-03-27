/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Playfair: ["Playfair Display"],
      },
      colors: {
        Jaune: "#D2A700",
        Vert: "#A3BA90",
        Rouge: "#FE3B00",
        Blue: "#549EA3",
        Violet: "#E0A1E1",
        Gris: "#656565",
      },
    },
    //  screens: {
    //   mobile: '480px',
    //   tablette: '768px',
    //   laptop: '976px',
    //   desktop: '1440px'
    // },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
