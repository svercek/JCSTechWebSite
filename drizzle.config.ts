import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

// Load environment variables
config();

const skipDb = process.env.SKIP_DB === 'true';

if (skipDb) {
  console.log('⚠️  Database skipped (SKIP_DB=true)');
}

// Validate required environment variable (unless skipped)
if (!skipDb && !process.env.DATABASE_URL) {
  throw new Error(
    'Missing required environment variable: DATABASE_URL\n' +
      'Please set it in your .env file or set SKIP_DB=true to skip database configuration.'
  );
}

// Export config
export default defineConfig({
  schema: './src/server/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: skipDb ? 'postgresql://localhost/placeholder' : process.env.DATABASE_URL!,
  },
});