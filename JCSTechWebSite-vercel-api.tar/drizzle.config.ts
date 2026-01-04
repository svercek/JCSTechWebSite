import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

// Load environment variables
config();

const skipDb = process.env.SKIP_DB === 'true';

if (skipDb) {
  console.log('⚠️  Database skipped (SKIP_DB=true)');
  // Export minimal config when database is skipped
  export default defineConfig({
    schema: './src/server/db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://localhost/placeholder',
    },
  });
} else {
  // Validate required environment variable
  if (!process.env.DATABASE_URL) {
    throw new Error(
      'Missing required environment variable: DATABASE_URL\n' +
        'Please set it in your .env file or set SKIP_DB=true to skip database configuration.'
    );
  }

  export default defineConfig({
    schema: './src/server/db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.DATABASE_URL,
    },
  });
}
