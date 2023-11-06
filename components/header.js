'use client'
import Search from '@/components/search'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdAdminPanelSettings, MdLanguage, MdLogout } from 'react-icons/md'

export const handleLanguage = () => {
  const pathName = usePathname()

  const hasBRPrefix = pathName.startsWith('/pt-BR')
  const hasARPrefix = pathName.startsWith('/es-AR')

  let pathWithoutPrefix = pathName
  if (hasBRPrefix || hasARPrefix) {
    pathWithoutPrefix = pathName.slice(6)
  }

  return pathWithoutPrefix
}

export default function Header({ language }) {

  const path = handleLanguage()

  return (
    <header className='fixed top-0 left-0 w-full bg-white z-20 md:px-[30%]'>
      <div className='flex items-center justify-between p-4 bg-surface-0'>
        <Link href={'/'}>
          <h1 className='font-bold text-primary-500 text-3xl hover:text-primary-800 transition cursor-pointer' >Unifica</h1>
        </Link>
        <div className='flex items-center gap-4'>
          <Link href={'/admin'}>
            <MdAdminPanelSettings className='text-2xl text-zinc-800 cursor-pointer' />
          </Link>
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly variant='light'>
                <MdLanguage className='text-2xl text-zinc-800 cursor-pointer' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="pt"><Link href={`/pt-BR/${path}`} passHref >Português - Brasil</Link></DropdownItem>
              <DropdownItem key="es"><Link href={`/es-AR/${path}`} passHref >Espanhol - Argentina</Link></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Search language={language} />
    </header>
  )
}

export function AdminHeader() {

  return (
    <header className='fixed top-0 left-0 w-full bg-white z-20 md:px-[30%]'>
      <div className='flex items-center justify-between p-4 bg-surface-0'>
        <Link href={'/'}>
          <h1 className='font-bold text-primary-500 text-3xl hover:text-primary-800 transition cursor-pointer' >Unifica</h1>
        </Link>
        <div className='flex items-center gap-4'>
          <button onClick={() => signOut()}>
            <MdLogout className='text-2xl text-zinc-800 cursor-pointer' />
          </button>
        </div>
      </div>
    </header>
  )
}

export function LoginHeader({ language }) {

  const path = handleLanguage()

  return (
    <header className='fixed top-0 left-0 w-full bg-white z-20 md:px-[30%]'>
      <div className='flex items-center justify-between p-4 bg-surface-0'>
        <Link href={'/'}>
          <h1 className='font-bold text-primary-500 text-3xl hover:text-primary-800 transition cursor-pointer' >Unifica</h1>
        </Link>
        <div className='flex items-center gap-4'>
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly variant='light'>
                <MdLanguage className='text-2xl text-zinc-800 cursor-pointer' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="pt"><Link href={`/pt-BR/${path}`} passHref >Português - Brasil</Link></DropdownItem>
              <DropdownItem key="es"><Link href={`/es-AR/${path}`} passHref >Espanhol - Argentina</Link></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className='bg-white text-zinc-800 px-5 p-5 text-lg font-bold'>
        <h2>{language.login.headerTitle}</h2>
      </div>
    </header>
  )
}