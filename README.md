# JCSTechWebSite

Corporate website for JCS Technologies, Inc. - Showcasing AI Solutions and Traditional Software Development Services.

## 🚀 Overview

This is the official website for JCS Technologies, featuring:
- AI Solutions and capabilities
- Traditional software development services
- Company information and contact details
- Blog system for technical articles

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **TypeScript** - Full type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **React Router** - Client-side routing

### Backend
- **Node.js** - API routes
- **Neon** - Database (optional for blog)
- **Drizzle ORM** - Type-safe database queries

## 📁 Project Structure

```
JCSTechWebSite/
├── src/
│   ├── components/       # React components
│   │   └── ui/           # shadcn/ui components
│   ├── layouts/          # Layout systems
│   │   ├── RootLayout.tsx
│   │   └── parts/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── pages/            # Page components
│   │   ├── index.tsx              # Home page
│   │   ├── ai-solutions.tsx       # AI Solutions
│   │   ├── traditional-development.tsx
│   │   ├── blog.tsx               # Blog listing
│   │   └── contact.tsx            # Contact page
│   ├── lib/              # Utilities
│   ├── server/           # Backend API
│   │   ├── api/          # API routes
│   │   └── db/           # Database
│   └── styles/           # Global styles
├── public/               # Static assets
└── drizzle/              # Database migrations
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run type-check` - TypeScript type checking
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file:
```bash
# Database Configuration - SKIP for local development
SKIP_DB=true

# If using MySQL locally:
# DB_HOST=localhost
# DB_PORT=3306
# DB_USER=root
# DB_PASSWORD=your_password
# DB_NAME=jcstech_db
```

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:5173

## 🗃️ Database Setup (Optional)

The blog feature requires MySQL. To enable:

1. Install MySQL locally
2. Create database: `CREATE DATABASE jcstech_db;`
3. Update `.env` with database credentials
4. Run migrations: `npm run db:migrate`

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** - Recommended for React/Vite apps
- **Netlify** - Alternative hosting
- **Traditional Hosting** - Upload `dist/` folder

## 🎨 Pages

- **Home** (`/`) - Company overview with service cards
- **AI Solutions** (`/ai-solutions`) - AI capabilities and industry expertise
- **Traditional Development** (`/traditional-development`) - Enterprise software services
- **Blog** (`/blog`) - Technical articles and insights
- **Contact** (`/contact`) - Contact information and form

## 🤝 About JCS Technologies

JCS Technologies, Inc. specializes in:
- Custom AI solutions for enterprise clients
- Traditional software development services
- Legal AI technology (see legal-ai-pro.com)
- Proof-of-concept AI demonstrations

**Conceived and Designed by John Svercek**
**Developed and Coded by Airo**

## 📄 License

© 2025 JCS Technologies, Inc. All rights reserved.

---

**Built with modern web technologies and AI-assisted development.**
