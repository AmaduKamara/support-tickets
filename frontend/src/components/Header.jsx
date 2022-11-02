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
            <li className=" text-sm ml-5">
              <Link to="/" className="flex items-center hover:text-cyan-600">
                <FaSignOutAlt className="mr-1 text-gray-500" /> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
