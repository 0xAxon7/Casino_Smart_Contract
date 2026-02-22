/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        dark:{
          100: '#cbd7ff08',
          200: '#1a1d29',
          300: '#0f111a8c',
        }
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
