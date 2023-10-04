import axios from "axios";
const API_URL = "/api/users";

// Register a user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("supportTicketUser", JSON.stringify(response.data));
  }
  return response.data;
};

// Log user in
const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);
  if (response.data) {
    localStorage.setItem("supportTicketUser", JSON.stringify(response.data));
  }
  return response.data;
};

// Log user out
const logout = () => localStorage.removeItem("supportTicketUser");

const authService = {
  register,
  logout,
  login,
};

export default authService;
