import type { VercelRequest, VercelResponse } from '@vercel/node';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { desc } from 'drizzle-orm';

// Define schema inline (since we can't import from src/)
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
 * Vercel Serverless Function for Blog Posts
 * GET /api/blog/posts - Get all posts
 * POST /api/blog/posts - Create new post (requires auth)
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Check if database is configured
    if (!process.env.DATABASE_URL) {
      if (req.method === 'GET') {
        return res.json([]);
      }
      return res.status(503).json({ error: 'Database not configured' });
    }

    // Create database connection
    const client = postgres(process.env.DATABASE_URL, { ssl: 'require', max: 1 });
    const db = drizzle(client, { schema: { blogPosts } });

    if (req.method === 'GET') {
      // Get all blog posts
      const posts = await db
        .select()
        .from(blogPosts)
        .orderBy(desc(blogPosts.publishedDate));

      await client.end();
      return res.json(posts);
    }

    if (req.method === 'POST') {
      // Check authentication
      if (!isAuthenticated(req)) {
        await client.end();
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { title, slug, excerpt, content, author } = req.body;

      if (!title || !slug || !content || !author) {
        await client.end();
        return res.status(400).json({ error: 'Missing required fields' });
      }

console.log('Attempting to create post:', { title, slug, author });
      
      const result = await db
        .insert(blogPosts)
        .values({
          title,
          slug,
          excerpt: excerpt || null,
          content,
          author,
        })
        .returning();

      console.log('Insert result:', result);
      
      if (!result || result.length === 0) {
        await client.end();
        return res.status(500).json({ error: 'Post created but no data returned' });
      }

      const newPost = result[0];
      console.log('Post created successfully:', newPost.id);
      
      await client.end();
      return res.status(201).json(newPost);

      console.log('Attempting to create post:', { title, slug, author });
      
      const result = await db
        .insert(blogPosts)
        .values({
          title,
          slug,
          excerpt: excerpt || null,
          content,
          author,
        })
        .returning();

      console.log('Insert result:', result);
      
      if (!result || result.length === 0) {
        await client.end();
        return res.status(500).json({ error: 'Post created but no data returned' });
      }

      const newPost = result[0];
      console.log('Post created successfully:', newPost.id);
      
      await client.end();
      return res.status(201).json(newPost);

    }

    await client.end();
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Blog posts API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
