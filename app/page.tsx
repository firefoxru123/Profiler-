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
    <main>
      <h1>Мой проект на Next.js</h1>
      <button onClick={handleClick}>Получить данные</button>
      
      {/* Теперь TS знает, что у data есть name и id */}
      {data && (
        <div> Привет {data.name}, твой ID = {data.id}</div>
      )}
    </main>
  );
}
