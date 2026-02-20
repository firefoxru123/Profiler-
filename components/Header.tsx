"use client";
import Link from 'next/link';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { logout } from '@/app/actions';

export default function Header() {
    return (
        <header className="w-full bg-[#000000] shadow-sm header-font text-white border-b border-white/5">
            <div className="mx-auto p-5">
                <nav className="flex items-center w-full font-medium">
                    {/* 1. Левая часть */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="text-5xl font-bold hover:text-blue-500 transition-colors">
                            Profiler
                        </Link>
                    </div>

                    {/* 2. Центральная часть */}
                    <div className="flex justify-between gap-10 text-2xl">
                        <Link href="/devices" className="hover:text-blue-500 transition-colors">Supported Devices</Link>
                        <Link href="/scan" className="hover:text-blue-500 transition-colors">Manual Scan</Link>
                        <Link href="/politics" className="hover:text-blue-500 transition-colors">Profiling Policies</Link>
                        <Link href="/log" className="hover:text-blue-500 transition-colors">Syslog</Link>
                    </div>
                    
                    {/* 3. Правая часть (Группируем кнопки управления) */}
                    <div className="flex-1 flex justify-end items-center gap-4">
                        {/* Кнопка выхода в стиле ThemeToggle */}
                        <button 
                            onClick={() => logout()}
                            className="w-32 p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-600 hover:text-white transition-all font-semibold"
                        >
                            Выйти
                        </button>

                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
