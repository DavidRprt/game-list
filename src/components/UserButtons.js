import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../reducers/userReducer'

const UserButtons = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const boxStyle = {
        display: 'flex',
        gap: '10px'
    }

    const buttonStyle = {
        backgroundColor: 'maroon',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '5px 10px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        transition: 'background-color 0.3s ease',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '12px',
      }
      
    const handleLogout = () => {
        window.localStorage.clear()
        dispatch(setUser(false))
    }

    return(
    <div>
        {user === false ? (
            <div>
                <Link to="/login"><button>Log in</button></Link>
                <Link to="/signup"><button>Sign up</button></Link>
            </div>
        ) : (
            <div style={boxStyle}>
                <p>{user.username}</p>
                <button onClick={handleLogout} style={buttonStyle}>Log out</button>
            </div>
        )}
      
    </div>
    )
}
export default UserButtons