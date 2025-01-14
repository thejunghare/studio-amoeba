/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-texture': "url('/public/black.jpg')",
        'test': "url('/public/dark-2.jpg')",
        'custom-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1%, transparent 50%), linear-gradient(45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%)",
      },
      colors: {
        'texture': '#0F1114',
        'dark-base': '#1e1e2f',
      },
    },
  },
  plugins: [],
};
