import './Game.css'
import { useSelector, useDispatch } from 'react-redux'
import gameService from "../services/gameService"
import { addGame, updateGame } from '../reducers/userReducer'

const Game = ({game}) => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
  const platforms = game.stores.map(o => o.store.slug)
  
  const platformIcons = {
    "playstation-store": "https://w7.pngwing.com/pngs/24/817/png-transparent-playstation-4-raiders-of-the-broken-planet-playstation-network-playstation-plus-playstation-electronics-text-trademark.png",
    "xbox-store": "https://cdn-icons-png.flaticon.com/512/1/1321.png",
    "steam": "https://e7.pngegg.com/pngimages/699/999/png-clipart-brand-logo-steam-gump-s.png",
    "nintendo": "https://cdn-icons-png.flaticon.com/512/871/871380.png"
  }

  const addToDb = (completed, gameObject) => {
    completed
      ? gameObject.completed = true
      : gameObject.radar = true
      dispatch(addGame(gameObject))
      gameService.addGame(gameObject, user.token)
      
  }

  const changeStatus = (completed) => {

    const reqObject = {
      slug: game.slug,
      completed: completed
    }

    gameService.updateGame(reqObject, user.token)
    dispatch(updateGame(reqObject))

  }

  const handleButton = (completed) => {
    const isInUser = user.games.some(obj => obj.slug === game.slug)

    const gameObject = {
      slug: game.slug,
      completed: false,
      radar: false, 
      user: user.id
    }

    isInUser
      ? changeStatus(completed, gameObject)
      : addToDb(completed, gameObject)
  }


  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s ease',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '12px',
    marginBottom: '5px'
  }

  return (
    <div className="card">
      <h3>{game.name}</h3>
      <img src={game.background_image} alt="game cover" />
      <div className="container">
        <div className="info-container">
          <h5>Rating: {game.metacritic} </h5>
          <h5>Released: {game.released}</h5>
        </div>
        <div className="platforms">
          {platforms.map((platform, index) => (
            platformIcons[platform] ? (
              <img
                key={index}
                src={platformIcons[platform]}
                alt={platform.name}
              />
            ) : null
          ))}
        </div>
        <button style={buttonStyle} onClick={() => handleButton(false)}>Radar</button>
        <button style={buttonStyle} onClick={() => handleButton(true)}>Finished</button>
      </div>
    </div>
  )
}

export default Game
    
    
