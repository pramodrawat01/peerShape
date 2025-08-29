import { Link } from 'react-router-dom'
import { FaHome, FaTachometerAlt, FaUsers, FaTrophy } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="w-4/5 h-[60px] mx-auto mt-4 flex items-center justify-around rounded-sm border border-gray-300 
  bg-gradient-to-r from-[#414ca0] to-[#2C1F63] text-white shadow-md fixed left-1/2 -translate-x-1/2 bottom-2">
      {/* Home */}
      <Link to="/" className="flex flex-col items-center group">
        <FaHome className="text-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-150 text-white" />
        <span className="text-md transition-colors duration-300 group-hover:text-blue-200">Home</span>
      </Link>

      {/* Dashboard */}
      <Link to="/dashboard" className="flex flex-col items-center group">
        <FaTachometerAlt className="text-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-150 text-white" />
        <span className="text-md transition-colors duration-300 group-hover:text-blue-200">Dashboard</span>
      </Link>

      {/* Community */}
        <Link to="/community" className="flex flex-col items-center group">
            <FaUsers className="text-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-150 text-white" />
            <span className="text-md transition-colors duration-300 group-hover:text-blue-200">Community</span>
        </Link>

      {/* Competitions */}
      <Link to="/competitions" className="flex flex-col items-center  group">
        <FaTrophy className="text-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-150 text-white" />
        <span className="text-md transition-colors duration-300 group-hover:text-blue-200">Competitions</span>
      </Link>
    </div>
  )
}

export default Navbar
