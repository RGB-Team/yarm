import { Metadata } from "next"
import { siteConfig } from "@/config/seo"

interface MetadataProps {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  pathname?: string
  mode?: 'light' | 'dark'
  type?: 'default' | 'page' | 'article'
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  image,
  noIndex = false,
  pathname,
  mode = 'light',
  type = 'default'
}: MetadataProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name

  const url = pathname 
    ? `${siteConfig.url}${pathname}`
    : siteConfig.url

  // Generate OG image URL with all possible parameters
  const ogImageUrl = new URL('/api/og', siteConfig.url)
  const ogImageParams = new URLSearchParams({
    title: title || siteConfig.name,
    mode,
    type
  })
  
  // Use custom image if provided, otherwise use generated OG image
  const ogImage = image || `${ogImageUrl}?${ogImageParams.toString()}`

  return {
    title: fullTitle,
    description,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    keywords: siteConfig.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: siteConfig.creator,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/meta/favicon.ico',
      shortcut: '/meta/favicon-16x16.png',
      apple: '/meta/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: siteConfig.themeColor.light },
      { media: '(prefers-color-scheme: dark)', color: siteConfig.themeColor.dark },
    ],
  }
} 