import Game from "./Game"
import { useQuery } from "react-query"
import { getLatest } from "../utils/requests"
import LoadingSpinner from "./Loading"
import Dropdown from "./DropdownMenu"
import { useState, useEffect } from "react"

const HomeScreen = () => {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState("Last year")
  const latestGames = useQuery(["latestGames", page, filter], () => getLatest(page, filter))

  useEffect(() => {
    setPage(1)
  }, [filter])


  if (latestGames.isLoading) return <LoadingSpinner />
  else
    return (
      <div className="flex justify-center flex-col items-center px-7 font-medium">
        <h1 className="text-2xl mt-5">Top Rated Games</h1>
        <div className="flex justify-start items-start w-full">
          <Dropdown filter={filter} setFilter={setFilter} />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
          {latestGames.data.results.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
        <div className="flex gap-3 my-5">
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg enabled:hover:bg-gray-100 enabled:hover:text-gray-700"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          <button
            className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg enabled:hover:bg-gray-100 enabled:hover:text-gray-700"
            onClick={() => setPage(page + 1)}
            disabled={page === 20}
          >
            Next
          </button>
        </div>
      </div>
    )
}

export default HomeScreen
