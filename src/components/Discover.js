import Game from "./Game"
import { useQuery } from 'react-query'
import { getLatest } from '../utils/requests'
import LoadingSpinner from './Loading'


const Discover = () => {
  
  const latestGames = useQuery('latestGames', getLatest)

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    gridAutoRows: "minmax(300px, auto)"
  }

  if (latestGames.isLoading) return (<LoadingSpinner />)
 

  else
    return(
      <div>
        <h1>Discover games</h1>
          <div style={gridStyle}>
            {latestGames.data.results.map(game => <Game key={game.id} game={game}/>)}
          </div>
      </div>
    )
}

export default Discover