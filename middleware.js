import createMiddleware from 'next-intl/middleware'

//MIDDLEWARE É UM RECURSO DO NEXTJS QUE EXECUTA UM DETERMINADO CÓDIGO AO SER CHAMADA UMA ROTA ESPECÍFICA, 
//OU UM CONJUNTO DE ROTAS

//CRIA A FUNÇÃO DO MIDDLEWARE
export default createMiddleware({
    // CRIA UMA LISTA (ARRAY) COM TODOS OS IDIOMAS SUPORTADOS
    locales: ['pt-BR', 'es-AR'],

    // SE O IDIOMA FOR PORTUGUÊS (PADRÃO), O PATHNAME DAS ROTAS NÃO TERÃO UM PREFIXO, EX.: /ABOUT AO INVÉS DE /ES-AR/ABOUT
    defaultLocale: 'pt-BR'
})

//CRIA UMA LISTA COM UMA STRING QUE DEFINE TODAS AS ROTAS EM QUE O MIDDLEWARE VAI SER EXECUTADO, NESTE CASO TODAS
//EXCETO AS ROTAS DA API, _NEXT E _VERCEL
export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}