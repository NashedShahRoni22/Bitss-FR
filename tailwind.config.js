/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-1": `0 1rem 2rem rgba(7,29,43,0.12)`,
        "custom-2": `0 20px 40px -20px rgba(0,0,0,0.4)`,
      },
      colors: {
        "custom-blue": "#FF4081",
        "custom-white": "#F2F3F5",
        "custom-gray": "#B0BEC5",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
