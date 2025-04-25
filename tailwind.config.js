/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "neon-purple": "#8b00ff",
          "neon-purple-dark": "#6a00cc",
          "neon-green": "#39FF14",
          "neon-green-dark": "#2ecc12",
          "neon-pink": "#FF1493",
          "neon-pink-dark": "#cc1076",
          black: "#28282d",
          "black-dark": "#1a1a1f",
        },
        boxShadow: {
          neon: "0 0 10px rgba(139, 0, 255, 0.5)",
        },
        fontFamily: {
          inter: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };