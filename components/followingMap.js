'use client'
import { useRef, useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl } from 'react-leaflet'
import Leaflet, { Icon } from "leaflet"
import 'leaflet/dist/leaflet.css'
import locationPin from "@/public/pin.svg"
import userPin from "@/public/user-pin.svg"
import Link from 'next/link'
import calculateDistance from '@/utils/calculateDistance'
import latituteAdjustment from '@/utils/latituteAdjustment'

const locationIcon = new Icon({ iconUrl: locationPin.src, iconSize: [30, 30],})
const userIcon = new Icon({ iconUrl: userPin.src, iconSize: [30, 30],})

export default function Map({locations, following, locationCoords, language}) {

  const mapContainerRef = useRef(null)
  const [userLocation, setUserLocation] = useState(null)
  const [isWithinRadius, setIsWithinRadius] = useState(true)
  const [distance, setDistance] = useState(null)
  const [zoom, setZoom] = useState(18)
  const allowedDistance = 120000.00

  const originalLatitude  = locationCoords[1]
  const originalLongitude  = locationCoords[0]
  const altitudeChangeMeters  = -0.1 //M
  const newLatitude = latituteAdjustment(originalLatitude, altitudeChangeMeters)
  const centerPosition = [newLatitude, originalLongitude]

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

  useEffect(() => {
    const cufRadius = centerPosition
    if (userLocation && cufRadius) {
      const userDistance = calculateDistance(userLocation, cufRadius)
      setIsWithinRadius(userDistance <= allowedDistance)
      setDistance(userDistance)
    }
  }, [userLocation])


  return (
      <MapContainer center={centerPosition} zoom={zoom} className="h-full w-full" ref={mapContainerRef}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
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
          <Link href={`/location/${location._id}`} key={location._id} >
            
            <Marker key={location.id} position={[location.pointer.coordinates[1], location.pointer.coordinates[0]]} icon={locationIcon} closeButton={false}>
              { following == true && <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent >
                <div className='flex flex-col gap-2 p-2 items-center justify-center cursor-pointer'>
                  <p className='text-zinc-800 font-bold text-base leading-none hover:text-blue-700 transition'>{location.title}</p>
                  <span className='text-zinc-500 text-sm leading-none'>{`${distance} ${language.map.distanceMeters}`}</span>
                </div>
              </Tooltip>}
              <Popup>
                  <div className='flex flex-col gap-2 p-2 items-center justify-center cursor-pointer'>
                    <p className='text-zinc-800 font-bold text-base leading-none hover:text-blue-700 transition'>{location.title}</p>
                  </div>
                </Popup>
            </Marker>

          </Link>))}
          </>
    </MapContainer>
  )
}