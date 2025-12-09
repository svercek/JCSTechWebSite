# Blog System Documentation

## Overview

Your website now has a complete blog management system with:

- **Database-backed storage** using MySQL
- **RESTful API** for CRUD operations
- **Admin interface** for creating and managing posts
- **Public blog page** that displays published posts
- **Category filtering** and featured post support

## Getting Started

### 1. Seed Sample Posts (Optional)

To populate your blog with 3 sample articles, make a POST request to the seed endpoint:

```bash
curl -X POST http://localhost:5007/api/blog/seed
```

Or visit the URL in your browser and use a REST client.

### 2. Access the Admin Panel

Navigate to: `http://localhost:5007/admin/blog`

Here you can:
- Create new blog posts
- Edit existing posts
- Delete posts
- Toggle published/featured status

### 3. View the Public Blog

Navigate to: `http://localhost:5007/blog`

This page shows:
- Featured post (if any)
- Recent published posts
- Category filtering
- Newsletter signup section

## Database Schema

### Blog Posts Table

```typescript
{
  id: number;              // Auto-increment primary key
  title: string;           // Post title
  slug: string;            // URL-friendly slug (auto-generated)
  excerpt: string;         // Short summary
  content: string;         // Full post content (supports markdown)
  category: string;        // Post category
  imageUrl: string | null; // Optional header image
  readTime: string | null; // e.g., "5 min read"
  published: boolean;      // Show on public blog?
  featured: boolean;       // Show as featured post?
  createdAt: timestamp;    // Auto-generated
  updatedAt: timestamp;    // Auto-updated
}
```

## API Endpoints

### Get All Posts
```
GET /api/blog/posts
Query params:
  - published=true (filter by published status)
  - featured=true (filter by featured status)
  - category=AI Strategy (filter by category)
```

### Get Single Post
```
GET /api/blog/posts/:postId
Params: postId (can be numeric ID or slug)
```

### Create Post
```
POST /api/blog/posts
Body: {
  title: string (required)
  excerpt: string (required)
  content: string (required)
  category: string (required)
  imageUrl?: string
  readTime?: string
  published?: boolean
  featured?: boolean
}
```

### Update Post
```
PUT /api/blog/posts/:postId
Body: (any fields to update)
```

### Delete Post
```
DELETE /api/blog/posts/:postId
```

### Seed Sample Posts
```
POST /api/blog/seed
```

## Categories

Available categories:
- AI Strategy
- Technology Leadership
- Business Value
- Security
- Strategy
- Modernization

You can add more categories by updating the `categories` array in:
- `src/pages/admin/blog.tsx`
- `src/pages/blog.tsx`

## Content Format

The `content` field supports markdown formatting:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

[Link text](https://example.com)
```

## Featured Posts

Only ONE post should be marked as featured at a time. The featured post appears in a special section at the top of the blog page.

## Publishing Workflow

1. Create a new post in the admin panel
2. Leave `published` unchecked while drafting
3. When ready, check `published` to make it visible
4. Optionally check `featured` to highlight it

## Image URLs

For blog post images, you can:

1. Use external URLs (e.g., from Getty Images, Unsplash)
2. Upload images to `public/assets/` and reference them
3. Use a CDN or image hosting service

Example:
```
https://media.gettyimages.com/id/123456/photo/example.jpg
/assets/blog/my-image.jpg
```

## Security Considerations

**IMPORTANT**: The admin panel at `/admin/blog` is currently unprotected. For production use, you should:

1. Add authentication (login required)
2. Add authorization (admin role required)
3. Implement CSRF protection
4. Add rate limiting

For now, this is suitable for development and internal use.

## Future Enhancements

Possible improvements:

- [ ] Rich text editor (WYSIWYG)
- [ ] Image upload functionality
- [ ] Draft/scheduled publishing
- [ ] Comments system
- [ ] SEO metadata (meta descriptions, OG tags)
- [ ] Search functionality
- [ ] Tags in addition to categories
- [ ] Author management (multi-author support)
- [ ] Analytics integration

## Troubleshooting

### Posts not showing up?

- Check that `published` is set to `true`
- Verify the database migration ran successfully
- Check browser console for API errors

### Can't access admin panel?

- Ensure you're navigating to `/admin/blog` (not `/blog/admin`)
- Check that the route is registered in `src/routes.tsx`

### Database errors?

- Run `npm run db:generate` to create migrations
- Run `npm run db:migrate` to apply migrations
- Check that MySQL is running

## Support

For questions or issues with the blog system, refer to:
- Database schema: `src/server/db/schema.ts`
- API endpoints: `src/server/api/blog/`
- Admin UI: `src/pages/admin/blog.tsx`
- Public blog: `src/pages/blog.tsx`
