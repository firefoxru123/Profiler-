"use client";
import { useState } from 'react';

// 1. Описываем, как выглядят наши данные
interface UserData {
  id: number;
  name: string;
}

export default function Home() {
  // 2. Говорим useState: "Тут будет либо UserData, либо null"
  const [data, setData] = useState<UserData | null>(null);

  const handleClick = async () => {
    const res = await fetch('/api/home');
    const json: UserData = await res.json(); // Указываем тип для json
    setData(json);
  };

  return (
    <main className="flex flex-col items-center justify-center px-4 py-12">
      {/* Секция с кнопкой и данными (сверху) */}
      <section className="mb-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Мой проект на Next.js</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all active:scale-95"
          onClick={handleClick}
        >
          Проверить доступ
        </button>

        {data && (
          <div className="mt-4 p-3 bg-white/10 rounded-md border border-white/20">
            Привет, {data.name}, твой ID = {data.id}
          </div>
        )}
      </section>

      {/* Центральный блок с описанием продукта */}
      <section className="max-w-3xl w-full space-y-12 text-center md:text-left">

        <div className="text-center border-b border-white/10 pb-8">
          <h2 className="text-4xl font-extrabold mb-4">О продукте</h2>
          <p className="text-gray-400 text-lg">Комплексная система управления сетевой безопасностью и устройствами.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Блок 1 */}
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-2 text-blue-400">Что умеет продукт</h3>
            <p className="text-sm text-gray-300">
              Мониторинг подключенных устройств в реальном времени, глубокий анализ трафика и автоматизация ответов на угрозы.
            </p>
          </div>

          {/* Блок 2 */}
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-2 text-blue-400">Что такое профили</h3>
            <p className="text-sm text-gray-300">
              Наборы характеристик устройств, позволяющие идентифицировать тип ОС, модель и назначение оборудования без участия человека.
            </p>
          </div>

          {/* Блок 3 */}
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-2 text-blue-400">Что такое &quot;политики&quot;</h3>
            <p className="text-sm text-gray-300">
              Гибкие правила доступа: кто, куда и когда может выходить в сеть. Ограничивайте опасные зоны в один клик.
            </p>
          </div>

          {/* Блок 4 */}
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-2 text-blue-400">Методы детекции</h3>
            <p className="text-sm text-gray-300">
              Мы используем пассивный фингерпринтинг, эвристический анализ поведения и сигнатурное сопоставление баз уязвимостей.
            </p>
          </div>
        </div>

        {/* Секция статуса функционала */}
        <div className="mt-12 p-8 bg-blue-600/10 rounded-3xl border border-blue-500/30">
          <h3 className="text-2xl font-bold mb-6 text-center">Статус разработки</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <span>✅</span> Готово сейчас
              </h4>
              <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                <li>Авторизация через JWT</li>
                <li>Просмотр списка устройств</li>
                <li>Редактирование профилей</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                <span>🚀</span> Ожидается
              </h4>
              <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                <li>Интеграция с Telegram API</li>
                <li>AI-детекция аномалий</li>
                <li>Генерация PDF отчетов</li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
