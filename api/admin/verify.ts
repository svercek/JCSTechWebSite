import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Vercel Serverless Function for Session Verification
 * GET /api/admin/verify
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const cookies = req.headers.cookie || '';
  const sessionCookie = cookies
    .split(';')
    .find((c) => c.trim().startsWith('admin_session='));

  if (!sessionCookie) {
    return res.status(401).json({ authenticated: false });
  }

  // In a real app, you'd validate the session token against a database
  // For now, just check if it exists
  return res.status(200).json({ authenticated: true });
}
