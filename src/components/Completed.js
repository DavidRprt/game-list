import { useSelector } from 'react-redux'
import GameList from './GameList'


const Completed = () => {
    const myGames = useSelector(state => state.myGames)
    console.log(myGames)

    return(
        <div >
        <h1>My completed games</h1>
        {myGames !== undefined && 
        <GameList games={myGames}/>}
      </div>
    )
}

export default Completed