'use client'
import Location from '@/components/location'
import { useEffect, useState } from 'react'
import LoadSpinner from '../loadSpinner'
import { Spinner } from '@nextui-org/react'

export default function LocationList() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/locations', {cache:'no-cache'})
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])

  return(
    <>
      { isLoading ? 
      (
        <main className="flex justify-center items-center absolute top-1/2 left-1/2 mt-12">
          <Spinner size='lg' />
        </main>
      ) : (
        (data.length === 0) ? (
          <div className="flex flex-col w-full px-4">
            <h3>Nenhum registro encontrado</h3>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            {data.map(result => (
              <Location 
                key={result._id}
                link={`/admin/register/${result._id}`}
                image={result.image}
                title={result.title}
                description={result.description}
              />
            ))}
          </div>
        )
      )}
    </>
  )
}