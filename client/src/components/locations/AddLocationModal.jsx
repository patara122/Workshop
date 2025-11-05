import React, { useState } from 'react'

const AddLocationModal = ({lat,lng,setAdding,setPending}) => {
  //js body
  const [name,setName]= useState('');
  
    return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-9999'>
        <div className='bg-white p-6 rounded-lg
        shadow-2xl w-96 '>
            <h3 className='text-xs text-gray-500 mb-2'>เพิ่มจุดเข้าเวรใหม่</h3>
            <div>lat:{lat.toFixed(6)}, lng:{lng.toFixed(6)}</div>
            <input />
            <div>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AddLocationModal