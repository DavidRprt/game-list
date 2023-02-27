import Loading from "./Loading"
import Game from "./Game"
import { useQuery } from "react-query"
import { getSearch } from "../utils/requests"

const SearchedGames = ({ string, platform }) => {
  const newString = string.replace(/\s/g, "-")

  const searchedGames = useQuery(["myData", newString, platform], () =>
    getSearch(newString, platform)
  )

  return (
    <div>
      {searchedGames.isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center px-7">
          <h1 className="text-2xl my-5">Search:</h1>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
            {searchedGames.data.results
              .filter(
                (game) => game.stores !== undefined && game.stores !== null
              )
              .map((game) => (
                <Game key={game.id} game={game} />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchedGames
