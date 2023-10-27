'use client'
import Search from '@/components/search'
import Link from 'next/link'
import { MdAdminPanelSettings, MdLanguage, MdLogout } from 'react-icons/md'

export default function Header() {

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-20 md:px-[30%]">
      <div className="flex items-center justify-between p-4 bg-surface-0">
        <Link href={"/"}>
          <h1 className="font-bold text-primary-500 text-3xl hover:text-primary-800 transition cursor-pointer" >Unifica</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href={'/admin'}>
            <MdAdminPanelSettings className="text-2xl text-zinc-800 cursor-pointer" />
          </Link>
          <MdLanguage className="text-2xl text-zinc-800 cursor-pointer" />
        </div>
      </div>
      <Search />
    </header>
  )
}

export function AdminHeader() {

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-20 md:px-[30%]">
      <div className="flex items-center justify-between p-4 bg-surface-0">
        <Link href={"/"}>
          <h1 className="font-bold text-primary-500 text-3xl hover:text-primary-800 transition cursor-pointer" >Unifica</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href={'/'}>
            <MdLogout className="text-2xl text-zinc-800 cursor-pointer" />
          </Link>
          <MdLanguage className="text-2xl text-zinc-800 cursor-pointer" />
        </div>
      </div>
      <div className='bg-white text-zinc-800 px-5 pt-4 pb-6 text-lg font-bold'>
        <span className='text-base font-normal text-zinc-400'>Olá,</span>
        <h2>Admin 😊</h2>
      </div>
    </header>
  )
}

export function LoginHeader() {

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-20 md:px-[30%]">
      <div className="flex items-center justify-between p-4 bg-surface-0">
        <Link href={"/"}>
          <h1 className="font-bold text-primary-500 text-3xl hover:text-primary-800 transition cursor-pointer" >Unifica</h1>
        </Link>
        <div className="flex items-center gap-4">
          <MdLanguage className="text-2xl text-zinc-800 cursor-pointer" />
        </div>
      </div>
      <div className='bg-white text-zinc-800 px-5 p-5 text-lg font-bold'>
        <h2>Login</h2>
      </div>
    </header>
  )
}