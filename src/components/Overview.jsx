import React from 'react'
import Welcome from './Welcome'
import EnrolledCourses from './EnrolledCourses'

const Overview = () => {
  return (
    <div>
      <Welcome/>
      <p className='text-2xl py-4'>Courses Enrolled</p>
      <div className='flex'>
          <div className='flex flex-wrap w-[65%] justify-between gap-4'>
          <EnrolledCourses/>
          <EnrolledCourses/>
          {/* <EnrolledCourses/>
          <EnrolledCourses/> */}
      </div>
      <div>notifina</div>
      </div>
      
      {/* <div className='flex justify-between'>
        <EnrolledCourses/>
        <EnrolledCourses/>
      </div>
      <div className='flex justify-between mt-8'>
        <EnrolledCourses/>
        <EnrolledCourses/>
      </div> */}
      
    </div>
  )
}

export default Overview