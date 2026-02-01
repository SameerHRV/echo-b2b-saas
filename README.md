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
- **🤖 AI-Powered Support** - Intelligent customer support with Google Gemini AI
- **📝 Conversation Management** - Real-time conversation tracking and management
- **🔐 Authentication & Authorization** - Secure user management with Clerk
- **📊 Dashboard Analytics** - Comprehensive dashboard for conversation insights
- **🎙️ Voice Support** - Voice integration with Vapi AI
- **📧 Contact Sessions** - Session-based customer interactions
- **🔄 Multi-Channel Support** - Chat, voice, and contact form integration

## 📁 Project Structure

```
echo-b2b-saas/
├── apps/
│   ├── web/                           # Main web application (port 3000)
│   │   ├── app/                        # Next.js App Router pages
│   │   │   ├── (auth)/                 # Authentication pages
│   │   │   │   ├── sign-in/
│   │   │   │   └── sign-up/
│   │   │   ├── (dashboard)/            # Dashboard pages
│   │   │   │   ├── conversations/      # Conversation management
│   │   │   │   ├── billing/           # Billing and subscriptions
│   │   │   │   ├── customization/     # Widget customization
│   │   │   │   ├── files/             # File management
│   │   │   │   ├── integrations/      # Third-party integrations
│   │   │   │   └── plugins/           # Plugin management
│   │   │   ├── api/                    # API routes
│   │   │   ├── layout.tsx             # Root layout
│   │   │   └── page.tsx               # Home page
│   │   ├── components/                 # Reusable components
│   │   ├── lib/                        # Utility functions
│   │   ├── modules/                    # Feature modules
│   │   │   ├── auth/                   # Authentication module
│   │   │   └── dashboard/              # Dashboard module
│   │   ├── public/                     # Static assets
│   │   ├── .env.local                 # Environment variables
│   │   ├── next.config.mjs            # Next.js configuration
│   │   └── package.json               # Dependencies
│   │
│   └── widget/                        # Embeddable widget (port 3001)
│       ├── app/                       # Next.js App Router pages
│       │   ├── api/                   # Widget API endpoints
│       │   └── widget/                # Widget-specific pages
│       ├── components/                # Widget components
│       ├── modules/                   # Widget modules
│       │   └── widget/                # Core widget functionality
│       │       ├── atoms/             # Jotai state atoms
│       │       ├── hooks/             # Custom hooks
│       │       └── ui/                # Widget UI components
│       ├── public/                    # Static assets
│       ├── .env.local                # Environment variables
│       └── package.json              # Dependencies
│
├── packages/
│   ├── ui/                           # Shared UI component library
│   │   ├── components/               # shadcn/ui components
│   │   │   ├── ui/                   # Base UI components
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   ├── dialog/
│   │   │   └── ...                  # Other components
│   │   ├── lib/                      # UI utilities
│   │   ├── styles/                   # Global styles
│   │   └── package.json              # UI package dependencies
│   │
│   ├── backend/                      # Convex backend with AI integration
│   │   ├── convex/                   # Convex functions and schema
│   │   │   ├── schema.ts             # Database schema
│   │   │   ├── auth.config.ts        # Authentication config
│   │   │   ├── convex.config.ts      # Convex configuration
│   │   │   ├── public/               # Public API functions
│   │   │   │   ├── conversations.ts  # Conversation management
│   │   │   │   ├── contactSessions.ts # Contact sessions
│   │   │   │   ├── messages.ts       # Message handling
│   │   │   │   └── organizations.ts  # Organization management
│   │   │   ├── private/              # Private internal functions
│   │   │   ├── system/               # System-level functions
│   │   │   │   └── ai/               # AI-related functions
│   │   │   │       └── agents/       # AI agents
│   │   │   │           └── supportAgent.ts # Support agent
│   │   │   └── users.ts              # User management
│   │   └── package.json              # Backend dependencies
│   │
│   ├── math/                         # Shared utility functions
│   │   ├── src/                      # Utility source files
│   │   └── package.json              # Math package dependencies
│   │
│   ├── eslint-config/               # ESLint configuration
│   │   ├── base.js                  # Base ESLint rules
│   │   ├── next.js                  # Next.js specific rules
│   │   └── package.json             # ESLint package dependencies
│   │
│   └── typescript-config/           # TypeScript configuration
│       ├── base.json                # Base TypeScript config
│       ├── nextjs.json              # Next.js TypeScript config
│       └── package.json             # TypeScript package dependencies
│
├── .gitignore                       # Git ignore rules
├── .npmrc                          # npm configuration
├── .turbo/                         # Turborepo cache
├── .vscode/                        # VS Code configuration
├── package.json                    # Root package.json
├── pnpm-lock.yaml                  # pnpm lock file
├── pnpm-workspace.yaml             # pnpm workspace configuration
├── tsconfig.json                   # Root TypeScript config
└── turbo.json                      # Turborepo configuration
```

## 🛠️ Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **Lucide React** - Icon library
- **Clerk** - Authentication and user management
- **Jotai** - State management
- **React Hook Form** - Form handling
- **Recharts** - Data visualization

### Backend

- **Convex** - Real-time database and serverless functions
- **Google Gemini AI** - AI-powered customer support
- **@convex-dev/agent** - AI agent framework
- **@convex-dev/rag** - Retrieval-augmented generation
- **Zod** - Schema validation
- **Vapi AI** - Voice integration

### Development Tools

- **Turborepo** - Monorepo build system
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Sentry** - Error monitoring and performance tracking

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20 or higher
- **pnpm** 10.28.2 or higher
- **Convex account** (for backend deployment)
- **Clerk account** (for authentication)
- **Google AI Studio API key** (for AI features)
- **Vapi AI account** (for voice features, optional)
- **Sentry account** (for error monitoring, optional)

### Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd echo-b2b-saas
```

#### 2. Install Dependencies

```bash
# Install pnpm if not already installed
npm install -g pnpm@10.28.2

# Install all dependencies for the monorepo
pnpm install
```

#### 3. Set Up Environment Variables

Create environment files in the respective directories:

##### Web Application Environment (`apps/web/.env.local`)

```bash
# ===========================================
# REQUIRED: Authentication (Clerk)
# ===========================================
# Get these from your Clerk dashboard: https://dashboard.clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# ===========================================
# REQUIRED: Backend (Convex)
# ===========================================
# Get these from your Convex dashboard: https://dashboard.convex.dev
NEXT_PUBLIC_CONVEX_URL=https://your-app-name.convex.site
CONVEX_DEPLOYMENT=your-deployment-name

# ===========================================
# REQUIRED: AI Integration
# ===========================================
# Get this from Google AI Studio: https://makersuite.google.com/app/apikey
GOOGLE_AI_API_KEY=your_google_ai_api_key_here

# ===========================================
# OPTIONAL: Error Monitoring (Sentry)
# ===========================================
# Get these from your Sentry dashboard: https://sentry.io
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
SENTRY_AUTH_TOKEN=your-sentry-auth-token
SENTRY_ORG=your-sentry-org
SENTRY_PROJECT=your-sentry-project

# ===========================================
# OPTIONAL: Development
# ===========================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

##### Widget Application Environment (`apps/widget/.env.local`)

```bash
# ===========================================
# REQUIRED: Backend (Convex)
# ===========================================
# Must match the Convex URL from web app
NEXT_PUBLIC_CONVEX_URL=https://your-app-name.convex.site

# ===========================================
# REQUIRED: Widget Configuration
# ===========================================
NEXT_PUBLIC_WIDGET_API_URL=http://localhost:3001/api
NEXT_PUBLIC_WIDGET_URL=http://localhost:3001

# ===========================================
# OPTIONAL: Voice Integration (Vapi AI)
# ===========================================
# Get this from your Vapi dashboard: https://vapi.ai
VAPI_API_KEY=your_vapi_api_key_here
VAPI_ASSISTANT_ID=your_vapi_assistant_id_here

# ===========================================
# OPTIONAL: Development
# ===========================================
NEXT_PUBLIC_WIDGET_DEV=true
```

##### Backend Environment (`packages/backend/.env.local`)

```bash
# ===========================================
# REQUIRED: AI Integration
# ===========================================
# Google AI API key (same as web app)
GOOGLE_AI_API_KEY=your_google_ai_api_key_here

# ===========================================
# OPTIONAL: Convex Development
# ===========================================
CONVEX_ENABLE_CLI=true
CONVEX_DEPLOYMENT=your-deployment-name
```

#### 4. Set Up Convex Backend

```bash
# Navigate to backend package
cd packages/backend

# Initialize Convex (first time only)
pnpm setup

# Start Convex development server
pnpm dev
```

This will:

- Create your Convex deployment
- Set up the database schema
- Start the development server
- Generate TypeScript types

#### 5. Set Up Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Configure your application:
   - Add your development URL (`http://localhost:3000`)
   - Enable social providers (Google, GitHub, etc.)
   - Configure webhook endpoints
4. Copy the keys to your `.env.local` file

#### 6. Set Up Google AI Studio

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your `.env.local` files
4. Enable the Gemini API for your project

#### 7. Start Development Servers

```bash
# From the root directory, start all applications
pnpm dev
```

This will start:

- **Web application** at `http://localhost:3000`
- **Widget application** at `http://localhost:3001`
- **Convex backend** (automatically configured)

#### 8. Verify Installation

1. Open `http://localhost:3000` in your browser
2. Sign up for a new account
3. Navigate to the dashboard
4. Test the widget by opening `http://localhost:3001`
5. Verify AI functionality in conversations

### Troubleshooting Installation

#### Common Issues

**Issue: "pnpm command not found"**

```bash
# Install pnpm globally
npm install -g pnpm@10.28.2
# Or use npx
npx pnpm@10.28.2 install
```

**Issue: "Convex deployment not found"**

```bash
# Navigate to backend and setup
cd packages/backend
pnpm setup
```

**Issue: "Clerk authentication not working"**

- Verify your Clerk keys are correct
- Check that your development URL is added to Clerk
- Ensure webhook endpoints are configured

**Issue: "AI responses not working"**

- Verify your Google AI API key is valid
- Check that the Gemini API is enabled
- Ensure the API key has sufficient quota

#### Port Conflicts

If ports are already in use:

```bash
# Kill processes on ports 3000 and 3001
npx kill-port 3000 3001

# Or use different ports
pnpm dev --port 3002 --widget-port 3003
```

## 📦 Available Scripts

### Root Level Commands

```bash
pnpm dev          # Start all applications in development mode
pnpm build        # Build all applications and packages
pnpm lint         # Run ESLint across all packages
pnpm format       # Format code with Prettier
```

### Backend Commands

Navigate to `packages/backend`:

```bash
pnpm dev          # Start Convex development server
pnpm setup        # Setup Convex deployment
pnpm typecheck    # Run TypeScript type checking for Convex
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

## �️ Architecture Overview

### AI-Powered Customer Support

Echo features an intelligent customer support system powered by Google Gemini AI:

- **Smart Conversations**: AI agents handle customer inquiries with context awareness
- **Multi-Channel Support**: Chat, voice, and contact form integration
- **Session Management**: Track customer interactions across sessions
- **Escalation Handling**: Automatic escalation to human agents when needed
- **Real-time Responses**: Instant AI-powered responses using Convex real-time database

### Widget System

The embeddable widget can be integrated into any website:

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

### Dashboard Features

- **Conversation Management**: View and manage all customer conversations
- **Analytics**: Track conversation metrics and customer satisfaction
- **User Management**: Manage team members and permissions
- **Customization**: Configure widget appearance and behavior
- **Integration Settings**: Connect with third-party services

## � Using UI Components

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

### Complete Environment Variables Reference

#### Development Environment

##### Web Application (`apps/web/.env.local`)

```bash
# ===========================================
# REQUIRED: Authentication (Clerk)
# ===========================================
# Get these from your Clerk dashboard: https://dashboard.clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# ===========================================
# REQUIRED: Backend (Convex)
# ===========================================
# Get these from your Convex dashboard: https://dashboard.convex.dev
NEXT_PUBLIC_CONVEX_URL=https://your-app-name.convex.site
CONVEX_DEPLOYMENT=your-deployment-name

# ===========================================
# REQUIRED: AI Integration
# ===========================================
# Get this from Google AI Studio: https://makersuite.google.com/app/apikey
GOOGLE_AI_API_KEY=your_google_ai_api_key_here

# ===========================================
# OPTIONAL: Error Monitoring (Sentry)
# ===========================================
# Get these from your Sentry dashboard: https://sentry.io
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
SENTRY_AUTH_TOKEN=your-sentry-auth-token
SENTRY_ORG=your-sentry-org
SENTRY_PROJECT=your-sentry-project

# ===========================================
# OPTIONAL: Development
# ===========================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

##### Widget Application (`apps/widget/.env.local`)

```bash
# ===========================================
# REQUIRED: Backend (Convex)
# ===========================================
# Must match the Convex URL from web app
NEXT_PUBLIC_CONVEX_URL=https://your-app-name.convex.site

# ===========================================
# REQUIRED: Widget Configuration
# ===========================================
NEXT_PUBLIC_WIDGET_API_URL=http://localhost:3001/api
NEXT_PUBLIC_WIDGET_URL=http://localhost:3001

# ===========================================
# OPTIONAL: Voice Integration (Vapi AI)
# ===========================================
# Get this from your Vapi dashboard: https://vapi.ai
VAPI_API_KEY=your_vapi_api_key_here
VAPI_ASSISTANT_ID=your_vapi_assistant_id_here

# ===========================================
# OPTIONAL: Development
# ===========================================
NEXT_PUBLIC_WIDGET_DEV=true
```

##### Backend Environment (`packages/backend/.env.local`)

```bash
# ===========================================
# REQUIRED: AI Integration
# ===========================================
# Google AI API key (same as web app)
GOOGLE_AI_API_KEY=your_google_ai_api_key_here

# ===========================================
# OPTIONAL: Convex Development
# ===========================================
CONVEX_ENABLE_CLI=true
CONVEX_DEPLOYMENT=your-deployment-name
```

#### Production Environment

##### Web Application Production (`apps/web/.env.production.local`)

```bash
# ===========================================
# REQUIRED: Authentication (Clerk)
# ===========================================
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_production_key_here
CLERK_SECRET_KEY=sk_live_your_production_secret_here
CLERK_WEBHOOK_SECRET=whsec_your_production_webhook_secret_here

# ===========================================
# REQUIRED: Backend (Convex)
# ===========================================
NEXT_PUBLIC_CONVEX_URL=https://your-production-app.convex.site
CONVEX_DEPLOYMENT=your-production-deployment

# ===========================================
# REQUIRED: AI Integration
# ===========================================
GOOGLE_AI_API_KEY=your_production_google_ai_api_key_here

# ===========================================
# REQUIRED: Application URLs
# ===========================================
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_WIDGET_URL=https://your-widget-domain.com

# ===========================================
# OPTIONAL: Error Monitoring (Sentry)
# ===========================================
NEXT_PUBLIC_SENTRY_DSN=https://your-production-sentry-dsn@sentry.io/project-id
SENTRY_AUTH_TOKEN=your_production_sentry_auth_token
SENTRY_ORG=your-production-sentry-org
SENTRY_PROJECT=your-production-sentry-project
```

##### Widget Application Production (`apps/widget/.env.production.local`)

```bash
# ===========================================
# REQUIRED: Backend (Convex)
# ===========================================
NEXT_PUBLIC_CONVEX_URL=https://your-production-app.convex.site

# ===========================================
# REQUIRED: Widget Configuration
# ===========================================
NEXT_PUBLIC_WIDGET_API_URL=https://your-widget-domain.com/api
NEXT_PUBLIC_WIDGET_URL=https://your-widget-domain.com

# ===========================================
# OPTIONAL: Voice Integration (Vapi AI)
# ===========================================
VAPI_API_KEY=your_production_vapi_api_key_here
VAPI_ASSISTANT_ID=your_production_vapi_assistant_id_here

# ===========================================
# OPTIONAL: Production
# ===========================================
NEXT_PUBLIC_WIDGET_DEV=false
```

### Environment Variable Descriptions

| Variable                            | Description                   | Required | Where to Get     |
| ----------------------------------- | ----------------------------- | -------- | ---------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key for frontend | ✅       | Clerk Dashboard  |
| `CLERK_SECRET_KEY`                  | Clerk secret key for backend  | ✅       | Clerk Dashboard  |
| `CLERK_WEBHOOK_SECRET`              | Clerk webhook verification    | ✅       | Clerk Dashboard  |
| `NEXT_PUBLIC_CONVEX_URL`            | Convex backend URL            | ✅       | Convex Dashboard |
| `CONVEX_DEPLOYMENT`                 | Convex deployment name        | ✅       | Convex Dashboard |
| `GOOGLE_AI_API_KEY`                 | Google AI API key for Gemini  | ✅       | Google AI Studio |
| `VAPI_API_KEY`                      | Vapi AI API key for voice     | ❌       | Vapi Dashboard   |
| `NEXT_PUBLIC_SENTRY_DSN`            | Sentry error monitoring       | ❌       | Sentry Dashboard |
| `SENTRY_AUTH_TOKEN`                 | Sentry authentication token   | ❌       | Sentry Dashboard |

### Service Setup Guides

#### Clerk Authentication Setup

1. **Create Clerk Application**
   - Go to [Clerk Dashboard](https://dashboard.clerk.com)
   - Click "Add application"
   - Choose your authentication methods

2. **Configure URLs**
   - Development: `http://localhost:3000`
   - Production: `https://your-domain.com`

3. **Get Keys**
   - Copy API Keys from your application dashboard
   - Add webhook endpoints for user synchronization

#### Convex Backend Setup

1. **Create Convex Project**
   - Go to [Convex Dashboard](https://dashboard.convex.dev)
   - Click "New Project"
   - Choose your region

2. **Configure Environment**
   - Copy the deployment URL
   - Set up environment variables
   - Run `pnpm setup` in the backend directory

#### Google AI Studio Setup

1. **Get API Key**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create new API key
   - Enable Gemini API in Google Cloud Console

2. **Configure Quotas**
   - Set up billing if needed
   - Monitor usage in Google Cloud Console

#### Vapi AI Setup (Optional)

1. **Create Vapi Account**
   - Go to [Vapi Dashboard](https://vapi.ai)
   - Create an assistant
   - Configure voice settings

2. **Get API Keys**
   - Copy API key and assistant ID
   - Add to widget environment

### Tailwind CSS Configuration

Tailwind is already configured with the shared UI package. The configuration extends from `@workspace/ui` and includes:

- **Dark Mode Support**: Automatic theme switching
- **Custom Color Palette**: Brand-aligned colors
- **Responsive Breakpoints**: Mobile-first design
- **Animation Utilities**: Smooth transitions and animations
- **Component Variants**: Consistent component styling

### Convex Configuration

The Convex backend is configured with:

- **Real-time Database**: Instant data synchronization
- **Serverless Functions**: Scalable backend logic
- **Type Safety**: Auto-generated TypeScript types
- **AI Integration**: Built-in support for AI agents
- **Authentication**: Secure user management

## 📱 Widget Integration

The widget application can be embedded in external websites:

### Basic Integration

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

### Advanced Configuration

```javascript
EchoWidget.init({
  container: "#echo-widget",
  theme: "light", // or "dark"
  position: "bottom-right", // or "bottom-left", "top-right", "top-left"
  primaryColor: "#3b82f6",
  welcomeMessage: "Hello! How can we help you today?",
  enableVoice: true,
  enableFileUpload: false,
  organizationId: "your-org-id",
});
```

### Widget Features

- **Chat Interface**: Real-time messaging with AI support
- **Voice Support**: Voice conversations using Vapi AI
- **Contact Forms**: Collect customer information
- **File Upload**: Share files and documents (configurable)
- **Multi-language**: Support for multiple languages
- **Customizable Appearance**: Match your brand colors and style

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
- Add tests for new features
- Ensure accessibility standards are met

## 🚀 Deployment

### Production Deployment

1. **Build all applications**

   ```bash
   pnpm build
   ```

2. **Deploy Convex Backend**

   ```bash
   cd packages/backend
   pnpm convex deploy
   ```

3. **Deploy Web Application**

   ```bash
   cd apps/web
   pnpm build
   # Deploy to Vercel, Netlify, or your preferred platform
   ```

4. **Deploy Widget**
   ```bash
   cd apps/widget
   pnpm build
   # Deploy to Vercel, Netlify, or CDN
   ```

### Environment Setup

- **Convex**: Set up your Convex deployment and configure environment variables
- **Clerk**: Configure your Clerk application for authentication
- **Vercel/Netlify**: Connect your repository and configure build settings
- **Domain**: Configure custom domains and SSL certificates

### Monitoring

- **Sentry**: Error tracking and performance monitoring
- **Convex Dashboard**: Monitor database operations and functions
- **Clerk Dashboard**: User authentication analytics

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
