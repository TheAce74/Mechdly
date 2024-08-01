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
          200: "#FFD282",
          400: "#F68537",
          500: "#E07932",
        },
        secondary: {
          300: "#87491E",
          400: "#673817",
        },
      },
      borderRadius: {
        pill: "100vmax",
      },
      backgroundImage: {
        "fade-circle-right":
          "radial-gradient(circle 400px at 90% 45%, #ffd18244, transparent 70%)",
        "fade-circle-left":
          "radial-gradient(circle 400px at 0% 50%, #ffd18244, transparent 70%)",
        "fade-circle-center":
          "radial-gradient(circle 400px at 40% 55%, #ffd18244, transparent 70%)",
        "fade-circle-both": `
          radial-gradient(circle 400px at 90% 45%, #ffd18244, transparent 70%),
          radial-gradient(circle 400px at 0% 70%, #ffd18244, transparent 70%)
        `,
      },
    },
  },
  plugins: [],
};

export default config;
