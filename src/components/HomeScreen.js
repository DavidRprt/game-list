import Game from "./Game";
import { useQuery } from "react-query";
import { getLatest } from "../utils/requests";
import LoadingSpinner from "./Loading";

const HomeScreen = () => {
  const latestGames = useQuery("latestGames", getLatest);

  if (latestGames.isLoading) return <LoadingSpinner />;
  else
    return (
      <div className="flex justify-center flex-col items-center px-7 font-medium">
        <h1 className="text-2xl my-5">Discover games</h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
          {latestGames.data.results.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
      </div>
    );
};

export default HomeScreen;
