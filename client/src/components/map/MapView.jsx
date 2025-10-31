import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css'
import { LayersControl } from 'react-leaflet'

const MapView = () => {
  return (
    <div className='flex-1'>
      <MapContainer
        className='h-full'
        center={[13, 100]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <LayersControl>
          {/* 1. Basemap */}
          <LayersControl.BaseLayer name='OSM' checked={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='WorldImagery'>
            <TileLayer
              attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

      </MapContainer>
    </div>
  )
}

export default MapView