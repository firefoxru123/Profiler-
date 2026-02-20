import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Используем export default - это самый надежный способ для Turbopack
export default async function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get('isLoggedIn');
    const { pathname } = request.nextUrl;

    // Исключаем страницу логина, чтобы не зациклиться
    if (pathname === '/login') {
        // Если уже залогинен и лезем на логин — на главную
        if (isLoggedIn) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next();
    }

    // Если куки нет — на логин
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// Конфиг остается таким же
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
