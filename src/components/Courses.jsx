import React from 'react'
import {studentsData} from '../utils/mockData'
import EnrolledCourses from './EnrolledCourses'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Courses = () => {

  const user =  useSelector(state => state.auth.user)
  const {enrolledCourses} = user;
  
  console.log(enrolledCourses, "john is enrolled")

  return (
    <div>
      <h1>Your Enrolled Courses</h1>
      <div className="flex flex-wrap w-[65%] justify-between gap-4">
        {user &&
          enrolledCourses.map((course) => (
            <Link to={`${course.id}`} key={course.id}>
              <EnrolledCourses course={course} />
            </Link>
          ))}
      </div>
          
      <h2> Explore more courses ........  </h2>
    </div>
  );
}

export default Courses