'use client'
import DataListItem from '@/components/dataListItem'
import Footer from '@/components/footer'
import LoadSpinner from '@/components/loadSpinner'
import { fetchLocation } from '@/services/fetchData'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MdAccessTime, MdCall, MdFax, MdLocationOn } from 'react-icons/md'

export default function Location({ params }) {

  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetchLocation(params.id)
      if (response) {
        setData(response[0])
        console.log(data);
      }
    }
    fetchDataAsync()
    setIsLoading(false)
  }, [])

  return (
    <>{isLoading ? (<LoadSpinner />) : (

      <main className="flex flex-col gap-8 w-full mt-[148px] px-4 py-12 mb-14 relative md:px-[30%]">

        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-zinc-800 text-2xl">{data.title}</h2>
          <span className="text-base">{data.description}</span>
        </div>

        <Image src={`https://source.unsplash.com/${data.image}`} alt={data.title} width={512} height={512} className="rounded-lg max-h-[180px] w-full object-cover" />

        {data.address &&
          <DataListItem label="Endereço" content={data.address}>
            <MdLocationOn className="text-lg" />
          </DataListItem>
        }

        {data.extension &&
          <DataListItem label="Ramal" content={data.extension}>
            <MdFax className="text-lg" />
          </DataListItem>
        }

        {data.phone &&
          <DataListItem label="Telefone" content={data.phone}>
            <MdCall className="text-lg" />
          </DataListItem>
        }

        <DataListItem pills={true} message="Alguns estabelecimentos podem ter horários de intervalo de duas horas." label="Horários de funcionamento"
          startJourney={data.startJourney}
          endJourney={data.endJourney}>
          <MdAccessTime className="text-lg" />
        </DataListItem>

        <Footer locationId={data._id} />
      </main>

    )}</>
  )
}