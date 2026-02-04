# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Nelotsavam** (നെല്ലഉത്സവം) is a gamified rice farming platform built for Smart India Hackathon 2025. It combines traditional Kerala farming knowledge with modern technology to support sustainable agriculture through:

- **Gamified Learning**: "Sevas" (farming tasks) with Dhanya points rewards system
- **Malayalam-First Design**: Bilingual support with Malayalam as primary language
- **Community Platform**: Farmer networking, expert consultations, and knowledge sharing
- **Sustainability Focus**: Organic farming practices and eco-friendly methods
- **Marketplace Integration**: Trade inputs/harvest with sustainability scoring

## Development Commands

### Quick Start
```bash
# Install dependencies
npm install

# Start database (requires Prisma local server)
npx prisma dev

# Run migrations (in separate terminal)
npx prisma migrate dev --name init
npx prisma generate

# Start development server with Turbopack
npm run dev
```

### Database Operations
```bash
# Generate Prisma client after schema changes
npx prisma generate

# Reset database and reseed
npx prisma migrate reset

# Open database browser
npx prisma studio

# Deploy migrations to production
npx prisma migrate deploy
```

### Build & Production
```bash
# Production build with Turbopack
npm run build --turbopack

# Start production server
npm start

# Lint code
npm run lint
```

### Testing Single Components
```bash
# Visit specific pages for testing
# Landing: http://localhost:3000
# Registration: http://localhost:3000/auth/register
# Login: http://localhost:3000/auth/login
# Dashboard: http://localhost:3000/dashboard
# Mobile: http://localhost:3000/mobile
```

## Architecture Overview

### Tech Stack
- **Frontend**: Next.js 15 with App Router, React 19, TypeScript
- **Styling**: TailwindCSS 4 with shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM (local dev server)
- **Authentication**: NextAuth with Prisma adapter (planned)
- **State**: Zustand for client state management
- **PWA**: Next-PWA for offline capabilities

### Database Architecture

The Prisma schema (`prisma/schema.prisma`) models the complete rice farming ecosystem:

- **Core Entities**: Users, FarmProfile, Sevas (tasks), UserSevas (progress tracking)
- **Gamification**: Badges, points system, difficulty levels, achievement tracking
- **Community**: CommunityPost, Comments, Likes, expert consultations
- **Knowledge**: Multi-lingual content (Malayalam/English), categories, difficulty levels
- **Commerce**: MarketListing with sustainability scores and organic certification
- **Location**: Kerala district-specific data, weather integration points

### Key Enums & Constants

```typescript
// Language support
enum Language { ENGLISH, MALAYALAM }

// Rice farming lifecycle stages
enum LifecycleStage {
  LAND_PREPARATION, NURSERY, TRANSPLANTING,
  VEGETATIVE_GROWTH, REPRODUCTIVE_GROWTH,
  MATURATION, HARVEST, POST_HARVEST
}

// Seva (task) categories aligned with farming stages
enum SevaCategory {
  LAND_PREPARATION, WATER_MANAGEMENT, NUTRIENT_MANAGEMENT,
  PEST_DISEASE_CONTROL, HARVEST_POST_HARVEST, 
  SUSTAINABILITY, COMMUNITY
}

// Water sources common in Kerala
enum WaterSource { CANAL, BOREWELL, RAIN_FED, RIVER, POND, MIXED }
```

### Route Structure

```
/                      # Landing page with language toggle
/auth/login           # Phone-based authentication
/auth/register        # Comprehensive farmer onboarding
/dashboard           # Gamified farming dashboard
/about               # Project information and mission
/demo                # Feature showcase and roadmap
/mobile              # Mobile app preview and subscription
```

## Development Patterns

### Component Architecture
- **UI Components**: Located in `src/components/ui/` using shadcn/ui patterns
- **Page Components**: App Router structure in `src/app/`
- **Shared Utilities**: `src/lib/utils.ts` for common functions

### State Management
- **Client State**: React hooks for forms and interactions
- **Navigation**: Next.js App Router with `useRouter` hook
- **Language**: useState for bilingual toggle (EN ↔ ML)

### Form Handling Pattern
```typescript
const [isLoading, setIsLoading] = useState(false);
const [formData, setFormData] = useState(initialState);

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    // Process form data
    // Show success message with personalized content
    // Reset form
    setFormData(initialState);
  } catch (error) {
    // Handle error with helpful messages
  } finally {
    setIsLoading(false);
  }
};
```

### Malayalam Integration
- UI text should support both English and Malayalam
- Use Kerala district names in Malayalam when appropriate
- Seva (task) titles and descriptions stored in both languages
- Success messages often include Malayalam terms for cultural connection

## Current Implementation Status

### ✅ Completed Features
- Beautiful landing page with bilingual support
- Complete UI component library (shadcn/ui)
- Database schema covering full farming ecosystem
- Interactive registration/login flows
- Dashboard preview with gamification elements
- Mobile app strategy with subscription system

### 🚧 Integration Points Needed
- NextAuth setup with phone-based authentication
- API routes for user management and Seva assignments
- Weather API integration for location-specific advice
- Expert consultation booking system
- Real-time chat functionality (Socket.io ready)
- Marketplace CRUD operations

### 🎯 Gamification System Details
- **Dhanya Points**: Primary currency earned through task completion
- **Sevas**: Culturally-named farming tasks with difficulty levels
- **Badge System**: 7 categories including "Jal Rakshak" (Water Guardian), "Bhumi Mitra" (Soil Friend)
- **Lifecycle Integration**: Tasks aligned with 8-stage rice cultivation cycle

## Special Considerations

### Kerala Agriculture Context
- All 14 Kerala districts supported in registration
- Water source types specific to Kerala farming (canals, borewells, rain-fed)
- Indigenous rice varieties and traditional practices emphasis
- Sustainability scoring system for organic farming promotion

### Hackathon Context
- Built for Smart India Hackathon 2025
- Demo-ready with all interactive elements functional
- Professional polish with loading states and error handling
- Clear production roadmap and mobile development strategy

### Cultural Integration
- Malayalam-first approach with English as secondary
- Traditional farming terminology ("Seva" for tasks, "Dhanya" for points)
- Community-centered design reflecting Kerala's cooperative farming culture
- Respect for indigenous knowledge while promoting modern sustainable practices

## Environment Setup Notes

- Database configured for local Prisma development server
- Turbopack enabled for faster development builds
- TypeScript strict mode for type safety
- ESLint configured for code quality
- All interactive features work without backend (demo-ready)

## Testing Guidelines

When testing new features:
1. Verify Malayalam text displays correctly
2. Test responsive design on mobile viewports
3. Ensure all form validations work properly
4. Check loading states and error handling
5. Verify navigation between all routes works smoothly
6. Test language toggle functionality maintains state