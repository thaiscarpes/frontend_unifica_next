'use client'
import { Button } from '@nextui-org/react'
import { useRouter, usePathname } from 'next/navigation'
import { MdClose, MdExplore } from 'react-icons/md'

export default function Footer({locationId, language}) {

  const router = useRouter()
  const pathname = usePathname()
  const brPrefix = '/pt-BR'
  const arPrefix = '/es-AR'
  let lang
  if (pathname.startsWith('/es-AR')) {
    lang = `${arPrefix}`
  } else {
    lang = `${brPrefix}`
  }

  return(
    <div className='flex items-center gap-4 p-4 bg-white border-t-1 border-zinc-200 fixed bottom-0 left-0 w-full md:px-[30%]' >
      <Button 
        size='lg'
        radius='sm'
        variant='flat'
        endContent={<MdClose className='text-blue-600 text-lg'/>}
        className='bg-blue-100 text-blue-600 hover:bg-blue-200 transition-background w-full'
        onClick={() => {router.push(`${lang}/`)}}
      >
      {language.commons.close}
      </Button>
      <Button 
        size='lg'
        radius='sm'
        variant='flat'
        endContent={<MdExplore className='text-white text-lg'/>}
        className='bg-blue-600 text-white hover:bg-blue-700 transition-background w-full'
        onClick={() => {router.push(`${lang}/following/${locationId}`)}}
      >
      {language.commons.follow}
      </Button>
    </div>
  )
}