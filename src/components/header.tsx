import Link from "next/link"
import { MdLanguage, MdSearch } from "react-icons/md"

export default function Header({haveSearch}:{haveSearch?:boolean}) {
    return(
        <header className="fixed top-0 w-full z-50">
            <div className="flex items-center justify-between p-4 bg-surface-0">
                <Link href={"/"}>
                <h1 className="font-bold text-primary-500 text-3xl hover:text-primary-800 transition cursor-pointer" >Unifica</h1>
                </Link>
                <MdLanguage className="text-2xl text-surface-800 cursor-pointer"/>
            </div>
            { haveSearch && 
            <div className="flex items-center justify-between p-4 bg-surface-0 w-full">
                <div className="relative w-full">
                    <input className="border border-surface-300 rounded p-2 w-full placeholder:text-surface-400 focus:outline-none focus-visible:ring focus:border-primary-300"
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Pesquise por um local"
                        />
                    <MdSearch className="text-2xl text-surface-300 absolute right-2 top-1/4 bg-surface-0 rounded"/>
                </div>
            </div>
            }
        </header>
    )
}