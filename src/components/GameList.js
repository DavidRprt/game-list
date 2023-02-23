import Game from "./Game"
import { useQuery } from 'react-query'
import { getSingleGame } from '../utils/requests'
import LoadingSpinner from './Loading'


const GameList = ({gamesList}) => {

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        gridAutoRows: "minmax(300px, auto)"
      }
    
      
  const myGames = useQuery(
    ['games', gamesList],
    () => Promise.all(gamesList.map(game => getSingleGame(game.slug)))
  )

  if (myGames.isLoading) return (<LoadingSpinner />)

  else
    return (
        <div style={gridStyle}>
          {myGames.data.map(game => <Game key={game.id} game={game}/>)}
        </div>
       
    )

}

export default GameList