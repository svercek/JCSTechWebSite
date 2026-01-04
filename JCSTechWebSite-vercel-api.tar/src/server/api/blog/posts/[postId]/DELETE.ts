import type { Request, Response } from 'express';
import { db } from '../../../../db/client.js';
import { blogPosts } from '../../../../db/schema.js';
import { eq } from 'drizzle-orm';

export default async function handler(req: Request, res: Response) {
  try {
    const { postId } = req.params;

    if (!postId || isNaN(Number(postId))) {
      return res.status(400).json({ error: 'Valid post ID is required' });
    }

    // Check if post exists
    const existingPost = await db.select().from(blogPosts).where(eq(blogPosts.id, Number(postId))).limit(1);

    if (!existingPost[0]) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    // Delete the post
    await db.delete(blogPosts).where(eq(blogPosts.id, Number(postId)));

    res.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ error: 'Failed to delete blog post', message: String(error) });
  }
}
