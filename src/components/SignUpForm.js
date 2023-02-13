import { useField } from "../hooks"
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    const username = useField('text')
    const password = useField('password')

    const handleForm = async (event) => {
        event.preventDefault()
        const userObject = { username: username.value, password: password.value }
        console.log(userObject)
    }

    return(
        <div className='signUpForm'>
        <h2>Sign Up</h2>
        <form onSubmit={handleForm}>
          <div>
            <label>Username: </label>
            <input type={username.type} value={username.value} onChange={username.onChange}></input>
          </div>
          <div>
            <label>Password: </label>
            <input type={password.type} value={password.value} onChange={password.onChange}></input>
          </div>
          <button type="submit">Sign up</button>
        </form>
        <p>Already have an account <Link to="/login">Log in</Link></p>
      </div>
    )
}

export default SignUpForm