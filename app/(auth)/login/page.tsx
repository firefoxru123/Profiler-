"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Правильный импорт
import { loginUser } from '@/app/actions'; // Используем новый экшен

export default function LoginPage() {
    const router = useRouter(); // Инициализация
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Вызываем серверную проверку обоих полей
        const result = await loginUser(name, password);

        if (result.success) {
            // Если всё верно — летим на главную
            router.push("/"); 
        } else {
            // Если нет — показываем текст ошибки из экшена
            setError(result.message || "Ошибка доступа");
        }
    };

    return (
        <div className="w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-500 mb-2 font-space">Profiler</h1>
                <p className="text-gray-400 text-sm">Введите данные для доступа</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-xl text-center text-sm">
                        {error}
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 ml-1">Имя пользователя</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        className="bg-[#0d1117] border border-white/10 text-white p-4 rounded-2xl focus:border-blue-500 outline-none transition-all"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 ml-1">Пароль</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-[#0d1117] border border-white/10 text-white p-4 rounded-2xl focus:border-blue-500 outline-none transition-all"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all"
                >
                    Войти в систему
                </button>
            </form>
        </div>
    );
}
