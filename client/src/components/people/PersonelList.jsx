import React from 'react'
import useDutyStore from '../../Store/useDutyStore'

const PersonelList = () => {
//Zustand
  const personnel = useDutyStore((state)=>state.personnel);
  console.log(personnel);



  return (
    <div className='w-80 bg-white overflow-auto-y'>
        PersonelList
    </div>
  )
}

export default PersonelList;