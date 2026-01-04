import type { Request, Response } from 'express';
import { verifyAdminPassword, createSession } from '../../../middleware/auth.js';

/**
 * POST /api/admin/login
 * Authenticate admin user with password
 */
export default async function handler(req: Request, res: Response) {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    // Verify password
    const isValid = await verifyAdminPassword(password);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Create session
    const token = createSession('admin');

    // Set secure cookie
    res.cookie('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    res.json({ success: true, message: 'Logged in successfully' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Login failed', 
      message: error instanceof Error ? error.message : String(error) 
    });
  }
}
