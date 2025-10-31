import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import Layers from './Layers';


const MapView = () => {

  const center = [13, 100];

  return (
    <div className='flex-1'>
      <MapContainer
        className='h-full'
        center={center}
        zoom={7}
        scrollWheelZoom={true}
      >
        <Layers />

      </MapContainer>
    </div>
  )
}

export default MapView