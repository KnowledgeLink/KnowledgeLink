/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#2B85FF",
        secondary : "#EF863E"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-50px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        updown: {
          '0%': { transform: 'translateY(-6px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(50px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        slideIn: 'slideIn 1.3s ease-in-out forwards',
        updown: 'updown 0.7s ease infinite',
        slideInUp: 'slideInUp 1.3s ease-in-out forwards',
      },

    },
  },
  plugins: [],
}