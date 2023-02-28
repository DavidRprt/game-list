import Game from "./Game"
import { useQuery } from "react-query"
import { getSingleGame } from "../utils/requests"
import LoadingSpinner from "./Loading"

const GameList = ({ gamesList }) => {
  const myGames = useQuery(["games", gamesList], () =>
    Promise.all(gamesList.map((game) => getSingleGame(game.slug)))
  )

  if (myGames.isLoading) return <LoadingSpinner />;
  else
    return (
      <div className="flex justify-center flex-col items-center px-7 mb-5">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
          {myGames.data.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
      </div>
    )
}

export default GameList
