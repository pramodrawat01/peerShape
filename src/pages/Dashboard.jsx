import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import dbLogo from '../assets/dbLogo.png'
import SearchBar from '../components/SearchBar'

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      
      <div className="w-50 bg-gradient-to-b from-[#4f5dc3] to-[#2C1F63] text-white m-3 rounded-2xl ">
        {/* <h2 className="text-xl font-bold mb-6">Dashboard</h2> */}
        <img src={dbLogo} alt='logo' className='h-[120px] w-[120px]'/>
        <nav className="flex flex-col gap-4 px-5">
          <Link to="/dashboard" className="hover:text-yellow-300">Overview</Link>
          <Link to="/dashboard/assignments" className="hover:text-yellow-300">Assignments</Link>
          <Link to="/dashboard/courses" className="hover:text-yellow-300">Courses</Link>
          <Link to="/dashboard/notices" className="hover:text-yellow-300">Notices</Link>
        </nav>
      </div>
      <div className='w-full p-3'>
        <SearchBar/>

        {/* Main Content */}
        
        <div className="">
          <Outlet /> {/* Nested routes render here */}
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard