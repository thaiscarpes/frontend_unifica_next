'use client'
import Header from '@/components/header'
import LoadSpinner from '@/components/loadSpinner'
import { fetchLocations } from '@/services/fetchData'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { getDictionaryUseClient } from '../../dictionaries/default-dictionaries-use-client'

const Map = dynamic(() => import('@/components/map'), { ssr: false })

export default function Home({ params }) {

  const dict = getDictionaryUseClient(params.lang)

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchLocations()
      .then((data) => {
        setData(data)
        console.log(dict)
        setIsLoading(false)
      })
  }, [])

  return (
    <>{isLoading ? (<LoadSpinner />) : (

      <>
        <Header language={dict} />
        <main className="flex flex-col gap-2 flex-1 w-full fixed h-screen mt-[148px]">
          <Map locations={data} language={dict} />
        </main>
      </>

    )}</>
  )
}