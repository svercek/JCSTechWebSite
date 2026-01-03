import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';

/**
 * Vercel Serverless Function for Admin Login
 * POST /api/admin/login
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable not set');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    let isValid = false;

    // Check if password is hashed (bcrypt hashes start with $2a$, $2b$, or $2y$)
    if (adminPassword.startsWith('$2')) {
      // Compare with hashed password
      isValid = await bcrypt.compare(password, adminPassword);
    } else {
      // Plain text comparison (for development)
      isValid = password === adminPassword;
    }

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate session token (simple implementation)
    const sessionToken = Buffer.from(
      `${Date.now()}-${Math.random().toString(36)}`
    ).toString('base64');

    // Set session cookie (24 hours)
    res.setHeader(
      'Set-Cookie',
      `admin_session=${sessionToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
