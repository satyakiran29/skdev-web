/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // You can extend the default colors here if you want a specific 'skdev cyan'
      // colors: {
      //   cyan: {
      //     400: '#22d3ee', // Example custom override
      //   }
      // }
    },
  },
  plugins: [],
}