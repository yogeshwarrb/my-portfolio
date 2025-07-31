/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "Segoe UI", "Helvetica Neue", "sans-serif"],
        },
      },
    },
  },
};
