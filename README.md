# My Next.js App (Fullstack)

Учебный проект на **Next.js 16** с использованием **TypeScript** и контейнеризацией через **Docker**.

## 🚀 Технологии
- **Frontend**: React 19, Next.js (App Router)
- **Backend**: Next.js API Routes
- **Type Checking**: TypeScript
- **Deployment**: Docker, Dockerfile (Multi-stage build)

## 🛠 Запуск локально (без Docker)

1. Установите зависимости:
   ```bash
   npm install

npm run dev

docker build -t my-next-app .

docker run -d -p 3000:3000 --name my-running-app my-next-app