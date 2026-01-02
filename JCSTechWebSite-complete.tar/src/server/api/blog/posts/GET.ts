import type { Request, Response } from 'express';
import { db } from '../../../db/client.js';
import { blogPosts } from '../../../db/schema.js';
import { desc } from 'drizzle-orm';

/**
 * GET /api/blog/posts
 * Fetch all blog posts, ordered by published date (newest first)
 */
export default async function handler(req: Request, res: Response) {
  try {
    // Check if database is available
    if (!db) {
      // Return empty array when database is skipped
      return res.json([]);
    }

    const posts = await db
      .select()
      .from(blogPosts)
      .orderBy(desc(blogPosts.publishedDate));

    res.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ 
      error: 'Failed to fetch blog posts', 
      message: error instanceof Error ? error.message : String(error) 
    });
  }
}
