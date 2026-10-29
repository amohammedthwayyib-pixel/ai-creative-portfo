import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#0A0B14", panel: "#14162A", bone: "#EDEAF5", violet: "#8B7BFF", amber: "#FFB547" },
    fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-body)", "sans-serif"] },
  } },
} satisfies Config;
