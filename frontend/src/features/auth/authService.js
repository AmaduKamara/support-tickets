import axios from "axios";
const API_URL = "/api/users";

// Register a user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Log user out
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
};

export default authService;
