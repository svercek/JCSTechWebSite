import type { Request, Response } from 'express';
import { db } from '../../../db/client.js';
import { blogPosts } from '../../../db/schema.js';
import { desc, eq } from 'drizzle-orm';

export default async function handler(req: Request, res: Response) {
  try {
    const { published, featured, category } = req.query;

    let query = db.select().from(blogPosts);

    // Filter by published status
    if (published === 'true') {
      query = query.where(eq(blogPosts.published, true)) as any;
    }

    // Filter by featured status
    if (featured === 'true') {
      query = query.where(eq(blogPosts.featured, true)) as any;
    }

    // Filter by category
    if (category && typeof category === 'string') {
      query = query.where(eq(blogPosts.category, category)) as any;
    }

    // Order by creation date (newest first)
    const posts = await query.orderBy(desc(blogPosts.createdAt));

    res.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts', message: String(error) });
  }
}
