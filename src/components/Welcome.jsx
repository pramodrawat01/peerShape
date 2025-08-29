import React from 'react'
import maleStd from '../assets/m.jpg'

const Welcome = () => {
  return (
    <div className="h-[200px] w-full rounded-2xl bg-gradient-to-r from-[#2C1F63] to-[#6B7CFF] text-white flex items-center justify-between px-8 shadow-lg mt-3">
      
      {/* Info Section */}
      <div className="flex flex-col justify-between h-full py-6">
        <div className="text-sm text-gray-200">
          {/* Replace with dynamic date later */}
          <p>Monday, 28 August 2025</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold">Welcome Back, John! 👋</h2>
          <p className="text-gray-200">Always stay updated in your student panel!</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0">
        <img 
          src={maleStd} 
          alt="student logo" 
          className="h-[180px] w-180px] object-cover rounded-3xl  shadow-md"
        />
      </div>
    </div>
  )
}

export default Welcome
