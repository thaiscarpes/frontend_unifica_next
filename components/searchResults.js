'use client'
import { useEffect, useState } from 'react'
import Location from '@/components/location'
import LoadSpinner from './loadSpinner'

export default function SearchResults( { searchTerm } ) {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (searchTerm) {
      fetch(`/api/search?query=${ searchTerm }`, {cache:'no-cache'})
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
    } else { setData([]) }
  }, [searchTerm])

  return(
    <>
      { searchTerm ? 
      (
        isLoading ? (<LoadSpinner/>) : (
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-start px-4 pb-4 font-bold text-lg text-zinc-800">
            <h2>Resultados</h2>
          </div>
          {data.map(result => (
            <Location 
              key={result._id}
              link={`/location/${result._id}`}
              image={result.image}
              title={result.title}
              description={result.description}
            />
          ))}
        </div>
      )) : (null)}
    </>
  )
}