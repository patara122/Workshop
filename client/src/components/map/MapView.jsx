import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import Layers from './Layers';
import { Popup, Tooltip, useMap, useMapEvents } from 'react-leaflet';
import useDutyStore from '../../Store/useDutyStore';
import { Marker } from 'react-leaflet/Marker';

const ClickToAdd = ({ adding, onPick }) => {

  useMapEvents({
    click(e) {
      if (adding) {
        onPick(e.latlng.lat, e.latlng.lng);
      }
    }
  })
  return
}

const MapView = ({ adding, onPick }) => {

  const locations = useDutyStore((s) => s.locations);
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
        {
          locations.map((item) => {
            return <Marker
              position={[item.lat, item.lng]}
              key={item.id}>
              <Popup>
                <div className='text-sm'>
                  {item.name}
                </div>
              </Popup>
              <Tooltip direction="center">
                {item.name}
              </Tooltip>

            </Marker>
          })
        }


      </MapContainer>
    </div>
  )
}

export default MapView