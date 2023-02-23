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
      <h1>HOME</h1>}
    </div>
    )
}

export default HomeScreen