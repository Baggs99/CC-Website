/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
        },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Yale-inspired premium palette
        navy: {
          50: "#f3f6fa",
          100: "#e2e9f3",
          200: "#bccbe0",
          300: "#90a8c7",
          400: "#5e7ea7",
          500: "#3d5e89",
          600: "#2b466b",
          700: "#1c3354",
          800: "#10223d",
          900: "#0a1a2f",
          950: "#050e1c",
        },
        ivory: {
          50: "#fbfaf7",
          100: "#f6f4ee",
          200: "#ece8dc",
          300: "#dcd6c3",
          400: "#c2b89e",
        },
        gold: {
          400: "#c9a55c",
          500: "#b58e5f",
          600: "#9a7546",
        },
        slate: {
          950: "#080d18",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "Fraunces",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      fontSize: {
        /* Mobile-first clamps so headlines never overpower narrow viewports */
        "display-xl": [
          "clamp(2.35rem, 9vw + 0.5rem, 6rem)",
          { lineHeight: "1.02", letterSpacing: "-0.025em" },
        ],
        "display-lg": [
          "clamp(2rem, 5.5vw + 0.35rem, 4.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.65rem, 4vw + 0.5rem, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.015em" },
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10, 26, 47, 0.04), 0 8px 24px -12px rgba(10, 26, 47, 0.08)",
        elevated:
          "0 1px 2px rgba(10, 26, 47, 0.06), 0 20px 40px -20px rgba(10, 26, 47, 0.18)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px rgba(0,53,107,0.45)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(61,94,137,0.35), transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        marquee: "marquee 40s linear infinite",
        "gradient-pan": "gradientPan 18s ease-in-out infinite",
        "pulse-slow": "pulseSlow 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientPan: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.85" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
