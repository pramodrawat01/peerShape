import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';

const CourseDashboard = () => {

  const {courseId} = useParams();
  const navigate = useNavigate()

  const user = useSelector(state => state.auth.user);
  const {enrolledCourses} = user;

  console.log(enrolledCourses, "these r the courses this std is enrolled")

  const course = enrolledCourses.find((c)=> c.id === courseId );

  if(!course){
    return <h1>this course does not found ..!</h1>
  }
  return (
    <div>
    <button onClick={()=> navigate(-1)} >Go Back</button>
    <p>CourseDashboard</p>
      <h2>{course.title}</h2>
    </div>
  )
}

export default CourseDashboard