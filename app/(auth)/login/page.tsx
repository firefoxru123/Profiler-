"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Данные для входа:", { email, password });
        // Здесь будет логика отправки на твой Rust-бэкенд
    };

    return (
        <div className="w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md animate-in fade-in zoom-in duration-500">

            {/* Логотип и заголовок */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-500 mb-2 font-space">Profiler</h1>
                <p className="text-gray-400 text-sm">Введите данные для доступа к системе</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
                {/* Поле Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 ml-1">Электронная почта</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="bg-[#0d1117] border border-white/10 text-white p-4 rounded-2xl focus:border-blue-500 outline-none transition-all placeholder:text-gray-600"
                    />
                </div>

                {/* Поле Пароль */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-sm text-gray-400">Пароль</label>
                        <Link href="#" className="text-xs text-blue-400 hover:underline">Забыли?</Link>
                    </div>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-[#0d1117] border border-white/10 text-white p-4 rounded-2xl focus:border-blue-500 outline-none transition-all placeholder:text-gray-600"
                    />
                </div>

                {/* Кнопка входа */}
                <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95 mt-4"
                >
                    Войти в систему
                </button>
            </form>

            {/* Футер формы */}
            <div className="mt-8 text-center border-t border-white/5 pt-6">
                <p className="text-sm text-gray-500">
                    Нет аккаунта?{" "}
                    <Link href="/register" className="text-blue-400 font-semibold hover:underline">
                        Создать профиль
                    </Link>
                </p>
            </div>
        </div>
    );
}
