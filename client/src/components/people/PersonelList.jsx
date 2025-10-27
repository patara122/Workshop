import React from 'react'
import useDutyStore from '../../Store/useDutyStore'

const PersonelList = () => {
//Zustand
  const kaika = useDutyStore((state)=>state.kaika);
  //console.log(kaika);



  return (
    <div className='w-80 bg-white overflow-auto-y'>
        PersonelList
    </div>
  )
}

export default PersonelList