import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import Layers from './Layers';
import { useMap, useMapEvents } from 'react-leaflet';

const ClickToAdd = ({adding,onPick})=>{

useMapEvents({
  click(e){
    if(adding){
    onPick(e.latlng.lat,e.latlng.lng);
    }
  }
})
return
}

const MapView = ({adding,onPick}) => {

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
        <ClickToAdd adding={adding} onPick={onPick} />
      </MapContainer>
    </div>
  )
}

export default MapView