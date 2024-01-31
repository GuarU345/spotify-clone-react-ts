import axios from "axios";
import { API_URL } from "../utils/constants";

const signin = async (body) => {
  const { data } = await axios.post(`${API_URL}/signin`, body);
  return data;
};

const signup = async (body) => {
  const { data } = await axios.post(`${API_URL}/signup`, body);
  return data;
};

export const AuthService = {
  signin,
  signup,
};
