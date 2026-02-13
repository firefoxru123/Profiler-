import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Получаем данные от твоего React-фронтенда
    const body = await request.json();
    console.log("Данные от фронта:", body);

    // 2. Отправляем эти данные во внешний сервис (например, на порт 8080)
    // Замени URL на адрес твоего Rust-сервиса или другого API
    const externalResponse = await fetch('http://127.0.0.1:8000/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), 
    });

    // 3. Получаем результат от внешнего сервиса
    const result = await externalResponse.json();
    console.log("Ответ от сервиса:", result);

    // 4. Возвращаем этот результат обратно на фронтенд
    return NextResponse.json(result);

  } catch (error) {
    console.error("Ошибка при обращении к сервису:", error);
    return NextResponse.json({ error: "Ошибка внешнего сервиса" }, { status: 500 });
  }
}
