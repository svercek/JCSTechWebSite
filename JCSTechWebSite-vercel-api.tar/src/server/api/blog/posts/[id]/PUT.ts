import type { Request, Response } from 'express';
import { db } from '../../../../db/client.js';
import { blogPosts } from '../../../../db/schema.js';
import { eq } from 'drizzle-orm';
import { requireAuth } from '../../../../middleware/auth.js';

/**
 * PUT /api/blog/posts/:id
 * Update an existing blog post (protected - admin only)
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
    const { title, slug, excerpt, content, author } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Post ID is required' });
    }

    // Build update object (only include provided fields)
    const updates: any = { updatedAt: new Date() };
    if (title !== undefined) updates.title = title;
    if (slug !== undefined) updates.slug = slug;
    if (excerpt !== undefined) updates.excerpt = excerpt;
    if (content !== undefined) updates.content = content;
    if (author !== undefined) updates.author = author;

    // Update post
    await db
      .update(blogPosts)
      .set(updates)
      .where(eq(blogPosts.id, parseInt(id)));

    // Fetch updated post
    const updatedPost = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, parseInt(id)))
      .limit(1);

    if (updatedPost.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost[0]);
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ 
      error: 'Failed to update blog post', 
      message: error instanceof Error ? error.message : String(error) 
    });
  }
}

// Apply authentication middleware
export default [requireAuth, handler];
