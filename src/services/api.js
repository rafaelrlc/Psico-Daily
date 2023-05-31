import axios from "axios";
import useAuth from "@/hooks/useAuth";
const BASE_URL = "http://localhost:3005";

const AxiosApi = () => {
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

export default AxiosApi;
