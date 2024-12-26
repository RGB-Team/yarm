// copied from dub.co : https://github.com/dubinc/dub/blob/main/packages/tailwind-config/tailwind.config.ts

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import scrollbarHide from "tailwind-scrollbar-hide";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      fontFamily: {},
      fontSize: {
        "2xs": [
          "0.625rem",
          {
            lineHeight: "0.875rem",
          },
        ],
      },
      animation: {
        // Modal
        "scale-in": "scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.2s ease-out forwards",
        "scale-in-fade": "scale-in-fade 0.2s ease-out forwards",
        // Popover, Tooltip
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // Sheet
        "slide-in-from-right": "slide-in-from-right 0.2s ease",
        "slide-out-to-right": "slide-out-to-right 0.2s ease",
        // Navigation menu
        "enter-from-right": "enter-from-right 0.15s ease",
        "enter-from-left": "enter-from-left 0.15s ease",
        "exit-to-right": "exit-to-right 0.15s ease",
        "exit-to-left": "exit-to-left 0.15s ease",
        "scale-in-content": "scale-in-content 0.2s ease",
        "scale-out-content": "scale-out-content 0.2s ease",
        // Accordion
        "accordion-down": "accordion-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-up": "accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        // Custom wiggle animation
        wiggle: "wiggle 0.75s infinite",
        // Custom spinner animation (for loading-spinner)
        spinner: "spinner 1.2s linear infinite",
        // Custom blink animation (for loading-dots)
        blink: "blink 1.4s infinite both",
        // Custom pulse animation
        pulse: "pulse 1s linear infinite alternate",
      },
      keyframes: {
        // Modal
        "scale-in": {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in-fade": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        // Popover, Tooltip
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(var(--offset, 2px))" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: "0", transform: "translateX(var(--offset, -2px))" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: "0", transform: "translateY(var(--offset, -2px))" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: "0", transform: "translateX(var(--offset, 2px))" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        // Sheet
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-to-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        // Accordion
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      colors: {},
    },
  },
  plugins: [forms, typography, scrollbarHide],
};

export default config;
