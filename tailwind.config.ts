import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      colors: {
        ink: "#070A12",
        panel: "#101522",
        neon: "#B8FF5C",
        violet: "#8B7CFF"
      },
      boxShadow: {
        glow: "0 0 60px rgba(184,255,92,.15)"
      }
    }
  },
  plugins: []
};

export default config;
