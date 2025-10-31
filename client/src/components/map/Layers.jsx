import React from 'react'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
import { LayersControl, Marker } from 'react-leaflet'

const Layers = () => {
  return (
    <div>
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
            <LayersControl.Overlay name='Marker' checked={true}>
              <Marker position ={[13, 101]}>
                
              </Marker>
            </LayersControl.Overlay>
        </LayersControl>Layers</div>
  )
}

export default Layers