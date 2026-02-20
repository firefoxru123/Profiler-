import { PrismaClient } from '../app/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🚀 Запуск сида с хешированием...');
  
  // Очищаем старых юзеров
  await prisma.user.deleteMany({});

  // 1. Создаем "соль" и хешируем пароль
  const saltRounds = 10;
  const plainPassword = 'admin'; // Твой реальный пароль
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  // 2. Создаем пользователя с ХЕШЕМ вместо пароля
  const admin = await prisma.user.create({
    data: {
      name: 'admin',
      password: hashedPassword, // Записываем абракадабру в БД
    },
  });

  console.log('✅ Успех! Пользователь создан.');
  console.log('Данные в БД теперь выглядят так:', {
    name: admin.name,
    password: admin.password // Увидишь длинную строку $2b$10$...
  });
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
