'use client'
import locationPin from "@/public/pin.svg"
import userPin from "@/public/user-pin.svg"
import calculateDistance from '@/utils/calculateDistance'
import { Button } from '@nextui-org/react'
import { Icon } from "leaflet"
import 'leaflet/dist/leaflet.css'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { MdRefresh } from 'react-icons/md'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

//IMPORTA OS ICONES DE LOCALIZAÇÃO E DO USUÁRIO
const locationIcon = new Icon({ iconUrl: locationPin.src, iconSize: [30, 30], })
const userIcon = new Icon({ iconUrl: userPin.src, iconSize: [30, 30], })

export default function Map({ locations, language }) {

  const router = useRouter()

  const mapContainerRef = useRef(null)
  const [userLocation, setUserLocation] = useState(null)
  const [isWithinRadius, setIsWithinRadius] = useState(false)
  const [latitude, setLatitude] = useState(-28.590618)
  const [longitude, setLongitude] = useState(-56.030623)
  const [zoom, setZoom] = useState(17)
  const allowedDistance = 100000.00

  //BUSCA A LOCALIZAÇÃO DO USUÁRIO
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        setUserLocation([latitude, longitude])
      }, error => {
        console.error('Erro ao recuperar os dados de localização do usuário:', error)
      });
    } else {
      console.error('Geolocalização não é suportada pelo navegador.')
    }
  }, [])

  //VERIFICA SE O USUÁRIO ESTÁ DENTRO DO CUF, RAIO DE 10KM
  useEffect(() => {
    const CUFRadius = [latitude, longitude]
    if (userLocation && CUFRadius) {
      const Userdistance = calculateDistance(userLocation, CUFRadius)
      // setIsWithinRadius(Userdistance <= allowedDistance)
      setIsWithinRadius(true)
    }
  }, [userLocation, latitude, longitude])

  //VERIFICA O CAMINHO DA ROTA ATUAL E GERENCIA O IDIOMA COM O PREFIXO
  const pathname = usePathname()
  const brPrefix = '/pt-BR'
  const arPrefix = '/es-AR'
  let lang
  if (pathname.startsWith('/es-AR')) {
    lang = `${arPrefix}`
  } else {
    lang = `${brPrefix}`
  }

  return (
    <MapContainer center={[latitude, longitude]} zoom={zoom} className="h-full w-full" ref={mapContainerRef}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {
        userLocation ? (
          isWithinRadius ? (

            <>{userLocation && (
              <Marker position={userLocation} icon={userIcon}>
                <Popup className="custom-popup">
                  <div className='flex flex-col gap-2 p-2 items-center justify-center'>
                    <p className='text-zinc-800 font-bold text-base leading-none hover:text-blue-700 transition'>{language.map.youAreHere}</p>
                  </div>
                </Popup>
              </Marker>)}

              {locations && locations.map(location => (
                // eslint-disable-next-line react/jsx-key
                <Link href={`${lang}/location/${location._id}`} key={location._id} >

                  <Marker key={location.id} position={[location.pointer.coordinates[1], location.pointer.coordinates[0]]} icon={locationIcon} closeButton={false}>
                    <Popup>
                      <div className='flex flex-col gap-2 p-2 items-center justify-center cursor-pointer'>
                        <p className='text-zinc-800 font-bold text-base leading-none hover:text-blue-700 transition'>{location.title}</p>
                      </div>
                    </Popup>
                  </Marker>

                </Link>))}
            </>

          ) : (

            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-full h-full flex items-center justify-center backdrop-blur-sm backdrop-brightness-75">
              <div className='flex flex-col gap-6 text-base text-center rounded-lg w-full mx-12 p-12 bg-white drop-shadow-2xl'>
                <h2 className='text-zinc-800 font-bold text-xl leading-none hover:text-blue-700 transition'>{language.map.farFromCufTitle}</h2>
                <p>{language.map.farFromCufText1}</p>
                <p className='text-zinc-400'>{language.map.farFromCufText2}</p>
              </div>
            </div>

          )) : (

          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-full h-full flex items-center justify-center backdrop-blur-sm backdrop-brightness-75">
            <div className='flex flex-col gap-6 text-base text-center rounded-lg w-full mx-12 p-12 bg-white drop-shadow-2xl'>
              <h2 className='text-zinc-800 font-bold text-xl leading-none hover:text-blue-700 transition'>{language.map.cannotGetLocationTitle}</h2>
              <p>{language.map.cannotGetLocationText1}</p>
              <p className='text-zinc-400'>{language.map.cannotGetLocationText2}</p>
              <Button
                size='lg'
                radius='sm'
                variant='flat'
                endContent={<MdRefresh className='text-white text-lg' />}
                className='bg-blue-600 text-white hover:bg-blue-700 transition-background w-full'
                onClick={() => { router.replace(`${lang}/`) }}
              >
                {language.map.cannotGetLocationAction}
              </Button>
            </div>
          </div>

        )}
    </MapContainer>
  )
}