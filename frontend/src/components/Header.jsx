import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="w-full shadow-md py-5">
      <div className="px-4 md:container md:mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-sm md:text-xl font-semibold">
            Support<span className="text-cyan-600">Tickets</span>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center">
            {user ? (
              <li className=" text-sm ml-5">
                <button
                  onClick={onLogout}
                  className="flex items-center hover:text-cyan-600"
                >
                  <FaSignOutAlt className="mr-1 text-gray-500" /> Logout
                </button>
              </li>
            ) : (
              <>
                <li className="mr-5 md:text-sm">
                  <Link
                    to="/login"
                    className="flex items-center hover:text-cyan-600"
                  >
                    <FaSignInAlt className="mr-1 text-gray-500" /> Login
                  </Link>
                </li>
                <li className=" text-sm">
                  <Link
                    to="/register"
                    className="flex items-center hover:text-cyan-600"
                  >
                    <FaUser className="mr-1 text-gray-500" /> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
