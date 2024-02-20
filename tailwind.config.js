/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      fontSize: {
        "3xl": ["48px", "150%"],
        "2xl": ["40px", "150%"],
        xl: ["32px", "150%"],
        lg: ["24px", "150%"],
        md: ["16px", "150%"],
        sm: ["12px", "150%"],
        xs: ["10px", "150%"],
      },
    },
  },
  plugins: [],
};
