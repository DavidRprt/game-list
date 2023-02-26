import { useSelector, useDispatch } from "react-redux";
import gameService from "../services/gameService";
import { addGame, updateGame } from "../reducers/userReducer";
import { GiDart, GiFinishLine } from "react-icons/gi";
import { useState, useEffect } from "react";

const Game = ({ game }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user !== false) setIsButtonDisabled(false);
  }, [user]);

  const platforms = game.stores.map((o) => o.store.slug);

  const isRadar =
    user &&
    user.games &&
    user.games.some((obj) => obj.slug === game.slug && obj.radar === true);
  const isCompleted =
    user &&
    user.games &&
    user.games.some((obj) => obj.slug === game.slug && obj.completed === true);

  const platformIcons = {
    "playstation-store": "https://cdn-icons-png.flaticon.com/512/1/1443.png",
    "xbox-store": "https://cdn-icons-png.flaticon.com/512/1/1321.png",
    steam: "https://www.freeiconspng.com/thumbs/steam-icon/steam-icon-19.png",
    nintendo: "https://cdn-icons-png.flaticon.com/512/871/871380.png",
  };

  const addToDb = (completed, gameObject) => {
    completed ? (gameObject.completed = true) : (gameObject.radar = true);
    dispatch(addGame(gameObject));
    gameService.addGame(gameObject, user.token);
  };

  const changeStatus = (completed) => {
    const reqObject = {
      slug: game.slug,
      completed: completed,
    };

    gameService.updateGame(reqObject, user.token);
    dispatch(updateGame(reqObject));
  };

  const handleButton = (completed) => {
    const isInUser = user.games.some((obj) => obj.slug === game.slug);

    const gameObject = {
      slug: game.slug,
      completed: false,
      radar: false,
      user: user.id,
    };

    isInUser
      ? changeStatus(completed, gameObject)
      : addToDb(completed, gameObject);
  };

  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-gray-50 shadow-lg ">
        <a href="#!">
          <img
            className="rounded-t-lg h-[200px] lg:h-[180px] w-fit"
            src={game.background_image}
            alt="game cover"
          />
        </a>
        <div className="p-6 flex flex-col">
          <h1 className="mb-2 text-xl font-medium text-black">{game.name}</h1>
          <div className="flex flex-row gap-3 text-black md:text-sm lg:text-md">
            <h6>Rating: {game.metacritic} </h6>
            <h6>Released: {game.released}</h6>
          </div>
          <div className="platforms flex justify-center flex-wrap mt-3 mb-3">
            {platforms.map((platform, index) =>
              platformIcons[platform] ? (
                <img
                  key={index}
                  src={platformIcons[platform]}
                  alt={platform.name}
                  className="w-6 h-6 mr-5"
                />
              ) : null
            )}
          </div>
          <button
            disabled={isButtonDisabled}
            className={`bg-white text-red-900 font-semibold py-1 px-2 border border-red-900 rounded mb-3 flex flex-row items-center gap-2 justify-center hover:bg-red-800 ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-white hover:border-transparent"
            }`}
            onClick={() => handleButton(false)}
          >
            {isRadar ? "Remove from my radar" : "Add to my radar"} <GiDart />
          </button>
          <button
            disabled={isButtonDisabled}
            className={`bg-white text-blue-900 font-semibold py-1 px-2 border border-blue-900 rounded mb-3 flex flex-row items-center gap-2 justify-center hover:bg-blue-800 ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-white hover:border-transparent"
            }`}
            onClick={() => handleButton(true)}
          >
            {isCompleted ? "Remove from completed" : "Add to completed"}
            <GiFinishLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
