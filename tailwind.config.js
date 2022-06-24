/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundSize: {
        'fit': '100% 100%'
      },
      animation: {
        'clockwise': 'clockwise 60s linear infinite',
        'bubble': 'bubble 5s ease-in-out infinite',
        'zoom': 'zoom 1.2s linear infinite'
      },
      keyframes: {
        clockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bubble: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' }
        },
        zoom: {
          '0%': { backgroundSize: '100% 100%' },
          '25%': { backgroundSize: '95% 95%' },
          '50%': { backgroundSize: '92% 92%' },
          '75%': { backgroundSize: '95% 95%' },
          '100%': { backgroundSize: '100% 100%' }
        }
      },
      screens: {
        'desktop': '1200px'
      }
    },
  },
  plugins: [],
}
