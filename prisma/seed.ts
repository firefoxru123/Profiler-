import { PrismaClient } from '../app/generated/prisma';

// В Prisma 7 + prisma.config.ts URL подхватится автоматически
const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Запуск сида...');
  const admin = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      name: 'Default Admin',
      password: 'admin_password_123',
    },
  });
  console.log('✅ Готово! Пользователь создан:', admin);
}

main()
  .catch((e) => {
    console.error('❌ Ошибка:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
