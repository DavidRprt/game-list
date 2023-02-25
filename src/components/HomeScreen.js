import SearchBar from "./SearchBar"
import SearchedGames from "./SearchedGames"
import { useSelector } from 'react-redux'

const HomeScreen = () => {
  const searchString = useSelector(state => state.search)

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
        <h3>Latest games</h3>
      </div>}
    </div>
    )
}

export default HomeScreen