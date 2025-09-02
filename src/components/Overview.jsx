import React from 'react'
import Welcome from './Welcome'
import EnrolledCourses from './EnrolledCourses'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LeaderBoard from './LeaderBoard'

const Overview = () => {
  const user =  useSelector(state => state.auth.user)
  const {enrolledCourses} = user;
  //console.log(enrolledCourses, "jon is enrolled here")
  return (
    <div>
      <Welcome/>
      <p className='text-2xl py-4'>Courses Enrolled</p>
      <div className='flex'>
        <div className='flex flex-wrap w-[65%] justify-between gap-4'>
          {
            user && 
            enrolledCourses.map((course)=>(
              <Link to={`courses/${course.id}`} key={course.id}>
                <EnrolledCourses course={course}/>
              </Link>
            ))
          }
        </div>
        <LeaderBoard/>
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