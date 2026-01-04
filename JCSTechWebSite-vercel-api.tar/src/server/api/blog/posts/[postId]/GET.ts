import type { Request, Response } from 'express';
import { db } from '../../../../db/client.js';
import { blogPosts } from '../../../../db/schema.js';
import { eq } from 'drizzle-orm';

export default async function handler(req: Request, res: Response) {
  try {
    const { postId } = req.params;

    if (!postId) {
      return res.status(400).json({ error: 'Post ID is required' });
    }

    // Try to find by ID first
    let post;
    if (!isNaN(Number(postId))) {
      const posts = await db.select().from(blogPosts).where(eq(blogPosts.id, Number(postId))).limit(1);
      post = posts[0];
    }

    // If not found by ID, try by slug
    if (!post) {
      const posts = await db.select().from(blogPosts).where(eq(blogPosts.slug, postId)).limit(1);
      post = posts[0];
    }

    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Failed to fetch blog post', message: String(error) });
  }
}
