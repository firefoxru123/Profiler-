import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasource: {
    // Важно: берем строку из .env
    url: process.env.DATABASE_URL,
  },
  migrations: {
    // Указываем команду для запуска сида здесь
    seed: 'tsx prisma/seed.ts',
  },
});
