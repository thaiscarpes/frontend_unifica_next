'use client'
import { fetchUsers } from '@/services/fetchData'
import { Button, Input } from '@nextui-org/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdCheck, MdClose, MdEmail, MdLock } from 'react-icons/md'
import { AiOutlineGoogle } from 'react-icons/ai'

export default function LoginForm({language}) {

    const { data: session, status } = useSession()

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [notAuthorized, setNotAuthorized] = useState(false)
    const [submiting, setSubmiting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchDataAsync = async () => {
            //BUSCA TODOS OS USUÁRIOS DO BACKEND
            const response = await fetchUsers()
            if (response) {
                if (status === 'authenticated') {
                    //VERIFICA SE O E-MAIL DO GOOGLE FORNECIDO É CONTIDO ENTRE OS USUÁRIOS CADASTRADOS NO BACKEND
                    const isAuthorized = response.find(data => data.email === session?.user?.email)
                    if (isAuthorized) {
                        //SE SIM ENVIA PARA A TELA ADMINSITRATIVA
                        router.push('/admin')
                    } else {
                        //SE NÃO DEFINE COMO NÃO AUTORIZADO
                        setIsLoading(false)
                        setNotAuthorized(true)
                    }
                } else {
                    setNotAuthorized(false)
                }
            }
        }
        fetchDataAsync()
        setIsLoading(false)
    }, [session])

    //VERIFICA O CAMINHO DA ROTA ATUAL E GERENCIA O IDIOMA COM O PREFIXO
    const pathname = usePathname()
    const brPrefix = '/pt-BR'
    const arPrefix = '/es-AR'
    let lang
    if (pathname.startsWith('/es-AR')) {
      lang = `${arPrefix}`
    } else {
      lang = `${brPrefix}`
    }

    return (
        <>
            {/* LOGIN COM GOOGLE */}
            <Button
                size='lg'
                radius='sm'
                variant='flat'
                startContent={<AiOutlineGoogle className='text-blue-600 text-lg' />}
                className='mx-4 bg-blue-100 text-blue-600 hover:bg-blue-200 transition-background w-max'
                onClick={() => signIn("google")}>
                {language.login.doLoginWithGoogle}
            </Button>

            {/* MENSAGEM NÃO É O USUÁRIO */}
            {notAuthorized && <p className='text-red-500 text-lg px-6'>{language.login.userNotPermitted}</p>}

            {/* FOOTER */}
            <div className='flex justify-center items-center gap-4 p-4 bg-white border-t-1 border-zinc-200 fixed bottom-0 left-0 w-full md:px-[30%]'>
                <Button
                    size='lg'
                    radius='sm'
                    variant='flat'
                    startContent={<MdClose className='text-blue-600 text-lg' />}
                    className='bg-blue-100 text-blue-600 hover:bg-blue-200 transition-background w-1/2'
                    onClick={() => { router.push(`${lang}/`)}}
                >
                    {language.commons.cancel}
                </Button>
            </div>
        </>
    )
}