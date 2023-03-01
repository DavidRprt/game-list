import { AiOutlineClockCircle } from "react-icons/ai"
import { useState } from "react"

const Dropdown = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleFilter = (platform) => {
    setFilter(platform)
    setIsOpen(!isOpen)
  }

  return (
    <div className="my-5">
      <button
        className="px-5 py-2 flex items-center max-h-11 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-2 items-center">
          <AiOutlineClockCircle /> {filter}
        </div>
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-1"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
        </svg>
      </button>
      {isOpen && (
        <div className=" divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
                onClick={() => handleFilter("Last Year")}
              >
                Last Year
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                onClick={() => handleFilter("Last 3 Years")}
              >
                Last 3 Years
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                onClick={() => handleFilter("All time")}
              >
                All time
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
