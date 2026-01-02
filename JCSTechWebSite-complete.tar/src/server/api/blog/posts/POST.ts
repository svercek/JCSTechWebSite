import type { Request, Response } from 'express';
import { db } from '../../../db/client.js';
import { blogPosts } from '../../../db/schema.js';
import { requireAuth } from '../../../middleware/auth.js';
import { eq } from 'drizzle-orm';

/**
 * POST /api/blog/posts
 * Create a new blog post (protected - admin only)
 */
async function handler(req: Request, res: Response) {
  try {
    // Check if database is available
    if (!db) {
      return res.status(503).json({ 
        error: 'Database not available', 
        message: 'Database is disabled (SKIP_DB=true)' 
      });
    }

    const { title, slug, excerpt, content, author } = req.body;

    // Validation
    if (!title || !slug || !content || !author) {
      return res.status(400).json({ 
        error: 'Missing required fields', 
        message: 'title, slug, content, and author are required' 
      });
    }

    // Create post
    const result = await db.insert(blogPosts).values({
      title,
      slug,
      excerpt: excerpt || null,
      content,
      author,
    });

    // Fetch the created post
    const newPost = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, Number(result[0].insertId)))
      .limit(1);

    res.status(201).json(newPost[0]);
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ 
      error: 'Failed to create blog post', 
      message: error instanceof Error ? error.message : String(error) 
    });
  }
}

// Apply authentication middleware
export default [requireAuth, handler];
