# FISCHDEX - Virtual Item Marketplace

## Overview

FISCHDEX is a community-driven value list and marketplace for virtual boats and skins from the Roblox game "Fisch". The application allows users to browse, search, and view detailed information about virtual items including their trading values, demand levels, and status. Items are categorized as either boats (with speed/steering/acceleration stats) or skins (with rod associations).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom gaming-themed design system (dark mode, futuristic blue theme)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and hover effects
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints with Zod schema validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express sessions with connect-pg-simple for PostgreSQL session storage

### Data Layer
- **Database**: PostgreSQL (required via DATABASE_URL environment variable)
- **Schema Definition**: Drizzle ORM schemas in `shared/schema.ts`
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization
- **Type Safety**: Shared types between frontend and backend via `@shared` alias

### API Contract
- **Schema Validation**: Zod schemas define request/response types
- **Shared Routes**: API contract defined in `shared/routes.ts` with typed endpoints
- **Endpoints**:
  - `GET /api/items` - List all items with optional type filter (boat/skin)
  - `GET /api/items/:id` - Get single item by ID
  - `POST /api/items` - Create new item (used for seeding)

### Build System
- **Development**: Vite dev server with HMR proxied through Express
- **Production**: esbuild bundles server code, Vite builds client to `dist/public`
- **Scripts**: `dev` for development, `build` for production, `db:push` for database migrations

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components including shadcn/ui
│       ├── hooks/        # Custom React hooks
│       ├── pages/        # Route components
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route handlers with seeding logic
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Drizzle database connection
├── shared/           # Shared types and schemas
│   ├── schema.ts     # Drizzle table definitions
│   └── routes.ts     # API contract with Zod schemas
└── migrations/       # Database migration files
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store for Express

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for UI transitions
- **lucide-react**: Icon library
- **react-icons**: Additional icons (Roblox, Discord social icons)
- **Radix UI**: Accessible component primitives (via shadcn/ui)
- **wouter**: Lightweight client-side routing

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class deduplication

### Build Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **TypeScript**: Type checking across full stack

### External Services
- **Fischipedia.org**: External wiki integration for item details (links from item cards)
- **Google Fonts**: Oxanium and Rajdhani fonts for gaming aesthetic