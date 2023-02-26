import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer";

const UserButtons = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    window.localStorage.clear();
    dispatch(setUser(false));
  };

  return (
    <div>
      {user === false ? (
        <div className="flex gap-3 flex-col mt-3 lg:mt-0 lg:flex-row">
          <Link
            className="bg-transparent hover:bg-cyan-700 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded"
            to="/login"
          >
            <button>Log in</button>
          </Link>
          <Link
            className="bg-transparent hover:bg-teal-700 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
            to="/signup"
          >
            <button>Sign up</button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-3 flex-col mt-3 lg:mt-0 lg:flex-row">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {user.username.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <button
            className="bg-white hover:bg-red-800 text-red-900 font-semibold hover:text-white py-2 px-4 border border-red-900 hover:border-transparent rounded"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};
export default UserButtons;
