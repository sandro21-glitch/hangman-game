/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-blue": "#2462ff",
      },
      textColor: {
        "primary-blue": "#2462ff",
        "dark-blue": "#261676",
        "gentle-purple": "#887dc0",
      },
    },
    plugins: [],
  },
};
