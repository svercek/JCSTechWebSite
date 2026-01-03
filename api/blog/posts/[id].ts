import type { VercelRequest, VercelResponse } from '@vercel/node';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';

// Define schema inline
const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  author: varchar('author', { length: 100 }).notNull(),
  publishedDate: timestamp('published_date').defaultNow(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Helper to check authentication
function isAuthenticated(req: VercelRequest): boolean {
  const cookies = req.headers.cookie || '';
  return cookies.includes('admin_session=');
}

/**
 * Vercel Serverless Function for Single Blog Post
 * PUT /api/blog/posts/[id] - Update post (requires auth)
 * DELETE /api/blog/posts/[id] - Delete post (requires auth)
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Check authentication
    if (!isAuthenticated(req)) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Check if database is configured
    if (!process.env.DATABASE_URL) {
      return res.status(503).json({ error: 'Database not configured' });
    }

    // Get post ID from query
    const { id } = req.query;
    const postId = parseInt(id as string, 10);

    if (isNaN(postId)) {
      return res.status(400).json({ error: 'Invalid post ID' });
    }

    // Create database connection
    const client = postgres(process.env.DATABASE_URL, { ssl: 'require', max: 1 });
    const db = drizzle(client, { schema: { blogPosts } });

    if (req.method === 'PUT') {
      const { title, slug, excerpt, content, author } = req.body;

      if (!title || !slug || !content || !author) {
        await client.end();
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const [updatedPost] = await db
        .update(blogPosts)
        .set({
          title,
          slug,
          excerpt: excerpt || null,
          content,
          author,
          updatedAt: new Date(),
        })
        .where(eq(blogPosts.id, postId))
        .returning();

      await client.end();

      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }

      return res.json(updatedPost);
    }

    if (req.method === 'DELETE') {
      await db.delete(blogPosts).where(eq(blogPosts.id, postId));
      await client.end();
      return res.status(204).end();
    }

    await client.end();
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Blog post API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
