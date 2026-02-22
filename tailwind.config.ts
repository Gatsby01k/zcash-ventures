import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0C10",
        card: "#111218",
        line: "#232534",
        text: "#E7E8EE",
        muted: "#A6A8B6",
        accent: "#6EE7FF",
        good: "#63E6BE",
        warn: "#FFD43B"
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.25)" }
    }
  },
  plugins: []
} satisfies Config;
