import type { Request, Response } from 'express';
import { db } from '../../../../db/client.js';
import { blogPosts } from '../../../../db/schema.js';
import { eq } from 'drizzle-orm';
import { requireAuth } from '../../../../middleware/auth.js';

/**
 * DELETE /api/blog/posts/:id
 * Delete a blog post (protected - admin only)
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

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Post ID is required' });
    }

    // Check if post exists
    const existingPost = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, parseInt(id)))
      .limit(1);

    if (existingPost.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Delete post
    await db.delete(blogPosts).where(eq(blogPosts.id, parseInt(id)));

    res.json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ 
      error: 'Failed to delete blog post', 
      message: error instanceof Error ? error.message : String(error) 
    });
  }
}

// Apply authentication middleware
export default [requireAuth, handler];
