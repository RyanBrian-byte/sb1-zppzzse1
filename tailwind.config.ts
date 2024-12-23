import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background-color)",
          darker: "#070b14",
        },
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        text: {
          DEFAULT: "var(--text-color)",
          muted: "rgba(248, 250, 252, 0.8)",
        },
      },
      transitionDuration: {
        DEFAULT: "var(--transition-speed)",
      },
    },
  },
  plugins: [],
};

export default config;