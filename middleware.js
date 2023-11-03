import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['pt-BR', 'es-AR'],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'pt-BR'
})

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}