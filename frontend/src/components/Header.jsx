import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-md py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-semibold">
            Support<span className="text-cyan-600">Tickets</span>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center">
            <li className="mr-5 text-sm">
              <Link to="/login" className="flex items-center">
                <FaSignInAlt className="mr-1 text-gray-500 hover:text-cyan-600" />{" "}
                Login
              </Link>
            </li>
            <li className=" text-sm">
              <Link to="/register" className="flex items-center">
                <FaUser className="mr-1 text-gray-500 hover:text-cyan-600" />{" "}
                Register
              </Link>
            </li>
            <li className=" text-sm ml-5">
              <Link to="/" className="flex items-center">
                <FaSignOutAlt className="mr-1 text-gray-500 hover:text-cyan-600" />{" "}
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
