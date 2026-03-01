import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base layers (deeper + more contrast)
        bg: "#07080B",          // darker background
        card: "#0F1117",        // elevated surface
        line: "#1C1F2A",        // softer border tone

        // Text
        text: "#F2F3F7",
        muted: "#8B90A7",

        // Accent (more premium cyan, less neon)
        accent: "#5AD7FF",
        accentSoft: "#1E3A45",

        // Status
        good: "#49D2A3",
        warn: "#F7C948",

        // Extra surfaces for depth
        surface: "#131621",
        surfaceSoft: "#0C0E14"
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
        card: "0 18px 70px -40px rgba(0,0,0,0.9)",
        glow: "0 18px 60px -28px rgba(90,215,255,0.9)"
      }
    }
  },
  plugins: []
} satisfies Config;
