import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const CourseDashboard = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { enrolledCourses } = user;

  const course = enrolledCourses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950 text-red-400 text-2xl">
        This course does not exist ..!
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
     
     
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-green-400">{course.title}</h1>
          <button
            onClick={() => navigate(-1)}
            className="border border-red-500 px-4 py-2 rounded-lg text-red-400 hover:bg-red-500 hover:text-black transition"
          >
            ← Go Back
          </button>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Welcome Back</h3>
            <p className="text-gray-400">{user.name || "Student"}</p>
            <p className="text-sm text-green-400 mt-2">Enrolled in {course.title}</p>
          </div>

          {/* Daily Streaks */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-red-400">🔥 Daily Streaks</h3>
            <p className="text-gray-300">Keep solving to maintain streak!</p>
            <p className="text-green-400 font-bold mt-2">{course.streak || 5} days</p>
          </div>

          {/* Progress Circle */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-green-400 mb-4">Progress</h3>
            <div className="relative w-28 h-28">
              <svg className="w-full h-full">
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke="gray"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke="limegreen"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="314"
                  strokeDashoffset={314 - (course.progress || 70) * 3.14}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                {course.progress || 70}%
              </span>
            </div>
          </div>
        </div>

        {/* Graph + Stats Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder for Graph */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 h-64 flex items-center justify-center text-gray-500">
            📈 Graph Section (Add chart library)
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-green-400">Assignments</h3>
              <p>{course.assignments || "2 Pending"}</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-red-400">Quizzes</h3>
              <p>{course.quizzes || "3 Upcoming"}</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-green-400">Resources</h3>
              <p>{course.resources || "5 Files"}</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-red-400">Modules</h3>
              <p>{course.modules || 12}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDashboard;
