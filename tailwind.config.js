/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a4d2e",
        secondary: "#d4a017",
        accent: "#f59e0b",
        background: "#fffcf5",
      },
        screens: {
        xs: "550px",   // 👈 custom breakpoint
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}