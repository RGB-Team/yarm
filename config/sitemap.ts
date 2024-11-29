export const siteConfig = {
  baseUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://yarm.vercel.app',
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