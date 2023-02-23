import Loading from "./Loading"
import Game from "./Game"
import { useQuery } from 'react-query'
import { getSearch } from '../utils/requests'

const SearchedGames = ({ string }) => {

  const newString = string.replace(/\s/g, '-')

  const searchedGames = useQuery(
    ["myData", newString],
    () => getSearch(newString, { limit: 10 }),
    {
      enabled: true,
    }
  );
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    gridAutoRows: 'minmax(300px, auto)',
  }

  return (
    <div>
      {searchedGames.isLoading
        ?
        <div>
          <Loading />
        </div>
        :
        <div style={gridStyle}>
          {searchedGames.data.results
            .filter(game => game.stores !== undefined && game.stores !== null)
            .map(game => <Game key={game.id} game={game} />)
          }
        </div>}
    </div>
  )
}

export default SearchedGames