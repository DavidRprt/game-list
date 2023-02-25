import { useSearch } from "../hooks"

const SearchBar = () => {

    const searchText = useSearch('text')

    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type={searchText.type} placeholder="Try a game..." onChange={searchText.onChange} value={searchText.value} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-600 bg-gray-600 focus:outline-none" required></input>   
      </div>
     
    )
}

export default SearchBar