'use client'
//ENCAPSULA TODAS AS ROTAS NO SESSION PROVIDER PARA QUE O NEXT0AUTH FUNCIONE E BLOQUEIE AS ROTAS 
import { SessionProvider } from 'next-auth/react'

const Provider = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default Provider