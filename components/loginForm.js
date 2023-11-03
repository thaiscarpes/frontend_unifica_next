'use client'
import { fetchUsers } from '@/services/fetchData'
import { Button, Input } from '@nextui-org/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
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
            const response = await fetchUsers()
            if (response) {
                if (status === 'authenticated') {
                    const isAuthorized = response.find(data => data.email === session?.user?.email)
                    if (isAuthorized) {
                        router.push('/admin')
                    } else {
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
                    onClick={() => { router.push('/') }}
                >
                    {language.commons.cancel}
                </Button>
            </div>
        </>
    )
}