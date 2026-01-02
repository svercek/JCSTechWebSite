import type { Request, Response } from 'express';
import { db } from '../../../db/client.js';
import { blogCategories } from '../../../db/schema.js';

export default async function handler(req: Request, res: Response) {
  try {
    const categories = await db.select().from(blogCategories);
    res.json(categories);
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    res.status(500).json({ error: 'Failed to fetch blog categories', message: String(error) });
  }
}
