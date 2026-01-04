import type { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

/**
 * Authentication Middleware
 * Protects admin routes by verifying session token
 */

// In-memory session store (simple for single admin)
// In production, consider using Redis or database-backed sessions
const sessions = new Map<string, { userId: string; createdAt: number }>();

// Session expiry: 24 hours
const SESSION_EXPIRY = 24 * 60 * 60 * 1000;

/**
 * Generate a random session token
 */
export function generateSessionToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Verify admin password
 */
export async function verifyAdminPassword(password: string): Promise<boolean> {
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  if (!adminPassword) {
    console.error('ADMIN_PASSWORD environment variable not set');
    return false;
  }

  // Check if the stored password is already hashed (starts with $2a$ or $2b$)
  if (adminPassword.startsWith('$2a$') || adminPassword.startsWith('$2b$')) {
    // Compare with hashed password
    return bcrypt.compare(password, adminPassword);
  } else {
    // Plain text comparison (for development only)
    console.warn('⚠️  ADMIN_PASSWORD is not hashed. Please use a hashed password in production.');
    return password === adminPassword;
  }
}

/**
 * Create a new session
 */
export function createSession(userId: string): string {
  const token = generateSessionToken();
  sessions.set(token, {
    userId,
    createdAt: Date.now(),
  });
  return token;
}

/**
 * Verify session token
 */
export function verifySession(token: string): boolean {
  const session = sessions.get(token);
  
  if (!session) {
    return false;
  }

  // Check if session has expired
  if (Date.now() - session.createdAt > SESSION_EXPIRY) {
    sessions.delete(token);
    return false;
  }

  return true;
}

/**
 * Delete session
 */
export function deleteSession(token: string): void {
  sessions.delete(token);
}

/**
 * Clean up expired sessions (run periodically)
 */
export function cleanupExpiredSessions(): void {
  const now = Date.now();
  for (const [token, session] of sessions.entries()) {
    if (now - session.createdAt > SESSION_EXPIRY) {
      sessions.delete(token);
    }
  }
}

// Run cleanup every hour
setInterval(cleanupExpiredSessions, 60 * 60 * 1000);

/**
 * Express middleware to protect admin routes
 */
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.adminToken;

  if (!token || !verifySession(token)) {
    return res.status(401).json({ error: 'Unauthorized', message: 'Please log in' });
  }

  next();
}
