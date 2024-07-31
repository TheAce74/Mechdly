import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        darker: ["Darker Grotesque", "sans-serif"],
      },
      colors: {
        neutral: {
          100: "#FFFFFF",
          900: "#000000",
        },
        primary: {
          100: "#FCD9C1",
          400: "#F68537",
          500: "#E07932",
        },
        secondary: {
          300: "#87491E",
          400: "#673817",
        },
      },
    },
  },
  plugins: [],
};

export default config;
