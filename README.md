<div align="center">

# Echo B2B SaaS

**A modern, scalable B2B SaaS platform built with Next.js, TypeScript, and shadcn/ui**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg)](package.json)
[![Package Manager](https://img.shields.io/badge/pnpm-10.4.1-blue.svg)](package.json)
[![Framework](https://img.shields.io/badge/Next.js-16.0.10-black.svg)](https://nextjs.org/)

</div>

## 🚀 Overview

Echo is a comprehensive B2B SaaS solution built with a modern monorepo architecture. It features a main web application, embeddable widgets, and a shared component library built with shadcn/ui and Tailwind CSS.

## ✨ Features

- **🏗️ Monorepo Architecture** - Organized codebase with shared packages and applications
- **⚛️ Modern React Stack** - Built with React 19 and Next.js 16
- **🎨 Beautiful UI Components** - Pre-built components with shadcn/ui
- **🌙 Dark Mode Support** - Built-in theme switching with next-themes
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🔧 TypeScript** - Full type safety across the entire project
- **⚡ Fast Development** - Turborepo for optimized builds and hot reloading
- **🎯 Widget System** - Embeddable components for external integration

## 📁 Project Structure

```
echo-b2b-saas/
├── apps/
│   ├── web/           # Main web application (port 3000)
│   └── widget/        # Embeddable widget (port 3001)
├── packages/
│   ├── ui/            # Shared UI component library
│   ├── math/          # Shared utility functions
│   ├── eslint-config/ # ESLint configuration
│   └── typescript-config/ # TypeScript configuration
└── turbo.json         # Turborepo configuration
```

## 🛠️ Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **Lucide React** - Icon library

### Development Tools

- **Turborepo** - Monorepo build system
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- pnpm 10.4.1 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd echo-b2b-saas
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development servers**
   ```bash
   pnpm dev
   ```

This will start:

- Web application at `http://localhost:3000`
- Widget application at `http://localhost:3001`

## 📦 Available Scripts

### Root Level Commands

```bash
pnpm dev          # Start all applications in development mode
pnpm build        # Build all applications and packages
pnpm lint         # Run ESLint across all packages
pnpm format       # Format code with Prettier
```

### Application Commands

Navigate to `apps/web` or `apps/widget`:

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm typecheck    # Run TypeScript type checking
```

## 🎨 Using UI Components

This project uses shadcn/ui components from the shared `@workspace/ui` package.

### Adding New Components

To add new shadcn/ui components:

```bash
pnpm dlx shadcn@latest add [component-name] -c apps/web
```

Example:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

### Using Components

Import components from the shared UI package:

```tsx
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";

export function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` files in the respective app directories:

```bash
# apps/web/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# apps/widget/.env.local
NEXT_PUBLIC_WIDGET_API_URL=http://localhost:3001/api
```

### Tailwind CSS

Tailwind is already configured with the shared UI package. The configuration extends from `@workspace/ui` and includes:

- Dark mode support
- Custom color palette
- Responsive breakpoints
- Animation utilities

## 📱 Widget Integration

The widget application can be embedded in external websites:

```html
<script src="http://localhost:3001/widget.js"></script>
<div id="echo-widget"></div>
<script>
  EchoWidget.init({
    container: "#echo-widget",
    // Additional configuration
  });
</script>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Use TypeScript for all new code
- Add proper error handling and loading states
- Write meaningful commit messages
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

- Check the [Issues](../../issues) page
- Create a new issue with detailed information
- Join our community discussions

---

<div align="center">

**Built with ❤️ using modern web technologies**

</div>
