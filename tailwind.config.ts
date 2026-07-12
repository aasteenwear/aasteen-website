import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        charcoal: "#111111",
        silver: "#C0C0C0",
        white: "#FFFFFF",
        ink: {
          950: "#000000",
          900: "#0a0a0a",
          800: "#111111",
          700: "#1c1c1c",
          500: "#4a4a4a",
          300: "#8a8a8a",
          100: "#e7e7e7"
        }
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-grotesk)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"]
      },
      letterSpacing: {
        widest2: "0.28em",
        widest3: "0.42em"
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 0.84, 0.28, 1)"
      }
    }
  },
  plugins: []
};

export default config;
