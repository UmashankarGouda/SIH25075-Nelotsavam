# Nelotsavam 

**Empowering Kerala's Rice Farmers through Digital Innovation**

A comprehensive rice farming platform built for Smart India Hackathon 2025, combining traditional knowledge with modern technology to support sustainable agriculture in Kerala.

##  Project Overview

Nelotsavam is a gamified, multilingual platform that transforms rice farming through:
- **Gamified Learning**: Complete "Sevas" (farming tasks) to earn rewards
- **Community Building**: Connect farmers across Kerala
- **Expert Guidance**: Direct access to agricultural experts
- **Sustainable Practices**: Promote organic and eco-friendly farming
- **Marketplace**: Trade inputs and harvest with sustainability scores

##  Key Features

###  Gamification System
- **Sevas**: Farming tasks aligned with rice lifecycle stages
- **Dhanya Points**: Reward system for completed activities
- **Badges**: Achievements like "Jal Rakshak" (Water Guardian)
- **Leaderboards**: Community rankings and recognition

###  Rice Farming Lifecycle
- Land Preparation → Nursery → Transplanting
- Vegetative Growth → Reproductive Growth → Maturation
- Harvest → Post-Harvest Processing

###  Multilingual Support
- **Malayalam** (മലയാളം): Primary language for Kerala farmers
- **English**: Secondary language support

###  Technology Stack
- **Frontend**: Next.js 15 with App Router, React 19, TailwindCSS 4
- **Backend**: Prisma ORM with PostgreSQL
- **Authentication**: NextAuth with Prisma adapter
- **UI Components**: shadcn/ui, Radix UI primitives
- **Icons**: Lucide React
- **State Management**: Zustand
- **Real-time**: Socket.io ready
- **PWA**: Next-PWA for offline capabilities

##  Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/UmashankarGouda/SIH25075-Nelotsavam.git
cd SIH25075-Nelotsavam
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up the database**
```bash
# Start Prisma dev server
npx prisma dev

# In another terminal, run migrations
npx prisma migrate dev --name init
npx prisma generate
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000)

### Environment Setup

The `.env` file is already configured with a local Prisma PostgreSQL instance:
```env
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=..."
```

##  Project Structure

```
nelotsavam/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # TailwindCSS styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Landing page
│   ├── components/
│   │   └── ui/             # Reusable UI components
│   └── lib/
│       └── utils.ts        # Utility functions
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── public/                 # Static assets
└── package.json           # Dependencies
```

##  Database Schema

Comprehensive schema supporting:
- **Users & Authentication**: Phone-based login, multilingual preferences
- **Farm Profiles**: Rice varieties, water sources, sustainability scores
- **Sevas System**: Gamified farming tasks with rewards
- **Community Features**: Posts, comments, likes, marketplace
- **Expert Consultations**: Q&A with agricultural experts
- **Weather Integration**: Location-based farming advice
- **Knowledge Base**: Sustainable farming content

##  Gamification Elements

### Seva Categories
- 🌱 **Land Preparation**: Soil health, field preparation
- 💧 **Water Management**: Irrigation, conservation techniques
- 🌿 **Nutrient Management**: Organic fertilizers, composting
- 🐛 **Pest & Disease Control**: Natural remedies, IPM
- 🌾 **Harvest & Post-Harvest**: Proper timing, storage
- ♻️ **Sustainability**: Eco-friendly practices
- 👥 **Community**: Knowledge sharing, helping others

### Badge System
- 🏆 **Jal Rakshak** (Water Guardian)
- 🌱 **Bhumi Mitra** (Soil Friend)
- 🌿 **Prakrutik Yoddha** (Organic Champion)
- 📚 **Gyan Pippasu** (Knowledge Seeker)
- 👑 **Samudayik Neta** (Community Leader)
- 🌍 **Paryavaran Yoddha** (Eco Warrior)
- 🌾 **Fasal Guru** (Harvest Master)

##  Development Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npx prisma dev       # Start local DB server
npx prisma studio    # Database browser
npx prisma generate  # Generate Prisma client
npx prisma migrate dev  # Run migrations
```

##  Current Status

 **Completed**
- Project setup and configuration
- Database schema design and migrations
- Beautiful landing page with Malayalam support
- UI component library (shadcn/ui)
- Development environment setup

 **In Progress**
- User authentication system
- Core Seva management
- Community features
- Expert consultation system

 **Planned**
- Mobile PWA optimization
- Weather API integration
- Advanced gamification features
- Production deployment

##  Contributing

Built for **Smart India Hackathon 2025**

##  License

© 2024 Nelotsavam Team. Built with ❤️ for Kerala's farmers.
