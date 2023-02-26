import { useField } from "../hooks";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer";

const LoginForm = () => {
  const username = useField("text");
  const password = useField("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (event) => {
    event.preventDefault();
    const userObject = { username: username.value, password: password.value };

    try {
      const user = await userService.login(userObject);
      const storageObject = {
        id: user.id,
        token: user.token,
        username: user.username,
      };
      window.localStorage.setItem("loggedUser", JSON.stringify(storageObject));
      dispatch(setUser(user));
      username.reset();
      password.reset();
      navigate("/");
    } catch (exception) {
      console.log(exception.response.data.error);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleForm}
        >
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
              <p>Don't have an account?</p>
              <Link
                className="font-medium text-teal-500 hover:text-teal-700"
                to="/signup"
              >
                Sign up{" "}
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-500 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
