/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "1/7": "12.5%",
        "1/8": "30%",
        "1/9": "49%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
