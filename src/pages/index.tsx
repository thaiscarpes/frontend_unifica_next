import Header from "@/components/header";
import Footer from "@/components/footerComponents/footer";

import dynamic from "next/dynamic";
import 'leaflet/dist/leaflet.css'

const Map = dynamic(()=>import('@/components/map'), {ssr: false})

export default function Home() {

  const showFooter = false

  return (
    <section>
        <Header />
        <main className="flex flex-col gap-2 flex-1 w-full h-full fixed h-screen">
          <Map/>
        </main>
        
        {
          showFooter && (<Footer locationName={'Ministério da Agricultura'} isFollowing />)
        }

    </section>
  )
}
