import { Link } from 'react-router-dom'

const Navbar = () => {

    const padding = {
        padding: 5,
      }

    const navStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
        
    }
   
    return(
        <nav style={navStyle}>
            <div>
                <Link style={padding} to="/">Home</Link>
                <Link style={padding} to="/latest">Latest Games</Link>
                <Link style={padding} to="/wishlist">Wishlist</Link>
                <Link style={padding} to="/games">My games</Link>
            </div>
            <div>
                <Link style={padding} to="/login"><button>Log in</button></Link>
                <Link style={padding} to="/signup"><button>Sign up</button></Link>
            </div>
        </nav>
    )
}

export default Navbar