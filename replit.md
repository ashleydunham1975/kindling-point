# Kindling Point - College Counseling Website

## Overview

Kindling Point is a static marketing website for a college counseling and student development service. The site helps high school students discover their passions, develop personal narratives, and prepare for college applications. It features a single-page marketing site with sections for the company's approach, testimonials, and contact information.

**This is a static site with no backend or database.**

## User Preferences

- Preferred communication style: Simple, everyday language
- Design aesthetic: "Warm Academic" with Deep Navy (#094b75) and Warm Orange (#f5a623)
- Contact approach: Direct email/phone links only (no form submission)

## System Architecture

### Static Site Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS v4 with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Build Tool**: Vite

The site is a single-page application with smooth scroll navigation between sections (Hero, About, Services/Approach, Testimonials, Contact). Components are organized in `client/src/components/` with UI primitives in `client/src/components/ui/`.

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # React components including UI library
│   │   ├── pages/        # Page components (Home, NotFound)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Minimal Vite dev server wrapper
│   └── index.ts      # Runs Vite for development
├── script/           # Build scripts
│   └── build.ts      # Runs Vite build for production
```

### Path Aliases
- `@/*` → `client/src/*`
- `@assets` → `attached_assets/`

## External Dependencies

### UI Libraries
- **shadcn/ui**: Pre-built accessible components based on Radix UI primitives
- **Radix UI**: Headless UI component primitives for accessibility
- **Lucide React**: Icon library
- **Embla Carousel**: Touch-friendly carousel for testimonials

### Frontend Tooling
- **Vite**: Development server and build tool
- **Framer Motion**: Animation library
- **Zod**: Runtime type validation

### Fonts
- **Google Fonts**: Libre Baskerville (serif) and Plus Jakarta Sans (sans-serif) loaded via CDN