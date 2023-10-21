'use client'
import LoadSpinner from '@/components/loadSpinner'
import { fetchLocation  } from '@/services/fetchData'
import { Button } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { MdCheck, MdClose, MdInfo, MdInfoOutline, MdStop, MdStopCircle } from 'react-icons/md'
import { useRouter } from 'next/navigation'

const Map = dynamic(()=>import('@/components/followingMap'), {ssr: false})

export default function Following({params}) {

  const router = useRouter()

  const [data, setData] = useState(null)
  const [coords, setCoords] = useState(null)
  const [title, setTitle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchLocation(params.id)
      .then((data) => {
        setData(data)
        setIsLoading(false)
        setCoords([data[0].pointer.coordinates[0], data[0].pointer.coordinates[1]])
        setTitle(data[0].title)
      })
  }, [params.id])

  return (
    <>{ isLoading ? ( <LoadSpinner/> ) : (

      <main className="flex flex-col gap-2 flex-1 w-full fixed h-screen mt-[148px]">
        
        <Map locations={data} following={true} locationCoords={coords} />

        <div className='flex items-center gap-4 p-4 bg-white border-t-1 border-zinc-200 fixed z-[9999] bottom-0 left-0 w-full md:px-[30%]'>
          <div className='flex flex-col w-full'>
            <span className='tezt-zinc-300 text-base pl-8'>Seguindo</span>
            <div className='flex items-center gap-2'>
              <MdInfoOutline className='text-3xl min-w-[24px] text-zinc-500'/>
              <p className='text-lg font-bold text-zinc-800 leading-tight'>{title}</p>
            </div>
          </div>
          
          
          <Button 
            size='lg'
            radius='sm'
            variant='flat'
            endContent={<MdStopCircle className='text-red-700 text-lg'/>}
            className='bg-red-100 text-red-700 hover:bg-red-200 transition-background w-full'
            onClick={() => router.push('/')}
          >
          Parar de Seguir
          </Button>
        </div>
      </main>

    )}</>
  )
}