'use client'
import Header from '@/components/header'
import LoadSpinner from '@/components/loadSpinner'
import { fetchLocation } from '@/services/fetchData'
import { Button } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdInfoOutline, MdStopCircle } from 'react-icons/md'
import { getDictionaryUseClient } from '../../../../../dictionaries/default-dictionaries-use-client'
import Link from 'next/link'

const Map = dynamic(() => import('@/components/followingMap'), { ssr: false })

export default function Following({ params }) {

  const router = useRouter()
  const dict = getDictionaryUseClient(params.lang)

  const [data, setData] = useState(null)
  const [coords, setCoords] = useState(null)
  const [title, setTitle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  //VERIFICA O CAMINHO DA ROTA ATUAL E GERENCIA O IDIOMA COM O PREFIXO
  const pathname = usePathname()
  const brPrefix = '/pt-BR'
  const arPrefix = '/es-AR'
  let lang
  if (pathname && pathname.startsWith('/es-AR')) {
    lang = `${arPrefix}`
  } else {
    lang = `${brPrefix}`
  }

  //BUSCA A LOCALIZAÇÃO COM BASE NO ID ATRAVES DA FUNÇÃO VINDA DO SERVICE
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
    <>{isLoading ? (<LoadSpinner />) : (

      <>
        <Header language={dict} />

        <main className="flex flex-col gap-2 flex-1 w-full fixed h-screen mt-[148px]">

          <Map locations={data} following={true} locationCoords={coords} language={dict} />

          <div className='flex items-center gap-4 p-4 bg-white border-t-1 border-zinc-200 fixed z-[9999] bottom-0 left-0 w-full md:px-[30%]'>
            <Link className='flex flex-col w-full' href={`/location/${params.id}`}>
              <span className='tezt-zinc-300 text-base pl-8'>{dict.map.following}</span>
              <div className='flex items-center gap-2'>
                <MdInfoOutline className='text-3xl min-w-[24px] text-zinc-500' />
                <p className='text-lg font-bold text-zinc-800 leading-tight'>{title}</p>
              </div>
            </Link>

            <Button
              size='lg'
              radius='sm'
              variant='flat'
              endContent={<MdStopCircle className='text-red-700 text-lg' />}
              className='bg-red-100 text-red-700 hover:bg-red-200 transition-background w-full'
              onClick={() => router.push((`${lang}/`))}
            >
              {dict.commons.stopFollow}
            </Button>
          </div>
        </main>
      </>

    )}</>
  )
}