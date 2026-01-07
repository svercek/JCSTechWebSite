import type { VercelRequest, VercelResponse } from '@vercel/node';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { blogPosts } from '../../src/server/db/schema.js';
import { desc } from 'drizzle-orm';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('[API] Request:', req.method, req.url);
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Check if DATABASE_URL is configured
  if (!process.env.DATABASE_URL) {
    console.error('[API] DATABASE_URL not configured');
    return res.status(503).json({
      error: 'Database not configured',
      message: 'DATABASE_URL environment variable is missing',
    });
  }

  let client;
  try {
    console.log('[API] Creating database connection...');
    client = postgres(process.env.DATABASE_URL);
    const db = drizzle(client);
    console.log('[API] Database connection created');

    if (req.method === 'GET') {
      console.log('[API] Fetching posts from database...');
      const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.publishedDate));
      console.log('[API] Found', posts.length, 'posts');
      await client.end();
      return res.status(200).json(posts);
    }

    if (req.method === 'POST') {
      const { title, slug, excerpt, content, author } = req.body;

      // Validation
      if (!title || !slug || !content || !author) {
        await client.end();
        return res.status(400).json({
          error: 'Missing required fields',
          message: 'title, slug, content, and author are required',
        });
      }

      console.log('Attempting to create post:', { title, slug, author });
      
      const result = await db
        .insert(blogPosts)
        .values({
          title,
          slug,
          excerpt: excerpt || null,
          content,
          author,
        })
        .returning();

      console.log('Insert result:', result);
      
      if (!result || result.length === 0) {
        await client.end();
        return res.status(500).json({ error: 'Post created but no data returned' });
      }

      const newPost = result[0];
      console.log('Post created successfully:', newPost.id);
      
      await client.end();
      return res.status(201).json(newPost);
    }

    await client.end();
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('[API] Error:', error);
    if (client) {
      await client.end();
    }
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : String(error),
    });
  }
}