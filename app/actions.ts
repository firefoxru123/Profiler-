'use server'
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers'; // Импортируем работу с куками
import { redirect } from 'next/navigation';

export async function loginUser(name: string, password: string) {
    try {
        const user = await prisma.user.findFirst({
            where: { name: name },
        });

        if (user && user.password === password) {
            // Создаем куку "isLoggedIn", которая будет жить 1 день
            (await cookies()).set('isLoggedIn', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24
            });
            return { success: true };
        }
        return { success: false, message: "Неверные данные" };
    } catch (error) {
        return { success: false, message: "Ошибка сервера" };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('isLoggedIn'); // Удаляем метку входа
    redirect('/login'); // Выкидываем на страницу логина
}

