import type { Request, Response } from 'express';
import { verifySession } from '../../../middleware/auth.js';

/**
 * GET /api/admin/verify
 * Verify if current session is valid
 */
export default async function handler(req: Request, res: Response) {
  try {
    const token = req.cookies?.adminToken;

    if (!token || !verifySession(token)) {
      return res.status(401).json({ authenticated: false });
    }

    res.json({ authenticated: true });
  } catch (error) {
    console.error('Verify error:', error);
    res.status(500).json({ 
      error: 'Verification failed', 
      message: error instanceof Error ? error.message : String(error) 
    });
  }
}
