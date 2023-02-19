import { useSelector } from 'react-redux'
import GameList from './GameListOwn'


const MyGames = ({completed}) => {
  const user = useSelector(state => state.user)

  if (user !== false){
    const completedGames = completed ? user.games.filter(game => game.completed) : user.games.filter(game => game.radar)
    return(
      <div >
        <h1>My completed games</h1>
          <GameList gamesList={completedGames}/>
      </div>
    )}

    else return (<div>Try logging in</div>)
  }


export default MyGames