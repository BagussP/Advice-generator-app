/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Grayish-Blue": "hsl(217, 19%, 38%)",
        "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "Dark-Blue": "hsl(218, 23%, 16%)",
        "Light-Cyan": "hsl(193, 38%, 86%)",
        "Neo-Green": "hsl(150, 100%, 66%)",
      },
      boxShadow: {
        "3xl": "0 0 40px -2px hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
