/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    color: {
      transparent: "transparent",
      currentColor: "currentColor",
      black: "#0A0A0A",
      white: "#FFFFFF",
    },
    screens: {
      xxs: "360px",
      xs: "500px",
      s: "640px",
      sm: "800px",
      m: "1000px",
      l: "1280px",
      xl: "1600px",
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
        pixy: ["var(--font-pixy)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
