import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import Leaflet, { Icon } from "leaflet";
import markerIcon from "../../public/markerIcon.png";

import { markers } from "@/utils/MapLocations";
import Link from "next/link";

const customIcon = new Icon({
  iconUrl: markerIcon.src,
  iconSize: [30, 30],
});

export default function Map() {
  return (
    <MapContainer
      center={[-28.590618, -56.030623]}
      zoom={17}
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, index) => (
        <Link href={`/location/${marker.id}`}>
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup className="custom-popup">
              <div>
                <p>{marker.popup}</p>
              </div>
            </Popup>
          </Marker>
        </Link>
      ))}
    </MapContainer>
  );
}
