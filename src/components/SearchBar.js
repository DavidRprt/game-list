import { useSearch } from "../hooks"

const SearchBar = () => {

    const searchText = useSearch('text')

    const searchBarStyle = {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: '10px'
      }
    
      const inputStyle = {
        width: '80%',
        padding: '10px',
        borderRadius: '20px',
        border: 'none',
        marginRight: '10px',
        fontSize: '16px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
      }

    return (
        <div style={searchBarStyle}>
          <input type={searchText.type} style={inputStyle} placeholder="Try a game..." onChange={searchText.onChange} value={searchText.value}></input>
        </div>
    )
}

export default SearchBar