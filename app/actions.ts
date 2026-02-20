'use server'
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers'; 
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export async function loginUser(name: string, password: string) {
    try {
        const user = await prisma.user.findFirst({
            where: { name: name },
        });

        // 1. Сначала проверяем, существует ли пользователь
        if (!user) {
            return { success: false, message: "Пользователь не найден" };
        }

        // 2. Сравниваем введенный пароль с хешем из БД
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            // Создаем куку "isLoggedIn", которая будет жить 1 день
            (await cookies()).set('isLoggedIn', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24,
                path: '/', // Рекомендуется добавить, чтобы кука была доступна везде
            });
            return { success: true };
        }
        
        return { success: false, message: "Неверный пароль" };
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, message: "Ошибка сервера" };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('isLoggedIn');
    redirect('/login');
}
