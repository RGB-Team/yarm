import type { Config } from "tailwindcss";
import sharedConfig from "@yarm/tailwind-config/tailwind.config";

export default {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
      ],
      plugins: [require("tailwindcss-animate")],
    },
  ],
} satisfies Pick<Config, "presets">;
