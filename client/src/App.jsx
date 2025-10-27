import React, { useEffect, useReducer } from 'react'
import PersonelList from './components/people/PersonelList'
import Header from './components/layout/header'
import MapView from './components/map/MapView'
import LocationList from './components/locations/LocationList'
import axios from 'axios'
import useDutyStore from './Store/useDutyStore'

const App = () => {
//JS

  const fetchAll = useDutyStore((state)=>state.fetchAll);

  useEffect(() => {
    // fn body
    fetchAll();

  },[]);






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