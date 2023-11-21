'use client'
import DataListItem from '@/components/dataListItem'
import Footer from '@/components/footer'
import Header from '@/components/header'
import LoadSpinner from '@/components/loadSpinner'
import { fetchLocation } from '@/services/fetchData'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MdAccessTime, MdCall, MdFax, MdLocationOn } from 'react-icons/md'
import ImagePlaceholder from '@/components/imagePlaceholder'
import { getDictionaryUseClient } from '../../../../../dictionaries/default-dictionaries-use-client'

export default function Location({ params }) {

  const dict = getDictionaryUseClient(params.lang)

  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [renderComponent, setRenderComponent] = useState(false)


  //CHAMA A FUNLÇAO QUE BUSCA UM LOCAL POR ID A PARTIR DO SERVICE
  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true)
      const response = await fetchLocation(params.id)
      if (response) {
        setData(response[0])
      }
    }
    fetchDataAsync()
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderComponent(true);
    }, 1200);

    return () => {
      clearTimeout(timer); // Certifique-se de limpar o timer quando o componente é desmontado.
    };
  },[])

  return (
    <>{isLoading ? (<LoadSpinner />) : (

      <>
        <Header language={dict} />

        <main className="flex flex-col gap-8 flex-1 w-full mx-auto mt-[148px] px-6 py-6 md:px-[30%] pb-28">

          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-zinc-800 text-2xl">{data.title}</h2>
            <span className="text-base">{data.description}</span>
          </div>

          { renderComponent  ? (
            <Image src={`https://source.unsplash.com/${data.image}`} id='locationImage' alt={data.title} width={512} height={512} className="rounded-lg max-h-[180px] w-full object-cover" />
          ) : (
            <ImagePlaceholder />
          ) }

          {data.address &&
            <DataListItem label={dict.location.address} content={data.address}>
              <MdLocationOn className="text-lg" />
            </DataListItem>
          }

          {data.extension &&
            <DataListItem label={dict.location.extension} content={data.extension}>
              <MdFax className="text-lg" />
            </DataListItem>
          }

          {data.phone &&
            <DataListItem label={dict.location.phone} content={data.phone}>
              <MdCall className="text-lg" />
            </DataListItem>
          }

          <DataListItem pills={true} message={dict.location.journeyExclame} label={dict.location.journey}
            startJourney={data.startJourney}
            endJourney={data.endJourney}>
            <MdAccessTime className="text-lg" />
          </DataListItem>

          <Footer locationId={data._id} language={dict} />
        </main>

      </>

    )}</>
  )
}