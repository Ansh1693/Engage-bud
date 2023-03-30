/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blur: {
          "0% ,80%": {
            filter: "blur(2.5px)",
          },
          "100%": {
            transform: "blur(0px)",
          },
        },
      },
      animation:{
        blur: 'blur 10s ease-in-out',
      }
    },
  },
  plugins: [],
};
