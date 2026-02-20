# 🚀 Profiler - Next.js 16 + Prisma 7 Admin System

**Profiler** — это современная панель управления с системой авторизации, построенная на базе новейшего стека технологий. Проект демонстрирует работу с серверными компонентами, безопасную обработку паролей и контейнеризацию базы данных.

---

## 🛠 Технологический стек

*   **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack)
*   **Language:** [TypeScript](https://www.typescript.org)
*   **Database:** [PostgreSQL 16](https://www.postgresql.org) (Docker Container)
*   **ORM:** [Prisma 7](https://www.prisma.io) (с использованием Native Driver Adapters)
*   **Security:** [Bcrypt](https://github.com) (Hashing), Middleware Protection
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
*   **Icons/Themes:** `next-themes`, Lucide (optional)

---

## ✨ Особенности

*   **🔒 Secure Auth:** Хеширование паролей через Bcrypt (10 rounds salt).
*   **🛡 Middleware:** Защита роутов от неавторизованных пользователей на уровне Edge Runtime.
*   **🗄 Prisma 7 Setup:** Конфигурация через `prisma.config.ts` и генерация клиента в кастомную директорию `app/generated/prisma`.
*   **🐳 Dockerized DB:** Готовый `docker-compose` для мгновенного развертывания БД.
*   **🎨 Modern UI:** Темная тема, Glassmorphism дизайн и адаптивная верстка.

---

## 🚀 Быстрый старт

### 1. Требования
*   Node.js 20.x или выше
*   Docker & Docker Compose
*   npm / pnpm / yarn

### 2. Клонирование и установка
```bash
git clone https://github.com/firefoxru123/Profiler-
cd profiler
npm install
npm run dev
docker build -t my-next-app .
docker run -d -p 3000:3000 --name my-running-app my-next-app
