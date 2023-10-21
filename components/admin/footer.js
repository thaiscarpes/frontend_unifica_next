'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { MdAdd } from 'react-icons/md'

export default function Footer() {

  const router = useRouter()

  return(
    <div className='flex items-center gap-4 p-4 bg-white border-t-1 border-zinc-200 fixed bottom-0 left-0 w-full md:px-[30%]' >
      <Button 
        size='lg'
        radius='sm'
        variant='flat'
        endContent={<MdAdd className='text-white text-lg'/>}
        className='bg-blue-600 text-white hover:bg-blue-700 transition-background w-full'
        onClick={() => {router.push(`/admin/register`)}}
      >
      Cadastrar local
      </Button>
    </div>
  )
}