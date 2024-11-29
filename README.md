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

## Usage

[Add specific usage instructions for your registry manager here]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your license information here]

## Support

[Add support information or contact details here]
