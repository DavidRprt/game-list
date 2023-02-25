import { useSelector, useDispatch } from 'react-redux'
import gameService from "../services/gameService"
import { addGame, updateGame } from '../reducers/userReducer'
import { GiDart, GiFinishLine } from "react-icons/gi"

const Game = ({game}) => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
  const platforms = game.stores.map(o => o.store.slug)
  
  const platformIcons = {
    "playstation-store": "https://cdn-icons-png.flaticon.com/512/1/1443.png",
    "xbox-store": "https://cdn-icons-png.flaticon.com/512/1/1321.png",
    "steam": "https://www.freeiconspng.com/thumbs/steam-icon/steam-icon-19.png",
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


  return (
  <div class="flex justify-center">
    
    <div class="block max-w-sm rounded-lg bg-gray-50 shadow-lg ">
      <a href="#!">
        <img
          class="rounded-t-lg h-[200px] lg:h-[180px] w-fit"
          src={game.background_image}
          alt="game cover" />
      </a>
      <div class="p-6 flex flex-col">
        <h1
          class="mb-2 text-xl font-medium text-black">
          {game.name}
        </h1>
        <div className="flex flex-row gap-3 text-black md:text-sm lg:text-md">
          <h6>Rating: {game.metacritic} </h6>
          <h6>Released: {game.released}</h6>
        </div>
        <div className="platforms flex justify-center flex-wrap mt-3 mb-3">
          {platforms.map((platform, index) => (
            platformIcons[platform] ? (
            <img
            key={index}
            src={platformIcons[platform]}
            alt={platform.name}
            className="w-6 h-6 mr-5"
            />
          ) : null
         ))}
        </div>
        <button className="bg-white hover:bg-red-800 text-red-900 font-semibold hover:text-white py-1 px-2 border border-red-900 hover:border-transparent rounded mb-3 flex flex-row items-center gap-2 justify-center"  onClick={() => handleButton(false)}>Add to my radar <GiDart /> </button>
        <button className="bg-white hover:bg-blue-800 text-blue-900 font-semibold hover:text-white py-1 px-2 border border-blue-900 hover:border-transparent rounded mb-3 flex flex-row items-center gap-2 justify-center"  onClick={() => handleButton(true)}>Add to my completed <GiFinishLine /> </button>
      </div>
    </div>
  </div>
  )
}

export default Game
    
    
