import React from 'react'
import { FiBell } from "react-icons/fi" // notification icon
import { useSelector } from 'react-redux'

const SearchBar = () => {

  const user = useSelector(state => state.auth.user)
  console.log(user)
  return (
    <div className="w-full h-[50px] bg-[#101828] flex items-center justify-between px-6 shadow-md rounded-xl text-white">
      
      {/* Search Box */}
      <div className="flex items-center gap-2 w-[40%]">
        <input 
          type="text" 
          placeholder="Search here..." 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
        />
          <button className="bg-[#30236d] text-white px-6 py-2 rounded-lg hover:bg-[#2e33aa] transition">
            Search
          </button>
      </div>

      {/* Profile + Notifications */}
      <div className="flex items-center gap-6">
        {/* Profile */}
        <div className="flex items-center gap-3">
          <img 
            src="https://via.placeholder.com/40" 
            alt="profile" 
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-semibold ">{user.name}</p>
            <p className="text-sm text-gray-500">{user.year}</p>
          </div>
        </div>
        {/* Notification */}
        <div className="relative cursor-pointer">
          <FiBell className="text-2xl text-gray-600 hover:text-violet-500 transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

      </div>
    </div>
  )
}

export default SearchBar
