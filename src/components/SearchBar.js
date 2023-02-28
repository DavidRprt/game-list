import { useSearch } from "../hooks"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitSearch } from "../reducers/searchReducer"

const SearchBar = () => {
  const dispatch = useDispatch()
  const searchText = useSearch("text")
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState("All")

  const handleFilter = (platform) => {
    setFilter(platform)
    setIsOpen(!isOpen)
  }

  
  const handleForm = (event) => {
    event.preventDefault()
    dispatch(submitSearch({ platform: filter, string: searchText.search }))
  }

  return (
    <form onSubmit={handleForm}>
      <div className="flex flex-col my-3 mx-5">
        <div className="flex">
          <button
            className="px-5 flex items-center max-h-11 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {filter}
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-1"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
            </svg>
          </button>
          <div className="relative w-full">
            <input
              type={searchText.type}
              onChange={searchText.onChange}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Find a game..."
              required
            ></input>
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className=" divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleFilter("All")}
                >
                  All platforms
                </button>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleFilter("PlayStation")}
                >
                  PlayStation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
                  onClick={() => handleFilter("XBOX")}
                >
                  XBOX
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleFilter("Nintendo")}
                >
                  Nintendo
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleFilter("Steam")}
                >
                  Steam
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </form>
  )
}

export default SearchBar
