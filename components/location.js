//COMPONENTE USADO NA LISTAGEM DE TODOS OS LOCAIS, CONTÉM OS DADOS RESUMIDOS DE UN LOCAL

import Image from 'next/image'
import Link from 'next/link'
import { MdChevronRight } from 'react-icons/md'

export default function Location( {id, link, image, title, description} ) {

  return(
    <Link href={link} replace key={id} className="flex w-full gap-3 items-center justify-start p-4 text-base font-bold text-zinc-700 border-zinc-200 border-t-1">
      <Image src={`https://source.unsplash.com/${image}`} alt={title} width={48} height={48} className="rounded object-cover h-12 min-w-[48px]" />
      <div className="flex flex-col w-full">
        <h2>{title}</h2>
        <p className="text-zinc-500 font-normal text-sm">{description}</p>
      </div>
      <MdChevronRight className="text-3xl text-zinc-400" />
    </Link>
  )
}