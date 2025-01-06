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
        "custom-white": "#fdfffc",
        primary: "#f71735",
        dark: "#011627",
        accent: "#143347",
        "primary-hover": "#af0707",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
