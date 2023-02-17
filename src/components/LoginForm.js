import { useField } from "../hooks"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import loginService from '../services/loginService'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/userReducer'

const LoginForm = () => {
    const username = useField('text')
    const password = useField('password')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleForm = async (event) => {
        event.preventDefault()
        const userObject = { username: username.value, password: password.value }
        
        try{
          const user = await loginService.loginService(userObject)
          window.localStorage.setItem(
            'loggedUser', JSON.stringify(user)
          )
          dispatch(setUser(user))
          username.reset()
          password.reset()
          navigate('/')
        }

        catch(exception){
          console.log(exception.response.data.error)
        }
        
    }

    return(
        <div className='loginForm'>
          <h2>Log in</h2>
          <form onSubmit={handleForm}>
            <div>
              <label>Username: </label>
              <input type={username.type} value={username.value} onChange={username.onChange}></input>
            </div>
            <div>
              <label>Password: </label>
              <input type={password.type} value={password.value} onChange={password.onChange}></input>
            </div>
            <button type="submit">Log in</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    )
}

export default LoginForm