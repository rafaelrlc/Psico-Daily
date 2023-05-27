import axios from "axios";
import { useAuth } from "@/context/auth/authProvider";

const BASE_URL = "http://localhost:3005";

const axiosApi = () => {
  const { accessToken } = useAuth();
  const privateApi = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": accessToken,
    },
  });

  const api = axios.create({
    baseURL: BASE_URL,
  });

  return { privateApi, api };
};

export default axiosApi;
