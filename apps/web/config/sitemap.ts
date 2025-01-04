import { baseUrl } from "./seo";

export const siteConfig = {
  baseUrl,
  // Add all static routes here
  staticRoutes: [
    '',              // home page
    '/dashboard',
    '/settings',
    '/search',
    '/docs',
    '/about',
  ],
  // Add dynamic route patterns here
  dynamicRoutes: {
    '/registry/:id': {
      changefreq: 'daily',
      priority: 0.7
    },
    '/package/:name': {
      changefreq: 'daily',
      priority: 0.8
    }
  }
} 