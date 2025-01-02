/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-1": "0 1rem 2rem rgba(7,29,43,0.12)",
        "custom-2": "0 20px 40px -20px rgba(0,0,0,0.4)",
        "custom-red": "0 10px 13px rgba(211,47,47,0.16)",
      },
      colors: {
        background: "#071d2b",
        primary: "#d32f2f",
        secondary: "#0b2545",
        accent: "#ff4081",
        "light-background": "#f2f3f5",
        "muted-text": "#b0bec5",
        "light-accent": "#143347",
        "dark-accent": "#0C2636",
        "primary-hover": "#af0707",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
