# Booking Engine SaaS Platform

A monorepo for a SaaS platform providing booking engine and guest management system.

## Installation

```bash
npm install
```

## Running the Project

1. Set up PostgreSQL database and update DATABASE_URL in apps/backend/.env

2. Generate Prisma client:
```bash
npm run prisma:generate --workspace=apps/backend
```

3. Run all services:
```bash
npm run dev
```

This will start:
- Backend on http://localhost:3000
- Admin dashboard on http://localhost:5173
- Widget on http://localhost:5174

## Structure

- `apps/backend`: NestJS backend
- `apps/admin`: React admin dashboard
- `apps/widget`: Embeddable booking widget
- `packages/ui`: Shared UI components
- `packages/config`: Shared configuration

## Getting Started

1. Install dependencies
2. Set up database
3. Run migrations
4. Start services