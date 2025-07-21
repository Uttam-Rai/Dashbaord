# Replit.md

## Overview

This is a full-stack internship tracker application built with React, Express.js, and PostgreSQL. The application allows users to manage internship applications, track applicant statuses, and view application statistics. The frontend uses React with shadcn/ui components and TailwindCSS for styling, while the backend is a REST API built with Express.js and uses Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: TailwindCSS with CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL adapter
- **Database**: PostgreSQL (via Neon Database serverless)
- **Runtime**: Node.js with ESM modules
- **Development**: tsx for TypeScript execution in development

### Build and Development Strategy
- **Development**: Concurrent frontend (Vite) and backend (tsx) processes
- **Production Build**: Vite builds frontend to `dist/public`, esbuild bundles backend to `dist/index.js`
- **Type Safety**: Shared TypeScript schemas between frontend and backend

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Applicants Table**: Core applicant data including name, email, skills array, status, application date, and notes
- **Schema Validation**: Drizzle-zod integration for runtime type validation

### Frontend Components
- **Dashboard**: Main application view with statistics and applicant management
- **ApplicantsTable**: Sortable table with pagination and filtering capabilities  
- **ApplicantModal**: Modal for viewing and editing applicant details
- **SearchFilters**: Search and filter interface for applicants
- **StatsCards**: Dashboard statistics display

### Backend Structure
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Routes**: RESTful API endpoints (currently minimal, ready for expansion)
- **Middleware**: Request logging, JSON parsing, error handling

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js handles HTTP requests and routes to appropriate handlers
3. **Storage Layer**: Abstracted storage interface allows switching between implementations
4. **Database**: Drizzle ORM manages PostgreSQL interactions with type-safe queries
5. **Response**: Data flows back through the same layers with proper error handling

Currently uses mock data in the frontend for development, with infrastructure ready for real API integration.

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless database connection
- **drizzle-orm**: Type-safe ORM with PostgreSQL adapter
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router

### UI and Styling
- **@radix-ui/***: Accessible UI primitive components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **vite**: Frontend build tool and development server

## Deployment Strategy

### Development Environment
- Frontend runs on Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Database migrations handled via `drizzle-kit push`

### Production Build
- Frontend: Vite builds optimized bundle to `dist/public`
- Backend: esbuild creates single bundled file at `dist/index.js`
- Static files served by Express in production
- Environment variables manage database connections

### Database Management
- Drizzle Kit handles schema migrations
- Connection via DATABASE_URL environment variable
- Schema files shared between frontend and backend for type consistency

The application is structured for easy deployment on platforms like Replit, Railway, or Vercel with minimal configuration changes.