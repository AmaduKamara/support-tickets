import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  // Log the user by the useEffect method and dispatch the register action to the API
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when loggedin
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto py-16 flex justify-center md:w-4/5 lg:w-1/2">
      <section className="px-16 w-full md:w-4/5">
        <div className="text-center">
          <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold text-gray-600">
            <FaSignInAlt className="mr-2 text-gray-500" /> Login
          </h1>
          <p className="text-lg md:text-2xl mt-5 font-bold text-gray-400">
            Please create an account
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="mt-10 w-full shadow-xl border rounded-md py-6 px-4 border-t-4 border-t-cyan-600"
        >
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              className="py-3 border w-full p-3 rounded-md focus:outline-cyan-600"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              className="py-3 border w-full p-3 rounded-md focus:outline-cyan-600"
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 bg-cyan-600 w-full rounded-md text-white text-lg hover:bg-cyan-700"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
