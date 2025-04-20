import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
          light: "#D6BCFA",
          dark: "#6E59A5"
        },
        secondary: {
          DEFAULT: "#7E69AB",
          foreground: "#FFFFFF",
          light: "#E5DEFF",
          dark: "#1A1F2C"
        },
        
        accent: {
          DEFAULT: "#6E59A5",
          foreground: "#FFFFFF",
          light: "#D6BCFA",
          dark: "#403E43"
        },
        
        destructive: {
          DEFAULT: "#ea384c",
          foreground: "#FFFFFF"
        },
        success: {
          DEFAULT: "#48BB78",
          foreground: "#FFFFFF"
        },
        warning: {
          DEFAULT: "#ED8936",
          foreground: "#FFFFFF"
        },
        
        muted: {
          DEFAULT: "#8E9196",
          foreground: "#FFFFFF",
          light: "#F1F0FB",
          dark: "#222222"
        },
        
        sidebar: {
          background: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          accent: "hsl(var(--sidebar-accent))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
