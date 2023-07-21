/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js}"],
  theme: {
    extend: {
      width: {
        "1/7": "12.5%",
      },
    },
  },
  plugins: [],
};
