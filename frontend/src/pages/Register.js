import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  // Register the user by using the useEffect method and dispatch the register action to the API
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
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto py-16 flex justify-center md:w-4/5 lg:w-1/2">
      <se  ction className="px-16 w-full md:w-4/5">
        <div className="text-center">
          <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold text-gray-600">
            <FaUser className="mr-2 text-gray-500" /> Register
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
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Enter your name"
              className="py-3 border w-full p-3 rounded-md focus:outline-cyan-600"
              onChange={onChange}
              required
            />
          </div>
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
          <div className="mb-4">
            <input
              type="password"
              name="password2"
              id="password2"
              value={password2}
              placeholder="Confirm password"
              className="py-3 border w-full p-3 rounded-md focus:outline-cyan-600"
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 bg-cyan-600 w-full rounded-md text-white text-lg hover:bg-cyan-700"
          >
            Submit
          </button>
        </form>
      </se>
    </div>
  );
};

export default Register;
