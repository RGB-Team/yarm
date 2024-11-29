# Yet Another Registry Manager

A modern web-based registry manager designed to streamline modern application development workflows.

## Overview

Yarm is a tool that helps developers easily manage and switch between different npm registries, making it simpler to work with private and public package repositories. Whether you're working with npm, GitHub Packages, or private registries, this tool provides a seamless experience for registry management.

## Features

- 🔄 Easy registry switching
- 🔑 Secure credentials management
- 📦 Support for multiple registry types (npm, GitHub Packages, private)
- 🚀 Quick registry health checks
- 💻 User-friendly web interface
- 🎨 Beautiful UI components powered by shadcn/ui
- 🌓 Dark mode support with smooth transitions

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd registry-manager
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to access the Registry Manager.

## Development

### Using shadcn/ui Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for its UI components. To add new components:

1. Use the CLI:
```bash
npx shadcn-ui@latest add [component-name]
```

For example, to add a button component:
```bash
npx shadcn-ui@latest add button
```

2. Import and use components in your files:
```tsx
import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}
```

### Theme Support

The application includes a dark mode toggle with animated transitions. The theme system:
- Supports light and dark modes
- Persists user preference
- Includes smooth icon transitions
- Uses system color scheme by default

Available components and their documentation can be found in the [shadcn/ui documentation](https://ui.shadcn.com/docs/components/accordion).

### SEO Implementation

This project implements a robust SEO system using Next.js 14 metadata API. The system is centralized and type-safe, allowing for easy management of metadata across all pages.

#### Structure
- `config/seo.ts` - Central configuration for all SEO-related content
- `lib/metadata.ts` - Utility function to construct metadata
- `public/robots.txt` - Search engine crawling rules
- `public/site.webmanifest` - Progressive Web App manifest

#### Usage

1. Default metadata is automatically applied from the SEO config:
```typescript
// app/layout.tsx
export const metadata = constructMetadata()
```

2. Page-specific metadata can be added using the constructMetadata function:
```typescript
// app/any-page/page.tsx
export const metadata = constructMetadata({
  title: "Page Title",
  description: "Page specific description",
  pathname: "/any-page",
  noIndex: false, // optional: prevent indexing
})
```

3. Environment Variables Required:
```bash
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

#### SEO Todo List

The following items need to be completed for full SEO implementation:

- [ ] Create favicon files:
  - [ ] favicon.ico (32x32)
  - [ ] favicon-16x16.png
  - [ ] favicon-32x32.png
  - [ ] apple-touch-icon.png (180x180)
  - [ ] android-chrome-192x192.png
  - [ ] android-chrome-512x512.png

- [x] OpenGraph Image:
  - [x] Create OG image template (1200x630)
  - [x] Add OG image generation API route
  - [x] Implement dynamic OG images for different pages
  - [ ] Update OG template with official branding
  - [ ] Add proper typography and spacing
  - [ ] Implement branded background pattern
  - [ ] Add dynamic color themes based on brand palette

- [ ] Verification:
  - [ ] Add Google Search Console verification
  - [ ] Set up Google Analytics
  - [ ] Configure Google Tag Manager

- [ ] Sitemap:
  - [x] Implement dynamic sitemap generation
  - [x] Add sitemap to robots.txt
  - [x] Configure static routes
  - [x] Set up route priorities
  - [x] Implement changefreq settings
  - [ ] Add dynamic route generation from database
  - [ ] Set up automatic sitemap revalidation
  - [ ] Submit sitemap to:
    - [ ] Google Search Console
    - [ ] Bing Webmaster Tools
    - [ ] Yandex Webmaster
  - [ ] Monitor sitemap coverage
  - [ ] Implement sitemap index for large sites
  - [ ] Add lastmod dates from content updates

- [ ] Structured Data:
  - [ ] Implement JSON-LD for organization
  - [ ] Add JSON-LD for breadcrumbs
  - [ ] Include structured data for main features

- [ ] Performance:
  - [ ] Optimize image loading
  - [ ] Implement proper caching headers
  - [ ] Configure CSP headers

- [ ] Monitoring:
  - [ ] Set up SEO monitoring tools
  - [ ] Implement performance monitoring
  - [ ] Configure error tracking

- [ ] Accessibility:
  - [ ] Complete ARIA labels
  - [ ] Ensure proper heading hierarchy
  - [ ] Test with screen readers

- [ ] Social Media:
  - [ ] Create Twitter card templates
  - [ ] Set up Facebook Open Graph tags

- [ ] Brand Assets:
  - [x] Create official YARM logo:
    - [ ] Primary logo (SVG)
    - [ ] Logo mark only (SVG)
    - [ ] Logo with text (SVG)
    - [ ] Dark mode variants
    - [ ] Social media variants
  - [ ] Define brand colors and typography
  - [ ] Create brand style guide
  - [ ] Add logo to all templates (OG, favicon, etc.)

### Sitemap Configuration

The project uses Next.js 14's built-in sitemap generation. The sitemap system:
- Automatically generates XML sitemaps
- Supports both static and dynamic routes
- Configures route priorities and change frequencies
- Integrates with robots.txt
- Updates automatically with deployments

#### Usage

1. Add new static routes to the sitemap config:
```typescript
// config/sitemap.ts
export const siteConfig = {
  staticRoutes: [
    '/new-route',
    '/another-route',
  ],
}
```

2. Configure dynamic routes:
```typescript
// config/sitemap.ts
dynamicRoutes: {
  '/dynamic/:id': {
    changefreq: 'daily',
    priority: 0.7
  }
}
```

3. Access your sitemap at:
```
https://your-domain.com/sitemap.xml
```

## Usage

[Add specific usage instructions for your registry manager here]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your license information here]

## Support

[Add support information or contact details here]
