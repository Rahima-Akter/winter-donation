/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        festiveRed: "#D92027",
        festiveGreen: "#4CAF50",
        festiveGold: "#FFD700",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        pulseLight: "pulseLight 1.5s infinite",
        "spin-slow": "spin 10s linear infinite",
        "spin-reverse": "spin 10s linear infinite reverse",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        pulseLight: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },

      },
    },
  },
  plugins: [require('daisyui'),],
};


// module.exports = {

