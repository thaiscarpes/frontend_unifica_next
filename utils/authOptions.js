//IMPORTA O PROVEDOR DO GOOGLE PARA CONFIGURAR NO NEXT-AUTH
import GoogleProvider from 'next-auth/providers/google'

//CRIA UM OBJETO COM AS CONFIGURAÇÕE DO GOOGLE QUE SERÃO USADAS PELO NEXT AUTH
export const authOptions = {
    providers: [
        // ADICIONA O GOOGLE COMO UM PROVEDOR DE AUTENTICAÇÃO
        GoogleProvider({
            //IMPORTA O ID DA CONFIGURAÇÃO DA API DO GOOGLE QUE ESTA NO .ENV
            clientId: process.env.GOOGLE_CLIENT_ID,
            //IMPORTA A SENHA DA CONFIGURAÇÃO QUE ESTÁ NO .ENV
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
        }),
    ],
    pages: {
        //DEFINE QUAL ROTA DO NEXT SERÁ USADA PARA A PÁGINA DE LOGIN
        //SE NÃO DEFINIR O NEXT-AUTH VAI CRIAR UMA PÁGINA PADRÃO PARA FAZER O LOGIN
        signIn: '/login'
    }
}