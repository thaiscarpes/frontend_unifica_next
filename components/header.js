'use client'
import Link from 'next/link'
import { MdAdminPanelSettings, MdLanguage, MdLogout } from 'react-icons/md'
import Search from '@/components/search'
import { usePathname } from 'next/navigation'

export default function Header() {

  const pathname = usePathname()
  let isAdmin = false

  if (pathname === '/admin' || pathname === '/admin/register' || pathname === '/admin/register/[id]') {
    isAdmin = true
  } else {
    isAdmin = false
  }

    return(
      <header className="fixed top-0 left-0 w-full bg-white z-20 md:px-[30%]">
        <div className="flex items-center justify-between p-4 bg-surface-0">
          <Link href={"/"}>
            <h1 className="font-bold text-primary-500 text-3xl hover:text-primary-800 transition cursor-pointer" >Unifica</h1>
          </Link>
          <div className="flex items-center gap-4">

            { !isAdmin && 
              <Link href={'/admin'}>
                <MdAdminPanelSettings className="text-2xl text-zinc-800 cursor-pointer"/>
              </Link>
            }

            { isAdmin && 
              <Link href={'/'}>
                <MdLogout className="text-2xl text-zinc-800 cursor-pointer"/>
              </Link>
            }

            <MdLanguage className="text-2xl text-zinc-800 cursor-pointer"/>
          </div>
        </div>

        { isAdmin ? '' : <Search/> }
    
        { isAdmin && 
        <div className='bg-blue-50 text-zinc-800 p-4 text-lg font-bold'>
          <h2>Administrador</h2>
        </div>
        }

      </header>
    )
}