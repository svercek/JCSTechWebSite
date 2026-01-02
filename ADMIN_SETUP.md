# Admin Dashboard Setup Guide

## 🔐 Secure Blog Management System

Your JCS Technologies website now has a secure admin dashboard for managing blog posts.

---

## 📋 What Was Built

### **Authentication System**
- Password-protected admin access
- Session-based authentication (24-hour sessions)
- Secure HTTP-only cookies
- Auto-redirect to login if not authenticated

### **Admin Pages**
- `/admin/login` - Password login page
- `/admin/blog` - Blog post management dashboard

### **API Endpoints**
- `POST /api/admin/login` - Authenticate with password
- `POST /api/admin/logout` - Clear session and logout
- `GET /api/admin/verify` - Check if session is valid
- `POST /api/blog/posts` - Create new blog post (protected)
- `PUT /api/blog/posts/:id` - Update blog post (protected)
- `DELETE /api/blog/posts/:id` - Delete blog post (protected)
- `GET /api/blog/posts` - Fetch all posts (public)

### **Features**
- ✅ Create, edit, and delete blog posts
- ✅ Auto-generate URL slugs from titles
- ✅ Markdown support for content
- ✅ Author attribution
- ✅ Excerpt/summary field
- ✅ Real-time post list updates
- ✅ Secure authentication
- ✅ Session management

---

## 🚀 Local Setup Instructions

### **Step 1: Update Your Local Files**

You need to update these files on your local computer:

1. **package.json** - Add authentication dependencies
2. **src/server/configure.js** - Enable cookie parser
3. **src/server/middleware/auth.ts** - NEW FILE
4. **src/server/api/admin/login/POST.ts** - NEW FILE
5. **src/server/api/admin/logout/POST.ts** - NEW FILE
6. **src/server/api/admin/verify/GET.ts** - NEW FILE
7. **src/server/api/blog/posts/POST.ts** - UPDATED (protected)
8. **src/server/api/blog/posts/[id]/PUT.ts** - NEW FILE
9. **src/server/api/blog/posts/[id]/DELETE.ts** - NEW FILE
10. **src/pages/admin/login.tsx** - NEW FILE
11. **src/pages/admin/blog.tsx** - UPDATED (with auth)
12. **src/routes.tsx** - Add login route
13. **env.example** - Add ADMIN_PASSWORD

**I'll provide you with the exact file contents to copy-paste.**

### **Step 2: Install New Dependencies**

After updating the files, run:

```bash
cd C:\Users\johns\source\repos\JCSTechWebSite
npm install
```

This installs:
- `bcryptjs` - Password hashing
- `cookie-parser` - Cookie management
- `@types/bcryptjs` - TypeScript types
- `@types/cookie-parser` - TypeScript types

### **Step 3: Set Admin Password**

Create or update your `.env` file:

```bash
# Database (keep as-is for local dev)
SKIP_DB=true

# Admin Password
ADMIN_PASSWORD=your-secure-password-here
```

**For local development:** Use a plain text password (e.g., `admin123`)

**For production (Vercel):** Use a hashed password (see Production Setup below)

### **Step 4: Test Locally**

```bash
npm run dev
```

1. Visit `http://localhost:5173/admin/login`
2. Enter your password
3. You should be redirected to `/admin/blog`
4. Try creating a blog post

---

## 🌐 Production Setup (Vercel + Neon)

### **Step 1: Set Up Neon Database**

1. Go to https://neon.tech
2. Sign in with GitHub
3. Create project: `jcstech-blog`
4. Copy the connection string (looks like):
   ```
   postgresql://username:password@ep-cool-name-123456.us-east-2.aws.neon.tech/jcstech?sslmode=require
   ```

### **Step 2: Run Database Migrations**

You need to create the `blog_posts` table in Neon.

**Option A: Use Drizzle CLI (Recommended)**

1. Update your local `.env` with Neon connection string:
   ```bash
   DATABASE_URL=postgresql://...
   # Remove SKIP_DB=true
   ```

2. Run migrations:
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

**Option B: Run SQL Directly in Neon Dashboard**

1. Go to Neon dashboard → SQL Editor
2. Run this SQL:

```sql
CREATE TABLE IF NOT EXISTS "blog_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"excerpt" text,
	"content" text NOT NULL,
	"author" varchar(100) NOT NULL,
	"published_date" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "blog_posts_slug_unique" UNIQUE("slug")
);
```

### **Step 3: Generate Hashed Password**

For production, use a hashed password:

```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your-password-here', 10));"
```

This outputs something like:
```
$2a$10$abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOP
```

### **Step 4: Set Vercel Environment Variables**

1. Go to Vercel → Your Project → Settings → Environment Variables
2. Add these variables:

```bash
# Database
DATABASE_URL=postgresql://username:password@ep-cool-name-123456.us-east-2.aws.neon.tech/jcstech?sslmode=require

# Admin Password (use hashed version)
ADMIN_PASSWORD=$2a$10$abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOP

# Node Environment
NODE_ENV=production
```

**Important:** Remove `SKIP_DB=true` from Vercel environment variables.

### **Step 5: Deploy**

```bash
git add .
git commit -m "Added secure admin dashboard for blog management"
git push
```

Vercel will automatically deploy.

### **Step 6: Test Production**

1. Visit `https://jcstechnologies.com/admin/login`
2. Enter your password
3. Create your first blog post!

---

## 📝 How to Use the Admin Dashboard

### **Logging In**

1. Go to `/admin/login`
2. Enter admin password
3. Click "Login"
4. You'll be redirected to `/admin/blog`

### **Creating a Blog Post**

1. Click "Create New Post"
2. Fill in the form:
   - **Title** - Post title (required)
   - **Slug** - URL-friendly version (auto-generated, but editable)
   - **Author** - Your name (defaults to "John Svercek")
   - **Excerpt** - Brief summary (optional)
   - **Content** - Full post content (supports Markdown)
3. Click "Create Post"

### **Editing a Post**

1. Find the post in the list
2. Click the edit button (pencil icon)
3. Update the fields
4. Click "Update Post"

### **Deleting a Post**

1. Find the post in the list
2. Click the delete button (trash icon)
3. Confirm deletion

### **Logging Out**

1. Click "Logout" button in top right
2. You'll be redirected to login page

---

## 🔒 Security Features

### **Authentication**
- Password-based authentication
- Bcrypt password hashing in production
- Session tokens (24-hour expiry)
- HTTP-only cookies (not accessible via JavaScript)
- Secure cookies in production (HTTPS only)
- SameSite cookie protection

### **Protected Routes**
- All blog CRUD operations require authentication
- Automatic redirect to login if not authenticated
- Session verification on every protected request

### **Best Practices**
- ✅ Never commit `.env` file to git
- ✅ Use strong passwords (12+ characters)
- ✅ Use hashed passwords in production
- ✅ Change default password immediately
- ✅ Keep dependencies updated

---

## 🛠️ Troubleshooting

### **"Invalid password" error**
- Check that `ADMIN_PASSWORD` is set in `.env` (local) or Vercel environment variables (production)
- Make sure you're using the correct password
- In production, verify you're using the hashed password

### **"Unauthorized" error when creating posts**
- Your session may have expired (24 hours)
- Log out and log back in
- Check browser cookies are enabled

### **"Database not available" error**
- Check `DATABASE_URL` is set correctly
- Verify Neon database is running
- Make sure `SKIP_DB=true` is removed in production

### **Posts not showing up**
- Check database connection
- Verify migrations ran successfully
- Check browser console for errors

---

## 📚 API Reference

### **Public Endpoints**

#### `GET /api/blog/posts`
Fetch all blog posts (newest first)

**Response:**
```json
[
  {
    "id": 1,
    "title": "My First Post",
    "slug": "my-first-post",
    "excerpt": "This is a summary",
    "content": "Full post content here...",
    "author": "John Svercek",
    "publishedDate": "2025-12-31T12:00:00Z",
    "createdAt": "2025-12-31T12:00:00Z",
    "updatedAt": "2025-12-31T12:00:00Z"
  }
]
```

### **Protected Endpoints (Require Authentication)**

#### `POST /api/blog/posts`
Create a new blog post

**Request Body:**
```json
{
  "title": "My Post Title",
  "slug": "my-post-title",
  "excerpt": "Brief summary",
  "content": "Full content here...",
  "author": "John Svercek"
}
```

#### `PUT /api/blog/posts/:id`
Update an existing post

**Request Body:** (all fields optional)
```json
{
  "title": "Updated Title",
  "slug": "updated-slug",
  "excerpt": "Updated summary",
  "content": "Updated content",
  "author": "Updated Author"
}
```

#### `DELETE /api/blog/posts/:id`
Delete a blog post

**Response:**
```json
{
  "success": true,
  "message": "Post deleted successfully"
}
```

---

## 🎯 Next Steps

### **Enhancements You Could Add**

1. **Rich Text Editor**
   - Install a WYSIWYG editor like TipTap or Quill
   - Replace textarea with visual editor

2. **Image Upload**
   - Add image upload functionality
   - Store images in Vercel Blob or Cloudinary

3. **Draft/Published Status**
   - Add a "published" boolean field
   - Filter posts by status

4. **Categories/Tags**
   - Add category/tag system
   - Filter posts by category

5. **SEO Metadata**
   - Add meta title, description fields
   - Generate Open Graph tags

6. **Preview Mode**
   - Preview posts before publishing
   - Share preview links

7. **Multiple Admins**
   - Add user accounts table
   - Implement role-based access

---

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review browser console for errors
3. Check Vercel deployment logs
4. Verify environment variables are set correctly

---

**Built with ❤️ by Airo for JCS Technologies**
