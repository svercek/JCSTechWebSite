import type { Request, Response } from 'express';
import { db } from '../../../../db/client.js';
import { blogPosts } from '../../../../db/schema.js';
import { eq } from 'drizzle-orm';

export default async function handler(req: Request, res: Response) {
  try {
    const { postId } = req.params;
    const { title, excerpt, content, category, imageUrl, readTime, published, featured } = req.body;

    if (!postId || isNaN(Number(postId))) {
      return res.status(400).json({ error: 'Valid post ID is required' });
    }

    // Build update object with only provided fields
    const updateData: any = {
      updatedAt: new Date(),
    };

    if (title !== undefined) updateData.title = title;
    if (excerpt !== undefined) updateData.excerpt = excerpt;
    if (content !== undefined) updateData.content = content;
    if (category !== undefined) updateData.category = category;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (readTime !== undefined) updateData.readTime = readTime;
    if (published !== undefined) updateData.published = published;
    if (featured !== undefined) updateData.featured = featured;

    // Update the post
    await db.update(blogPosts)
      .set(updateData)
      .where(eq(blogPosts.id, Number(postId)));

    // Fetch the updated post
    const updatedPost = await db.select().from(blogPosts).where(eq(blogPosts.id, Number(postId))).limit(1);

    if (!updatedPost[0]) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(updatedPost[0]);
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ error: 'Failed to update blog post', message: String(error) });
  }
}
