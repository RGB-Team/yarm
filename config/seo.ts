export const siteConfig = {
  name: "Yet Another Registry Manager",
  description: "A modern web-based registry manager designed to streamline modern application development workflows.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://yarm.vercel.app",
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL || "https://yarm.vercel.app"}/api/og`,
  links: {
    twitter: "https://twitter.com/@BylkaYf",
    github: "https://github.com/RGB-Team/yarm",
  },
  creator: "@rgb-team",
  keywords: [
    "registry manager",
    "npm",
    "package manager",
    "development tools",
    "GitHub Packages",
    "private registry",
  ],
  authors: [
    {
      name: "RGB-Team",
      url: "https://yarm.vercel.app",
    },
  ],
  themeColor: {
    light: "#ffffff",
    dark: "#000000",
  },
}

export type SiteConfig = typeof siteConfig 