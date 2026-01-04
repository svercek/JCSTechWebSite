import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.js';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const skipDb = process.env.SKIP_DB === 'true';

let db: ReturnType<typeof drizzle>;

if (skipDb) {
  console.log('⚠️  Database skipped (SKIP_DB=true) - Blog features disabled');
  // Create a mock db object for when database is skipped
  db = null as any;
} else {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      'DATABASE_URL environment variable is required when SKIP_DB is not true.\n' +
        'Please add DATABASE_URL to your .env file or set SKIP_DB=true'
    );
  }

  // Create PostgreSQL connection
  const client = postgres(process.env.DATABASE_URL, {
    ssl: 'require',
    max: 10,
  });

  db = drizzle(client, { schema });
  console.log('✅ Database connected (PostgreSQL via Neon)');
}

export { db };
