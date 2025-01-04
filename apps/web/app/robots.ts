import { MetadataRoute } from 'next'
import { baseUrl } from '@/config/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/static/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/*.jpg$",
          "/*.jpeg$",
          "/*.gif$",
          "/*.png$"
        ],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
} 