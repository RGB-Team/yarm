import { Metadata } from "next"

interface ConstructMetadataParams {
  title?: string
  description?: string
  image?: string
  icons?: any
  noIndex?: boolean
}

export const baseUrl =
	process.env.NODE_ENV === "development"
		? new URL(process.env.NEXT_PUBLIC_APP_URL!).toString()
		: new URL(`https://${process.env.VERCEL_URL!}`).toString();

console.log(baseUrl)

export function constructMetadata({
  title = "Your Site Name",
  description = "Your site description",
  image = "/api/og",
  noIndex = false,
}: ConstructMetadataParams = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@yourtwitterhandle",
    },
    icons: {
      icon: [
        {
          url: '/app/favicon.ico',
          sizes: 'any',
        },
        {
          url: '/meta/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/meta/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      apple: [
        {
          url: '/meta/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
    },
    manifest: '/site.webmanifest',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export const siteConfig = {
  name: "Yet Another Registry Manager",
  description: "A modern web-based registry manager designed to streamline modern application development workflows.",
  url: baseUrl,
  ogImage: `${baseUrl}/api/og`,
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
      url: "https://github.com/RGB-Team",
    },
  ],
  themeColor: {
    light: "#ffffff",
    dark: "#000000",
  },
}

export type SiteConfig = typeof siteConfig 