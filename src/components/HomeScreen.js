import SearchBar from "./SearchBar"
import SearchedGames from "./SearchedGames"
import Carousel from "./Carousel"
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { getLatest } from '../utils/requests'

const HomeScreen = () => {
  const searchString = useSelector(state => state.search)
  const latestGames = useQuery('latestGames', getLatest)

    return(
      <div>
      <SearchBar />
      {searchString.length > 3 ?
        <div>
          <SearchedGames string={searchString}/>
        </div>
      :
      <div>
        <h1 className="text-blue-500">HOME</h1>
        { latestGames.isLoading === false && <Carousel games={latestGames.data} /> }
     
      </div>}
    </div>
    )
}

export default HomeScreen