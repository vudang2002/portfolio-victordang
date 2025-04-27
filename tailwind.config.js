/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyanNeon: "#02DDF6",
        pinkNeon: "#F83E7D",
        purpleNeon: "#7665E5",
        greenNeon: "#12B37E",
      },
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
