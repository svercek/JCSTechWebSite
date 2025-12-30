# JCS Technologies Corporate Website

A modern, professional corporate website showcasing JCS Technologies' AI solutions and traditional software development services.

## 🌐 Live Site

**Preview:** [https://s3mn61zezd.preview.c24.airoapp.ai](https://s3mn61zezd.preview.c24.airoapp.ai)

## 🚀 Features

- **AI Solutions Page** - Showcasing expertise in Medical/Healthcare, Legal, Insurance, and Financial Services
- **Traditional Development** - Enterprise software development services
- **Blog System** - Dynamic blog with database integration
- **Contact Page** - Professional contact form and information
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern Tech Stack** - React 19, TypeScript, Vite 6

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **UI Components:** shadcn/ui (40+ pre-built components)
- **Build Tool:** Vite 6
- **Routing:** React Router
- **Database:** MySQL with Drizzle ORM
- **Styling:** Tailwind CSS with custom animations

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/svercek/JCSTechWebSite.git

# Navigate to project directory
cd JCSTechWebSite

# Install dependencies
npm install

# Create .env file
cp env.example .env

# Run development server
npm run dev
🔧 Environment Setup
Create a .env file in the root directory:

# Database Configuration - SKIP for local development
SKIP_DB=true

# If using local MySQL database:
# DB_HOST=localhost
# DB_PORT=3306
# DB_USER=root
# DB_PASSWORD=your_password
# DB_NAME=jcstech_website
📝 Available Scripts
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
📂 Project Structure
JCSTechWebSite/ ├── src/ │ ├── components/ # Reusable UI components │ ├── layouts/ # Page layouts (Header, Footer, RootLayout) │ ├── pages/ # Application pages │ ├── lib/ # Utility functions │ ├── server/ # Backend API and database │ └── styles/ # Global styles ├── public/ # Static assets └── ...config files
🎨 Key Pages
Home (/) - Hero section with service overview
AI Solutions (/ai-solutions) - Industry-specific AI capabilities
Traditional Development (/traditional-development) - Enterprise software services
Blog (/blog) - Dynamic blog system
Contact (/contact) - Contact form and information
🔒 Database
The blog system uses MySQL with Drizzle ORM. For local development, set SKIP_DB=true in .env to disable database features.

To enable the blog locally:

Install MySQL
Create database
Configure .env with database credentials
Run migrations: npm run db:migrate
📄 License
Copyright © 2025 JCS Technologies, Inc. All rights reserved.

Conceived and Designed by John Svercek, Developed and coded by Airo