import DataListItem from '@/components/dataListItem'
import Footer from '@/components/footer'
import Image from 'next/image'
import { MdLocationOn, MdFax, MdCall, MdAccessTime } from 'react-icons/md'

export default async function Location({params}) {

  const res = await fetch(`http://localhost:3000/api/locations/${params.id}`)
  const data = await res.json()

  return (
    <main className="flex flex-col gap-8 w-full mt-[148px] px-4 py-12 mb-14 relative md:px-[30%]">

      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-zinc-800 text-2xl">{data[0].title}</h2>
        <span className="text-base">{data[0].description}</span>
      </div>

      <Image src={`https://source.unsplash.com/${data[0].image}`} alt={data[0].title} width={512} height={512} className="rounded-lg max-h-[180px] w-full object-cover" />

      <DataListItem label="Endereço" content={data[0].address}>
        <MdLocationOn className="text-lg"/>
      </DataListItem>

      <DataListItem label="Ramal" content={data[0].extension}>
        <MdFax className="text-lg"/>
      </DataListItem>

      { data[0].phone &&
      <DataListItem label="Telefone" content={data[0].phone}>
        <MdCall className="text-lg"/>
      </DataListItem>
      }

      <DataListItem pills={true} message="Alguns estabelecimentos podem ter horários de intervalo de duas horas." label="Horários de funcionamento"
        startJourney={data[0].startJourney}
        endJourney={data[0].endJourney}>
        <MdAccessTime className="text-lg"/>
      </DataListItem>

      <Footer locationId={data[0]._id} />
    </main>
  )
}