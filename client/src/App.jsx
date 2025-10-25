import React from 'react'
import PersonelList from './components/people/PersonelList'
import Header from './components/layout/header'
import MapView from './components/map/MapView'
import LocationList from './components/locations/LocationList'

const App = () => {
  return (
    <div className='flex h-screen bg-gray-100'> 
      <PersonelList />
      <div className='flex flex-col flex-1'>
        <Header />
        <div className='flex flex-1 overflow-hidden'>
          <MapView />
          <LocationList />
        </div>
      </div>
    </div>
  )
}

export default App