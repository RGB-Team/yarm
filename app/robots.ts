import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/private/',
        '/admin/',
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
} 