/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-reverse": "spin 10s linear infinite reverse",
        // for footer
        slideDown: 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        "help-bg": "url('https://static.vecteezy.com/system/resources/thumbnails/030/349/631/small_2x/christmas-theme-snow-fall-at-night-on-the-park-with-skyscraper-view-ai-generated-free-video.jpg')",

        "helpForm-bg": "url('https://devsaidul.com/ui/nonpro/assets/images/brand/brand-bg.png')"
      }
    },
  },
  plugins: [require('daisyui'),],
};


// module.exports = {

