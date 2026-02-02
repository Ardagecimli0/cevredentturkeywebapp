import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Desteklenen dil kodları ve URL slug'ları
const supportedRoutes: Record<string, string> = {
    'en-implant-in-turkey': 'en',
    'de-implant-in-turkey': 'de',
    'es-implant-in-turkey': 'es',
    'fr-implant-in-turkey': 'fr',
    'it-implant-in-turkey': 'it',
};

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the path is an asset or API call
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/images') ||
        pathname.startsWith('/static') ||
        pathname.includes('.') // file extension
    ) {
        return NextResponse.next();
    }

    // Ana sayfa - direkt geç
    if (pathname === '/') {
        return NextResponse.next();
    }

    // Desteklenen route'lardan biri mi kontrol et
    const routeSlug = pathname.slice(1); // Remove leading /
    if (supportedRoutes[routeSlug]) {
        return NextResponse.next();
    }

    // Desteklenmeyen route - ana sayfaya yönlendir
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
