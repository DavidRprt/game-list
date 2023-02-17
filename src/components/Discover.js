import { useSelector } from 'react-redux'
import GameList from './GameList'

const Discover = () => {
 
  const latestGames = useSelector(state => state.latest.results)

    return(
      <div >
        <h1>Discover games</h1>
        {latestGames !== undefined && 
        <GameList games={latestGames}/>}
      </div>
    )
}

export default Discover