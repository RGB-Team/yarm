import { MetadataRoute } from 'next'
import { siteConfig as sitemapConfig } from '@/config/sitemap'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = sitemapConfig.baseUrl

  // Generate static routes
  const staticRoutes = sitemapConfig.staticRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Here you would typically fetch dynamic routes from your database
  // This is a placeholder for demonstration
  const dynamicRoutes: MetadataRoute.Sitemap = []
  
  // Example of how to add dynamic routes when you have them:
  // const registries = await fetchRegistries()
  // const registryRoutes = registries.map(registry => ({
  //   url: `${baseUrl}/registry/${registry.id}`,
  //   lastModified: registry.updatedAt,
  //   changeFrequency: 'daily' as const,
  //   priority: 0.7,
  // }))
  // dynamicRoutes.push(...registryRoutes)

  return [...staticRoutes, ...dynamicRoutes]
} 