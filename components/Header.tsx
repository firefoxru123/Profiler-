"use client";
import Link from 'next/link';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
    return (
        <header className="w-full bg-[#000000] shadow-sm header-font text-white">
            <div className="mx-auto p-5">
                {/* Используем grid или flex с фиксированными долями */}
                <nav className="flex items-center w-full font-medium">
                    {/* 1. Левая часть (занимает 1/3 или гибкое пространство слева) */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="text-5xl font-bold hover:text-blue-500 transition-colors">
                            Profiler
                        </Link>
                    </div>

                    {/* 2. Центральная часть (самовыравнивание по центру) */}
                    <div className="flex gap-50 text-2xl"> {/* Уменьшил gap-100 до gap-10, 100 — это слишком много для Tailwind */}
                        <Link href="/devices" className="hover:text-blue-500 transition-colors">Supported devices</Link>
                        <Link href="/scan" className="hover:text-blue-500 transition-colors">Scan</Link>
                        <Link href="/politics" className="hover:text-blue-500 transition-colors">Politics</Link>
                        <Link href="/log" className="hover:text-blue-500 transition-colors">Log</Link>

                    </div>

                    {/* 3. Правая часть (пустой блок такой же ширины, как левый, для баланса) */}
                    <div className="flex-1"></div>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ждем, пока компонент смонтируется, чтобы не было ошибок гидратации
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setMounted(true);
    }, []); // Пустой массив зависимостей говорит, что это сработает один раз

    // ВАЖНО: пока mounted false, мы возвращаем пустую "заглушку" того же размера
    // чтобы интерфейс не прыгал, когда кнопка появится
    if (!mounted) {
        return <div className="w-32 h-10"></div>;
    }
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-32 p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
        >
            {theme === "dark" ? "🌙 Темень" : "☀️ Свет"}
        </button>
    );
}