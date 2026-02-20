import { PrismaClient } from '../app/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Передаем адаптер - это официальный путь Prisma 7
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🚀 Запуск сида через адаптер...');
  
  await prisma.user.deleteMany({});

  const admin = await prisma.user.create({
    data: {
      name: 'admin',
      password: 'admin',
    },
  });

  console.log('✅ Успех! Пользователь создан:', admin);
}

main()
  .catch((e) => {
    console.error('❌ Ошибка:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
