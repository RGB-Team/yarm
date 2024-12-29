import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import scrollbarHide from "tailwind-scrollbar-hide";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        checked: {
          DEFAULT: "hsl(var(--checked))",
          foreground: "hsl(var(--checked-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        key: "hsl(var(--key))",
        accordion: {
          bg: "hsl(var(--key))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        border: "hsl(var(--border))",
        layout: {
          border: "hsl(var(--layout-border))",
          bg: "hsl(var(--layout-bg))",
        },
        placeholder: "hsl(var(--placeholder))",
        select: {
          DEFAULT: "hsl(var(--select))",
          hover: "hsl(var(--select-hover))",
          foreground: "hsl(var(--letter-border))",
        },
        "command-hover": "hsl(var(--command-hover))",
        switch: {
          DEFAULT: "hsl(var(--field-border))",
          bg: "hsl(var(--field-bg))",
        },
        checkbox: {
          DEFAULT: "hsl(var(--checkbox))",
          bg: "hsl(var(--checkbox-bg))",
          border: "hsl(var(--checkbox-border))",
          "checked-border": "hsl(var(--checkbox-checked-border))",
        },
        input: {
          DEFAULT: "hsl(var(--field-border))",
          bg: "hsl(var(--field-bg))",
        },
        tooltip: {
          DEFAULT: "hsl(var(--tooltip))",
          foreground: "hsl(var(--tooltip-foreground))",
          border: "hsl(var(--tooltip-border))",
        },
        letter: {
          DEFAULT: "hsl(var(--letter))",
          foreground: "hsl(var(--letter-foreground))",
        },
        ring: {
          DEFAULT: "hsl(var(--ring))",
          secondary: "hsl(var(--ring-secondary))",
          destructive: "hsl(var(--ring-destructive))",
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          "secondary-foreground": "hsl(var(--sidebar-secondary-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [forms, typography, scrollbarHide],
};

export default config;
