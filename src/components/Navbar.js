import { Link } from 'react-router-dom'
import UserButtons from '../components/UserButtons'
import { useState } from 'react';


  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

   
    return(
        <nav className="flex flex-wrap items-center justify-between px-5 py-3 bg-gray-900">
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            onClick={toggleNavbar}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:justify-between`}
        >
          <div className="text-sm lg:flex-grow">

          <Link
              className="block mt-4 lg:inline-block lg:mt-3 text-white text-lg hover:text-gray-300 mr-4"
              to="/"
            >
              Home
            </Link>

            <Link
              className="block mt-4 lg:inline-block lg:mt-3 text-white text-lg hover:text-gray-300 mr-4"
              to="/discover"
            >
              Discover
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-3 text-white text-lg hover:text-gray-300 mr-4"
              to="/radar"
            >
              Radar
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-3 text-white text-lg hover:text-gray-300 mr-4"
              to="/completed"
            >
              Completed
            </Link>
          </div>
          <div>
            <UserButtons />
          </div>
        </div>
      </nav>
    )
}

export default Navbar