import { useSelector } from "react-redux";
import GameList from "./GameList";

const MyGames = ({ completed }) => {
  const user = useSelector((state) => state.user);

  if (user !== false) {
    const completedGames = completed
      ? user.games.filter((game) => game.completed)
      : user.games.filter((game) => game.radar);
    return (
      <div>
        <h1 className="text-2xl text-center my-5">
          {completed ? "My completed games" : "Games on my radar"}
        </h1>
        <GameList gamesList={completedGames} />
      </div>
    );
  } else return <div>Try logging in</div>;
};

export default MyGames;
