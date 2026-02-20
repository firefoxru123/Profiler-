# 🚀 Profiler - Next.js Admin System

Система мониторинга и управления с авторизацией, хешированием паролей и интеграцией с PostgreSQL через Prisma 7.

## 🛠 Стек технологий

- **Framework:** [Next.js 15/16 (App Router)](https://nextjs.org)
- **Database:** [PostgreSQL 16](https://www.postgresql.org) (Docker)
- **ORM:** [Prisma 7](https://www.prisma.io) с поддержкой Driver Adapters (`pg`)
- **Authentication:** Custom Middleware + Jose/Bcrypt
- **Styling:** Tailwind CSS + Framer Motion (animations)
- **Runtime:** Node.js 20+

## 📦 Особенности проекта

- **Prisma 7 Ready:** Использование `prisma.config.ts` и адаптера `@prisma/adapter-pg` для работы с нативным драйвером.
- **Security:** Хеширование паролей с помощью `bcrypt`.
- **Protection:** Middleware блокирует доступ к системе без валидной сессии (Cookies).
- **Custom Client:** Генерация Prisma Client в кастомную директорию `app/generated/prisma`.

## 🚀 Быстрый старт

### 1. Клонирование репозитория
bash git clone https://github.com
cd profiler

1. Установите зависимости:
   ```bash
   npm install

npm run dev

docker build -t my-next-app .

docker run -d -p 3000:3000 --name my-running-app my-next-app
