import { useField } from "../hooks"
import { Link } from 'react-router-dom'


const LoginForm = () => {
    const username = useField('text')
    const password = useField('password')

    const handleForm = async (event) => {
        event.preventDefault()
        const userObject = { username: username.value, password: password.value }
        console.log(userObject)
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