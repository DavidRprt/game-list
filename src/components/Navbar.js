import { Link } from 'react-router-dom'
import UserButtons from '../components/UserButtons'

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
                <Link style={padding} to="/discover">Discover</Link>
                <Link style={padding} to="/radar">Radar</Link>
                <Link style={padding} to="/completed">Completed</Link>
            </div>
            <UserButtons />
        </nav>
    )
}

export default Navbar