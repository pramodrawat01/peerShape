import React from 'react'

const EnrolledCourses = ({course}) => {

  
  return (
    <div className="w-[400px] h-[180px] flex rounded-2xl shadow-lg overflow-hidden">
      
      {/* Left section */}
      <div className="bg-[#2c1f63] text-white w-[35%] flex flex-col justify-between p-5">
        <div>
          <p className="uppercase text-xs tracking-wider opacity-70">Course</p>
          <h2 className="text-lg font-semibold">{course.title}</h2>
        </div>
        <p className="text-sm opacity-80 cursor-pointer">View all chapters →</p>
      </div>

      {/* Right section */}
      <div className="bg-white w-[65%] p-6 flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase opacity-60">Chapter 04</p>
          <h3 className="text-lg font-medium">Callbacks & Closures</h3>
        </div>

        {/* Progress bar */}
        <div className="mt-3">
          <div className="h-1.5 w-full bg-gray-200 rounded-full">
            <div className="h-1.5 w-[70%] bg-[#1f7b25] rounded-full"></div>
          </div>
          <p className="text-xs text-right mt-1 opacity-60">6/9 Challenges</p>
        </div>

        {/* Continue button */}
        <button className="relative self-end bg-[#2c1f63] text-white text-sm px-6 py-2 rounded-full shadow-md overflow-hidden group">
            {/* Arrow */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 transform -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                →
            </span>

            {/* Text */}
            <span className="relative inline-block transition-all duration-300 ease-out group-hover:translate-x-3">
                Continue
            </span>
        </button>

      </div>
    </div>
  )
}

export default EnrolledCourses
