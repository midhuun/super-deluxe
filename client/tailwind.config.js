/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      screens: {
        'xs': '480px',  
        'sm': '640px', 
        'md': '768px',   
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px', 
      },
      animation: {
        'fade-in': 'fade-in 0.5s forwards', // Fade-in animation lasting 0.5 seconds
      },
    },
  },
  plugins: [],
}

