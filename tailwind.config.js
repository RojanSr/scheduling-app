/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"]
      },
      colors: {
        primary: "rgb(var(--color-text-primary) / <alpha-value>)",
        brand: "rgb(var(--color-brand-primary) / <alpha-value>)",
        "canvas-1": "rgb(var(--color-canvas-primary) / <alpha-value>)",
        "canvas-2": "rgb(var(--color-canvas-secondary) / <alpha-value>)"
      }
    }
  },
  plugins: []
};
