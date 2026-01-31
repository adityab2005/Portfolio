/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        "background-light": "#1a1a1a",
        primary: "#3b82f6", // Electric blue
        secondary: "#8b5cf6", // Purple
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      }
    },
  },
  plugins: [],
}
