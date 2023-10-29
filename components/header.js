'use client'
import Search from '@/components/search'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { MdAdminPanelSettings, MdLanguage, MdLogout } from 'react-icons/md'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from '@nextui-org/react'

export default function Header() {

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
              <DropdownItem key="new">Português - Brasil</DropdownItem>
              <DropdownItem key="copy">Espanhól - Argentina</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Search />
    </header>
  )
}

export function AdminHeader({ user }) {

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
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly variant='light'>
                <MdLanguage className='text-2xl text-zinc-800 cursor-pointer' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">Português - Brasil</DropdownItem>
              <DropdownItem key="copy">Espanhól - Argentina</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className='bg-white text-zinc-800 px-5 pt-4 pb-6 text-lg font-bold'>
        <span className='text-base font-normal text-zinc-400'>Olá,</span>
        <h2>{user} 😊</h2>
      </div>
    </header>
  )
}

export function LoginHeader() {

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
              <DropdownItem key="new">Português - Brasil</DropdownItem>
              <DropdownItem key="copy">Espanhol - Argentina</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className='bg-white text-zinc-800 px-5 p-5 text-lg font-bold'>
        <h2>Login</h2>
      </div>
    </header>
  )
}