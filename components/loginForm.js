'use client'
import { Button, Input } from "@nextui-org/react"
import { useState } from 'react'
import { MdCheck, MdClose, MdEmail, MdLock } from "react-icons/md"

const onSubmit = (e) => {
    e.preventDefault()

}

export default function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submiting, setSubmiting] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const size = 'lg'
    const variant = 'bordered'
    const radius = 'sm'
    const label = 'outside'
    const iconStyle = 'text-xl text-zinc-300'
    const classNames = {
        label: 'text-zinc-500 text-base',
        input: 'text-zinc-700 text-base placeholder:text-zinc-300',
        inputWrapper: 'border-1 border-zinc-200 bg-white !cursor-text',
    }

    return (
        <form onSubmit={onSubmit} className='flex flex-col gap-6 px-4'>
            <Input
                classNames={classNames}
                type='email'
                label='E-mail'
                placeholder='Seu e-mail cadastrado'
                isRequired
                size={size}
                variant={variant}
                radius={radius}
                labelPlacement={label}
                startContent={<MdEmail className={iconStyle} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <Input
                classNames={classNames}
                type='password'
                label='Senha'
                placeholder='************'
                isRequired
                size={size}
                variant={variant}
                radius={radius}
                labelPlacement={label}
                startContent={<MdLock className={iconStyle} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <div className='flex items-center gap-4 p-4 bg-white border-t-1 border-zinc-200 fixed bottom-0 left-0 w-full md:px-[30%]'>
                <Button
                    size='lg'
                    radius='sm'
                    variant='flat'
                    startContent={<MdClose className='text-blue-600 text-lg' />}
                    className='bg-blue-100 text-blue-600 hover:bg-blue-200 transition-background w-full'
                    onClick={() => { router.push('/admin') }}
                >
                    Cancelar
                </Button>
                <Button
                    size='lg'
                    radius='sm'
                    variant='flat'
                    startContent={<MdCheck className='text-white text-lg' />}
                    className='bg-blue-600 text-white hover:bg-blue-700 transition-background w-full'
                    type='submit'
                    isLoading={submiting}
                    disabled={submiting}
                >
                    {submiting ? 'Entrando' : 'Login'}
                </Button>
            </div>
        </form>
    )
}