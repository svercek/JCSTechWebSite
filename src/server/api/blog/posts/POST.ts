import type { Request, Response } from 'express';
import { db } from '../../../db/client.js';
import { blogPosts } from '../../../db/schema.js';
import { eq } from 'drizzle-orm';

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default async function handler(req: Request, res: Response) {
  try {
    const { title, excerpt, content, category, imageUrl, readTime, published, featured } = req.body;

    // Validation
    if (!title || !excerpt || !content || !category) {
      return res.status(400).json({ error: 'Missing required fields: title, excerpt, content, category' });
    }

    // Generate slug from title
    const slug = generateSlug(title);

    // Insert the blog post
    const result = await db.insert(blogPosts).values({
      title,
      slug,
      excerpt,
      content,
      category,
      imageUrl: imageUrl || null,
      readTime: readTime || null,
      published: published || false,
      featured: featured || false,
    });

    // Fetch the newly created post
    const insertId = Number(result[0].insertId);
    const newPost = await db.select().from(blogPosts).where(eq(blogPosts.id, insertId)).limit(1);

    res.status(201).json(newPost[0]);
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Failed to create blog post', message: String(error) });
  }
}
