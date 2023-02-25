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
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create an account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleForm}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  type={username.type}
                  value={username.value}
                  onChange={username.onChange}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  type={password.type}
                  value={password.value}
                  onChange={password.onChange}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm flex gap-2">
                <p>Already have an account?</p>
                <Link className="font-medium text-cyan-500 hover:text-cyan-700" to="/login">Log in</Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-500 py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
       /*  <div className='signUpForm'>
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
      </div> */
    )
}

export default SignUpForm