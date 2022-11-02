import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto py-16 flex justify-center w-1/2">
      <section className="px-16 w-3/4">
        <div className="text-center">
          <h1 className="flex items-center justify-center text-4xl font-bold text-gray-600">
            <FaSignInAlt className="mr-2 text-gray-500" /> Login
          </h1>
          <p className="text-2xl mt-5 font-bold text-gray-400">
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
