# Blog System - Complete Setup Guide

## ✅ What's Already Built

Your blog system is **fully functional** with the following features:

### 🔐 Authentication System
- Password-protected admin access
- Session-based authentication (24-hour sessions)
- Secure HTTP-only cookies
- Auto-redirect for unauthorized access

### 📝 Blog Management
- Create new blog posts
- Edit existing posts
- Delete posts
- Auto-generate URL slugs
- Markdown support

### 🗄️ Database
- PostgreSQL via Neon (serverless)
- Drizzle ORM for type-safe queries
- Automatic migrations

---

## 📂 File Structure

```
src/
├── server/
│   ├── api/
│   │   ├── admin/
│   │   │   ├── login/POST.ts          # Login endpoint
│   │   │   ├── logout/POST.ts         # Logout endpoint
│   │   │   └── verify/GET.ts          # Session verification
│   │   └── blog/
│   │       └── posts/
│   │           ├── GET.ts             # List all posts
│   │           ├── POST.ts            # Create post (protected)
│   │           ├── [id]/
│   │           │   ├── GET.ts         # Get single post
│   │           │   ├── PUT.ts         # Update post (protected)
│   │           │   └── DELETE.ts      # Delete post (protected)
│   │           └── [postId]/          # Alternative ID format
│   │               ├── GET.ts
│   │               ├── PUT.ts
│   │               └── DELETE.ts
│   ├── middleware/
│   │   └── auth.ts                    # Authentication middleware
│   └── db/
│       ├── client.ts                  # Database connection
│       └── schema.ts                  # Blog post schema
├── pages/
│   ├── admin/
│   │   ├── login.tsx                  # Admin login page
│   │   └── blog.tsx                   # Blog management dashboard
│   └── blog.tsx                       # Public blog page
└── routes.tsx                         # Route definitions
```

---

## 🚀 Local Development Setup

### Step 1: Install Dependencies

```bash
cd C:\Users\johns\source\repos\JCSTechWebSite
npm install
```

This installs:
- `postgres` - PostgreSQL client
- `bcryptjs` - Password hashing
- `cookie-parser` - Session management
- `@types/bcryptjs` - TypeScript types
- `@types/cookie-parser` - TypeScript types

### Step 2: Configure Environment Variables

Create `.env` file in project root:

```bash
# Database Configuration (skip for local dev)
SKIP_DB=true

# Admin Authentication
ADMIN_PASSWORD=your-secure-password-here
```

**Important:** Choose a strong password! This protects your admin dashboard.

### Step 3: Test Locally

```bash
npm run dev
```

Visit:
- `http://localhost:5173` - Public site
- `http://localhost:5173/blog` - Blog page (empty when SKIP_DB=true)
- `http://localhost:5173/admin/login` - Admin login

**Note:** Blog features won't work locally with `SKIP_DB=true`. This is expected.

---

## 🌐 Production Deployment (Vercel + Neon)

### Step 1: Create Neon Database

1. Go to https://neon.tech
2. Sign up with GitHub
3. Create project: `jcstech-blog`
4. Choose region closest to your users
5. Copy the connection string:
   ```
   postgresql://user:pass@ep-name-123.aws.neon.tech/dbname?sslmode=require
   ```

### Step 2: Run Database Migrations

**Option A: Using Drizzle Kit (Recommended)**

1. Temporarily add your Neon connection string to `.env`:
   ```bash
   DATABASE_URL=postgresql://...
   # SKIP_DB=true  # Comment this out
   ```

2. Generate and run migrations:
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

3. Remove the connection string from `.env` (keep it secret!)

**Option B: Using Neon SQL Editor**

1. Go to your Neon dashboard
2. Click "SQL Editor"
3. Run this SQL:

```sql
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  author VARCHAR(100) NOT NULL,
  published_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Step 3: Deploy to Vercel

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Complete blog system with admin dashboard"
   git push
   ```

2. Go to https://vercel.com
3. Import your `JCSTechWebSite` repository
4. Deploy

### Step 4: Configure Vercel Environment Variables

1. Go to Vercel → Your Project → Settings → Environment Variables
2. Add these variables:

```
DATABASE_URL=postgresql://user:pass@ep-name-123.aws.neon.tech/dbname?sslmode=require
ADMIN_PASSWORD=your-secure-production-password
```

**Important:**
- Do NOT set `SKIP_DB` in production
- Use a different password than local development
- Keep these values secret!

### Step 5: Redeploy

1. Go to Deployments tab
2. Click "Redeploy" on latest deployment
3. Wait for deployment to complete

---

## 🎯 Using the Admin Dashboard

### Accessing Admin

1. Visit `https://jcstechnologies.com/admin/login`
2. Enter your admin password
3. Click "Login"
4. You'll be redirected to `/admin/blog`

### Creating a Blog Post

1. Click "Create New Post" button
2. Fill in the form:
   - **Title:** Post title (e.g., "Welcome to JCS Technologies")
   - **Slug:** URL-friendly version (auto-generated from title)
   - **Excerpt:** Short summary (optional, shown in blog list)
   - **Content:** Full post content (supports Markdown)
   - **Author:** Your name
3. Click "Create Post"
4. Post appears in the list

### Editing a Post

1. Click "Edit" button next to any post
2. Modify the fields
3. Click "Update Post"
4. Changes are saved immediately

### Deleting a Post

1. Click "Delete" button next to any post
2. Confirm deletion
3. Post is permanently removed

### Logging Out

1. Click "Logout" button in top right
2. You'll be redirected to login page
3. Session is cleared

---

## 🔒 Security Features

### Password Protection
- Admin password stored in environment variables
- Bcrypt hashing in production (10 rounds)
- Never exposed to client-side code

### Session Management
- HTTP-only cookies (not accessible via JavaScript)
- Secure flag in production (HTTPS only)
- 24-hour expiration
- Server-side validation

### API Protection
- All write operations require authentication
- Middleware checks session before allowing access
- Read operations (GET) are public

### Best Practices
- Use strong passwords (12+ characters, mixed case, numbers, symbols)
- Change password regularly
- Never commit `.env` file to git
- Use different passwords for local/production
- Enable 2FA on GitHub and Vercel accounts

---

## 📊 Database Schema

### `blog_posts` Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL | Primary key (auto-increment) |
| `title` | VARCHAR(255) | Post title |
| `slug` | VARCHAR(255) | URL-friendly identifier (unique) |
| `excerpt` | TEXT | Short summary (optional) |
| `content` | TEXT | Full post content |
| `author` | VARCHAR(100) | Author name |
| `published_date` | TIMESTAMP | Publication date (auto-set) |
| `created_at` | TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |

---

## 🐛 Troubleshooting

### "Database not available" Error

**Problem:** API returns 503 error

**Solution:**
- Check `DATABASE_URL` is set in Vercel environment variables
- Verify Neon database is running
- Check connection string format
- Ensure `SKIP_DB` is NOT set in production

### "Unauthorized" Error

**Problem:** Can't access admin dashboard

**Solution:**
- Verify `ADMIN_PASSWORD` is set correctly
- Clear browser cookies
- Try logging in again
- Check browser console for errors

### Posts Not Showing

**Problem:** Blog page is empty

**Solution:**
- Check database has posts (use Neon SQL Editor)
- Verify `DATABASE_URL` is correct
- Check browser console for API errors
- Ensure migrations ran successfully

### Build Fails on Vercel

**Problem:** Deployment fails

**Solution:**
- Check build logs for specific error
- Run `npm run build` locally to test
- Verify all dependencies are in `package.json`
- Check TypeScript errors: `npm run type-check`

---

## 📝 API Endpoints Reference

### Public Endpoints

```
GET  /api/blog/posts          # List all posts
GET  /api/blog/posts/:id      # Get single post
```

### Protected Endpoints (Require Authentication)

```
POST   /api/blog/posts        # Create new post
PUT    /api/blog/posts/:id    # Update post
DELETE /api/blog/posts/:id    # Delete post
```

### Admin Endpoints

```
POST /api/admin/login         # Login (creates session)
POST /api/admin/logout        # Logout (clears session)
GET  /api/admin/verify        # Check if authenticated
```

---

## 🎨 Customization

### Changing Session Duration

Edit `src/server/api/admin/login/POST.ts`:

```typescript
res.cookie('admin_session', sessionToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 24 * 60 * 60 * 1000, // ← Change this (milliseconds)
});
```

### Adding Rich Text Editor

Consider integrating:
- **TipTap** - Modern rich text editor
- **React Quill** - Popular WYSIWYG editor
- **MDX Editor** - Markdown with React components

### Adding Image Uploads

Consider:
- **Cloudinary** - Image hosting and optimization
- **Vercel Blob** - File storage
- **AWS S3** - Object storage

---

## ✅ Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Set `ADMIN_PASSWORD` in `.env`
3. ✅ Test locally: `npm run dev`
4. ✅ Create Neon database
5. ✅ Run migrations
6. ✅ Push to GitHub
7. ✅ Deploy to Vercel
8. ✅ Configure environment variables
9. ✅ Test admin login
10. ✅ Create your first blog post!

---

**Questions or issues?** Check the troubleshooting section or review the code comments in each file.

**Conceived and Designed by John Svercek, Developed and coded by Airo**
