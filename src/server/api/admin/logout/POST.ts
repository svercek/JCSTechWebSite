import type { Request, Response } from 'express';
import { deleteSession } from '../../../middleware/auth.js';

/**
 * POST /api/admin/logout
 * Log out admin user and clear session
 */
export default async function handler(req: Request, res: Response) {
  try {
    const token = req.cookies?.adminToken;

    if (token) {
      deleteSession(token);
    }

    // Clear cookie
    res.clearCookie('adminToken');

    res.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ 
      error: 'Logout failed', 
      message: error instanceof Error ? error.message : String(error) 
    });
  }
}
