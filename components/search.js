'use client'
import Location from '@/components/location'
import { Input } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { MdSearch } from "react-icons/md"
import { searchLocation } from '../services/fetchData'
import LoadSpinner from "./loadSpinner"

export default function Search({language}) {

  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (searchTerm) {
      searchLocation(searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setIsLoading(false)
        })
    } else { setData([]) }
  }, [searchTerm])

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    e.target.value = ''
  }

  return (
    <div className="flex flex-col gap-6 items-center justify-between py-4 bg-surface-0 w-full">
      <Input
        variant="bordered"
        labelPlacement="outside"
        type="search"
        placeholder={language.search.searchForAPlace}
        endContent={<MdSearch className="text-zinc-200 text-2xl" />}
        radius="sm"
        size="lg"
        className="placeholder:text-slate-400 px-4"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm ?
        (
          isLoading ? (<LoadSpinner />) : (
            <div className="flex flex-col w-full">
              <div className="flex w-full justify-start px-4 pb-4 font-bold text-lg text-zinc-800">
                <h2>{language.search.searchResults}</h2>
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
    </div>
  )
}