import SearchBar from "./SearchBar";
import SearchedGames from "./SearchedGames";
import { useSelector } from "react-redux";

const FindScreen = () => {
  const searchString = useSelector((state) => state.search);

  return (
    <div>
      <SearchBar />
      {searchString.length > 3 && (
        <div>
          <SearchedGames string={searchString} />
        </div>
      )}
    </div>
  );
};

export default FindScreen;
