'use client'
import { useState, useEffect } from 'react'
import LoadSpinner from '@/components/loadSpinner'
import { fetchLocations  } from '@/services/fetchData'
import dynamic from 'next/dynamic'

const Map = dynamic(()=>import('@/components/map'), {ssr: false})

export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchLocations()
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <>{ isLoading ? ( <LoadSpinner/> ) : (

      <main className="flex flex-col gap-2 flex-1 w-full fixed h-screen mt-[148px]">
        <Map locations={data} />
      </main>

    )}</>
  )
}