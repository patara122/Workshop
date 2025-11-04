import React from 'react'

const Header = ({adding,setAdding}) => {
  
  console.log(adding)
  return (
    <div className='p-4 bg-white shadow-md border-b
    border-gray-200'>
        <div className="flex justify-between">
          <h2 className="text-2xl 
          font-semibold text-gray-800">ระบบจัดการเวรประจำจุด
          </h2>
          <button>
          เพิ่มจุดเวร
          </button>
        </div>
      
    </div>
  )
}

export default Header