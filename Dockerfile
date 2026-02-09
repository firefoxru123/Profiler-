# Этап 1: Установка зависимостей
FROM node:24-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# Этап 2: Сборка проекта
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Next.js автоматически оптимизирует сборку
RUN npm run build

# Этап 3: Запуск
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Копируем только необходимые файлы для экономии места
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
