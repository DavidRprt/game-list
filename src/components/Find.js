import SearchBar from "./SearchBar"
import SearchedGames from "./SearchedGames"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const FindScreen = () => {
  const search = useSelector((state) => state.search)
  const [searchText, setSearchText] = useState("")
  const [searchPlatform, setSearchPlatform] = useState("")

  useEffect(() => {
    if (search.string !== "") {
      setSearchText(search.string)
    }
    if (search.platform !== "") {
      setSearchPlatform(search.platform)
    }
  }, [search.string, search.platform])

  return (
    <div>
      <SearchBar />
      {search.string !== "" && (
        <div>
          <SearchedGames string={searchText} platform={searchPlatform} />
        </div>
      )}
    </div>
  )
}

export default FindScreen
