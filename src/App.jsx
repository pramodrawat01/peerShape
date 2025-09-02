import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Community from './pages/Community'
import Competitions from './pages/Competitions'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Assignments from './components/Assignments'
import Courses from './components/Courses'
import Notices from './components/Notices'
import CourseDashboard from './components/CourseDashboard'
import Signin from './pages/Signin'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


function App() {

  const user = useSelector((state)=> state.auth.user)


  return (
    <>
      
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin'  element={<Signin/>}/>
        <Route 
          path='/dashboard' 
          element={user ? <Dashboard/> : <Navigate to='/signin'/>} 
          >
          <Route index element= {<Overview/>}/>
          <Route path="assignments" element={<Assignments />} />
          <Route path="courses" element={<Courses />} />
          <Route path='courses/:courseId' element={<CourseDashboard/>} />
          <Route path="notices" element={<Notices />} />
        </Route>
        <Route path='/community' element={<Community/>}/>
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/profile" element={<Profile />} />
     </Routes>
     <Navbar/>  
    </>
  )

}

export default App
