'use client'
import { Input } from "@nextui-org/react"
import { MdSearch } from "react-icons/md"
import SearchResults from "./searchResults"
import { useState } from "react";

export default function Search() {

  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    e.target.value = ''
  }

  return(
    <div className="flex flex-col gap-6 items-center justify-between py-4 bg-surface-0 w-full">
        <Input
          variant="bordered"
          labelPlacement="outside"
          type="search"
          placeholder="Pesquise por um local"
          endContent={<MdSearch className="text-zinc-200 text-2xl" />}
          radius="sm"
          size="lg"
          className="placeholder:text-slate-400 px-4"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SearchResults searchTerm={searchTerm} />
      </div>
  )
}